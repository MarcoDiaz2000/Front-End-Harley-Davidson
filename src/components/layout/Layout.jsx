import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex w-full relative h-screen">
      <div className="md:w-1/5 absolute top-14 z-1 md:hidden bg-bodyBg">
        {showSidebar && (
        <Sidebar />
        )}
      </div>
      <div className="md:w-1/5 bg-bodyBg hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col md:w-4/5 overflow-y-auto bg-bodyBg">

        {children}
      </div>
      <div className="flex absolute ">
        <button type="button" className="block text-white p-2 md:hidden" onClick={toggleSidebar}>
          {showSidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
