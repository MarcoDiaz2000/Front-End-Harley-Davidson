import { NavLink } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png';

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const id = 1;
  const menuItems = [
    { to: '/motors', label: 'MOTORS', icon: <TwoWheelerIcon /> },
    { to: '/myReservations', label: 'MY RESERVATIONS', icon: <EventAvailableIcon /> },
    { to: '/reserve', label: 'RESERVE', icon: <EventIcon /> },
    { to: `/add/${id}`, label: 'ADD MOTOR', icon: <AddBoxIcon /> },
    { to: `/delete/${id}`, label: 'DELETE', icon: <DeleteForeverIcon /> },

  ];
  return (
    <div className="flex flex-col gap-12 sticky top-0 h-screen border-r border-customBorder font-roboto bg-bodyBg">
      <div className=" w-full justify-center items-center mt-4 mb-8 hidden md:flex">
        <div className="w-40">
          <img src={logo} alt="Harley Davidson Logo" className="h-auto w-full" />
        </div>
      </div>
      <nav className="flex flex-col">
        <button
          className="hover:text-white hover:bg-customYellow pt-2 pb-2 font-medium md:hidden"
          onClick={toggleMenu}
          type="button"
        >
          <MenuIcon />
        </button>
        <div className="hidden md:flex flex-col">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="hover:text-white text-white hover:bg-customYellow pt-2 pb-2 pl-6 ml-4 font-medium"
            >
              <span className="mr-2 text-white ">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className={`flex flex-col ${isMenuOpen && 'md:hidden'} items-center justify-center`}>
          {isMenuOpen
            && menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="hover:text-customBg pt-2 pb-2 small font-medium"

              >
                {item.icon}
              </NavLink>
            ))}
        </div>
      </nav>
      <div className="flex justify-center text-white mt-auto pb-4 hidden md:flex">
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
