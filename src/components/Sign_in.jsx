import React, {useState} from "react";
import '../styles/sign_in.css'
import { Link, useNavigate } from 'react-router-dom'
import exit from '../assets/exit.png'

const Sign_in = () => {

const [cpf, setCpf]=useState("")
const [password, setPassword]=useState("")
const navigate=useNavigate();

async function signIn()
{   
    let item={ cpf,'senha': password}
    console.warn(item)

    let endereco = "http://127.0.0.1:8000/login/"

    let result= await fetch(endereco,{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    }).then(x => x.json())
    .then(dados => {
        console.log(dados)
        if (dados['auth'] == false){
            alert("cpf ou senha incorretos")
        }
        else{
            navigate("/logged")
        }
    })

    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate("/logged")
     
}

    return (
        <>
            <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/fundo7.png')] items center flex justify-center m-0 p-0">
                <div class="boxx">
                    <div class="form">
                        <h2>SIGN IN</h2>
                        <div class="inputBox">
                            <input value={cpf} onChange={(e)=>setCpf(e.target.value)} type="text" required></input>
                            <span>CPF</span>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required></input>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div class="links">
                            <a href="#"></a>
                            <Link to='/sign_up'>SignUp</Link>
                        </div>
                        <div className="botoes">
                        <Link > <button class="button" onClick={signIn}><span>LOGIN</span></button></Link>
                        <Link to='/'><img src={exit} className="w-8 mt-9" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Sign_in;