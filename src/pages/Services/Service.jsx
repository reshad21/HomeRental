import React from 'react';
import ServiceCard from '../../component/Services/ServiceCard';

const Service = () => {
    return (
        <div className='py-3 lg:px-6 px-4 lg:max-w-container lg:mx-auto'>
            <h1 className='lg:text-4xl text-2xl font-bold text-center mb-6'>Services</h1>
            <div className="">
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Service;