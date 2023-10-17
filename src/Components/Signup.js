import axios from "axios";
import React, { useEffect, useState } from "react";

function Signup() {
  const [loginValue, setLoginValue] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

//   const handleChange = (e) => {
//     setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
//   };
// console.log(loginValue);
//   const onSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/newtest", loginValue)
//       .then((res, req) => {
//         console.log("dandanan");
//       })
//       .catch(err => console.log(err));
//   };

  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/newapi", loginValue)
      .then((res, req) => {
        console.log(res +"dandanan");
      })
      .catch(err => console.log(err));
  }; 

  

  console.log(loginValue);

  
  
  return (
    <>
      <div
        style={{ background: "#27AE60" }}
        className="wrapper d-flex justify-content-center align-items-center  vh-100"
      >
        <div className="bg-white p-3 rounded w-25 shadow-lg">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                className="form-control"
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check"></div>
            <div className="d-flex flex-column justify-content-evenly">
              <div className="d-flex justify-content-evenly pb-3">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={ onSubmit}
                >
                  Submit
                </button>
                <button type="submit" className="btn btn-primary">
                  <a className="text-white text-decoration-none" href="">
                    Login With Google
                    <i className="bi bi-google text-warning ps-2"></i>
                  </a>
                </button>
              </div>
              <button type="submit" className="btn btn-primary">
                <a
                  className="text-white text-decoration-none"
                  href="/Components/Login"
                >
                  {" "}
                  Already Have Account?
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
