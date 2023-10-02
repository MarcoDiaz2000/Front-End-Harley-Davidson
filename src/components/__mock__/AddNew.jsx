import React from 'react';
import MotorcycleForm from './MotorcycleForm';

export default function AddNew() {
  return (
    <div className="flex justify-center bodyBg overflow-y-auto pt-12 pb-12 min-h-screen">
      <div className="bg-customBg p-5 rounded-lg w-full sm:w-1/2 mb-12 white-shadow flex-shrink-0">
        <h1 className="text-white text-3xl mb-4 font-roboto font-bold">Add New Motorcycle</h1>
        <MotorcycleForm />
      </div>
    </div>
  );
}
