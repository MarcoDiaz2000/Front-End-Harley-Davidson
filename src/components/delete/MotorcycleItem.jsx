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
    <li className={`flex justify-between items-center p-2 my-2 rounded-lg transform transition duration-500 hover:scale-105 ${motorcycle.removed ? 'bg-harleyOrange shadow-white-lg' : 'bg-black shadow-white-lg'}`}>
      <span className="font-helvetica text-white font-bold">{motorcycle.name}</span>
      <button
        type="button"
        onClick={() => (motorcycle.removed ? handleRecover(motorcycle.id) : handleDelete(motorcycle.id))}
        className={`bg-black p-2 rounded hover:bg-green-200 font-helvetica font-bold ${motorcycle.removed ? 'text-white' : 'text-harleyOrange'}`}
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
