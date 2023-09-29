import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import MotorItem from './MotorItem';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';

export default function MotorList() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    dots, infinite, speed, slidesToShow, slidesToScroll, initialSlide, responsive,
  } = settings;

  return (
    <div className=" flex flex-col bg-bodyBg">
      <div className="flex flex-col justify-center align-center items-center pb-8 font-roboto">
        <h1 className="font-bold text-white text-2xl">LATEST MODEL</h1>
        <h1 className="text-sm text-gray-500">please select a model</h1>
      </div>
      <Slider
        dots={dots}
        infinite={infinite}
        speed={speed}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        initialSlide={initialSlide}
        responsive={responsive}
        className="bodyBg"
      >
        {motorcycles.filter((motor) => !motor.removed).map((motor) => (
          <MotorItem key={motor.id} motor={motor} />
        ))}
      </Slider>
    </div>
  );
}
