import React from 'react';
import './Review.css';

const Review = ({ seeAllReviews, review }) => {
    
    const{name,comment, picture, rating}=review;
    return (
        <div className='shadow rounded-2xl bg-white mb-12 mx-auto px-8 py-4'>
            <img className='w-20 h-20 mx-auto' src={picture}></img>
                <h3 className='text-xl font-sans font-medium'>Name:{name}</h3>
                <h4 className='font-medium'>Review: {comment}</h4>
                <p>Rating: {rating}</p>
            </div>
        
    );
};

export default Review;