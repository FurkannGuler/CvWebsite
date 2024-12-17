
import React from 'react'
import './home-start.css'

import Link from 'next/link';


 const description =
   "Zaman kaybetmeden profesyonel CV’ni oluştur! Kullanıcı dostu arayüzümüzle birkaç adımda etkileyici CV’ni hazırlayabilir ve anında PDF olarak indirebilirsin. Karmaşık formlar yok, gereksiz detaylar yok sadece hız ve sadelik!";
 const title = "Dakikalar içinde, basit ve etkili bir CV hazırlayın.";







const HomeStart = () => {
   
    
  return (
    <div className="w-full flex justify-center mt-28 ">
      <div className="flex flex-col text-center">
        <div>
          <span className=' span cursor-default'>Çevrimiçi Cv Oluşuturucu</span>
        </div>
        <div>
          <h1 className='title px-[10%] leading-[1]'>{title}</h1>
        </div>
        <div className='w-full px-[4%] description'>
            <h3 className=''>{description}</h3>
        </div>
        <div className='mt-[6%]'>
           <Link  href="/cv" className='button  rounded-2xl px-[5%] py-[1%] hover:bg-hover transition-colors delay-100'>CV Oluştur</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeStart