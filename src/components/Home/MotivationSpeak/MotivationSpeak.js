import React from 'react';
import aboutCenter from '../../img/welcome/aboutCenter.jpg'
import './MotivationSpeak.css'

const MotivationSpeak = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center'>Some Motivation Speak For Student's</h2>
            <div className='aboutCenter'>
                <img src={aboutCenter} alt="" />
            </div>
            <div className='text-center'>
                <p>1.  “A little progress each day adds up to big results.” _ Satya Nani.</p>
                <p>2.  “It's not about having time. It's about making time.” _ unknown</p>
                <p>3. “Losers quit when they're tired. Winners quit when they've won.”</p>
                <p>4. “Skill is only developed by hours and hours of work.” _Usain Bolt</p>
                <p className='motivate mb-5'>5.  “You will never always be motivated. You have to learn to be disciplined.”_ unknown</p>
            </div>
        </div>
    );
};

export default MotivationSpeak;