import React, { useState } from 'react';
import coin1 from '../assets/bronze-coin.png';
import coin2 from '../assets/gold-coin.png';
import coin3 from '../assets/silver-coin.png';
import egg from '../assets/egg-full.png';
import eggCrack from '../assets/egg-broken.png';

const CrackEgg = () => {
  const [isCrack, setIsCrack] = useState(false);

  const [isPrize, setIsPrize] = useState(0);

  const handleCrackEgg = (event) => {
    setIsCrack((current) => !current);
  };

  console.log(isCrack);
  return (
    <div>
      <div className='storegg-container justify-center items-center flex flex-col gap-20'>
        <div className='flex gap-4'>
          <div className='text-center flex flex-col items-center'>
            <img src={coin1} className='w-[70%]' />
            <h1 className='font-semibold text-[20px]'>3000 Coins</h1>
          </div>
          <div className='text-center flex flex-col items-center'>
            <img src={coin2} className='w-[70%]' />
            <h1 className='font-semibold text-[20px]'>2000 Coins</h1>
          </div>
          <div className='text-center flex flex-col items-center'>
            <img src={coin3} className='w-[70%]' />
            <h1 className='font-semibold text-[20px]'>3000 Coins</h1>
          </div>
        </div>
        <div className={`${isCrack ? 'block text-center' : 'hidden'}`}>
          <h1 className='font-bold text-3xl text-[#46760A]'>CONGRATULATION!</h1>
          <h1 className='font-bold text-3xl'>YOU GOT A COIN</h1>
        </div>
        <div className={`${isCrack ? 'hidden' : 'block text-center'}`}>
          <h1 className='font-bold text-3xl'>CRACK THE EGG!</h1>
          <h1 className='font-bold text-3xl'>YOU WILL GOT A COIN</h1>
        </div>
        <div className='relative'>
          <button
            onClick={handleCrackEgg}
            className={`${isCrack ? 'hidden' : 'block'}`}
          >
            <img src={egg} />
          </button>
          <button
            onClick={handleCrackEgg}
            className={`${isCrack ? 'block' : 'hidden'}`}
          >
            <div className='relative flex items-center justify-center'>
              <img src={eggCrack} />
              <img src={coin2} className='absolute w-[100px]' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrackEgg;
