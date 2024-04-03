import React from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import goreLogo from '../assets/goreLogo.png';

const LandingPage = () => {


    return (
        <div className='text-center'>

            <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'></div>
            <header className='masthead mb-auto'></header>
            <div className='inner'>
                <img className='img-fluid width-50' src={goreLogo} alt='Gore Logo' />
            </div>
            <h3 className='masthead-brand'>Continuous Improvement</h3>

            <main role='main' className='inner cover'>
                <h1 className='cover-heading'>Welcome to our Continuous Improvement Landing page!</h1>

                <p className='lead'>W.L Gore's continuous improvement process is all about fostering team collaboration, encouraging innovative thinking,
                     and relentlessly pursuing incremental enhancement to products and processes. Its a culture where everyones voice matters,
                      and the aim is to create high-quality products that lead the market.</p>
                <p className='lead'>
                </p>
            </main>
        </div>
    )
};

export default LandingPage;
