import React from 'react';
import HeroSection from '../components/heroSection';
import Header from '../components/header';
import WhyLearn from '../components/whyLearn';
import EducationModules from '../components/educationalModules';
import Footer from '../components/footer';

const LandingPage = () => {
    return (
        <>
        <Header/>
        <HeroSection />
        <WhyLearn/>
        <EducationModules/>
        <Footer/>
        </>
    );
};

export default LandingPage;
