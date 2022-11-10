import React from "react";

const ServiceCard = ({ service }) => {
    const {img,description,price,title} = service;
  return (
    <div className="bg-slate-100 mt-20 mr-20 ml-20 ">
      <div className="card lg:card-side bg-base-100 shadow-xl bg-slate-100">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body bg-slate-300 rounded-xl">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end bg-slate-100">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
