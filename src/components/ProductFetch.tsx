import React, { useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductList, searchProduct } from '../apiProducts';
import Products from './Products';
import egg from '../assets/egg-full.png';

const ProductFetch = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getProductList().then((result) => {
      setProduct(result), setisLoading(false);
    });
  }, []);

  // console.log('Loading:', isLoading);
  if (isLoading == true) {
    alert('Sabarr bro! Masih Loading Nih 😴');
  }

  const navigate = useNavigate();

  function detailProduct(id: number) {
    navigate('/products/' + id);
  }
  // console.log(product);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <div className='storegg-container'>
        <div className='flex justify-between mb-10'>
          <div className='flex gap-3'>
            <NavLink
              to={'/'}
              className='text-lg font-semibold hover:text-[#F2994A] duration-300'
            >
              Product List
            </NavLink>
            <h1 className='text-lg font-semibold'> - </h1>
            <NavLink
              to={'/MyProduct'}
              className='text-lg font-semibold hover:text-[#F2994A] duration-300'
            >
              MyProduct
            </NavLink>
          </div>
          <div>
            <button
              onClick={handleClick}
              className={`${isActive ? 'hidden' : 'block'}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height={48}
                width={48}
                viewBox='0 0 48 48'
              >
                <path d='M6 38V10h36v28Zm3-19.65h5.3V13H9Zm8.3 0H39V13H17.3Zm0 8.3H39v-5.3H17.3Zm0 8.35H39v-5.35H17.3ZM9 35h5.3v-5.35H9Zm0-8.35h5.3v-5.3H9Z' />
              </svg>
            </button>
            <button
              onClick={handleClick}
              className={`${isActive ? 'block' : 'hidden'}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height={48}
                width={48}
                viewBox='0 0 48 48'
              >
                <path d='M6 22.5V6h16.5v16.5ZM6 42V25.5h16.5V42Zm19.5-19.5V6H42v16.5Zm0 19.5V25.5H42V42ZM919.5h10.5V9H9Zm19.5 0H39V9H28.5Zm0 19.5H39V28.5H28.5ZM9 39h10.5V28.5H9Zm19.5-19.5Zm0 9Zm-9 0Zm0-9Z' />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isActive ? 'flex flex-col flex-wrap' : 'flex flex-row flex-wrap'
          } justify-center gap-4`}
        >
          {product?.map((product, i) => {
            return (
              <Products
                key={i}
                index={i}
                product={product}
                active={isActive}
                detailProduct={detailProduct}
              />
            );
          })}
        </div>
        <div className='fixed bottom-10 right-[5%]'>
          <NavLink to='/subapp'>
            <img src={egg} className='w-[75%] h-[70%]' />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductFetch;
