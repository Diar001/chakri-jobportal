import React from 'react';


import Logo from '../../components/atoms/logo/Logo';
import Menu from '../../components/molecules/menu/Menu';
import ResultsBar from '../../components/molecules/results-bar/ResultsBar';
import SearchJob from '../../components/molecules/search-job/SearchJob';
import Search from '../../components/molecules/search/Search';
import Features from '../../components/molecules/features/Features';
import AboutCards from '../../components/molecules/about-cards/AboutCards';
import ExploreCards from '../../components/molecules/explore-cards/ExploreCards';
import ApplyNow from "../../components/molecules/apply-now/ApplyNow";
import Feedback from "../../components/molecules/feedback/Feedback";
import Footer from '../../components/molecules/footer/Footer';



// import Button from "components/atoms/button/Button";

const Home = () => {
    return (
      <>
  
        <div className="home">
          <div className="color-overlay">
          </div>
          <Logo /> 
          <Menu />
          <Search />
          <SearchJob />
          <ResultsBar />
          <Features />
          <AboutCards />
          <ExploreCards />
          <ApplyNow />
          <Feedback />
          <Footer />
        </div>
          
      </>
    );
}

export default Home;
