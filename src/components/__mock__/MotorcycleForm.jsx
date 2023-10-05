import React from 'react';

const MotorcycleForm = () => (
  <form>
    <div className="mb-3">
      <label htmlFor="name" className="text-white block mb-2 font-roboto font-bold">
        Name *:
        <input id="name" className="w-full p-2 rounded text-black" type="text" name="name" />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="image" className="text-white block mb-2 font-roboto font-bold">
        Image *:
        <input
          id="image"
          className="w-full p-2 rounded text-black font-roboto font-bold"
          type="file"
          name="image"
        />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="text-white block mb-2 font-roboto font-bold">
        Description *:
        <input
          id="description"
          className="w-full p-2 rounded text-black font-roboto font-bold"
          type="text"
          name="description"
        />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="deposit" className="text-white block mb-2 font-roboto font-bold">
        Deposit:
        <input
          id="deposit"
          className="w-full p-2 rounded text-black"
          type="number"
          name="deposit"
        />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="finance_fee" className="text-white block mb-2 font-roboto font-bold">
        Finance Fee:
        <input
          id="finance_fee"
          className="w-full p-2 rounded text-black"
          type="number"
          name="finance_fee"
        />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="option_to_purchase_fee" className="text-white block mb-2 font-roboto font-bold">
        Option to Purchase Fee:
        <input
          id="option_to_purchase_fee"
          className="w-full p-2 rounded text-black"
          type="number"
          name="option_to_purchase_fee"
        />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="total_amount_payable" className="text-white block mb-2 font-roboto font-bold">
        Total Amount Payable:
        <input
          id="total_amount_payable"
          className="w-full p-2 rounded text-black"
          type="number"
          name="total_amount_payable"
        />
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="duration" className="text-white block mb-2 font-roboto font-bold">
        Duration:
        <input
          id="duration"
          className="w-full p-2 rounded text-black"
          type="number"
          name="duration"
        />
      </label>
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-harleyOrange text-white py-3 px-12 rounded hover:bg-orange-700 shadow-md font-roboto font-bold"
      >
        Add New Motorcycle
      </button>
    </div>
  </form>
);
export default MotorcycleForm;
