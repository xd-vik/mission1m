
import React from 'react';

import Carousel from './Carousel';
import UserCard from './UserCard';
import Navbar from "./Navbar";
import Banner from './Banner';
import MissionCard from './MissionCard';
import ContactUs from './ContactUs';
import Footer from './Footer';

function HomePage() {
  return (
    <>
    <div className='min-h-screen'>
      <div className='bg-white p-2'>
        <Navbar />
        <Banner/>
      </div>
      <MissionCard/>
      <Carousel/>
      <UserCard/>
      <ContactUs/>
      <Footer/>
    </div>
    </>
  
  );
}






      
 




export default HomePage;
