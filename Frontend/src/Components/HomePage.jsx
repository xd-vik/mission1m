import React from 'react';

import Carousel from './Carousel';
import UserCard from './UserCard';
import Missioncard from './Misisoncard';

function HomePage() {
  return (
    <>
   <div class="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
  <span class="font-semibold mr-2 text-[30px] md:text-[40px]">Three pillars of</span>
  <span class="font-semibold text-green-700 text-[30px] md:text-[40px]">Mission One Million</span>
</div>


    <Missioncard/>
    <Carousel/>
    <UserCard/>

  
    </>
  
  );
}

export default HomePage;
