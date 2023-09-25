import React from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  return (
    <div className="w-full h-full flex justify-center gap-2 bg-red-500 px-4 py-4">
      <div className="flex flex-grow bg-green-500">
        {id}
        img
      </div>
      <div className="flex flex-col w-80 px-4 py-4 bg-green-500">
        <div className="header">
          name
          deposit
        </div>
        <ul className="list">
          <li>lists</li>
          <li>lists</li>
          <li>lists</li>
          <li>lists</li>
        </ul>
        <div>
          <span>general info</span>
        </div>
        <div>
          <button type="button">Reserve</button>
        </div>
      </div>
    </div>
  );
}
