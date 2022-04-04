import React from 'react';
import './Review.css';

const Review = ({ seeAllReviews, review }) => {
    
    const{name,comment,rating}=review;
    return (
        <div className='shadow rounded-2xl bg-white mb-12 text-left p-12 '>
            
                <h3 className='text-xl font-sans font-medium'>Name:{name}</h3>
                <h4>Review: {comment}</h4>
                <p>Rating: {rating}</p>
            </div>
        
    );
};

export default Review;