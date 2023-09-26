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
    <ul>
      {motorcycles.map((motorcycle) => (
        <MotorcycleItem key={motorcycle.id} motorcycle={motorcycle} />
      ))}
    </ul>
  );
};

export default MotorcycleList;
