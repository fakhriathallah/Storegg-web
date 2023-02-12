import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductDetail } from '../apiProducts';
import Navbar from './Navbar';
import { IProductEgg } from '../interfaces/IProudctEgg';
import { reducer, initialState } from '../reducer';

interface IProductEggProps {
  index: number;
  product: IProductEgg;
  detailProduct: any;
  active: boolean;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [detailProduct, setdetailProduct] = useState<{
    title: string;
    price: number;
    description: string;
    image: string;
  }>([]);

  console.log(id);
  // console.log(detailProduct.price - 10);

  const getProductDetail = async (id) => {
    const detail = await axios.get('https://fakestoreapi.com/products/' + id);
    return detail.data;
  };

  useEffect(() => {
    getProductDetail(id).then((result) => {
      setdetailProduct(result);
    });
  }, []);

  // Reducer Coin
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div>
      <div className='storegg-container flex justify-between items-center'>
        <div>
          <img
            src={detailProduct.image}
            className='max-w-[700px] max-h-[500px]'
          />
        </div>
        <div>
          <h1 className='text-[32px] font-bold mb-8'>{detailProduct.title}</h1>
          <h1 className='text-[17px] font-regular w-[50%] mb-20'>
            {detailProduct.description}
          </h1>
          <div className='flex gap-5 items-center'>
            <h1 className='font-semibold text-2xl'>
              $ {detailProduct.price} USD
            </h1>
            <div className='flex gap-4'>
              <button
                onClick={() => addProduct(detailProduct.price)}
                className='py-3 px-4 text-white bg-[#46760A] rounded-lg hover:scale-105 duration-300 transition-all'
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
