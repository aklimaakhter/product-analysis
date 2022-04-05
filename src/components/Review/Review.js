import React from 'react';
import './Review.css';

const Review = ({ seeAllReviews, review }) => {

    const { name, comment, picture, rating } = review;
    return (
        <div className=' flex shadow rounded-2xl bg-white mb-12 text-left px-8 py-4'>
            <img className='w-20 h-20 mx-auto rounded-full' src={picture} alt=""></img>
            <div className='px-4'>
                <h3 className='text-xl font-sans font-medium'>{name}</h3>
                <h4 className='font-medium'>Review: {comment}</h4>
                <p>rating: {rating}</p>
            </div>
        </div>

    );
};

export default Review;