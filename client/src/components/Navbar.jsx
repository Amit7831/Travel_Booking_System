import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();



  return (
    <nav className=" shadow-xl bg-linear-to-t from-sky-500 to-indigo-500 shadow-black-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-13">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">TRAVEL <span className='text-[#a78bfa]'>the</span> <span className='text-[#5eead4]'>WORLD</span></Link>
          </div>
          <div className=" flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
             <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
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
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;