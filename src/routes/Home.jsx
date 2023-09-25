import React from 'react';
import MotorList from '../components/motors/MotorList';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center align-center">
      <MotorList />
    </div>
  );
}
