import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "./Context/userContext";
import Header from "./Header";

function AddLinks() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [responsecustomerid, setresponsecustomerid] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateFields() {
    let formIsValid = true;

    if (!price) {
      setPriceError("Price cannot be empty");
      formIsValid = false;
    } else if (!/^\d+$/.test(price)) {
      setPriceError("Price must be a number");
      formIsValid = false;
    } else {
      setPriceError("");
    }

    if (!url) {
      setUrlError("URL cannot be empty");
      formIsValid = false;
    } else if (!url.includes("amazon") && !url.includes("flipkart")) {
      setUrlError("Sorry, we currently accept only Amazon and Flipkart URLs");
      formIsValid = false;
    } else {
      setUrlError("");
    }

    return formIsValid;
  }

  async function handleClick() {
    setIsLoading(true);

    if (!validateFields()) {
      setIsLoading(false);
      return;
    }

    const userdeatil = {
      price: price,
      url: url,
      id: responsecustomerid,
    };
    fetch("http://localhost:8080/user/add-link", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdeatil),
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/success");
        } else {
          console.log("responsecustomerid -> " + responsecustomerid);
          alert("Error For Save Details...");
        }
      })
      .finally(() => setIsLoading(false));
  }

  const userEmail = user.name;

  async function getCustomerId() {
    const response = await fetch("http://localhost:8080/user/getid", {
      method: "POST",
      headers: { "content-type": "text/plain" },
      body: userEmail,
    });
    const data = await response.text();
    const parsedCustomerId = parseInt(data);
    setresponsecustomerid(parsedCustomerId);

    if (user.name === "Guest") {
      alert("Please Login First.....");
      navigate("/signIn");
    }
  }

  useEffect(() => {
    getCustomerId();
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <section
        style={{
          backgroundColor: "rgb(225, 206, 206)",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span
                            className="h1 fw-bold mb-0"
                            style={{ fontSize: "4rem", marginLeft: "60px" }}
                          >
                            Price Drop
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{
                            letterSpacing: "1px",
                            fontSize: "1.5rem",
                          }}
                        >
                          Enter Product URL and Price
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="user_name"
                            placeholder="Product URL"
                            className="form-control form-control-lg"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: "100",
                              padding: "1.7rem 1rem",
                            }}
                          />
                          {urlError && (
                            <span style={{ color: "red" }}>{urlError}</span>
                          )}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="user_name"
                            placeholder="Product Price"
                            className="form-control form-control-lg"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: "100",
                              padding: "1.7rem 1rem",
                            }}
                          />
                          {priceError && (
                            <span style={{ color: "red" }}>{priceError}</span>
                          )}
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleClick}
                            disabled={isLoading}
                            style={{ fontSize: "1.2rem" }}
                          >
                            {isLoading ? "Loading..." : "Get Notification"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 text-center d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img3.jpg"
                      className="img-fluid"
                      alt="Sample"
                      style={{
                        borderBottomRightRadius: "1rem",
                        borderTopRightRadius: "1rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddLinks;
