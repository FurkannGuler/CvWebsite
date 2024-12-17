"use client";
import React, { useEffect, useState } from "react";
import { Input, Button, useToast } from "@chakra-ui/react";


import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

interface HobbyFormProps {
  formId: number; // formId için türü belirtiyoruz
  onDelete: (formId: number) => void; // onDelete için türü belirtiyoruz
}

const HobbyForm: React.FC<HobbyFormProps> = ({ formId, onDelete }) => {
  const [hobby, setHobby] = useState("");
  

  const toast = useToast();

 

  useEffect(() => {
    const savedData = localStorage.getItem("AllHobbyData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const formData = parsedData[formId] || {};
      setHobby(formData.hobby || "");
      
    }
  }, [formId]);

  const handleSave = () => {
    const savedData = localStorage.getItem("AllHobbyData");
    const parsedData = savedData ? JSON.parse(savedData) : {};
    parsedData[formId] = {
      hobby,
      
    };
    localStorage.setItem("AllHobbyData", JSON.stringify(parsedData));
    console.log(`Form ${formId} verileri kaydedildi:`, {
      hobby,
    });
    toast({
      title: "Başarıyla Kaydedildi!",
      description: "Hobi Bilginiz başarıyla kaydedildi.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = () => {
    onDelete(formId);
    setHobby("");
   

    toast({
      title: "Başarıyla Silindi!",
      description: "Hobi Bilginiz başarıyla Silindi.",
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
            className="col-span-full row-span-1 max-[961px]:col-span-1"
          >
            <label htmlFor="">Hobi</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={hobby}
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
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

const Hobby = () => {
  const [forms, setForms] = useState<number[]>([]);

  useEffect(() => {
    const savedForms = localStorage.getItem("HobbyForms");
    if (savedForms) {
      const parsedForms = JSON.parse(savedForms);
      if (parsedForms.length > 0) {
        setForms(parsedForms);
      } else {
        const initialFormId = Date.now();
        setForms([initialFormId]);
        localStorage.setItem("HobbyForms", JSON.stringify([initialFormId]));
      }
    } else {
      const initialFormId = Date.now();
      setForms([initialFormId]);
      localStorage.setItem("HobbyForms", JSON.stringify([initialFormId]));
    }
  }, []);

  useEffect(() => {
    if (forms.length > 0) {
      localStorage.setItem("HobbyForms", JSON.stringify(forms));
    }
  }, [forms]);

  const handleAddForm = () => {
    const newFormId = Date.now();
    setForms([...forms, newFormId]);
  };

  const handleDeleteForm = (id: number) => {
    setForms(forms.filter((formId) => formId !== id));

    const savedData = localStorage.getItem("AllHobbyData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      delete parsedData[id];
      localStorage.setItem("AllHobbyData", JSON.stringify(parsedData));
    }
  };

  return (
    <div>
      {forms.map((formId) => (
        <HobbyForm
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
        Yeni Hobi Ekle <FaPlus />{" "}
      </Button>
    </div>
  );
};

export default Hobby;
