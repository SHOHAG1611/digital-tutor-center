import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center'>Let's Talk Something About Me!</h1>
            <h6 className='my-info text-center mx-auto bg-success'>
                My Name is Md: Shohag. I live in Bangladesh. Now a days i try to become a junior Web Devoloper. Before 2 months i don't know anythinks about web daboloper how to typing code. So how can i write it?
                my friend told me about  Programming-Hero so i join heare and they teach me very well.
                Now a days,
                My Goal is to become a wevdeboloper and join a good office where i work very heard for my next goals.if it true!
                My Next Year Goal is To Buy my favarite bike called <span className='my-moto'>"Bajaj Discover 125 Disc"</span>
            </h6>
        </div>
    );
};

export default About;