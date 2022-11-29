import React, {useState} from "react";
import cardlo from '../assets/cardlo.png'
import { useNavigate } from 'react-router-dom'

const CardLogged = () => {
    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [telefone, setTelefone]=useState("")
    const [cpf, setCpf]=useState("")
    const [salario, setSalario]=useState("")
    const [cidade, setCidade]=useState("")
    const [senha, setSenha]=useState("")
    const navigates=useNavigate();
    
    
    async function Pedido()
    {   
        let itens={nome, email, telefone, cpf, salario, cidade, senha}
        console.warn(itens)
    
        let enderecos = "http://127.0.0.1:8000/pedido/"
    
        let result= await fetch(enderecos,{
            method:'POST',
            body:JSON.stringify(itens),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
    
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigates("/logged#homelogged")
         
    }
    
    return (
        <>
        <div class="w-full h-screen flex relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 items-center justify-center" id='cardlogged' >
        <div className='lg:mr-52 mr-0'>
                        <img src={cardlo} className='' />
                    </div>
    <div class="bg-white py-6 px-10 sm:max-w-md w-full border-2 border-sky-300">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600 mt-10 mb-12">
             Ask for your card
        </div>
        <div>
            <div>
                 <input value={nome} onChange={(e)=>setNome(e.target.value)} type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"  placeholder="Name "/>
            </div>
             <div>
                 <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"  placeholder="Email"/>
            </div>
            <div>
            <input value={telefone} onChange={(e)=>setTelefone(e.target.value)} type="phone" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Phone "/>
            </div>
             <div>
            <input value={cidade} onChange={(e)=>setCidade(e.target.value)} type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Country "/>
            </div>
             <div>
             <input value={cpf} onChange={(e)=>setCpf(e.target.value)} type="cpf" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="CPF"/>
            </div>
            <div>
            <input value={salario} onChange={(e)=>setSalario(e.target.value)} type="salary" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Salary "/>
            </div>
            <div>
                <input value={senha} onChange={(e)=>setSenha(e.target.value)}type="password" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Password " />
            </div>
            <div class="flex justify-center mt-0 my-6 lg:w-96 w-72">
                <button onClick={Pedido} type='button' class=" rounded-full  p-3 lg:w-40 w-28   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>

        </>

    );
};

export default CardLogged;