import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigation = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
  
      fetch(`https://abbey-media.vercel.app/api/v1/auth/login/`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'  // Set the content type for the request
          // Add any other headers you may need, e.g., authentication headers
        },
        body: JSON.stringify({
          // Provide login credentials if required by your API
          email: email,
          password: password,
        })
      }).then((res) => {
          console.log(res)
          return res.json();
        }).then((response) => {
          const token = response.token;
          console.log('Token:', token)

        //   console.log(response); 
        if(Object.keys(response).length === 0){
            alert("Enter valid email")

        }else{
            if(response.token){
                alert('Success')
            navigation('/')
            }else{
                alert("Enter valid data")
            }
        }


        }).catch((error) => {
          alert("login failed due to :" + error.message);
        });
    
  };


  return (
    <div>
      <h1 style={{margin:'auto'}} className='w-50'>Login page</h1>
      <form
        className="form-group w-50 p-4 container"
        style={{ border: "2px solid #ccc" }}
        onSubmit={handleLogin}
      >
        <label>email:</label>
        <input
          className="form-control"
          type="text"
          placeholder="please enter name"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-2">Password:</label>
        <input
          className="form-control"
          type="password"
          placeholder="please enter password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary mt-4 me-4"
          
        >
          Login
        </button>

        <Link to={"/register"}>
      
          <button className="btn btn-outline-primary mt-4 ">
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
