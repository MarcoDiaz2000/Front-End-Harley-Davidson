import React from 'react';
import MotorcycleList from '../components/delete/MotorcycleList';

export default function Delete() {
  return (
    <div className="flex justify-center items-center h-screen bg-customDark overflow-y-auto">
      <div className="bg-customBg p-6 rounded-lg w-1/2">
        <h2 className="font-roboto text-white text-2xl mb-4">Delete Motorcycles</h2>
        <MotorcycleList />
      </div>
    </div>
  );
}
