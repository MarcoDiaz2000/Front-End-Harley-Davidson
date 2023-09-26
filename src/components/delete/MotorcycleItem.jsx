import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { markMotorcycleAsRemoved, recoverMotorcycle } from '../../redux/motorcycles/motorcycles';

const MotorcycleItem = ({ motorcycle }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(markMotorcycleAsRemoved(id));
    toast.success('Motorcycle marked for deletion');
  };

  const handleRecover = (id) => {
    dispatch(recoverMotorcycle(id));
    toast.success('Motorcycle recovered');
  };

  return (
    <li className={`flex justify-between items-center p-2 my-2 rounded transform transition duration-500 hover:scale-105 ${motorcycle.removed ? 'bg-red-200' : 'bg-white'}`}>
      <span>{motorcycle.name}</span>
      <button
        type="button"
        onClick={() => (motorcycle.removed ? handleRecover(motorcycle.id)
          : handleDelete(motorcycle.id))}
        className="bg-white text-green-500 p-2 rounded hover:bg-green-200"
      >
        {motorcycle.removed ? 'Recover' : 'Delete'}
      </button>
    </li>
  );
};

MotorcycleItem.propTypes = {
  motorcycle: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MotorcycleItem;
