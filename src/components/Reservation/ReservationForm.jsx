import React, { useState } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
// import * as Yup from 'yup';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createReservation } from '../../redux/reservations/reservations';

const ReservationForm = () => {
  const users = useSelector((state) => state.users.users);
  const motorcycles = useSelector((state) => state.motorcycles.motorcycles);
  const { id } = useParams();
  const filteredMotorcycles = motorcycles.filter(
    (motorcycle) => motorcycle.id === parseInt(id, 10),
  );
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleItemChange = (selectedOption) => {
    setSelectedItem(selectedOption);
  };
  const dispatch = useDispatch();

  const initialValues = {
    user_id: users[0].id,
    item_id: filteredMotorcycles.length > 0 ? filteredMotorcycles[0].id : null,
    city: null,
    date: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const updatedValues = { ...values };
    updatedValues.city = selectedCity.value;
    if (selectedItem && selectedItem.value) {
      updatedValues.item_id = selectedItem.value;
    }
    dispatch(createReservation(values));
    toast.success('you successfully reserved a Motorbike');
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

  const items = motorcycles
    .filter((motor) => !motor.removed)
    .map((motor) => ({
      value: motor.id,
      label: motor.name,
    }));

  // const validationSchema = Yup.object().shape({
  //   user_id: Yup.number().required('user id is required'),
  //   date: Yup.date().required('Date is required'),
  //   // city: Yup.object().required('Location is required'),
  //   // item_id: Yup.object().required('Motorbike is required'),

  // });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Reservation
        {filteredMotorcycles.name}
      </h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name:</label>
            <Field
              type="number"
              id="user_id"
              name="user_id"
              placeholder="name"
              value={initialValues.user_id}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-600">Date:</label>
            <Field
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="date" component="div" className="text-red-600" />
          </div>
          {filteredMotorcycles.length > 0 ? (
            <div className="mb-4">
              <label htmlFor="motorcycle" className="block text-gray-600">Motorcycle:</label>
              <Field
                type="text"
                id="item_id"
                name="item_id"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={filteredMotorcycles[0].name}
              />
              <ErrorMessage name="item_id" component="div" className="text-red-600" />
            </div>
          ) : (
            <div className="mb-4">
              <label htmlFor="motorcycle" className="block text-gray-600">Motorcycle:</label>
              <Select
                id="item_id"
                name="item_id"
                options={items}
                value={selectedItem}
                onChange={handleItemChange}
                className="w-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="item_id" component="div" className="text-red-600" />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-600">Location:</label>
            <Select
              id="city"
              name="city"
              options={cities}
              className="w-full border border-gray-300 focus:outline-none focus:border-blue-500"
              value={selectedCity}
              onChange={handleCityChange}
            />
            <ErrorMessage name="city" component="div" className="text-red-600" />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:text-green-400 hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReservationForm;
