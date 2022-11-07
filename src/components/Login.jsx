import React from "react";
import '../styles/login.css'

const Login = () => {
    return(
        <>
        <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/fundo7.png')] items center flex justify-center m-0 p-0">
        <div class="boxx">
        <div class="form">
            <h2>SIGN IN</h2>
            <div class="inputBox">
                <input type="text" required></input>
                <span>Username</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" required></input>
                <span>Password</span>
                <i></i>
            </div>
            <div class="links">
                <a href="#">Forgot Password ?</a>
                <a href="#">SignUp</a>
            </div>
              <button class="button"><span>LOGIN</span></button>
        </div>
    </div>
    </div>
        </>
    
      );
  };
  
  export default Login;