import React from 'react';
import './Banner.css';



const Banner = () => {
    return (
      <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        
        
        <img  src='https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/07/20094519/MVU-BSBUSAD-2020-Q1-Skyscraper-Digital-Marketing-Strategy-Key-Components-Tips-to-Get-Started-01.jpg' className="w-full" />
        

        
        <div style={{marginTop: '50px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5">
          <h1 className='text-5xl font-bold text-white text-center bg-blue-200'>Digital Marketing Services</h1>
        </div>
        <div style={{marginTop: '50px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5">
        <p className='text-2xl text-center text-white bg-blue-300' style={{marginTop: '100px'}}>Grow Your Client Base With Data-Driven and Targeted Strategies</p>
        </div>
        <div style={{marginTop: '700px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5">
        <button className="btn btn-active btn-primary mr-5">Discover More</button>
        <button className="btn btn-success">See Reviews</button>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
      
        <img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/Digital-marketing-trends-2022.jpg?auto=format&q=60&fit=max&w=930' className="w-full" />
        
        <div style={{marginTop: '50px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 ">
          <h1 className='text-3xl font-semibold text-white text-center bg-blue-300'>Engage Your Target Customers at the Right Time on the Right Platform</h1>
        </div>
        <div style={{marginTop: '50px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 ">
        <p className='text-2xl text-white text-center bg-blue-400' style={{marginTop: '110px'}}>Digital marketing services provide businesses of all sizes  with an opportunity to market their brand <br /> 24/7 at a low cost.</p>
        </div>
        <div style={{marginTop: '700px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5">
        <button className="btn btn-active btn-primary mr-5">Discover More</button>
        <button className="btn btn-success">See Reviews</button>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
      
        <img src='https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?w=740&t=st=1668032589~exp=1668033189~hmac=15f31312645cb29f17620aa611b29dfcd19b4648c806967693cb4f6f2dc59216' className="w-full" />
        
        <div style={{marginTop: '60px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 ">
          <h1 className='text-3xl font-bold text-black text-center bg-white'>Build Brand Recognition as an Industry Leader and Increase Profitability

</h1>
        </div>
        <div style={{marginTop: '50px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 ">
        <p className='text-2xl text-white text-center bg-blue-400' style={{marginTop: '150px'}}>The online marketing industry is growing at an unprecedented rate. <br /> According to eMarketer, businesses in the U.S. spend more than $110 billion on <br /> Digital Advertising.</p>
        </div>
        <div style={{marginTop: '700px'}} className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5">
        <button className="btn btn-active btn-primary mr-5">Discover More</button>
        <button className="btn btn-success">See Reviews</button>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
    );
};

export default Banner;