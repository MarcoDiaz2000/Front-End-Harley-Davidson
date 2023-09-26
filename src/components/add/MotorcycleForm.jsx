import React from 'react';
import PropTypes from 'prop-types';

function MotorcycleForm({ newMotor, handleChange, handleSubmit }) {
  return (
    <form>
      <div className="mb-2">
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
      <div className="mb-2">
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
      <div className="mb-2">
        <label htmlFor="description" className="text-white block mb-2">
          Description:
          <textarea
            id="description"
            className="w-full p-2 rounded text-black"
            type="text"
            name="description"
            onChange={handleChange}
            value={newMotor.description}
          />
        </label>
      </div>
      <div className="mb-2">
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
      <div className="mb-2">
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
      <div className="mb-2">
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
      <div className="mb-2">
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
      <div className="mb-2">
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
      <button type="button" onClick={handleSubmit} className="bg-customYellow text-white p-3 rounded hover:bg-customDark shadow-md">
        Add New Harley
      </button>
    </form>
  );
}

MotorcycleForm.propTypes = {
  newMotor: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    deposit: PropTypes.number,
    finance_fee: PropTypes.number,
    option_to_purchase_fee: PropTypes.number,
    total_amount_payable: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default MotorcycleForm;
