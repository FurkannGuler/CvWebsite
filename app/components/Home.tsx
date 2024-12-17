"use client"

import HomeStart from './home/home-start/home-start';
import HowWork from './home/how-work/how-work';
import FloatingButton from './floating-button/floating-button';

const HomePage = () => {
 
  return (
    <div className="w-full flex flex-col  ">
      <HomeStart />
      <HowWork />
      <FloatingButton />
      <div>


      </div>
    </div>
  );
}

export default HomePage