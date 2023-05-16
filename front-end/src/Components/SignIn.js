import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "./Header";
import {useUserContext} from "./Context/userContext";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : false,
  isLoading: false,
  isRegistered: false,
};

function SignInDemo(state = initialState) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { logIn, logOut } = useUserContext();

  const handleClick = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Email and password are required");
      return;
    }
    const detail = [email, password];
    logIn(email);
    // console.log(detail);
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(detail),
    })
      .then((res) => {
        if (res.status === 200) {
          navigate(`/`);
        } else {
          setErrorMessage("Invalid email or password");
          logOut();
        }
      })
      .catch((err) => {
        setErrorMessage("An error occurred. Please try again later.");
        logOut();
      });
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <section className="vh-100" style={{ marginTop: "-55px" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src={
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                }
                className="img-fluid"
                alt=" "
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign In
              </p>
              <form onSubmit={handleClick}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <a href="#!">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    OR
                  </p>
                </div>
                <Link
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  to="/SignUp"
                  role="button"
                >
                  <i className="fab  me-2"></i>SignUp
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignInDemo;
