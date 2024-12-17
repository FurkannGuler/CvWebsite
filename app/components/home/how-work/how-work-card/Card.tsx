import React from 'react'




interface CardProps {
  image: string;
  step: number;
  title: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ image, step, title, description }) => {
  return (
    <div className="aspect-[4/5] bg-white py-[2%] mb-[4%] rounded-xl">
      <a href="#">
        <div className="flex flex-col items-center  ">
          <img src={image} alt="" className="w-[70%] h-[35%] " />
          <span className="mt-[3%] bg-slate-200 rounded-xl text-lg px-[4%] py-[1%]">Adım {step}</span>

          <h1 className='font-medium text-3xl mt-[5%]'>{title}</h1>
          <p className='text-xl text-text px-[10%] mt-[4%]'>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card