import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id,img,description,price,title} = service;
  return (
    <div style={{marginTop:'100px'}} className="mx-auto card w-96 bg-base-100 shadow-xl bg-cyan-200">
    <figure className="px-10 pt-10">
      <img src={img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{ 
            description.length > 50 ? 
            <p>{description.slice(0,100) + '...'} <Link className="text-cyan-300 font-bold" to={`/services/${_id}`}>Read More</Link> </p>
            :
            {description}

            
         }</p>
         <div>
          <p className="text-2xl">Price:${price}</p>
         </div>
      <div className="card-actions">
        <button className="btn btn-primary"><Link to={`/services/${_id}`}>Learn More</Link></button>
      </div>
    </div>
  </div>
  );
};

export default ServiceCard;
