import React from 'react';
import HeroSection from '../components/heroSection';
import Header from '../components/header';
import WhyLearn from '../components/whyLearn';
import EducationModules from '../components/educationalModules';

const LandingPage = () => {
    return (
        <>
        <Header/>
        <HeroSection />
        <WhyLearn/>
        <EducationModules/>
        </>
    );
};

export default LandingPage;
