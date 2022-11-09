import React from 'react';
import { Link } from "react-router-dom";


const Banner = () => {
    return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src='https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/07/20094519/MVU-BSBUSAD-2020-Q1-Skyscraper-Digital-Marketing-Strategy-Key-Components-Tips-to-Get-Started-01.jpg' className="w-full" />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <h1 className='text-5xl'>Digital Marketing Services</h1>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/Digital-marketing-trends-2022.jpg?auto=format&q=60&fit=max&w=930' className="w-full" />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src='https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?w=740&t=st=1668032589~exp=1668033189~hmac=15f31312645cb29f17620aa611b29dfcd19b4648c806967693cb4f6f2dc59216' className="w-full" />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
    );
};

export default Banner;