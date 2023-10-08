import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [listEmail, setListEmail] = useState([]);
  const [listPassword, setListPassword] = useState([]);

  console.log(email);

  useEffect(() => {
    JSON.parse(localStorage.getItem("emailKey"));
    JSON.parse(localStorage.getItem("passwordKey"));
  }, []);

//   const onSubmit = () => {
//     const altEmail = [...listEmail];
//     const altPass = [...listPassword];
//     setListEmail([...altEmail, email]);
//     setListPassword([...altPass, password]);
//     localStorage.setItem('emailKey', JSON.stringify([...altEmail, email]));
//     localStorage.setItem('passwordKey', JSON.stringify([...altPass, password]));
//   };

const onSubmit = () => {
    
    setListEmail([...listEmail, email]);
    setListPassword([...listPassword, password]);
    
    localStorage.setItem('emailKey', JSON.stringify([listEmail]));
    localStorage.setItem('passwordKey', JSON.stringify([listPassword]));
  };
  
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
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Password
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
