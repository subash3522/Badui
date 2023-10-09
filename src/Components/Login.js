import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Login() {

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("emailKey"));
  //   JSON.parse(localStorage.getItem("passwordKey"));
  // }, []);

  useEffect(() => {
    const savedEmail = JSON.parse(localStorage.getItem("emailKey"));
    const savedPassword = JSON.parse(localStorage.getItem("passwordKey"));
    
    if (savedEmail) {
      setListEmail(savedEmail);
    }

    if (savedPassword) {
      setListPassword(savedPassword);
    }
  }, []);
 
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [listEmail, setListEmail] = useState([]);
  const [listPassword, setListPassword] = useState([]);



  

//   const onSubmit = () => {
//     const altEmail = [...listEmail];
//     const altPass = [...listPassword];
//     setListEmail([...altEmail, email]);
//     setListPassword([...altPass, password]);
//     localStorage.setItem('emailKey', JSON.stringify([...altEmail, email]));
//     localStorage.setItem('passwordKey', JSON.stringify([...altPass, password]));
//   };



// const onSubmit = (event) => {
//   event.preventDefault()
    
//     setListEmail([...listEmail, email]);
//     setListPassword([...listPassword, password]);
    
//     localStorage.setItem('emailKey', JSON.stringify([listEmail]));
//     localStorage.setItem('passwordKey', JSON.stringify([listPassword]));
//     console.log(listEmail);
//   };

const onSubmit = () => {
  
  const searchResults = listEmail.filter(item =>
    item.toLowerCase().includes(email.toLowerCase())
  );

  if(searchResults){
    return alert('User Already Exists!')
  }
    
    const updatedEmailList = [...listEmail, email];
    const updatedPasswordList = [...listPassword, password];

    setListEmail(updatedEmailList);
    setListPassword(updatedPasswordList);

    localStorage.setItem('emailKey', JSON.stringify(updatedEmailList));
    localStorage.setItem('passwordKey', JSON.stringify(updatedPasswordList));

    console.log(updatedEmailList);

    
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
