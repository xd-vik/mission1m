
import React from 'react';
import { missionData } from './Missioncard';
import Carousel from './Carousel';
import UserCard from './UserCard';
import Navbar from "./Navbar";
import Banner from './Banner';
import Missioncard from './Missioncard';

function HomePage() {
  return (
    <>
    <div className='min-h-screen'>
      <div className='bg-white p-2'>
        <Navbar />
        <Banner/>
      </div>
      <Missioncard missionData={missionData}/>
      <Carousel/>
      <UserCard/>
    </div>
    </>
  
  );
}






      
 




export default HomePage;
