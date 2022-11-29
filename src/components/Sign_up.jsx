import React, { useState } from "react";
import '../styles/sign_up.css'
import { Link, useNavigate } from 'react-router-dom'
import exitt from '../assets/exit1.png'

const Sign_up = () => {
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [cpf, setCpf]=useState("")
const [password, setPassword]=useState("")
const navigate=useNavigate();


async function signUp()
{   
    let item={'nome':name, email, cpf,'senha': password, 'bloqueio_acesso': true}
    console.warn(item)

    let endereco = "http://127.0.0.1:8000/usuario/"

    let result= await fetch(endereco,{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    })

    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate("/sign_in")
     
}

    return (
        <>

            <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/teste.png')] items center flex justify-center m-0 p-0">
                <div class="boxxs">
                    <div class="forms">
                        <h2>SIGN UP</h2>
                        <div class="inputBoxx">
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" required></input>
                            <span>Name</span>
                            <i></i>
                        </div>
                        <div class="inputBoxx">
                            <input value={cpf} onChange={(e)=>setCpf(e.target.value)} type="text" required></input>
                            <span>CPF</span>
                            <i></i>
                        </div>
                        <div class="inputBoxx">
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required></input>
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div class="inputBoxx">
                            <input  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required></input>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div class="linkss">
                            <Link to='/sign_in'>Already have an account? SignIn</Link>
                        </div>
                        <div className="botoess">
                        <button onClick={signUp} class="buttons"><span>Register</span></button>
                        <Link to='/'><img src={exitt} className="w-8 mt-9" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Sign_up;