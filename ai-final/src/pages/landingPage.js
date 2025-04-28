import React from 'react';
import HeroSection from '../components/heroSection';
import Header from '../components/header';
import WhyLearn from '../components/whyLearn';
import EducationModules from '../components/educationalModules';
import Footer from '../components/footer';
import JoinCommunity from '../components/joinCommunity';
import LearnFromExperts from '../components/learnFromExperts';

const LandingPage = () => {
    return (
        <>
        <Header/>
        <HeroSection />
        <WhyLearn/>
        <EducationModules/>
        <LearnFromExperts/>
        <JoinCommunity/>
        <Footer/>
        </>
    );
};

export default LandingPage;
