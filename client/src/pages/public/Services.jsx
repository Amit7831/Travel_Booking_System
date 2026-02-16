import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';


const Services = () => {



    const url = import.meta.env.VITE_BACKEND_URL;
    const [service, setService] = useState([]);

      
    const fetchService = async () => {
        try {
            const getUrl = url + "/service/get";
            const res = await axios.get(getUrl);
            if (res.data.status) {
                setService(res.data.service);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchService();
    }, []);

    return (
        <div>
            {/* Admin panel Services add table */}
            {/* <table className="w-full">
                <thead className="border bg-sky-300">
                    <tr>
                        <td>PackageName</td>
                        <td>Place</td>
                        <td>Duration</td>
                        <td>Price</td>
                        <td>Available</td>
                        <td>Date</td>
                        <td>Accomodation</td>
                        <td>Transport</td>
                        <td>Img</td>
                    </tr>
                </thead>
                <tbody>
                    {service?.length > 0 &&
                        service.map((ele) => (
                            <tr key={ele._id} className="border text-center">
                                <td>{ele?.packageName}</td>
                                <td>{ele?.place}</td>
                                <td>{ele?.duration}</td>
                                <td>{ele?.pricePerPersion}</td>
                                <td>{ele?.availableBookingSeat}</td>
                                <td>{ele?.dateDeadline}</td>
                                <td>{ele?.accommodation}</td>
                                <td>{ele?.transport}</td>
                                 <td>{ele?.image}</td> 
                                <img src={ele?.image} className='w-10 h-20' alt="" />
                            </tr>
                        ))}
                </tbody>
            </table >  */}

            <div className='sm:px-30 w-screen py-2 px-2 sm:py-10 '>
                <p className=' sm:font-bold md:text-2xl'>Services</p>

                <div className='w-full sm:h-80 h-140 flex sm:justify-start justify-center bg-linear-to-r from-indigo-300 via-purple-400 to-pink-400  rounded-lg shadow-2xl sm:py-4 sm:px-8 sm:overflow-x-auto overflow-y-auto custom-scroll'>
                    <div className='flex flex-col  sm:flex-row sm:w-max sm:w-full  gap-8  py-4'>
                       {/* Left Arrow */}
  
                        {service?.length > 0 &&
                            service.map((ele) => (

                                <div className=' sm:h-60 sm:w-50 h-80 w-80 flex flex-col justify-center items-center'>
                                    <div className='relative w-full h-full group'>
                                    <img src={ele?.image} className='w-full h-full  object-cover rounded-lg ' alt="" />
                                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100  transition duration-300 rounded-lg flex flex-col justify-end items-center pb-6'>

                                        <p className='text-white text-lg font-semibold'>
                                            {ele?.duration}
                                        </p>

                                        <p className='text-white text-sm'>
                                            {ele?.transport}
                                        </p>
                                        <p className='text-white text-sm'>
                                            {ele?.dateDeadline}
                                        </p>
                                        <p className='text-white text-sm'>
                                            {ele?.availableBookingSeat} Seats
                                        </p>

                                        <p className='text-amber-400 font-bold mt-2'>
                                            ${ele?.pricePerPersion}
                                        </p>

                                        <p className='text-white text-sm'>
                                            {ele?.accommodation}
                                        </p>
                                        <hr className='hidden group-hover:block  border-blue-400 w-3/4 ' />

                                    </div>
                                    </div>
                                    <div className='group  flex flex-col items-center'>
                                        <p className=' md:text-base font-semibold '>{ele?.packageName}</p>
                                        <hr className='hidden group-hover:block  border-blue-400 w-3/4 ' />
                                        <p className='text-sm'>{ele?.place}</p>
                                        <hr className='hidden group-hover:block border-blue-400 w-full ' />
                                    </div>
                                </div>

                            ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services;