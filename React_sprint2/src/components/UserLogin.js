import React from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm() {

    const navigate = useNavigate();
    const nav1 = useNavigate();
    const nav2= useNavigate();
    function handleClick() {
        navigate("../User");

    }
    function handleReg() {
        nav1("./UserRegistration");
    }
    function handleReg() {
        nav2("./ForgotPassword");
    }
    

    return (
        <>
            <div className="row formStyle">
                <form className="col s5 offset-s4 z-depth-1">
                    <h4 className="blue-text center">User Login</h4>
                    <div className="input-field">
                        <input type="text" id="name" placeholder="User_Name" required />
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password" required />
                    </div>
                    <button className="btn waves-effect waves-light btnStyle" onClick={handleClick}>Login
                    </button>
                    <button className="btnStyle" onClick={handleReg}>New user? Register</button>
                    <button className="btnStyle" onClick={handleReg}>ForgotPassword</button>
                </form>
            </div>
        </>
    );
}


export default LoginForm;