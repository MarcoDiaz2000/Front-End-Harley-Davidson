import React from 'react';
import PropTypes from 'prop-types';

const NoRecords = ({ message = 'No Records' }) => (
  <section className="text-white h-full flex items-center justify-center">
    <div className="text-white flex bg-harleyOrange p-4 rounded-lg">
      <span className="md:text-5xl text-3xl">{message}</span>
    </div>
  </section>
);

export default NoRecords;

NoRecords.propTypes = {
  message: PropTypes.string.isRequired,
};
