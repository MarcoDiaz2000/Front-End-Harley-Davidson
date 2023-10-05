import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { markBikeAsRemoved, markBikeAsRestored } from '../../redux/bikes/thunk';

const MotorcycleItem = ({ motorcycle }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(markBikeAsRemoved({ id }));
    toast.success('Motorcycle marked for deletion');
  };

  const handleRecover = (id) => {
    dispatch(markBikeAsRestored({ id }));
    toast.success('Motorcycle recovered');
  };

  return (
    <li className={`flex flex-col sm:flex-row justify-between items-center p-2 my-2 rounded-lg transform transition duration-500 hover:scale-105 ${motorcycle.removed ? 'bg-harleyOrange white-shadow-i' : 'bg-white white-shadow-i'}`}>
      <span className={`font-roboto font-bold ${motorcycle.removed ? 'text-white' : 'text-black'}`}>{motorcycle.name}</span>
      <button
        type="button"
        onClick={() => (motorcycle.removed
          ? handleRecover(motorcycle.id)
          : handleDelete(motorcycle.id))}
        className={`p-2 rounded hover:bg-customDark-900 font-roboto font-bold ${motorcycle.removed ? 'text-harleyOrange bg-white' : 'text-white bg-harleyOrange'}`}
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
