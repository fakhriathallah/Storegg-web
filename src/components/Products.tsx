import React from 'react';
import { useState } from 'react';
import { IProductEgg } from '../interfaces/IProudctEgg';

interface IProductEggProps {
  index: number;
  product: IProductEgg;
  detailProduct: any;
  active: boolean;
}

const Products = (props: IProductEggProps) => {
  //   console.log(props.title);
  console.log(props.active);
  return (
    <div>
      <div>
        <div
          className={`${
            props.active
              ? ''
              : 'w-[300px] h-[430px] border-[#D1D1D1] border-2 rounded-lg overflow-auto p-4 items-center cursor-pointer hover:scale-105 duration-300 transition-all'
          } overflow-auto py-2 px-4 items-center cursor-pointer border-[#D1D1D1] border-2 rounded-lg hover:scale-105 duration-300 transition-all`}
          onClick={() => props.detailProduct(props.product.id)}
          id='product'
        >
          <div
            className={`${
              props.active ? 'flex gap-10' : 'flex flex-col gap-5 relative'
            }`}
          >
            <div>
              <img
                src={props.product.image}
                className={`${
                  props.active
                    ? 'max-w-[200px] max-h-[200px]'
                    : 'w-[100px] h-[100px]'
                }`}
              />
            </div>
            <div
              className={`${
                props.active ? 'flex flex-col gap-5' : 'flex flex-col gap-3'
              }`}
            >
              <h1 className='font-medium text-[15px]'>{props.product.title}</h1>
              <p
                className={`${
                  props.active
                    ? ''
                    : 'text-[#575757] font-regular text-[12px] h-[110px] overflow-auto'
                }`}
              >
                {props.product.description}
              </p>
              <div
                className={`${props.active ? 'mt-14' : 'absolute top-[340px]'}`}
              >
                <div
                  className={`${
                    props.active
                      ? 'flex items-center gap-20'
                      : 'flex items-center justify-between gap-10'
                  }`}
                >
                  <p className='font-semibold text-xl'>
                    $ {props.product.price}
                  </p>
                  <button
                    className='bg-[#46760A] px-3 py-4 text-white rounded-lg hover:scale-105 duration-300 transition-all'
                    onClick={() => props.detailProduct(props.product.id)}
                  >
                    Check Detail!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
