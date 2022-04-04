import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <div className='home-container'>
                <div className='text-container'>
                    <div className='text'>
                        <h1 className='600 text-6xl font-sans font-bold'>Your New Choice</h1>
                        <h1><span className='text-blue-600 text-6xl font-sans font-bold'>Your Best Choice</span></h1>

                        <p className='text-xl'>Sunglasses are great for any occasion. I think it is perfect combination of fashion world.</p>
                        <button className='border p-3 bg-gray-300 rounded text-black '>Live Demo</button>
                    </div>

                </div>

                <div className='product-containeer'>
                    <img src="https://images.pexels.com/photos/2659705/pexels-photo-2659705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

            </div>
            <h2 className='text-2xl font-semibold font-sans m-12'>Customer Review(3)</h2>
            <div className='grid grid-cols-3 gap-8'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review}
                        
                    ></Review>)
                }
            </div>
            <Link to='/reviews'
                className='py-2 px-3 text-white mt-3 rounded bg-red-400'>
                See All Reviews
            </Link>
        </div>
    );
};

export default Home;