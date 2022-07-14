
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export function Help() {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    

    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = {email,name,message};
        console.log('help errors:', errors);
        if (Object.keys(errors).length === 0) {
            console.log('Logining with data: ', { data });
            try {
                const res = await axios.post('http://localhost:8080/help', data);
                console.log('Posting data', res);
                setIsSubmitted(true);
                setTimeout(() => {
                    navigate("./Home");

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
                        <h3 className="red-text center">contact support</h3>
                        <div className="ui divider"></div>
                        <div className="ui  form">
                          
                            <div >
                                <label>Email_ID</label><br />
                                <input type="email" required placeholder="example@gmail.com" value={email} data-testid="email" onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div>
                                <label>Name</label><br />
                                <input type=" name" required placeholder="type" value={name} data-testid="name" onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div>
                                <label>Message</label><br />
                                <input type=" message" required placeholder="type" value={message}  data-testid="message" onChange={e => setMessage(e.target.value)}></input>
                            </div>
                            <button className="fluid ui button" data-testid="Submit" onClick={loginSubmit}>Submit</button>
                        </div>
                    </form>
                </div >) : (
                <h2>Set NewPassword</h2>
            )
            }
          x

        </>
    )
        }
        export default Help;