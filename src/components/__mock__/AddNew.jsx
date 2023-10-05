import React, { useState } from 'react';
import MotorcycleForm from './MotorcycleForm';

const MockAddNew = () => {
  const [newMotor, setNewMotor] = useState({
    name: '',
    description: '',
    deposit: 0,
    finance_fee: 0,
    option_to_purchase_fee: 0,
    total_amount_payable: 0,
    duration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMotor({
      ...newMotor,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center bodyBg overflow-y-auto pt-12 pb-12 min-h-screen">
      <div className="bg-customBg p-5 rounded-lg w-full sm:w-1/2 mb-12 white-shadow flex-shrink-0">
        <h1 className="text-white text-3xl mb-4 font-roboto font-bold">Add New Motorcycle</h1>
        <MotorcycleForm
          newMotor={newMotor}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
export default MockAddNew;
