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
    dispatch(createUser(user));
    navigate('/motors');
    toast.success('You are successfully logged in');
    setUser('');
  };

  return (
    <div className="container mt-5 ml-1 col-sm-4 mx-auto">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="text-center">LogIn</h3>
        <div className="mb-3">
          <input
            className="form-control"
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
        <button className="btn btn-success" type="submit">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
