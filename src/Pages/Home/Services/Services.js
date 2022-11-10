import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='text-center text-black'>
            <div className='bg-slate-100 mt-20 mb-20'>
                    <h1 className='text-5xl font-bold '>Bloom's Digital Marketing Services</h1>
                    <p className='text-2xl font-semibold'>Build Brand Recognition as an Industry Leader and Increase Profitability</p>
            </div>
            <div>
                <h2>Total Services Are : {services?.length} </h2>
            </div>
        </div>
    );
};

export default Services;