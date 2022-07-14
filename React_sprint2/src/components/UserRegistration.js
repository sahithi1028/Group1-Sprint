import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserRegistration.css'

export function UserRegistration() {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [mobileNo, setMobileNo] = useState('');

    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = { userName, email, password, mobileNo };
        console.log('admin login errors:', errors);
        if (Object.keys(errors).length === 0) {
            console.log('Logining with data: ', { data });
            try {
                const res = await axios.post('http://localhost:8080/userlogin', data);
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
                        <h3 className="red-text center">User Registration</h3>
                        <div className="ui divider"></div>
                        <div className="ui  form">
                            <div>
                                <label>UserName</label><br />
                                <input type="text" required placeholder="Given Name" value={userName} onChange={e => setUserName(e.target.value)}></input>
                            </div>
                            <div >
                                <label>Email_ID</label><br />
                                <input type="email" required placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div >
                                <label>Mobile No.</label><br />
                                <input type="tel" required placeholder="Mobile Number" value={mobileNo} onChange={e => setMobileNo(e.target.value)}></input>
                            </div>
                            <div>
                                <label>Password</label><br />
                                <input type="Password" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            <button className="fluid ui button" onClick={loginSubmit}>Submit</button>
                        </div>
                    </form>
                </div >) : (
                <h2>Registered</h2>
            )
            }

        </>
    )

}