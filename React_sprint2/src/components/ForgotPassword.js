
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css'


export function ForgotPassword() {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [newPassword, setPassword] = useState('');
    

    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = {email,newPassword};
        console.log('admin login errors:', errors);
        if (Object.keys(errors).length === 0) {
            console.log('Logining with data: ', { data });
            try {
                const res = await axios.post('http://localhost:8080/ForgotPassword', data);
                console.log('Posting data', res);
                setIsSubmitted(true);
                setTimeout(() => {
                    navigate("./userLogin");

                }, 2000);
            } catch (e) {
                console.error(e)
            }
        } else {
            setErrors(errors);
        }
    }
    return (
        <>
            {!isSubmitted ? (
                <div className="container">
                    <form>
                        <h3 className="red-text center">Forgot Password</h3>
                        <div className="ui divider"></div>
                        <div className="ui  form">
                          
                            <div >
                                <label>Email_ID</label><br />
                                <input type="email" required placeholder="example@gmail.com" value={email} data-testid="email" onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div>
                                <label>New Password</label><br />
                                <input type=" newPassword" required placeholder="set new password" value={newPassword} data-testid="newPassword" onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            <button className="fluid ui button" data-testid="Submit" onClick={loginSubmit}>Submit</button>
                        </div>
                    </form>
                </div >) : (
                <h2>Set NewPassword</h2>
            )
            }

        </>
    )
        }
        export default ForgotPassword;
