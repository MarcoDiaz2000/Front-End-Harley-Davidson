import React from 'react';
import MotorcycleList from '../components/delete/MotorcycleList';

export default function Delete() {
  return (
    <div className="flex justify-center bg-black overflow-y-auto pt-12 pb-12 min-h-screen">
      <div className="bg-black p-6 rounded-lg w-1/2 mb-12 white-shadow flex-shrink-0">
        <h2 className="font-helvetica text-harleyOrange text-2xl mb-4">Delete Motorcycles</h2>
        <MotorcycleList />
      </div>
    </div>
  );
}
