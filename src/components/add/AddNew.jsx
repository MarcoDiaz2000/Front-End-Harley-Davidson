import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBike } from '../../redux/bikes/thunk';
import MotorcycleForm from './MotorcycleForm';
import LoadingScreen from '../conditions/LoadingScreen';

export default function AddNew() {
  const dispatch = useDispatch();
  const { isLoading, error, errorMsg } = useSelector((state) => state.bikes);
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
    if (!newMotor.name || newMotor.name.trim() === '') {
      toast.error('The name field is required.');
      return;
    }

    const data = new FormData();

    data.append('item[name]', event.target.name.value);
    data.append('item[image]', event.target.image.files[0]);
    data.append('item[description]', event.target.description.value);
    data.append('item[deposit]', event.target.deposit.value);
    data.append('item[finance_fee]', event.target.finance_fee.value);
    data.append('item[option_to_purchase_fee]', event.target.option_to_purchase_fee.value);
    data.append('item[total_amount_payable]', event.target.total_amount_payable.value);
    data.append('item[duration]', event.target.duration.value);
    dispatch(createBike({ data }));

    toast.success('New motorcycle successfully added');
    setNewMotor({
      name: '',
      description: '',
      deposit: 0,
      finance_fee: 0,
      option_to_purchase_fee: 0,
      total_amount_payable: 0,
      duration: 0,
    });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div>
        <h1 className="text-white text-2xl text-center">Error</h1>
        <p className="text-white text-center">{errorMsg}</p>
      </div>
    );
  }

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
}
