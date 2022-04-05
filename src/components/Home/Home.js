import React from 'react';
// import './Home.css';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <div className='home-container'>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-4 py-4 '>
                    <div className='mx-auto text-left p-16'>
                        <h1 className='600 text-5xl font-sans font-bold'>Your New Choice</h1>
                        <h1><span className='text-blue-600 text-5xl font-sans font-bold py-4'>Your Best Choice</span></h1>

                        <p className='text-xl py-4'>Our Hair dryer & straightener benefit from a clever modern design & compact design for easy handling. They are light and easy to handle yet small enough to store virtually anywhere.</p>
                        <button className='border p-3  bg-gray-300 rounded text-black '>Live Demo</button>
                    </div>

                

                <div className='mx-auto'>
                        <img className='text-gray' src="https://waltonbd.com/image/cache/catalog/Home%20Appliances/Hair%20Dryer/WHD-Rapunzel_08/golden-364x364.jpg" alt="" />
                </div>
                </div>

            </div>
            <h2 className='text-2xl font-semibold font-sans m-12'>Customer Review(3)</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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