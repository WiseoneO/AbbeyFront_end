import React from 'react'
// import { Navigate } from 'react-router-dom';

const Logout = async ()=>{

            const handleLogout = async()=>{
                try{
                    const response =  await fetch('https://abbey-media.vercel.app/api/v1/auth/logout',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem('accessToken')
                        }, 
                    });

                    if(response.ok){
                        localStorage.clear();
                    }

                return window.location.href='/login'

                }catch(error){
                    console.error('Logout error:', error)
                }
                
                return "Logout failed!"
            }
    

    return (<button onClick={handleLogout}>Logout</button>)
}
export default Logout;