import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="md:w-1/5">
        <Sidebar />
      </div>
      <div className="w-full md:w-4/5 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
