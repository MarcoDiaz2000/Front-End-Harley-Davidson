import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import logo from './logo.png';
import { logout } from '../../redux/user/userSlice';

const Sidebar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Delete user data from localStorage
    dispatch(logout());
  };
  const [isMenuOpen] = useState(true);
  const id = 1;
  const menuItems = [
    { to: '/motors', label: 'MOTORS', icon: <TwoWheelerIcon /> },
    { to: '/reserve', label: 'RESERVE', icon: <EventIcon /> },
    { to: '/myReservations', label: 'MY RESERVATIONS', icon: <EventAvailableIcon /> },
    { to: `/add/${id}`, label: 'ADD MOTOR', icon: <AddBoxIcon /> },
    { to: `/delete/${id}`, label: 'DELETE', icon: <DeleteForeverIcon /> },

  ];
  return (
    <div className="flex flex-col gap-12 sticky bg-customBg  top-0 h-80 md:h-screen rounded-3xl md:rounded-none border-customBorder border-r-0 md:border-r font-roboto md:bg-bodyBg">
      <div className=" w-full justify-center items-center mt-4 mb-8 hidden md:flex">
        <div className="w-40">
          <img src={logo} alt="Harley Davidson Logo" className="h-auto w-full" />
        </div>
      </div>
      <nav className="flex flex-col">
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
        <div className={`flex flex-col ${isMenuOpen && 'md:hidden'} items-center p-2 justify-center`}>
          {isMenuOpen
            && menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="hover:text-customBg pt-2 pb-2 text-black small font-medium"
                onClick={toggleSidebar}
              >
                {item.icon}
              </NavLink>
            ))}
        </div>
      </nav>
      <div className="flex flex-col gap-3 md:mt-auto">
        <button type="button" className="flex justify-center md:text-customBg hover:text-customBg" onClick={handleLogout}>
          <LogoutIcon />
          {' '}
          <span className="hidden md:flex">Logout</span>
        </button>
        <div className="justify-center gap-4 text-white pb-4 hidden md:flex">
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
