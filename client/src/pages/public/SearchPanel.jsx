import React from 'react'

const SearchPanel = () => {
    return (
        <div className='w-screen' >
            {/* Img for desktop */}
            <img src="./src/assets/Bg2.jpg" className='object-cover hidden sm:block object-bottom  w-full h-auto sm:h-140 overflow-hidden ' alt="" />
            {/* Img for mobile */}
            <img src="./src/assets/Bg.jpg" className='object-cover block sm:hidden object-bottom  w-full h-auto sm:h-140 overflow-hidden' alt="" />
        <div className=' flex  justify-center items-center '>
        
            {/* Search bar */}
            <div className='md:h-[250px] h-30 w-3/4 absolute top-25 rounded-xl shadow-lg shadow-gray-800 bg-gray-200 opacity-70
          flex  justify-center  items-center'>
                <div className='h-[50px] w-3/4 border-[#3b82f6] border-2 rounded flex flex-row  justify-start items-center'>

                        <img src="src/assets/search.png" className=' w-5 h-5 ' alt="" />
            
                
                    <input type="search" placeholder='Enter your destination' className='w-full h-full outline-none  text-gray-800' />
                
                </div>
            </div>



            {/* up menu-bar desktop*/}
            <div className='hidden lg:block h-[50px] w-1/2 top-20 absolute rounded-lg 
          shadow-lg shadow-gray-400 bg-transparent
          flex  justify-center items-center'>

                <div className='text-xs flex flex-row lg:gap-1 md:gap-20 justify-around '>
                    <div className='hover:cursor-pointer hover:text-indigo-300  hover:top-3'>
                        <img src="/src/assets/flight.png" alt="" />
                        <p>Flights</p>
                    </div>
                    <div className='hover:cursor-pointer hover:text-indigo-300  hover:top-3'>
                        <img src="/src/assets/hotels.png" alt="" />
                        <p>Hotels</p>
                    </div>
                    <div className='hover:cursor-pointer hover:text-indigo-300  hover:top-3'>
                        <img src="/src/assets/holiday.png" alt="" />
                        <p>Holidays</p>
                    </div>

                    <div className='hover:cursor-pointer hover:text-indigo-300  hover:top-3'>
                        <img src="/src/assets/buc_icon.png" alt="" />
                        <p>Bus</p>
                    </div>
                    <div className='hover:cursor-pointer hover:text-indigo-300  hover:top-3'>
                        <img src="/src/assets/train.png" alt="" />
                        <p>Trains</p>
                    </div>
                    <div className='hover:cursor-pointer hover:text-indigo-300  hover:top-3'>
                        <img src="/src/assets/cab.png" alt="" />
                        <p>cabs</p>
                    </div>
                    <div className='hover:cursor-pointer hover:text-indigo-300  hover:top-3'>
                        <img src="/src/assets/buc_icon.png" alt="" />
                        <p>Bus</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SearchPanel;