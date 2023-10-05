import React from 'react';

const Sidebar = () => (
  <div className="flex flex-col gap-12 sticky top-0 h-screen border-r border-customBorder font-roboto bg-bodyBg">
    <div className=" w-full justify-center items-center mt-4 mb-8 hidden md:flex">
      <div className="w-40">
        <img src="src/img" alt="Harley Davidson Logo" className="h-auto w-full" />
      </div>
    </div>
    <nav className="flex flex-col">
      <button
        className="hover:text-white hover:bg-customYellow pt-2 pb-2 font-medium md:hidden"
        type="button"
      >
        menu
      </button>
      <div className="hidden md:flex flex-col">

        <a
          href="/motors"
          className="hover:text-white text-white hover:bg-customYellow pt-2 pb-2 pl-6 ml-4 font-medium"
        >
          <span className="mr-2 text-white ">icon</span>
          MOTORS
        </a>

        <a
          href="/reservations"
          className="hover:text-white text-white hover:bg-customYellow pt-2 pb-2 pl-6 ml-4 font-medium"
        >
          <span className="mr-2 text-white ">icon</span>
          My Reservatios
        </a>

        <a
          href="/reserve"
          className="hover:text-white text-white hover:bg-customYellow pt-2 pb-2 pl-6 ml-4 font-medium"
        >
          <span className="mr-2 text-white ">icon</span>
          Reserve
        </a>

        <a
          href="/add"
          className="hover:text-white text-white hover:bg-customYellow pt-2 pb-2 pl-6 ml-4 font-medium"
        >
          <span className="mr-2 text-white ">icon</span>
          ADD MOTOR
        </a>

        <a
          href="/delete"
          className="hover:text-white text-white hover:bg-customYellow pt-2 pb-2 pl-6 ml-4 font-medium"
        >
          <span className="mr-2 text-white ">icon</span>
          DELETE
        </a>
      </div>
    </nav>
    <div className="flex justify-center text-white mt-auto pb-4 hidden md:flex">
      <span>icon</span>
      <span>icon</span>
      <span>icon</span>
    </div>
  </div>
);
export default Sidebar;
