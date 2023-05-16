import React from "react";
import Header from "./Header";

function About() {
  return (
    <div
      // style={{ backgroundColor: "#D3D3D3", height: "100vh", width: "100vw" }}
    >
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-4 col-md-4"></div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <h1 className="text-center">About Us</h1>

              <br />
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  <table className="table table-striped table-sm">
                    <tr className="text-center">
                      <td>
                        <h4>
                          <b style={{fontWeight:"bolder"}}>DealWatcher.com</b>
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"justify",fontSize:"#"}}>
                      Welcome to DealWatcher.com, a website that offers real-time price tracking for your convenience. We are a team of dedicated individuals who understand how frustrating it is to miss out on a great deal or overpay for a product. We have created a powerful price tracking tool that keeps you informed about price changes. You can set up alerts for specific products, and we'll notify you when their prices drop or rise. Our website is continuously updated with the latest prices from top e-commerce platforms, and it's designed to be user-friendly and intuitive. At DealWatcher.com, we believe that everyone deserves to save money and find the best deals online. We're committed to providing you with the best possible user experience.
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <hr />
            <br />
            <h2 style={{fontWeight:"bolder"}}>Registered Office</h2>
            <table className="table table-striped table-sm">
              <td>Nashik, Maharastra 422010, India</td>

              <br />
              <tr>
                <td>
                  Telephone: + 91 2345678923
                  <br />
                  Fax: + 91 2345678923
                </td>
              </tr>
              <tr>
                <td>Support@dealwatcher.com</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
