import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [username, setUsername]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
const navigate =useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
       let details ={username,email,password  }
      fetch("https://abbey-media.vercel.app/api/v1/auth/", {
        method:'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(details)
      }).then((res)=>{
        alert("Succesfuly Registered")
        navigate('/')

      }).catch((err)=>{
        alert('Failed :' + err.message)
      })

    }




  return (
    <div className='container m-auto'>
        <h1 style={{margin:'auto'}} className='w-50'>Register page</h1>
        <form className='form-group w-50 m-auto p-4 container' style={{border:'2px solid #ccc'}} onSubmit={handleSubmit}>
            
            <label>Username:</label>
            <input className='form-control' type='text' required placeholder='please enter name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <label className='mt-2'>Email:</label>
            <input className='form-control' type='email'required placeholder='Please enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label className='mt-2'>Password:</label>
            <input className='form-control' type='password' required placeholder='please enter password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit' className='btn btn-primary mt-4'>Submit</button>
            <Link to={'/login'} >  <button  className='btn btn-outline-primary mt-4 '>Login </button></Link>

        </form>
    </div>
  )
}

export default Register