import React from "react";
import '../styles/sign_in.css'
import { Link, useNavigate } from 'react-router-dom'
import exit from '../assets/exit.png'

const Sign_in = () => {

// const [cpf, setCpf]=useState("")
// const [password, setPassword]=useState("")
// const navigate=useNavigate();

// async function signIn()
// {   
//     let item={ cpf,'senha': password}
//     console.warn(item)

//     let endereco = "http://127.0.0.1:8000/login/"

//     let result= await fetch(endereco,{
//         method:'POST',
//         body:JSON.stringify(item),
//         headers:{
//             "Content-Type":'application/json',
//             "Accept":'application/json'
//         }
//     })

//     result = await result.json()
//     localStorage.setItem("user-info", JSON.stringify(result))
//     navigate("/logged")
     
// }

    return (
        <>
            <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/fundo7.png')] items center flex justify-center m-0 p-0">
                <div class="boxx">
                    <div class="form">
                        <h2>SIGN IN</h2>
                        <div class="inputBox">
                            <input type="text" required></input>
                            <span>CPF</span>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="password" required></input>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div class="links">
                            <a href="#"></a>
                            <Link to='/sign_up'>SignUp</Link>
                        </div>
                        <div className="botoes">
                        <Link to='/logged'> <button class="button"><span>LOGIN</span></button></Link>
                        <Link to='/'><img src={exit} className="w-8 mt-9" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Sign_in;