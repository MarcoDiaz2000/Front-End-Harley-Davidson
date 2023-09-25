import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

const ReservationForm = () => {
  const initialValues = {
    name: '',
    date: '',
    motorcycle: '',
    location: null, // Initialize location as null
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

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    date: Yup.date().required('Date is required'),
    motorcycle: Yup.string().required('Motorcycle is required'),
    location: Yup.object().nullable().required('Location is required'), // Update location validation
  });

  const handleSubmit = async (values, { resetForm }) => {
    // Handle form submission here, e.g., send data to an API or perform other actions
    console.log('Form data:', values);
    // Clear form fields
    resetForm();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Reservation</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
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
            <div className="mb-4">
              <label htmlFor="motorcycle" className="block text-gray-600">Motorcycle:</label>
              <Field
                type="text"
                id="motorcycle"
                name="motorcycle"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="motorcycle" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-600">Location:</label>
              <Select
                id="location"
                name="location"
                options={cities}
                value={values.location}
                onChange={(selectedOption) => setFieldValue('location', selectedOption)}
                className="w-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="location" component="div" className="text-red-600" />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:text-green-400 hover:bg-green-600 focus:outline-none"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;
