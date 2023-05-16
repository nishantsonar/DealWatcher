import React from "react";
import Header from "./Header";

function About() {
  return (
    <div
      style={{ backgroundColor: "#D3D3D3", height: "100vh", width: "100vw" }}
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
                          <b>DealWatcher.com</b>
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Welcome to DealWatcher.com, your go-to destination for
                        real-time price tracking! We are a team of dedicated
                        individuals who understand how frustrating it can be to
                        miss out on a great deal or to overpay for a product.
                        That's why we have created a powerful price tracking
                        tool that keeps you informed about price changes. Our
                        website allows you to create alerts for specific
                        products and receive notifications when their prices
                        drop or rise. We are committed to providing the best
                        possible user experience, which is why our website is
                        continuously updated with the latest prices from top
                        e-commerce platforms and is designed to be user-friendly
                        and intuitive. At DealWatcher.com, we believe that
                        everyone deserves to save money and find the best deals
                        online.
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
            <h2>Registered Office</h2>
            <table className="table table-striped table-sm">
              <td>Maharastra 422009, India</td>

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
