import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

// Components
import { SideBar, UserProfile } from '../components';
import Pins from './Pins';

// Media
import Logo from '../assets/brand-.png';

// Sanity Client
import { client } from '../client';

const Home = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen trasaction-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <SideBar />
      </div>
      <div className='flex md:hidden flex-row'>
        <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(false)} />
        <Link to="/">
          <img src={Logo} alt='logo' className='w-28' />
        </Link>
      </div>
    </div>
  );
};

export default Home;
