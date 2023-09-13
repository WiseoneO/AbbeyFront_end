import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className=' container w-50'>
        <h1 >Welcome to your Dashboard</h1><br/>
        <Link to={'/login'} >  <button  className='btn btn-outline-primary mt-4 '>Logout</button></Link>
    </div>
  )
}


export default Dashboard