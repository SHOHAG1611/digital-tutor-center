import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='bg-dark text-info p-2 fixed-bottom'>
            <p className='text-center'>copyright © {currentYear}saHero.com</p>
        </div>
    );
};

export default Footer;