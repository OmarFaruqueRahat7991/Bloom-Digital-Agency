import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {

    const [allServices,setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://my-eleventh-assignment-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])
    return (
        <div className='pt-20 pb-20 bg-slate-100'>
            {
                allServices?.map(allservice => <AllServicesCard
                key={allservice._id}
                allservice={allservice}
                ></AllServicesCard> )
            }
        </div>
    );
};

export default AllServices;