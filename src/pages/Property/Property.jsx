import React from 'react';
import PropertyCard from '../../component/PopularProperty/PropertyCard';

const Property = () => {
    return (
        <div className='max-w-container mx-auto lg:px-20 px-5 mb-24 mt-12'>
            <div className="text-center mb-7">
                <h1 className="lg:text-5xl text-3xl font-bold text-[#343F52] mb-2">
                    Popular Localities In Noida.
                </h1>
            </div>
            <PropertyCard></PropertyCard>
        </div>
    );
};

export default Property;