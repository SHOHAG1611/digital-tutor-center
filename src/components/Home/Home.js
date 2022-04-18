import React from 'react';
import Banar from '../Share/Banar/Banar';
import MotivationSpeak from './MotivationSpeak/MotivationSpeak';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <h1 className='text-center mt-3'>DIGITAL TUTOR CENTER</h1>
            <h3 className='text-center'>Services List</h3>
            <Services></Services>
            <MotivationSpeak></MotivationSpeak>
        </div>
    );
};

export default Home;