import React, { useState, useContext, useReducer } from 'react';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import eggIcon from '../assets/egg-full.png';
import coinIcon from '../assets/gold-coin.png';
import { IBalance } from '../interfaces/IProudctEgg';
import axios from 'axios';
import { searchProduct } from '../apiProducts';
import { reducer, initialState } from '../reducer';

const Navbar = () => {
  const search = async (q) => {
    // console.log({ q });
    const query = await searchProduct(q);
    console.log({ query: query });
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className='storegg-container flex justify-between items-center py-10'>
        <NavLink to='/'>
          <div className='flex items-center gap-2'>
            <img src={eggIcon} className='w-[70px]' />
            <h1 className='text-4xl font-bold'>Storegg</h1>
          </div>
        </NavLink>
        <div>
          <input
            type='text'
            placeholder='Search Box'
            className='border-[#D1D1D1] border-2 rounded-lg outline-2 outline-gray-400 py-2 px-6'
            onChange={({ target }) => search(target.value)}
          />
        </div>
        <div className='flex items-center justify-center gap-3'>
          {/* <button onClick={search()}>Press Me</button> */}
          <div className='bg-[#6A983C] py-1 px-4 rounded-lg flex items-center'>
            <img src={coinIcon} className='w-[50px]' />
            <p className='text-lg text-white'>3050{state.price}</p>
          </div>
          <div>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 21.9999L3.79 19.1199C6.4 9.6199 17.6 9.6199 20.21 19.1199L21 21.9999'
                stroke='#151515'
                stroke-width='2.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M12 11.98C14.7614 11.98 17 9.74139 17 6.97997C17 4.21854 14.7614 1.97997 12 1.97997C9.23858 1.97997 7 4.21854 7 6.97997C7 9.74139 9.23858 11.98 12 11.98Z'
                stroke='#151515'
                stroke-width='2.5'
                stroke-linecap='round'
                stroke-linejoin='bevel'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
