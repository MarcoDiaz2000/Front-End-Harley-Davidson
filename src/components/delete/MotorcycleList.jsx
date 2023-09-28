import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import MotorcycleItem from './MotorcycleItem';

const MotorcycleList = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, [dispatch]);

  return (
    <ul className="divide-customBorder">
      {motorcycles.length > 0 ? (
        motorcycles.map((motorcycle) => (
          <MotorcycleItem key={motorcycle.id} motorcycle={motorcycle} />
        ))
      ) : (
        <div className="text-center text-white font-bold">Without motorcycles in inventory</div>
      )}
    </ul>
  );
};

export default MotorcycleList;
