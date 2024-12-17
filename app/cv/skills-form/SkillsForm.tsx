"use client";
import React, { useEffect, useState } from "react";
import { Input, Button, useToast, Box } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

interface SkillsFormProps {
  formId: number; // formId için türü belirtiyoruz
  onDelete: (formId: number) => void; // onDelete için türü belirtiyoruz
}

const SkillsForm: React.FC<SkillsFormProps> = ({
  formId,
  onDelete,
}) => {
  const [skills, setSkills] = useState("");
  const [skillsLevel, setSkillsLevel] = useState(50);
  

  const toast = useToast();

  const options = [];

  for (let year = 2030; year >= 1940; year--) {
    options.push(<option value={year}>{year}</option>);
  }

  useEffect(() => {
    const savedData = localStorage.getItem("AllSkillsData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const formData = parsedData[formId] || {};
      setSkills(formData.skills || "");
      setSkillsLevel(formData.skillsLevel || "");
      
    }
  }, [formId]);

  const handleSave = () => {
    const savedData = localStorage.getItem("AllSkillsData");
    const parsedData = savedData ? JSON.parse(savedData) : {};
    parsedData[formId] = {
      skills,
      skillsLevel,
     
    };
    localStorage.setItem("AllSkillsData", JSON.stringify(parsedData));
    console.log(`Form ${formId} verileri kaydedildi:`, {
      skills,
      skillsLevel,
    });
    toast({
      title: "Başarıyla Kaydedildi!",
      description: "Yetenek Bilginiz başarıyla kaydedildi.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = () => {
    onDelete(formId);
    setSkills("");
    setSkillsLevel(50);
   
    toast({
      title: "Başarıyla Silindi!",
      description: "Yetenek Bilginiz başarıyla Silindi.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  

 
  
  

  return (
    <div className="flex flex-col mb-[2%]">
      <div className="flex flex-col w-full border-2 rounded-xl">
        <div className="grid grid-cols-2 max-[960px]:grid max-[960px]:grid-cols-1 w-full py-4   ">
          <div
            id="grid-row"
            className="col-span-1 row-span-1 max-[961px]:col-span-1"
          >
            <label htmlFor="">Yetenek</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={skills}
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div id="grid-row" className="col-span-1 row-span-1 ">
            <label htmlFor="">Seviye</label>
            <Box p={4} pt={6}>
              <Slider
                aria-label="slider-ex-6"
                size={"lg"}
                min={0} // Minimum değer
                max={100} // Maksimum değer
                step={20} // Slider adımı
                defaultValue={50}
                colorScheme="green"
                value={skillsLevel}
                onChange={(val) => setSkillsLevel(val)}
              >
                <SliderMark
                  value={skillsLevel}
                  textAlign="center"
                  bg="#6A9C89"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                >
                  {skillsLevel}%
                </SliderMark>
                <SliderTrack h={11}>
                  <SliderFilledTrack h={10.5} />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </div>
        </div>
        <div className="flex w-full justify-end p-4">
          <Button colorScheme="white" size={"lg"} onClick={handleDelete}>
            <FaTrashCan className="text-text w-20 h-7 hover:text-hover" />
          </Button>
          <Button colorScheme="green" size={"lg"} onClick={handleSave}>
            Kaydet
          </Button>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [forms, setForms] = useState<number[]>([]);

  useEffect(() => {
    const savedForms = localStorage.getItem("SkillsForms");
    if (savedForms) {
      const parsedForms = JSON.parse(savedForms);
      if (parsedForms.length > 0) {
        setForms(parsedForms);
      } else {
        const initialFormId = Date.now();
        setForms([initialFormId]);
        localStorage.setItem(
          "SkillsForms",
          JSON.stringify([initialFormId])
        );
      }
    } else {
      const initialFormId = Date.now();
      setForms([initialFormId]);
      localStorage.setItem("SkillsForms", JSON.stringify([initialFormId]));
    }
  }, []);

  useEffect(() => {
    if (forms.length > 0) {
      localStorage.setItem("SkillsForms", JSON.stringify(forms));
    }
  }, [forms]);

  const handleAddForm = () => {
    const newFormId = Date.now();
    setForms([...forms, newFormId]);
  };

  const handleDeleteForm = (id: number) => {
    setForms(forms.filter((formId) => formId !== id));

    const savedData = localStorage.getItem("AllSkillsData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      delete parsedData[id];
      localStorage.setItem("AllSkillsData", JSON.stringify(parsedData));
    }
  };

  return (
    <div>
      {forms.map((formId) => (
        <SkillsForm
          key={formId}
          formId={formId}
          onDelete={handleDeleteForm}
        />
      ))}

      <Button
        onClick={handleAddForm}
        colorScheme="gray"
        size={"lg"}
        className=" w-full  gap-x-3"
        variant={"outline"}
      >
       Yeni Yetenek Ekle <FaPlus />{" "}
      </Button>
    </div>
  );
};

export default Skills;
