import React from "react";
import toronto from '../assets/toronto.jpg'
import inglaterra from '../assets/inglaterra.jpg'
import boston from '../assets/boston.jpg'
import newyork from '../assets/newyork.jpg'
import '../styles/information.css'

const Local = () => {
  return (
    <>
      
      <div class="lg:flex-row flex min-h-screen items-center justify-center bg-gray-900 mt-0 z-auto flex-col" id='local'>
      {/* <div className="texto">
        <h2 >Cities where our units are located</h2>
        </div> */}
        <div class="bg-white w-72 h-72 shadow-md rounded m-7 ">
          <div class="h-3/4 w-full">
            <img class="w-full h-full object-cover rounded-t" src={inglaterra} alt="piña"></img>
          </div>
          <div class="w-full h-3/4 p-3">
            <p href="#" class=" transition-colors hover:text-rose-500 duration-300 text-gray-700">
              <span class="text-lg font-semibold uppercase tracking-wide ">England</span>
            </p>
          </div>
        </div>
        {/* <!--     segunda card --> */}
        <div class="bg-white w-72 h-72 shadow-md rounded m-7">
          <div class="h-3/4 w-full">
            <img class="w-full h-full object-cover rounded-t" src={boston} alt="piña"></img>
          </div>
          <div class="w-full h-3/4 p-3">
            <p href="#" class=" transition-colors hover:text-rose-500 duration-300 text-gray-700">
              <span class="text-lg font-semibold uppercase tracking-wide ">Boston</span>
            </p>

          </div>
        </div>
        {/* <!--     tercera card --> */}
        <div class="bg-white w-72 h-72 shadow-md rounded m-7">
          <div class="h-3/4 w-full">
            <img class="w-full h-full object-cover rounded-t" src={newyork} alt="piña"></img>
          </div>
          <div class="w-full p-3">
            <p href="#" class=" transition-colors hover:text-rose-500 duration-300 text-gray-700">
              <span class="text-lg font-semibold uppercase tracking-wide ">New York</span>
            </p>

          </div>
        </div>
        {/* <!--     quarta card --> */}
        <div class="bg-white w-72 h-72 shadow-md rounded m-7">
          <div class="h-3/4 w-full">
            <img class="w-full h-full object-cover rounded-t" src={toronto} alt="piña"></img>
          </div>
          <div class="w-full h-1/4 p-3">
            <p href="#" class=" transition-colors hover:text-rose-500 duration-300 text-gray-700">
              <span class="text-lg font-semibold uppercase tracking-wide ">Toronto</span>
            </p>

          </div>
        </div>
        </div>

     
    </>
  );
};

export default Local;