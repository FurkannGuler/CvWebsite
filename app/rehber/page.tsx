"use client";
import "./rehber.css";
import React from "react";

import { MdSummarize } from "react-icons/md";

import { IoSchool } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import { PiCertificateFill, PiListChecksFill } from "react-icons/pi";

import { IoColorPalette, IoPerson } from "react-icons/io5";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { Accordion as ExternalAccordion } from "@chakra-ui/react";

const page = () => {
  return (
    <div className="py-[100px] px-[20%] max-[1000px]:px-[3%] ">
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
                1. ADIM
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="temel.png" className="w-full" alt="" />
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
                2. ADIM
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="kisisel.png" className="w-full" alt="" />
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
                3. ADIM
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="egitim.png" className="w-full" alt="" />
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
                4. ADIM
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="isdeneyim.png" className="w-full" alt="" />
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
                5. ADIM
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="teknik.png" className="w-full" alt="" />
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
                6. ADIM
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="sertifika.png" className="w-full" alt="" />
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
                7. ADIM
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="dilyet.png" className="w-full" alt="" />
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
                8. ADIM
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="ref.png" className="w-full" alt="" />
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
                9. ADIM
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="cvgo.png" className="w-full" alt="" />
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
                10. ADIM
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <img src="cvson.png" className="w-full" alt="" />
          </AccordionPanel>
        </AccordionItem>
      </ExternalAccordion>
    </div>
  );
};

export default page;
