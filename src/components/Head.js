
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../utils/appSlice";
import bellIcon from '../assets/bell.svg';
import createIcon from '../assets/create.svg';


const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 shadow-lg fixed top-0 w-full bg-white z-50'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' alt='menu' />
        <img
          className='h-8 mx-3'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png' alt='logo' />
      </div>
      <div className='col-span-10 px-40'>
        <input
          className='w-4/5 border border-gray-400 p-2 rounded-s-full'
          type="text" placeholder='Search' />
        <button
          className='border border-gray-400 p-2 rounded-e-full bg-red-700 text-white font-bold'>
          Search
        </button>
      </div>
      <div className='col-span-1 flex gap-5'>
        <img
          className='h-8'
          src={bellIcon} alt='bell icon' />
        <img
          className='h-8'
          src={createIcon} alt='create icon' />
        <img
          className='h-8'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s' alt='user icon' />
      </div>
    </div>
  );
};

export default Head;
