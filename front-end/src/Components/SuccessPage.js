import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";

function SuccessPage() {
  return (
    <div
      style={{ backgroundColor: "#D3D3D3", height: "100vh", width: "100vw" }}
    >
      <Header />

      <div>
        {" "}
        <span
          style={{
            position: "absolute",
            top: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "5em",
            fontWeight: "bold",
            color: "green",
          }}
        >
          &#10003;
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1>Your details have been saved!</h1>
      <p>We will notify you when the price drops.</p>
      <div className="col-md-12 text-center">
        <h2>Start Saving Today</h2>
        <br />
        <Link to="/addlink">
          <button className="btn btn-primary btn-lg">Add more links</button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
