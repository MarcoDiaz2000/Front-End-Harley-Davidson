import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../../redux/bikes/thunk';
import MotorcycleItem from './MotorcycleItem';
import LoadingScreen from '../conditions/LoadingScreen';

const MotorcycleList = () => {
  const dispatch = useDispatch();
  const {
    bikes, isLoading, error, errorMsg,
  } = useSelector((state) => state.bikes);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div>
        <h1 className="text-white text-2xl text-center">Error</h1>
        <p className="text-white text-center">{errorMsg}</p>
      </div>
    )
  }
  
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
