
import React from 'react';

import Carousel from './Carousel';
import UserCard from './UserCard';
import Navbar from "./Navbar";
import Missioncard from './Misisoncard';

function HomePage() {
  return (
    <>
    <div className='min-h-screen'>
      <Navbar />
      <Missioncard/>
      <Carousel/>
      <UserCard/>
    </div>
    </>
  
  );
}






      
 




export default HomePage;
