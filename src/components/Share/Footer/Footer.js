import React from 'react';
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='bg-dark text-info p-2 footer-style'>
            <p className='text-center'>copyright © tutor.com {currentYear}</p>
        </div>
    );
};

export default Footer;