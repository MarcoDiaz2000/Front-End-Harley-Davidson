import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faUserGear } from '@fortawesome/free-solid-svg-icons';
import createUser from '../../redux/user/thunk';

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
    dispatch(createUser({ username: user }));
    navigate('/motors');
    toast.success('You are successfully logged in');
    localStorage.setItem('user', user);
    setUser('');
  };

  return (
    <div className="h-screen flex justify-center items-center sign-in-bg">
      <div className="bg-bodyBg rounded-xl flex items-center justify-center mt-72 sign-in-form">
        <form onSubmit={handleSubmit} className="form flex">
          <div className="flex p-3">
            <div className="text-white flex items-center px-2">
              <FontAwesomeIcon icon={faUserGear} />
            </div>
            <input
              className="form-control bg-bodyBg focus:bg-inputBg focus:outline-none text-white border-none w-40 px-2 mx-4 py-1 rounded-md placeholder-white md:w-96"
              type="text"
              name="name"
              placeholder="Username"
              onChange={handleChange}
              value={user}
            />
            <button className="text-white rounded-md bg-signInMobile px-3 mx-2" type="submit">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
