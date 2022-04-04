import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className='home-container'>
            <div className='text-container'>
                <div className='text'>
                    <h1 className='600 text-6xl font-sans font-bold'>Your New Choice</h1>
                    <h1><span className='text-amber-600 text-6xl font-sans font-bold'>Your Best Choice</span></h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis nisi, officia soluta sunt numquam minima quam cupiditate deleniti saepe!</p>
                    <button className='border'>Live Demo</button>
                </div>
                
            </div>
            
            <div className='product-containeer'>
                <img src="https://images.pexels.com/photos/2659705/pexels-photo-2659705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            
        </div>
    );
};

export default Home;