import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// DAR NPM
// npm i --save @fortawesome/fontawesome-svg-core
//npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome 

const Information = () => {
    return (
      <>
      <div class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-24 sm:py-32 lg:py-40 flex items-center justify-center " id='information'>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="sm:text-center">
      <h2 class="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
    </div>
   
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:mt-20">
        
        {/* <!-- 1 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-pix" className='bg-white' /> */}
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">PIX</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
          
                     <p>Core UI Team</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
            
                     <p>3 Weeks Left</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    
                </div>
            </div>
        </div>
        {/* <!-- 2 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                {/* <FontAwesomeIcon icon="fa-regular fa-piggy-bank" /> */}
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">SAVINGS</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
          
                     <p>Core UI Team</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
            
                     <p>3 Weeks Left</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    
                </div>
            </div>
        </div>

        {/* <!-- 3 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-coins" /> */}
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">FINANCE</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                     <p>Marketing Team</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
          
                     <p>2 Days Left</p> 
                </div>
                <div class="border-t-2 "></div>


                </div>
            </div>

         {/* <!-- 4 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-car" /> */}
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">SECURITY</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    
                     <p>Marketing Team</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    
                     <p>1 Month Left</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                  
                     
                </div>
            </div>
        </div>
    </div>
</div>
</div>
      </>
  );
};

export default Information;