
import React from 'react';

import Carousel from './Carousel';
import UserCard from './UserCard';
import Navbar from "./Navbar";
import Banner from './Banner';
import Missioncard from './Misisoncard';

function HomePage() {
  return (
    <>
    <div className='min-h-screen'>
      <div className='bg-green-100 p-2'>
      <Navbar />
      <Banner/>
      </div>
      <Missioncard/>
      <Carousel/>
      <UserCard/>
    </div>
    </>
  
  );
}






      
 




export default HomePage;
