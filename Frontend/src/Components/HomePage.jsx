
import React from 'react';
import { missionData } from './MissionCard';
import Carousel from './Carousel';
import UserCard from './UserCard';
import Navbar from "./Navbar";
import Banner from './Banner';
import MissionCard from './MissionCard';
import ContactUs from './ContactUs';

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
    </div>
    </>
  
  );
}






      
 




export default HomePage;
