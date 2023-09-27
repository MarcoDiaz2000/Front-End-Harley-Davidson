import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createMotorcycle } from '../../redux/motorcycles/motorcycles';
import MotorcycleForm from './MotorcycleForm';

export default function AddNew() {
  const dispatch = useDispatch();
  const [newMotor, setNewMotor] = useState({
    name: '',
    image: '',
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

  const handleSubmit = () => {
    if (!newMotor.name || newMotor.name.trim() === '') {
      toast.error('The name field is required.');
      return;
    }

    dispatch(createMotorcycle(newMotor));
    toast.success('New motorcycle successfully added');
    setNewMotor({
      name: '',
      image: '',
      description: '',
      deposit: 0,
      finance_fee: 0,
      option_to_purchase_fee: 0,
      total_amount_payable: 0,
      duration: 0,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-customDark overflow-y-auto">
      <div className="bg-customBg p-6 rounded-lg w-1/2 shadow-lg">
        <h1 className="text-white text-3xl mb-4 font-roboto">Add New Moto</h1>
        <MotorcycleForm
          newMotor={newMotor}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
