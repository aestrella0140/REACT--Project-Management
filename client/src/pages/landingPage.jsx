import React from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import goreLogo from '../assets/goreLogo.png';

const LandingPage = () => {


    return (
        <body className='text-center'>

            <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'></div>
            <header className='masthead mb-auto'></header>
            <div className='inner'>
                <img className='img-fluid width-50' src={goreLogo} alt='Gore Logo' />
            </div>
            <h3 className='masthead-brand'>Continuous Improvement</h3>

            <main role='main' className='inner cover'>
                <h1 className='cover-heading'>Welcome to our Continuous Improvement Landing page!</h1>
                <p>enter summary here later</p>
                <p className='lead'>
                </p>
            </main>
        </body>
    )
};

export default LandingPage;
