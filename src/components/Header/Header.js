import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
// import './Header.css';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white py-4 px-4  flex justify-center md:justify-center text-xl font-sans font-bold gap-4'>
            <CustomLink to="/" >HOME</CustomLink>
            <CustomLink to="reviews" >REVIEWS</CustomLink>
            <CustomLink to="dashboard" >DASHBOARD</CustomLink>
            <CustomLink to="blog">BLOG</CustomLink>
            <CustomLink to="about">ABOUT</CustomLink>
        </div>
    );
};

export default Header;