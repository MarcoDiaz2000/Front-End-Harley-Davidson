import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generateUniqueKey = () => `button_${Math.random().toString(36).substring(2)}`;

  return (
    <div className="flex justify-center my-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          type="button"
          key={generateUniqueKey()}
          className={`mx-2 px-4 py-2 border text-white ${
            currentPage === index + 1
              ? 'bg-customBg text-white'
              : 'border-gray-300 hover:bg-customBg hover:text-white'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
