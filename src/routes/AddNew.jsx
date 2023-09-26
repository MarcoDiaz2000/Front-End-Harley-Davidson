import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMotorcycle } from '../redux/motorcycles/motorcycles';

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
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-green-500 p-6 rounded-lg w-1/2 max-h-[100vh] overflow-y-auto">
        <h1 className="text-white text-2xl mb-4">Add New Moto</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-white block mb-2">
              Name:
              <input
                id="name"
                className="w-full p-2 rounded text-black"
                type="text"
                name="name"
                onChange={handleChange}
                value={newMotor.name}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="text-white block mb-2">
              Image URL:
              <input
                id="image"
                className="w-full p-2 rounded text-black"
                type="text"
                name="image"
                onChange={handleChange}
                value={newMotor.image}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-white block mb-2">
              Description:
              <textarea
                id="description"
                className="w-full p-2 rounded text-black"
                name="description"
                onChange={handleChange}
                value={newMotor.description}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="deposit" className="text-white block mb-2">
              Deposit:
              <input
                id="deposit"
                className="w-full p-2 rounded text-black"
                type="number"
                name="deposit"
                onChange={handleChange}
                value={newMotor.deposit}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="finance_fee" className="text-white block mb-2">
              Finance Fee:
              <input
                id="finance_fee"
                className="w-full p-2 rounded text-black"
                type="number"
                name="finance_fee"
                onChange={handleChange}
                value={newMotor.finance_fee}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="option_to_purchase_fee" className="text-white block mb-2">
              Option to Purchase Fee:
              <input
                id="option_to_purchase_fee"
                className="w-full p-2 rounded text-black"
                type="number"
                name="option_to_purchase_fee"
                onChange={handleChange}
                value={newMotor.option_to_purchase_fee}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="total_amount_payable" className="text-white block mb-2">
              Total Amount Payable:
              <input
                id="total_amount_payable"
                className="w-full p-2 rounded text-black"
                type="number"
                name="total_amount_payable"
                onChange={handleChange}
                value={newMotor.total_amount_payable}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="text-white block mb-2">
              Duration:
              <input
                id="duration"
                className="w-full p-2 rounded text-black"
                type="number"
                name="duration"
                onChange={handleChange}
                value={newMotor.duration}
              />
            </label>
          </div>
          <button type="button" onClick={handleSubmit} className="bg-white text-green-500 p-2 rounded hover:bg-green-200">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
