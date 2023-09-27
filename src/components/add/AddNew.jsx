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
    <div className="flex justify-center bg-black overflow-y-auto pt-12 pb-12 min-h-screen">
      <div className="bg-black p-6 rounded-lg w-full sm:w-1/2 mb-12 white-shadow flex-shrink-0">
        <h1 className="text-harleyOrange text-3xl mb-4 font-helvetica font-bold">Add New Motorcycle</h1>
        <MotorcycleForm
          newMotor={newMotor}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
