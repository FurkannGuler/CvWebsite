"use client";

import Accordion from "./accordion/Accordion";
import React, { useState} from "react";
import { motion } from "framer-motion";


import {  IoPerson } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { BsFiletypePdf } from "react-icons/bs";

import TemplateSelection from "./template-selection/TemplateSelection";
import CVPreview from "./cv-preview/CvPreview.jsx";
const steps = [
  {
    id: "0",
    name: "Kişisel Bilgiler",

    icon: <IoPerson />,
  },
  {
    id: "1",
    name: "Cv Şablonu",

    icon: <SiReaddotcv />,
  },
  { id: "2", name: "İndirme", icon: <BsFiletypePdf /> },
];



const Form: React.FC = () => {
  // multi-page start

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  

  const next = async () => {
    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
     window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
       
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
const giris = (  index : number) => {
  if (index >= 0 && index < steps.length) {
    setPreviousStep(currentStep); // Mevcut adımı önceki adıma ayarla
    setCurrentStep(index); // Belirtilen adıma git
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  //multi-page end

  return (
    <section className=" mt-32   flex-col justify-between p-[3%]">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className=" flex md:flex justify-center space-x-8 ">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div
                  onClick={() => giris(index)}
                  className="group flex w-full flex-col   border-hover py-2 pl-4 transition-colors  md:pb-0  md:pt-4"
                >
                  <button className="flex flex-col items-center">
                    <span className="text-6xl font-medium max-[800px]:text-4xl ">
                      {step.icon}
                    </span>
                    <span className="text-2xl max-[800px]:text-xl">
                      {step.name}
                    </span>
                  </button>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col items-center  border-hover py-2 pl-4 mb-[2%]  md:pb-0  md:pt-4 cursor-pointer"
                  aria-current="step"
                  onClick={() => giris(index)}
                >
                  <div className="flex text-hover items-center ">
                    <button className="flex flex-col items-center">
                      <span className="text-6xl max-[800px]:text-4xl font-medium text-hover">
                        {step.icon}
                      </span>
                      <span className="text-2xl max-[800px]:text-xl">
                        {step.name}
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => giris(index)}
                  className="group flex w-full flex-col items-center border-b-0 border-t-0 border-gray-200 py-2  transition-colors   md:pb-0  md:pt-4 cursor-pointer"
                >
                  <button className="flex flex-col items-center">
                    <span className="text-6xl font-medium max-[800px]:text-4xl ">
                      {step.icon}
                    </span>
                    <span className="text-2xl max-[800px]:text-xl">
                      {step.name}
                    </span>
                  </button>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="mt-12 py-12">
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=""
          >
            <Accordion/>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
           
          >
            <div className="flex justify-center w-full">
              <TemplateSelection />
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
           <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
           
          >
            <CVPreview />
          </motion.div>
            
        
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-end gap-x-[5%] max-[800px]:justify-center">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded-lg bg-normal px-10 py-2 text-lg z-10 font-medium text-white shadow-sm  hover:bg-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            Geri
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded-lg bg-normal px-10 py-2 text-lg  text-white shadow-sm   hover:bg-hover disabled:cursor-not-allowed disabled:opacity-50 "
          >
            İleri
          </button>
        </div>
      </div>
    </section>
  );
};
export default Form;
