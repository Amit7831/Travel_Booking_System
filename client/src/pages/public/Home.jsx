import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SearchPanel from './SearchPanel';
import Destination from './Destination';


const Home = () => {
  const { user } = useAuth();

  return (
    
    <div>
      <SearchPanel />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-50 sm:py-180 '>

    <Destination/>
      </div>
    </div>
   
       /* <div className="space-x-4">
        {user ? (
          <Link 
            to="/profile" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
        ) : (
          <>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Login
            </Link>
          </>
        )}
      </div> 
     */
  );
};

export default Home;