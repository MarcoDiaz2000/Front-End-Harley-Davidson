import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

const ReservationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    time: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    motorcycle: Yup.string().required('Motorcycle is required'),
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
        {() => (
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
              <label htmlFor="time" className="block text-gray-600">Time:</label>
              <Field
                type="time"
                id="time"
                name="time"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="time" component="div" className="text-red-600" />
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
