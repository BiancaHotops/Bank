import React from "react";
import '../styles/cadastro.css'

const Cadastro = () => {
    return(
        <>
        <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/teste.png')] items center flex justify-center m-0 p-0">
        <div class="boxxs">
        <div class="forms">
            <h2>SIGN UP</h2>
            <div class="inputBoxx">
                <input type="text" required></input>
                <span>Username</span>
                <i></i>
            </div>
            <div class="inputBoxx">
                <input type="password" required></input>
                <span>Password</span>
                <i></i>
            </div>
            <div class="linkss">
                <a href="#">SignIn</a>
            </div>
              <button class="buttons"><span>Register</span></button>
        </div>
    </div>
    </div>
        </>
    
      );
  };
  
  export default Cadastro;