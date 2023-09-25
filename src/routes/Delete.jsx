import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchMotorcycles, markMotorcycleAsRemoved, recoverMotorcycle } from '../redux/motorcycles/motorcycles';

export default function Delete() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(markMotorcycleAsRemoved(id));
    toast.success('Motorcycle marked for deletion');
  };

  const handleRecover = (id) => {
    dispatch(recoverMotorcycle(id));
    toast.success('Motorcycle recovered');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-green-500 p-6 rounded-lg w-1/2 max-h-[100vh] overflow-y-auto">
        <h2 className="text-white text-2xl mb-4">Delete Motorcycles</h2>
        <ul>
          {motorcycles.map((motorcycle) => (
            <li
              key={motorcycle.id}
              className={`flex justify-between items-center p-2 my-2 rounded ${motorcycle.removed ? 'bg-red-200' : 'bg-white'}`}
            >
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
          ))}
        </ul>
      </div>
    </div>
  );
}
