import React from 'react'

const Destination = () => {
  return (
      <div>
          <p className=''>Top destination in India</p>
          <div className='grid grid-rows-1 '>
              <div className='h-40 w-40 bg-amber-500 rounded-lg'>
                  <img src="./src/assets/Destination/Delhi.jpg" className='w-full h-full  object-cover ' alt="" />
              </div>
                  <p>New Delhi</p>
          </div>
      </div>
  )
}

export default Destination