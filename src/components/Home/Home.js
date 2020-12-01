import React from 'react'
import LandingPage from './LandingPage/LandingPage';
import Subscription from './Subscription/Subscription';
import Footer from './Footer/Footer';
import Navbar from './Navigation/Navbar';

const Home = () => {
    return (
        <>
            <Navbar/>
            <LandingPage/>
            <Subscription/>
            <Footer/>
        </>
    )
}

export default Home;
