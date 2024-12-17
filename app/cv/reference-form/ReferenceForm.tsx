"use client";
import React, { useEffect, useState } from "react";
import { Input, Button, useToast } from "@chakra-ui/react";


import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

interface ReferenceFormProps {
  formId: number; // formId için türü belirtiyoruz
  onDelete: (formId: number) => void; // onDelete için türü belirtiyoruz
};

const ReferenceForm: React.FC<ReferenceFormProps> = ({ formId, onDelete }) => {
  const [name, setName] = useState("");
   const [company, setCompany] = useState("");
    const [tel, setTel] = useState("");
     const [mail, setMail] = useState("");

  const toast = useToast();

  useEffect(() => {
    const savedData = localStorage.getItem("AllReferenceData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const formData = parsedData[formId] || {};
      setName(formData.name || "");
       setCompany(formData.company || "");
        setTel(formData.tel || "");
         setMail(formData.mail || "");
    }
  }, [formId]);

  const handleSave = () => {
    const savedData = localStorage.getItem("AllReferenceData");
    const parsedData = savedData ? JSON.parse(savedData) : {};
    parsedData[formId] = {
     name,
     company,
     tel,
     mail,
    };
    localStorage.setItem("AllReferenceData", JSON.stringify(parsedData));
    console.log(`Form ${formId} verileri kaydedildi:`, {
      name,
      company,
      tel,
      mail,
    });
    toast({
      title: "Başarıyla Kaydedildi!",
      description: "Referans Bilginiz başarıyla kaydedildi.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = () => {
    onDelete(formId);
    setName("");
    setCompany("");
    setTel("");
    setMail("");

    toast({
      title: "Başarıyla Silindi!",
      description: "Referans Bilginiz başarıyla Silindi.",
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
            <label htmlFor="">İsim</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            id="grid-row"
            className="col-span-1 row-span-1 max-[961px]:col-span-1"
          >
            <label htmlFor="">Şirket İsmi</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={company}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div
            id="grid-row"
            className="col-span-1 row-span-1 max-[961px]:col-span-1"
          >
            <label htmlFor="">Telefon Numarası</label>
            <Input
              variant="filled"
              size="lg"
              type="tel"
              name={tel}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div
            id="grid-row"
            className="col-span- row-span-1 max-[961px]:col-span-1"
          >
            <label htmlFor="">E-Posta Adresi</label>
            <Input
              variant="filled"
              size="lg"
              type="email"
              name={mail}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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

const Reference = () => {
  const [forms, setForms] = useState<number[]>([]);

  useEffect(() => {
    const savedForms = localStorage.getItem("ReferenceForms");
    if (savedForms) {
      const parsedForms = JSON.parse(savedForms);
      if (parsedForms.length > 0) {
        setForms(parsedForms);
      } else {
        const initialFormId = Date.now();
        setForms([initialFormId]);
        localStorage.setItem("ReferenceForms", JSON.stringify([initialFormId]));
      }
    } else {
      const initialFormId = Date.now();
      setForms([initialFormId]);
      localStorage.setItem("ReferenceForms", JSON.stringify([initialFormId]));
    }
  }, []);

  useEffect(() => {
    if (forms.length > 0) {
      localStorage.setItem("ReferenceForms", JSON.stringify(forms));
    }
  }, [forms]);

  const handleAddForm = () => {
    const newFormId = Date.now();
    setForms([...forms, newFormId]);
  };

  const handleDeleteForm = (id: number) => {
    setForms(forms.filter((formId) => formId !== id));

    const savedData = localStorage.getItem("AllReferenceData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      delete parsedData[id];
      localStorage.setItem("AllReferenceData", JSON.stringify(parsedData));
    }
  };

  return (
    <div>
      {forms.map((formId) => (
        <ReferenceForm
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
        Yeni Referans Ekle <FaPlus />{" "}
      </Button>
    </div>
  );
};

export default Reference;
