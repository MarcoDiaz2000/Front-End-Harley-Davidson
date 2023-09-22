import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(signup({ username }));

      navigate('/home');
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="container mt-5 ml-1 col-sm-4">
      <form onSubmit={handleSubmit} className="form m-2">
        <h3 className="text-center">SignUp</h3>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="User name"
            onChange={handleOnChange}
            value={username}
          />
        </div>
        {error && <div className="text-danger">{error}</div>}
        {' '}
        {/* Display the error message */}
        <button className="btn btn-success" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
