import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{ backgroundColor: "#EDEDED  ", height: "100vh", width: "100vw" }}
    >
      <Header />
      <section>
        <div className="container">
          <div className="row h-100 d-flex align-items-center justify-content-center">
            <div className="col-md-6">
              <h1 style={{ fontWeight: "initial" }}>
                Get the Best Deals on Your Favorite Products
              </h1>
              <p className="lead" style={{ fontWeight: "initial" }}>
                Track prices and get notified of discounts. Sign up for free!
              </p>
              <Link to="/SignUp">
                {" "}
                <button
                  className="btn btn-primary btn-lg"
                  style={{
                    background:
                      "rgb(2,0,36) ,linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%)",
                    color: "black",
                  }}
                >
                  Sign up for free
                </button>
              </Link>
              <br />
              <br />
              <Link to="/addlink">
                {" "}
                <button
                  className="btn btn-primary btn-lg"
                  style={{
                    background:
                      "rgb(2,0,36) linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%)",
                    color: "black",
                    // "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(0,212,255,1) 100%)",
                  }}
                >
                  Add Link
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <img src={img1} style={{ height: "500px", width: "500px" }} alt="IMG"></img> */}
      <section className="features" style={{ padding: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <i
                className="fas fa-chart-line fa-3x mb-2"
                style={{ fontSize: "80px" }}
              ></i>
              <h3>Track Prices</h3>
              <p>
                Keep an eye on the prices of the products you love and receive a
                notification when they are on sale.
              </p>
            </div>
            <div className="col-md-4">
              <i
                className="fas fa-bell fa-3x mb-2"
                style={{ fontSize: "80px" }}
              ></i>
              <h3>Get Notifications</h3>
              <p>
                Get notified whenever the prices of the products you're keeping
                an eye on decrease or when new deals become available.
              </p>
            </div>
            <div className="col-md-4">
              <i
                className="fas fa-lock fa-3x mb-2"
                style={{ fontSize: "80px" }}
              ></i>
              <h3>Secure and Private</h3>
              <p>
                We keep your data secure with the latest encryption and security
                measures.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12 text-center">
              <h2>Start Saving Today</h2>
              <div style={{padding:"50px"}}>
              <Link to='/SignUp'>
              <button className="btn btn-primary btn-lg">
                Sign up for free
              </button>
              </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
