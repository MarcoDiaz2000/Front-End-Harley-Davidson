import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img from '../../images/motor2.png';
import MotorItem from './MotorItem';

export default function MotorList() {
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

  const items = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of Item 1',
      photo: img,
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description of Item 2',
      photo: img,
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description of Item 3',
      photo: img,
    },
    {
      id: 4,
      name: 'Item 4',
      description: 'Description of Item 3',
      photo: img,
    },
    {
      id: 5,
      name: 'Item 5',
      description: 'Description of Item 3',
      photo: img,
    },
  ];
  return (
    <div className=" flex flex-col">
      <div className="flex flex-col justify-center align-center items-center pb-8 font-roboto">
        <h1 className="font-bold text-2xl">LATEST MODEL</h1>
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
      >
        {items.map((item) => (
          <MotorItem key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
}
