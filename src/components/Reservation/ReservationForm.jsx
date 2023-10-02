import React, { useState } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { createReservation } from '../../redux/reservations/thunk';
import { usersSelector } from '../../redux/store';

const ReservationForm = ({ bikes }) => {
  const motorbikes = bikes;
  const dispatch = useDispatch();
  const { user } = useSelector(usersSelector);
  const { id } = useParams();
  const filteredBikes = motorbikes.filter(
    (bike) => bike.id === parseInt(id, 10),
  );
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleItemChange = (selectedOption) => {
    setSelectedItem(selectedOption);
  };

  const initialValues = {
    user_id: user.id,
    item_id: filteredBikes.length > 0 ? filteredBikes[0].id : null,
    city: null,
    date: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (!selectedCity || (filteredBikes.length === 0 && !selectedItem)) {
      // Handle the case when any value is empty
      toast.error('Please fill in all the required fields');
      setSubmitting(false);
      return;
    }
    // Proceed with creating the reservation
    const updatedValues = {
      ...values,
      city: selectedCity.value,
      item_id: selectedItem ? selectedItem.value : values.item_id,
    };
    console.log(updatedValues);
    dispatch(createReservation({ reservation: updatedValues }));
    toast.success('You have successfully reserved a Motorbike');
    console.log(values);
    setSubmitting(false);
  };

  const cities = [
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    { value: 'Miami', label: 'Miami' },
    { value: 'london', label: 'london' },
    { value: 'Tokyo', label: 'Tokyo' },
    { value: 'Sydney', label: 'Sydney' },
  ];

  const items = motorbikes
    .filter((bike) => !bike.removed)
    .map((bike) => ({
      value: bike.id,
      label: bike.name,
    }));

  const validationSchema = Yup.object().shape({
    user_id: Yup.number().required('user id is required'),
    date: Yup.date().required('Date is required'),
  });

  return (
    <div className="flex flex-col mx-auto  p-4">
      <h2 className="text-2xl text-white font-semibold mb-4">
        Reservation
        {filteredBikes.name}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4 hidden">
            <label htmlFor="name" className="block text-gray-600">Name:</label>
            <Field
              type="number"
              id="user_id"
              name="user_id"
              placeholder="name"
              value={initialValues.user_id}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none  focus:border-blue-500  bg-inputBg focus:bg-inputBg"
            />
            <ErrorMessage name="name" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-600">Date:</label>
            <Field
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 rounded-md text-white bg-inputBg focus:bg-inputBg border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="date" component="div" className="text-red-600" />
          </div>
          {filteredBikes.length > 0 ? (
            <div className="mb-4">
              <label htmlFor="motorcycle" className="block text-gray-600">Motorcycle:</label>
              <Field
                type="text"
                id="item_id"
                name="item_id"
                className="w-full px-4 py-2 rounded-md text-white focus:outline-none focus:border-blue-500  bg-inputBg focus:bg-inputBg"
                value={filteredBikes[0].name}
              />
              <ErrorMessage name="item_id" component="div" className="text-red-600" />
            </div>
          ) : (
            <div className="mb-4">
              <label htmlFor="bike" className="block text-gray-600">Bike:</label>
              <Select
                id="item_id"
                name="item_id"
                options={items}
                value={selectedItem}
                onChange={handleItemChange}
                className="w-full  border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="item_id" component="div" className="text-red-600" />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-600">Location:</label>
            <Select
              id="city"
              name="city"
              options={cities}
              className="w-full border-gray-300 focus:outline-none bg-inputBg focus:bg-inputBg focus:border-customBg"
              value={selectedCity}
              onChange={handleCityChange}
            />
            <ErrorMessage name="city" component="div" className="text-red-600" />
          </div>
          <button
            type="submit"
            className="bg-customBg px-4 py-2 rounded-md text-white hover:bg-customDark focus:outline-none"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ReservationForm.propTypes = {
  bikes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReservationForm;
