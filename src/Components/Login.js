import React from 'react'

function Login() {
  return (
   <>
   <div style={{background:'#27AE60'}} className="wrapper d-flex justify-content-center align-items-center  vh-100">
   <div className="bg-white p-3 rounded w-25">
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
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Remember Password
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>
</div>

   </>
  )
}

export default Login