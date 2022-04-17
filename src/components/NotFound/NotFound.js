import React from 'react';
import page404 from '../img/notFound/notFound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found container mx-auto'>
            <img src={page404} alt="" />
        </div>
    );
};

export default NotFound;