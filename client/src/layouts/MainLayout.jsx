import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen   bg-[#f2f2f2]">
      
      <Navbar />
      <main >
        <Outlet />
      </main>
      
    </div>
  );
};

export default MainLayout;