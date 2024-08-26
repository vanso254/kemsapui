import { useState } from 'react'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="bg-gray-100 flex">
      <Sidebar isMobile={false} onClose={handleCloseSidebar} />
      {isSidebarOpen && (
        <Sidebar isMobile={true} onClose={handleCloseSidebar} />
      )}
      <div className="flex-1 flex flex-col">
        <Navbar onMenuClick={handleMenuClick} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App
