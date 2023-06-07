import React from 'react';
import referalImage from '../../assets/images/referalImage.png';
const ReferEarn = () => {
    return (
        <div className='lg:px-20 px-5 py-10 lg:py-20 mb-24 mt-12 bg-lime-400 flex flex-col lg:flex-row md:flex-row justify-center items-center gap-7'>
            <div className='lg:px-20 md:px-30 px-0 flex flex-col lg:gap-6 md:gap-6 gap-3'>
                <h1 className='font-bold lg:text-6xl md:text-6xl text-4xl'>Refer and Earn</h1>
                <p className='text-xl'>Save big on rent or make some extra income by referring your friends & family</p>
                <button className='btn bg-neutral-100 p-3 border-2 border-slate-700 w-[100%] md:w-[70%] lg:w-[30%]'>Know More</button>
            </div>
            <div>
                <img src={referalImage} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default ReferEarn;