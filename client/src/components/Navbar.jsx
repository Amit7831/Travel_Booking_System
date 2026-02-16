import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';




const Navbar = () => {
  const { user, logout } = useAuth();

  const [visble,setVisible] = useState(false)


  return (
    <nav className="bg-white shadow-xl relative z-50  ">
      <div className="x-3 sm:px-4 ">
        <div className="flex  justify-between   gap-2  h-14">
          <div className="flex items-center p-2">
            <Link to="/" className="text-xs sm:text-xl md:text-2xl   font-bold text-blue-600">TRAVEL <span className='text-[#a78bfa]'>the</span> <span className='text-[#5eead4]'>WORLD</span></Link>
          </div>
          <div className=" sm:flex hidden items-center  space-x-2 sm:space-x-4  text-sm sm:text-lg font-semibold">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/service" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/book-now" className="text-gray-700 hover:text-blue-600">Book Now</Link>

            {user ? (
              <>
                <span className="text-gray-500">Hi, {user.name}</span>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-blue-600 font-semibold">Admin Panel</Link>
                )}
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-5 py-1  rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                <Link to="/register" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Register</Link>
              </>
            )}



          </div>


          {/* Side bar for small screen */}
          <div className='flex relative justify-evenly px-2 space-x-3 sm:hidden items-center'>
            <div>

              {user ? (
                <>
                  <span className="text-gray-500">Hi, {user.name}</span>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="text-blue-600 font-semibold">Admin Panel</Link>
                  )}
                  <button
                    onClick={logout}
                    className="bg-red-500 px-1 text-white md:px-3 md:py-1 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className='flex space-x-3 font-semibold text-sm'>
                  <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                  <Link to="/register" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Register</Link>
                </div>
              )}
            </div>
            <div onClick={()=>setVisible(true)} className=' cursor-pointer  sm:hidden  ' >
            <img  src={"./src/assets/menu_icon.png"} className='w-4 h-3 ' alt="" />
            </div>
          </div>
          {/* Side menu */}
          <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visble ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col font-semibold text-gray-600'>
              <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                <img src={"./src/assets/dropdown_icon.png"} className='h-4 rotate-180' alt="" />
                <p>Back</p>
              </div>
             <Link onClick={()=>setVisible(false)} to="/" className=" py-2 pl-6 hover:bg-black hover:text-white border">Home</Link>
            <Link onClick={()=>setVisible(false)} to="/service" className=" py-2 pl-6 hover:bg-black hover:text-white border">Services</Link>
            <Link onClick={()=>setVisible(false)} to="/about" className=" py-2 pl-6 hover:bg-black hover:text-white border">About</Link>
            <Link onClick={()=>setVisible(false)} to="/contact" className="py-2 pl-6 hover:bg-black hover:text-white border">Contact</Link>
              <Link onClick={() => setVisible(false)} to="/book-now" className="py-2 pl-6 hover:bg-black hover:text-white border">Book Now</Link>
              
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;