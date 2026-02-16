import React from 'react'


const Destination = () => {
    return (
        <div className='md:px-30 w-screen  md:py-10 '>
                <p className=' sm:font-bold md:text-2xl'>Top destination in India</p>
            <div className='w-full sm:h-80 h-60  bg-[#ffffff]  rounded-lg shadow-2xl md:py-4 md:px-8 overflow-x-auto'>
             
              
                {/* img with destination */}
                <div className='flex gap-9 w-max py-4'>
                    {/* 1 */}
                    <div className=' h-50 w-40 flex flex-col justify-center items-center'>
                        <img src="./src/assets/Destination/Delhi.jpg" className='w-full h-full  object-cover rounded-lg ' alt="" />
                        <div className=' group flex flex-col items-center'>
                            <p className=' md:text-base font-semibold '>New Delhi</p>
                            <hr className='hidden group-hover:block bg-amber-400 border border-blue-400 w-3/4 ' />
                            <p className='text-xs'>2323 Accommodations</p>
                            <hr className='hidden group-hover:block border-blue-400 w-full ' />
                        </div>
                    </div>

                    {/* 2 */}
                    <div className=' h-50 w-40 flex flex-col justify-center items-center'>
                        <img src="./src/assets/Destination/bangalore.jpg" className='w-full h-full  object-cover rounded-lg ' alt="" />
                        <div className=' group flex flex-col items-center'>
                            <p className=' md:text-base font-semibold '>Bangalore</p>
                            <hr className='hidden group-hover:block bg-amber-400 border border-blue-400 w-3/4 ' />
                            <p className='text-xs'>12132 Accommodations</p>
                            <hr className='hidden group-hover:block border-blue-400 w-full ' />
                        </div>
                    </div>
                    <div className=' h-50 w-40 flex flex-col justify-center items-center'>
                        <img src="./src/assets/Destination/Hydrabad.jpg" className='w-full h-full  object-cover rounded-lg ' alt="" />
                        <div className=' group flex flex-col items-center'>
                            <p className=' md:text-base font-semibold '>Hydrabad</p>
                            <hr className='hidden group-hover:block bg-amber-400 border border-blue-400 w-3/4 ' />
                            <p className='text-xs'>2323 Accommodations</p>
                            <hr className='hidden group-hover:block border-blue-400 w-full ' />
                        </div>
                    </div>
                    <div className=' h-50 w-40 flex flex-col justify-center items-center'>
                        <img src="./src/assets/Destination/jaipure.jpg" className='w-full h-full  object-cover rounded-lg ' alt="" />
                        <div className=' group flex flex-col items-center'>
                            <p className=' md:text-base font-semibold '>jaipure</p>
                            <hr className='hidden group-hover:block bg-amber-400 border border-blue-400 w-3/4 ' />
                            <p className='text-xs'>2323 Accommodations</p>
                            <hr className='hidden group-hover:block border-blue-400 w-full ' />
                        </div>
                    </div>
                    <div className=' h-50 w-40 flex flex-col justify-center items-center'>
                        <img src="./src/assets/Destination/Mumbai.jpg" className='w-full h-full  object-cover rounded-lg ' alt="" />
                        <div className=' group flex flex-col items-center'>
                            <p className=' md:text-base font-semibold '>Mumbai</p>
                            <hr className='hidden group-hover:block bg-amber-400 border border-blue-400 w-3/4 ' />
                            <p className='text-xs'>2323 Accommodations</p>
                            <hr className='hidden group-hover:block border-blue-400 w-full ' />
                        </div>
                    </div>
                    <div className=' h-50 w-40 flex flex-col justify-center items-center'>
                        <img src="./src/assets/Destination/Goa.jpg" className='w-full h-full  object-cover rounded-lg ' alt="" />
                        <div className=' group flex flex-col items-center'>
                            <p className=' md:text-base font-semibold '>Goa</p>
                            <hr className='hidden group-hover:block bg-amber-400 border border-blue-400 w-3/4 ' />
                            <p className='text-xs'>2323 Accommodations</p>
                            <hr className='hidden group-hover:block border-blue-400 w-full ' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destination