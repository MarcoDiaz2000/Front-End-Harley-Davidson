import React from 'react';
import { useDispatch } from 'react-redux';
import { markMotorcycleAsRemoved, recoverMotorcycle } from '../redux/motorcycles/motorcycles';
import { toast } from 'react-toastify';

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
    <li className={`flex justify-between items-center p-2 my-2 rounded ${motorcycle.removed ? 'bg-red-200' : 'bg-white'}`}>
      <span>{motorcycle.name}</span>
      <button
        type="button"
        onClick={() => (motorcycle.removed ? handleRecover(motorcycle.id) : handleDelete(motorcycle.id))}
        className="bg-white text-green-500 p-2 rounded hover:bg-green-200"
      >
        {motorcycle.removed ? 'Recover' : 'Delete'}
      </button>
    </li>
  );
};

export default MotorcycleItem;
