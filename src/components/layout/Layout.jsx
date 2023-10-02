import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex">
      <div className={`md:w-1/5 bg-bodyBg ${showSidebar ? '' : 'hidden'}`}>
        <Sidebar />
      </div>
      <div className="md:w-1/5 bg-bodyBg hidden">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col md:w-4/5 overflow-y-auto bg-bodyBg">
        <div className="flex bg-red-500">
          <button type="button" className="block text-white md:hidden" onClick={toggleSidebar}>Button</button>
        </div>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
