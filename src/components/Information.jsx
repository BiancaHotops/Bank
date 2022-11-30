import React from "react";
import ico1 from '../assets/ico1.png'
import ico2 from '../assets/ico2.png'
import ico3 from '../assets/ico3.png'
import ico4 from '../assets/ico4.png'


const Information = () => {
    return (
      <>
      <div class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-24 sm:py-32 lg:py-40 flex items-center justify-center " id='information'>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="sm:text-center">
      <h2 class="text-2xl font-semibold leading-8 text-indigo-600">Transactions</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Our services are thought of our customers. All services are easy and quick to use, everything has been thought about security, profitability, investment of your money in the best way.</p>
    </div>
   
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:mt-20">
        
        {/* <!-- 1 card --> */}
        <div class="hover:scale-110 duration-150 relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                <img src={ico1} className="w-5" />
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">PIX</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
          
                     <p>Fast Transfer</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
            
                     <p>Easy to Use</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    
                </div>
            </div>
        </div>
        {/* <!-- 2 card --> */}
        <div class="hover:scale-110 duration-150 relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                <img src={ico2} className="w-8" />
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">SAVINGS</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
          
                     <p>Saved Money</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
            
                     <p>Guaranteed Income</p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    
                </div>
            </div>
        </div>

        {/* <!-- 3 card --> */}
        <div class="hover:scale-110 duration-150 relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                <img src={ico3} className="w-7" />
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">FINANCE</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                     <p>Financed Money</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
          
                     <p>Done for You</p> 
                </div>
                <div class="border-t-2 "></div>


                </div>
            </div>

         {/* <!-- 4 card --> */}
        <div class="hover:scale-110 duration-150 relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                {/* <!-- svg  --> */}
                <img src={ico4} className="w-7" />
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">SECURITY</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    
                     <p>Safety First</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    
                     <p>Various Types of Insurance</p> 
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