import React from 'react';
import { BiArea } from 'react-icons/bi';
import { FaBackward } from 'react-icons/fa6';
import { TbCategory, TbCoinTaka, TbCurrentLocation } from 'react-icons/tb';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = useLoaderData();

    const detailData = data.find(singleData => singleData.id === idInt);

    const { estate_title, segment_name, description, area, location, price, status, facilities } = detailData;

    return (
        <div>
            <div className='space-y-6 p-6 mb-8'>
                <img className='w-full' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                <div className='text-center'>
                    <h3 className='text-3xl '>{estate_title}</h3>
                    <p>{description}</p>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row justify-around'>
                    <p className='flex items-center gap-2'><TbCoinTaka /> <span>{price}</span> </p>
                    <p className='flex items-center gap-2'><TbCategory /> <span>{segment_name}</span> </p>
                </div>
                <div className='flex flex-col gap-4 lg:flex-row justify-around'>
                    <p className='flex items-center gap-2'><TbCurrentLocation /> <span>{location}</span></p>
                    <p className='flex items-center gap-2'><BiArea /> <span>{area}</span></p>
                </div>
                <Link to='/'><button className='btn text-white btn-primary'> <FaBackward></FaBackward> Back to Home</button></Link>
            </div>
            <div>
                <h2 className="text-3xl text-center">Spacial Facilities.</h2>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;