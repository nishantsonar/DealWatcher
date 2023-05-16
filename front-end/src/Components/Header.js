import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useUserContext} from "./Context/userContext";

function Header() {
  const { user, logOut } = useUserContext();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <NavLink className="navbar-brand" to="/">
          DEALWATCHER.COM{" "}
          {/* <img src={pic} width="130" height="30" alt="" /> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/addlink">
                {/* Add Links */} Get Notifications
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <ul className="my-2 my-lg-0 nav-item ">
            <h6>
              {user.name}
              {!user.isGuestuser && (
                <h6>
                  <Link onClick={logOut}>logOut</Link>
                </h6>
              )}
              {user.isGuestuser && (
                <h6>
                  <Link to="/SignIn">Sign In</Link>
                </h6>
              )}
            </h6>
          </ul>
          {/* <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-success my-2 my-sm-0">
              <NavLink to="/Signin">SignIn</NavLink>
            </button>
          </form> */}
          {/* <ul className="my-2 my-lg-0 nav-item ">
            <h6>
              {user.name}
              {!user.isGuestuser && (
                <h6>
                  <Link onClick={logOut}>logOut</Link>
                </h6>
              )}
              {user.isGuestuser && (
                <h6>
                  <Link to="/SignIn">Sign In</Link>
                </h6>
              )}
            </h6>
          </ul> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
