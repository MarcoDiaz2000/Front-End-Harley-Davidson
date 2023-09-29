import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="md:w-1/5 bg-bodyBg">
        <Sidebar />
      </div>
      <div className="w-full md:w-4/5 overflow-y-auto bg-bodyBg">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
