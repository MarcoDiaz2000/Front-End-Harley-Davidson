import React from 'react';
import MotorcycleList from '../components/pages/Delete/MotorcycleList';

export default function Delete() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-green-500 p-6 rounded-lg w-1/2 max-h-[100vh] overflow-y-auto">
        <h2 className="text-white text-2xl mb-4">Delete Motorcycles</h2>
        <MotorcycleList />
      </div>
    </div>
  );
}
