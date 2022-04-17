import React from 'react';
import Banar from '../Share/Banar/Banar';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <h1 className='text-center mt-3'>সোহাগ প্রাইভেট সেন্টার</h1>
            <h3 className='text-center'>Services List</h3>
            <Services></Services>
        </div>
    );
};

export default Home;