import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='text-center text-black bg-slate-100 pb-20'>
            <div className=' mt-20 mb-20'>
                    <h1 className='text-5xl font-bold '>Bloom's Digital Marketing Services</h1>
                    <p className='text-2xl font-semibold'>Build Brand Recognition as an Industry Leader and Increase Profitability</p>
            </div>
            <div className='bg-slate-100 mb-20'>
                
                {
                    services?.map(service => <ServiceCard
                    key={service._id}     
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <button className="btn btn-primary"><Link to='/services'>See All Services</Link></button>
        </div>
    );
};

export default Services;