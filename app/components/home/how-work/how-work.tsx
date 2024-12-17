import React from 'react'
import './how-work.css'
import Card from './how-work-card/Card';

const HowWork:React.FC = () => {

  const steps = [
    {
      image: "./giris.png",
      step: 1,
      title: "Bilgileriniz Girin",
      description:
        "CV oluşturmak için gerekli tüm bilgileri form üzerinden doldurun.",
    },
    {
      image: "./sablon.png",
      step: 2,
      title: "Bir Şablon Seçin",
      description:
        "Birçok şablon arasından dilediğinizi seçerek CV’nizi özelleştirin.",
    },
    {
      image: "./indir.png",
      step: 3,
      title: "CV'nizi İndirin",
      description:
        "Son adımda CV’nizi PDF formatında indirerek kullanmaya başlayın.",
    },
  ];
  return (
    <div className="flex w-full justify-center mt-24">
      <div className="flex flex-col">
        <div>
          <h1 className="title-work w-full flex justify-center">
            Nasıl Çalışır?
          </h1>
        </div>
        <div className="steps flex w-full justify-center mt-[3%] gap-[2%] max-[850px]:flex-col">
          {steps.map((step) => (
            <Card
              key={step.step}
              image={step.image}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className='flex justify-center w-full'>
        <button className="button w-[300px]  rounded-2xl px-[5%] py-[1%] hover:bg-hover transition-colors delay-100 text-nowrap flex justify-center ">
         Hemen CV Oluştur
        </button>
        </div>
      </div>
    </div>
  );
}

export default HowWork