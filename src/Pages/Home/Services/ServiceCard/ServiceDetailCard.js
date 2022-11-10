import React  from 'react';
import {  Link, useLoaderData } from 'react-router-dom';

const ServiceDetailCard = () => {
    const {_id,img,description,price,title} = useLoaderData();
    

    return (
        <div style={{marginTop:'100px',marginBottom:'100px'}} className="mx-auto card w-96 shadow-xl bg-blue-400 text-white">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
             <div>
              <p className="text-2xl">Price:${price}</p>
             </div>
          <div className="card-actions">
            <button className="btn btn-primary"><Link to={`/checkout/${_id}`}>Buy This Course</Link></button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary"><Link to={`/checkout/${_id}`}>Give Review</Link></button>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetailCard;