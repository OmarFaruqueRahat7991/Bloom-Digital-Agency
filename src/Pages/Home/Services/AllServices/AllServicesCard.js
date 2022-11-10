import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServicesCard = ({ allservice }) => {

    const {_id,img,description,price,title} = allservice;

    return (
        <div style={{marginTop:'100px'}} className="mx-auto card w-96 bg-base-100 shadow-xl bg-cyan-200">
    <figure className="px-10 pt-10">
    <PhotoProvider>
      <PhotoView>
      <img src={img} alt="" className="rounded-xl" />
          </PhotoView>
      </PhotoProvider>
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
        <button className="btn btn-primary"><Link to={`/review/${_id}`}>Give Review</Link></button>
      </div>
    </div>
  </div>
    );
};

export default AllServicesCard;