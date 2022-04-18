import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container full-blogs text-center'>
            <div className='question-ans shadow p-3 mb-5 bg-white '>
                <h4>1.Question: difference between authorization and authentication</h4>
                <h3>Ans: 
                    While authentication and authorization are often used interchangeably, they are separate processes used to protect an organization from cyber-attacks. As data breaches continue to escalate in both frequency and scope, authentication and authorization are the first line of defense to prevent confidential data from falling into the wrong hands. As a result, strong authentication and authorization methods should be a critical part of every organizations overall security strategy.
                </h3>
            </div>
            <div className='question-ans shadow p-3 mb-5 bg-white '>
                <h4>2.Question: why i use firebase and what other option do i have to implement authentication</h4>
                <h3>Ans: 
                    Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login.To authenticate your users, all you need to do is get the authentication credentials from the user and then pass this credential to the Firebase Authentication SDK.
                </h3>
            </div>
            <div className='question-ans shadow p-3 mb-5 bg-white '>
                <h4>3.Question: what does others services does firebase provide other then authertication</h4>
                <h3>Ans: 
                Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google's infrastructure. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.You can save all users, and you can authenticate with Google, Facebook, only email. It's like a database online and it's easy to connect with the same at Android Studio and after you can login with the users.
                </h3>
            </div>
        </div>
    );
};

export default Blogs;