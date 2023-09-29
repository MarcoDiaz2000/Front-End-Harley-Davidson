import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/users/users';

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('The name field is required.');
      return;
    }
    dispatch(createUser(user));
    navigate('/motors');
    toast.success('You are successfully logged in');
    setUser('');
  };

  return (
    <div className="w-full  h-screen flex justify-center items-center">
      <div className="w-80 bg-bodyBg rounded-xl pt-14 pb-14 px-6">
        <form onSubmit={handleSubmit} className="form">
          <h3 className="text-center font-bold text-white text-2xl pb-6">LogIn</h3>
          <div className="mb-3">
            <input
              className="form-control bg-inputBg focus:bg-inputBg focus:outline-none text-white border-none"
              type="text"
              name="name"
              placeholder="Username"
              onChange={handleChange}
              value={user}
            />
          </div>
          {/* {error && <div className="text-danger">{error}</div>} */}
          {/* {' '} */}
          {/* Display the error message */}
          <button className="bg-customBg text-white rounded-md hover:bg-customDark pt-1 pb-2" type="submit">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
