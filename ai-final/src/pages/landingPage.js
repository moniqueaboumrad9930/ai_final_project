import React from 'react';
import HeroSection from '../components/heroSection';
import Header from '../components/header';
import WhyLearn from '../components/whyLearn';
import EducationModules from '../components/educationalModules';
import Footer from '../components/footer';
import JoinCommunity from '../components/joinCommunity';

const LandingPage = () => {
    return (
        <>
        <Header/>
        <HeroSection />
        <WhyLearn/>
        <EducationModules/>
        <JoinCommunity/>
        <Footer/>
        </>
    );
};

export default LandingPage;
