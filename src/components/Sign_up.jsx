import React from "react";
import '../styles/sign_up.css'
import { Link } from 'react-router-dom'
import exitt from '../assets/exit1.png'

const Sign_up = () => {

    return (
        <>

            <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/teste.png')] items center flex justify-center m-0 p-0">
                <div class="boxxs">
                    <div class="forms">
                        <h2>SIGN UP</h2>
                        <div class="inputBoxx">
                            <input type="text" required></input>
                            <span>CPF</span>
                            <i></i>
                        </div>
                        <div class="inputBoxx">
                            <input type="text" required></input>
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div class="inputBoxx">
                            <input type="email" required></input>
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div class="inputBoxx">
                            <input type="password" required></input>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div class="inputBoxx">
                            <input type="password" required></input>
                            <span>Confirm Password</span>
                            <i></i>
                        </div>
                        <div class="linkss">
                            <Link to='/sign_in'>Already have an account? SignIn</Link>
                        </div>
                        <div className="botoess">
                        <button class="buttons"><span>Register</span></button>
                        <Link to='/'><img src={exitt} className="w-8 mt-9" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Sign_up;