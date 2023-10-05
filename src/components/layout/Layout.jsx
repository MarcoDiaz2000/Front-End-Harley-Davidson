import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex w-full relative h-screen">
      <div className={`md:w-1/5 top-0 absolute z-1 md:hidden transition-all duration-300 transform ${showSidebar ? 'translate-y-0 mt-20' : '-translate-y-full'}`}>
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className="md:w-1/5 bg-bodyBg hidden md:block">
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className="w-full flex flex-col md:w-4/5 overflow-y-auto bg-bodyBg">
        {children}
      </div>
      <div className="flex absolute z-1">
        <button type="button" className="block text-white p-2 md:hidden" onClick={toggleSidebar}>
          {showSidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
