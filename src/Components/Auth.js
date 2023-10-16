import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Location } from 'react-router-dom';

function Auth() {

   

    const [auth,setAuth] = useState(false)
    axios.defaults.withCredentials= true;


    const handleLogout = ()=>{
        axios.get("http://localhost:5001/logout")
        .then(res=>{
           window.location.reload(true)
           console.log(res.status);
        })
        .catch(err=>{console.log(err);})
    }
    useEffect(()=>{
        
        axios.get("http://localhost:5001/auth")
        .then(res=>{
            if(res.data.status ==="success"){
                setAuth(true)
               
            }
            else{
               console.log(res.data); 
            }
        })
    })
  return (
    <>
 {auth ?
 <div>
 <div>Authorised</div>
 <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
 </div>
 :
 <div>
 <div>NotAuthorised</div>
 <button className='btn btn-success' >Login</button>
 </div>
 }

    </>
  )
}

export default Auth