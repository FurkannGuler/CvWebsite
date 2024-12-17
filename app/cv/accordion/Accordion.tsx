"use client"
import "../cv.css";
import React from 'react'
import PersonalInfoForm from "../personal-info-form/PersonalInfoForm";
import SummaryForm from "../summary-form/SummaryForm";
import {  MdSummarize } from "react-icons/md";
import Education from "../education-form/EducationForm";
import { IoSchool } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import { PiCertificateFill, PiListChecksFill } from "react-icons/pi";
import Skills from "../skills-form/SkillsForm";
import Experience from "../experience-form/ExperienceForm";
import Language from "../language-form/LanguageForm";
import Hobby from "../hobby-form/HobbyForm";
import Reference from "../reference-form/ReferenceForm";
import Certificate from "../certificate-form/CertificateForm";
import { IoColorPalette, IoPerson } from 'react-icons/io5';
import {
  
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { Accordion as ExternalAccordion } from "@chakra-ui/react";
const Accordion = () => {
  return (
    <div>
      <ExternalAccordion allowMultiple className=" rounded-xl  flex flex-col  ">
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className=" Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <IoPerson />
                Kişisel Bilgiler
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <PersonalInfoForm />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className=" Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%] "
              >
                <MdSummarize />
                Özet
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SummaryForm />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className=" Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <IoSchool /> Eğitimler
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Education />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className="Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <MdBusinessCenter /> Deneyimler
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Experience />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className="Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <GiSkills /> Yetenekler
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Skills />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className="Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <FaLanguage /> Diller
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Language />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className="Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <IoColorPalette /> İlgi Alanları
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Hobby />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className="Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <PiListChecksFill /> Refernaslar
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Reference />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="Accordion-item">
          <h2>
            <AccordionButton className="Accordion-button">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl flex items-center gap-x-[1%]"
              >
                <PiCertificateFill /> Sertifikalar ve Kurslar
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Certificate />
          </AccordionPanel>
        </AccordionItem>
       
      </ExternalAccordion>
    </div>
  );
}

export default Accordion