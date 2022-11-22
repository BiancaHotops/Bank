import React from "react";
import '../styles/services.css'
import finan from '../assets/financas.jpg'
import invest from '../assets/invest.jpg'
import poupa from '../assets/poupa.jpg'
import seguro from '../assets/seguro.jpg'
import {Link} from "react-router-dom" 

const Cards = () => {
  return (
    <>
     
      <div class="flex lg:flex-row min-h-screen items-center justify-center bg-black mt-0 z-auto flex-col">
      <div className="titulo">
        <h2>Contract Our Services</h2>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={finan} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Finance</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Take care of your finances, access your spending profile and have everything at your fingertips.</p>
              <Link to='/sign_up'>  <button class="rounded-full transition-colors duration-500 bg-pink-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></Link>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={invest} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Investment</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Want to make the best investment decisions? So get started now by clicking the button below.</p>
              <Link to='/sign_up'>  <button class="rounded-full transition-colors duration-500 bg-pink-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></Link>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={poupa} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Savings</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Investing is simpler and easier with Savings: safe and tax-free. Invest now in HBANK Digital Savings.</p>
              <Link to='/sign_up'>  <button class="rounded-full transition-colors duration-500 bg-pink-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></Link>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={seguro} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Car Insurance</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">HBANK Seguro Auto offers basic and additional coverage, in addition to services that provide security.</p>
              <Link to='/sign_up'>  <button class="rounded-full transition-colors duration-500 bg-pink-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></Link>
            </div>
          </div>
        </div>
     
      </div>

    </>
  );
};

export default Cards;