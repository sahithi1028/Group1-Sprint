import React from "react";
import { Link } from "react-router-dom";
import './AdminLogin.css';
 function Admin() {
    return (
        <>
        
        <div>
            <h1 align="center">Welcome Admin</h1>   
                
        </div> 
        <div className='login'>
        <Link to='Office'>Office </Link>|            
            <Link to='Location' > Location </Link>|      
            <Link to='Floor' > Floor </Link> 
        </div> 
        
        </>
       
        )    
    }
    export default Admin;