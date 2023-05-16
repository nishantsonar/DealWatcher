// import React, { useState } from "react";
// import Header from "./Header";
// import { useNavigate } from "react-router-dom";

// function SignUp() {
//   const navigate = useNavigate();

//   const [fullName, setFullName] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleClick = (e) => {
//     e.preventDefault();
//     const user = {
//       fullName: fullName,
//       email: email,
//       password: password,
//       phoneNo: phoneNo,
//     };
//     console.log(user);
//     fetch("http://localhost:8080/user/add/", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(user),
//     }).then((res) => {
//       if (res.status === 200) {
//         alert("Regitration Complete...");
//         navigate(`/Signin`);
//       } else {
//         alert("Please Fill Required Fields.");
//       }
//     });
//   };

//   function handleKeyPress(event) {
//     const keyCode = event.keyCode || event.which;
//     const keyValue = String.fromCharCode(keyCode);

//     // Allow only numbers to be entered
//     if (/^[0-9]*$/.test(keyValue)) {
//       setPhoneNo(phoneNo + keyValue);
//     }
//     // Prevent the default behavior of the key press event
//     event.preventDefault();
//   }

//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))"
//       }}
//     >
//       <Header />
//       <section className="vh-100">
//         <div className="container h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-12 col-xl-11">
//               <div className="card text-black">
//                 <div
//                   className="card-body p-md-5"
//                   style={{
//                     background:
//                       "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))"
//                   }}
//                 >
//                   <div
//                     className="row justify-content-center"
//                     style={{ marginTop: "-55px" }}
//                   >
//                     <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                       <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                         Sign up
//                       </p>

//                       <form className="mx-1 mx-md-3">
//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="form3Example1c"
//                               className="form-control"
//                               value={fullName}
//                               onChange={(e) => setFullName(e.target.value)}
//                             />
//                             <label className="form-label" for="form3Example1c">
//                               Your Full Name
//                             </label>
//                           </div>
//                         </div>

//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="email"
//                               id="form3Example3c"
//                               className="form-control"
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <label className="form-label" for="form3Example3c">
//                               Your Email
//                             </label>
//                           </div>
//                         </div>

//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="password"
//                               id="form3Example4c"
//                               className="form-control"
//                               value={password}
//                               onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <label className="form-label" for="form3Example4c">
//                               Password
//                             </label>
//                           </div>
//                         </div>

//                         <div className="d-flex flex-row align-items-center mb-4">
//                           <i className="fa fa-mobile fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="tel"
//                               id="form3Example4cd"
//                               className="form-control"
//                               value={phoneNo}
//                               onKeyPress={handleKeyPress}
//                               onChange={(e) => setPhoneNo(e.target.value)}
//                             />
//                             <label className="form-label" for="form3Example4cd">
//                               Phone Number
//                             </label>
//                           </div>
//                         </div>

//                         <div className="form-check d-flex justify-content-center mb-5">
//                           <label
//                             className="form-check-label"
//                             for="form2Example3"
//                           >
//                             <input
//                               className="form-check-input me-2"
//                               type="checkbox"
//                               value=""
//                               id="form2Example3c"
//                             />
//                             I agree all statements in{" "}
//                             <a href="#!">Terms of service</a>
//                             <br />
//                           </label>
//                         </div>

//                         <div
//                           className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
//                           style={{ marginTop: "-35px" }}
//                         >
//                           <button
//                             type="button"
//                             className="btn btn-primary btn-lg"
//                             onClick={handleClick}
//                           >
//                             Register
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                     <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                       <img
//                         src={
//                           "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                         }
//                         className="img-fluid"
//                         alt=" "
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SignUp;

import React, {useState} from "react";
import Header from "./Header";
import {useNavigate} from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    password: "",
    isChecked: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    // Validate fields
    let errorsCopy = { ...errors };
    let isValid = true;

    if (!fullName.trim()) {
      errorsCopy.fullName = "Full Name is required";
      isValid = false;
    } else {
      errorsCopy.fullName = "";
    }

    if (!phoneNo.trim()) {
      errorsCopy.phoneNo = "Phone Number is required";
      isValid = false;
    } else if (!/^[0-9]+$/.test(phoneNo)) {
      errorsCopy.phoneNo = "Invalid Phone Number";
      isValid = false;
    } else {
      errorsCopy.phoneNo = "";
    }

    if (!email.trim()) {
      errorsCopy.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsCopy.email = "Invalid Email";
      isValid = false;
    } else {
      errorsCopy.email = "";
    }

    if (!password.trim()) {
      errorsCopy.password = "Password is required";
      isValid = false;
    } else {
      errorsCopy.password = "";
    }

    if (!isChecked) {
      errorsCopy.isChecked = "Please agree to the Terms of Service";
      isValid = false;
    } else {
      errorsCopy.isChecked = "";
    }

    setErrors(errorsCopy);

    if (isValid) {
      const user = {
        fullName: fullName,
        email: email,
        password: password,
        phoneNo: phoneNo,
      };
      console.log(user);
      fetch("http://localhost:8080/user/add/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      }).then((res) => {
        if (res.status === 200) {
          alert("Registration Complete...");
          navigate(`/Signin`);
        } else {
          alert("Please Fill Required Fields.");
        }
      });
    }
  };

  function handleKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow only numbers to be entered
    if (/^[0-9]*$/.test(keyValue)) {
      setPhoneNo(phoneNo + keyValue);
    }
    // Prevent the default behavior of the key press event
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div
                  className="card-body p-md-5"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))",
                  }}
                >
                  <div
                    className="row justify-content-center"
                    style={{ marginTop: "-55px" }}
                  >
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-3">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              placeholder="Full Name"
                              id="form3Example1c"
                              className="form-control"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Full Name
                            </label>
                            {errors.fullName && (
                              <div className="text-danger">
                                {errors.fullName}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              placeholder="example@gmail.com"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            {errors.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              placeholder="password"
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            {errors.password && (
                              <div className="text-danger">
                                {errors.password}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-mobile fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="tel"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Phone Number"
                              value={phoneNo}
                              onKeyPress={handleKeyPress}
                              onChange={(e) => setPhoneNo(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Phone Number
                            </label>
                            {errors.phoneNo && (
                              <div className="text-danger">
                                {errors.phoneNo}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                              checked={isChecked}
                              onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                            <br />
                            {errors.isChecked && (
                              <div className="text-danger">
                                {errors.isChecked}
                              </div>
                            )}
                          </label>
                        </div>

                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                          style={{ marginTop: "-3px" }}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={handleClick}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={
                          "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        }
                        className="img-fluid"
                        alt=" "
                      />
                    </div>
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

export default SignUp;
