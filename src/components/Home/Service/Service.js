import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,price,img,description,subject,workHour}=service;
    return (
        <div className='single-service text-center shadow p-3 mb-5 bg-body'>
            <img src={img} alt="" />
            <h3>Subject: {subject}</h3>
            <h6>price: {price}</h6>
            <p><small>{description}</small></p>
            <h4>Work Hour: {workHour}</h4>
            <Link to='/checkout'><button className='btn btn-info'>Enroll Now</button></Link>
        </div>
    );
};

export default Service;