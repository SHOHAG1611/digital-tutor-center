import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='bg-dark text-info p-2'>
            <p className='text-center'>copyright © saHero.com {currentYear}</p>
        </div>
    );
};

export default Footer;