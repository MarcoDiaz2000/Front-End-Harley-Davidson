import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { fetchBikes } from '../redux/bikes/thunk';
import Motor from './Motor';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);
  const motors = useSelector((state) => state.bikes.bikes);

  return (
    <div className="text-center w-75">
      <h2 className="text-center m-4">Harly davidson LATEST MODELS</h2>
      <p className="text-center header-text2 m-2">Please select a Harly davidson models</p>
      <div className="show-motor">
        <Carousel
          autoPlay
          className="w-100"
          keyBoardControl
        >
          { motors.length > 0
            ? motors.map((motor) => (
              <Motor key={motor.id} motor={motor} />
            )) : (
              <div className="dflex flex-column justify-content-center border mx-auto info">
                <FontAwesomeIcon icon={faCircleInfo} className="text-info h3" />
                <h2 className="w-100 text-center">
                  There is no motorcycle
                  <FontAwesomeIcon icon={faMotorcycle} />
                  {' '}
                  avilable
                </h2>
              </div>
            )}
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
