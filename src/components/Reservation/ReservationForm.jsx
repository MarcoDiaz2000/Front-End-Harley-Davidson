import React, { useState } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
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
    dispatch(createReservation({ reservation: updatedValues }));
    toast.success('You have successfully reserved a Motorbike');
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
    <div className="flex flex-col items-center justify-center h-screen mx-auto p-4">
      <div className="p-4 rounded-xl">
        <div className="text-center mb-4">
          <h2 className="text-2xl text-white font-semibold mb-2">
            Book a Harley Davidson Test Ride
          </h2>
          <p className="text-gray-600 mx-auto max-w-2xl">
            There are 34 different versions of Harley Davidson.
            We have showrooms all over the globe which some include test
            riding facilities.
            If you wish to find out if a test ride is available in
            your area, then choose your date, bike, and location below.
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <Field
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 rounded-md border-gray-300 text-white focus:outline-none  focus:border-blue-500  bg-inputBg focus:bg-inputBg"
            />
            {/* Add a CSS class to target the date input's icon */}
            <style>
              {`
      #date::-webkit-calendar-picker-indicator {
        filter: invert(1); /* Invert the icon color to white */
      }
    `}
            </style>
            <ErrorMessage name="date" component="div" className="text-red-600" />
          </div>
          {filteredBikes.length > 0 ? (
            <div className="mb-4">
              <Field
                type="text"
                id="item_id"
                name="item_id"
                className="w-full px-4 py-2 rounded-md text-white focus:outline-none focus:border-blue-500 bg-inputBg focus:bg-inputBg"
                value={filteredBikes[0].name}
              />
              <ErrorMessage name="item_id" component="div" className="text-red-600" />
            </div>
          ) : (
            <div className="mb-4">
              <Select
                id="item_id"
                name="item_id"
                options={[
                  { value: '', label: 'Select a Bike' }, // Add this placeholder option
                  ...items,
                ]}
                value={selectedItem}
                onChange={handleItemChange}
                className="w-full border-gray-300 fixed-width-select focus:outline-none focus:border-blue-500 custom-select"
              />
              <ErrorMessage name="item_id" component="div" className="text-red-600" />
            </div>
          )}
          <div className="mb-4">
            <Select
              id="city"
              name="city"
              options={[
                { value: '', label: 'Location' }, // Add this placeholder option
                ...cities,
              ]}
              className="w-full rounded-md border-gray-300 text-black focus:outline-none  focus:border-blue-500  bg-inputBg focus:bg-inputBg"
              value={selectedCity}
              onChange={handleCityChange}
            />
            <ErrorMessage name="city" component="div" className="text-red-600" />
          </div>
          <div className="mb-4 text-center">
            {' '}
            {/* Add text-center class for center alignment */}
            <button
              type="submit"
              className="bg-customBg px-4 py-2 rounded-md text-white hover:bg-customDark focus:outline-none"
            >
              Book now
            </button>
            <div className="fixed top-0 right-0 m-4">
              <div className="relative">
                <FaSearch className="absolute top-0 right-0 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

ReservationForm.propTypes = {
  bikes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReservationForm;
