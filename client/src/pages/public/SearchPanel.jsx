import React from 'react'

const SearchPanel = () => {
    return (<div className='relative'>
            <img src="./src/assets/Bg2.jpg" className='object-cover object-bottom  w-full h-[800px] overflow-hidden' alt="" />
        <div className=' flex justify-center items-center '>

            {/* Search bar */}



            <div className='h-[250px] w-[800px] absolute top-25 rounded-xl shadow-lg shadow-gray-800 bg-gray-50
          flex justify-center  items-center'>
                <div className='h-[50px] w-[600px] border-2 border-[#3b82f6] rounded-lg bg-transparent
               flex flex-row gap-2 justify-start items-center'>
                    <img src="src/assets/search.png" alt="" />

                </div>
                <form action="">
                    <input type="text" placeholder='Enter your destination' />
                </form>
            </div>



            {/* up menu-bar */}
            <div className='h-[50px] w-[550px] top-20 absolute rounded-lg 
          shadow-lg shadow-gray-400 bg-transparent
          flex  justify-center items-center'>

                <div className='text-xs flex flex-row gap-10 justify-around '>
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