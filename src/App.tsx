import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ProductFetch from './components/ProductFetch';
import { getProductList } from './apiProducts';
import CrackEgg from './components/CrackEgg';
import storeEggLogo from './assets/logo-storegg.png';
import MyProduct from './components/MyProduct';

const App = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getProductList().then((result) => {
      setProduct(result), setisLoading(false);
    });
  }, []);
  return (
    <div>
      <div
        className={`${
          isLoading
            ? 'h-[100vh] w=[100%] bg-[#723AE4] flex flex-col items-center justify-center'
            : 'hidden'
        }`}
      >
        <img src={storeEggLogo} className='w-[450px] h-[450px]' />
        <h1 className='text-white font-medium text-2xl'>
          Bentar yaa baru ngambil produk yang kamu mau...
        </h1>
      </div>
      <div className={`${isLoading ? 'hidden' : 'block'}`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductFetch />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/subapp' element={<CrackEgg />} />
          <Route path='/MyProduct' element={<MyProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
