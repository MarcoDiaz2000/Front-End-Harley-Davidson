import React from 'react';
import { useSelector } from 'react-redux';
import AddNew from '../components/add/AddNew';

export default function AddNewRoute() {
  const { error, errorMsg } = useSelector((state) => state.bikes);

  if (error) {
    return (
      <div>
        <h1 className="text-white text-2xl text-center">Error</h1>
        <p className="text-white text-center">{errorMsg}</p>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <AddNew />
    </div>
  );
}
