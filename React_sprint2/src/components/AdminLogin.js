import React from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("../Admin");

    }
  
    return (
        <>
            <div className="row formStyle">
                <form className="col s5 offset-s4 z-depth-1">
                    <h4 className="blue-text center">Admin Login</h4>
                    <div className="input-field">
                        <input type="text" id="name" placeholder="Admin_Name" required />
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password" required />
                    </div>
                    <button className="btn waves-effect waves-light btnStyle" onClick={handleClick}>Login
                    </button>
                </form>
            </div>
        </>
    );
}


export default LoginForm;