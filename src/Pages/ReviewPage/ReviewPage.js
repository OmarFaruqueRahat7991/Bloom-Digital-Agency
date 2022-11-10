import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewPage = () => {
    const review = useLoaderData();
    console.log(review);
    return (
        <div>
            
        </div>
    );
};

export default ReviewPage;