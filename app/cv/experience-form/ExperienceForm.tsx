"use client";
import React, { useEffect, useState } from "react";
import { Input, Textarea, Select, Button, useToast } from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

interface ExperienceFormProps {
  formId: number; // formId için türü belirtiyoruz
  onDelete: (formId: number) => void; // onDelete için türü belirtiyoruz
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ formId, onDelete }) => {
  const [job, setJob] = useState("");
  const [employer, setEmployer] = useState("");
  const [city, setCity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");

  const toast = useToast();

  const options = [];

  for (let year = 2030; year >= 1940; year--) {
    options.push(<option value={year}>{year}</option>);
  }

  useEffect(() => {
    const savedData = localStorage.getItem("AllExperienceData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const formData = parsedData[formId] || {};
      setJob(formData.job || "");
      setEmployer(formData.employer || "");
      setCity(formData.city || "");
      setStartMonth(formData.startMonth || "");
      setStartYear(formData.startYear || "");
      setEndMonth(formData.endMonth || "");
      setEndYear(formData.endYear || "");
      setDescription(formData.description || "");
    }
  }, [formId]);

  const handleSave = () => {
    const savedData = localStorage.getItem("AllExperienceData");
    const parsedData = savedData ? JSON.parse(savedData) : {};
    parsedData[formId] = {
      job,
      employer,
      city,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
    };
    localStorage.setItem("AllExperienceData", JSON.stringify(parsedData));
    console.log(`Form ${formId} verileri kaydedildi:`, {
      job,
      employer,
      city,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
    });
    toast({
      title: "Başarıyla Kaydedildi!",
      description: "Deneyim Bilginiz başarıyla kaydedildi.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = () => {
    onDelete(formId);
    setJob("");
    setEmployer("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    toast({
      title: "Başarıyla Silindi!",
      description: "Deneyim Bilginiz başarıyla Silindi.",
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
            <label htmlFor="">İş Unvanı</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={job}
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div id="grid-row" className="col-span-1 row-span-1 ">
            <label htmlFor="">Şehir/İlçe</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={city}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div id="grid-row" className="col-span-2 row-span-1 max-[960px]:col-span-1">
            <label htmlFor="">İşveren</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={employer}
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            />
          </div>
          <div id="grid-row" className="col-span-1 row-span-1">
            <label htmlFor="">Başlangıç Tarihi</label>
            <div className="flex gap-x-[10px]">
              <Select
                variant="filled"
                size="lg"
                placeholder="Ay"
                name={startMonth}
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                <option value="Ocak">Ocak</option>
                <option value="Şubat">Şubat</option>
                <option value="Mart">Mart</option>
                <option value="Nisan">Nisan</option>
                <option value="Mayıs">Mayıs</option>
                <option value="Haziran">Haziran</option>
                <option value="Temmuz">Temmuz </option>
                <option value="Ağustos">Ağustos</option>
                <option value="Eylül">Eylül</option>
                <option value="Ekim">Ekim</option>
                <option value="Kasım">Kasım</option>
                <option value="Aralık">Aralık</option>
              </Select>
              <Select
                variant="filled"
                size="lg"
                placeholder="Yıl"
                name={startYear}
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              >
                {options}
              </Select>
            </div>
          </div>
          <div id="grid-row" className="col-span-1 row-span-1 ">
            <label htmlFor="">Bitiş Tarihi</label>
            <div className="flex gap-x-[10px]">
              <Select
                variant="filled"
                size="lg"
                placeholder="Ay"
                name={endMonth}
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
              >
                <option value="Devam Ediyor">Devam Ediyor</option>
                <option value="Ocak">Ocak</option>
                <option value="Şubat">Şubat</option>
                <option value="Mart">Mart</option>
                <option value="Nisan">Nisan</option>
                <option value="Mayıs">Mayıs</option>
                <option value="Haziran">Haziran</option>
                <option value="Temmuz">Temmuz </option>
                <option value="Ağustos">Ağustos</option>
                <option value="Eylül">Eylül</option>
                <option value="Ekim">Ekim</option>
                <option value="Kasım">Kasım</option>
                <option value="Aralık">Aralık</option>
              </Select>
              <Select
                variant="filled"
                size="lg"
                placeholder="Yıl"
                name={endYear}
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
              >
                <option value="Devam Ediyor">Devam Ediyor</option>
                {options}
              </Select>
            </div>
          </div>

          <div id="grid-row" className="col-span-2 max-[960px]:col-span-1">
            <label htmlFor={description}>Açıklama</label>
            <Textarea
              variant="filled"
              size="lg"
              typeof="text"
              name={description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

const Experience = () => {
  const [forms, setForms] = useState<number[]>([]);

  useEffect(() => {
    const savedForms = localStorage.getItem("ExperienceForms");
    if (savedForms) {
      const parsedForms = JSON.parse(savedForms);
      if (parsedForms.length > 0) {
        setForms(parsedForms);
      } else {
        const initialFormId = Date.now();
        setForms([initialFormId]);
        localStorage.setItem("ExperienceForms", JSON.stringify([initialFormId]));
      }
    } else {
      const initialFormId = Date.now();
      setForms([initialFormId]);
      localStorage.setItem("ExperienceForms", JSON.stringify([initialFormId]));
    }
  }, []);

  useEffect(() => {
    if (forms.length > 0) {
      localStorage.setItem("ExperienceForms", JSON.stringify(forms));
    }
  }, [forms]);

  const handleAddForm = () => {
    const newFormId = Date.now();
    setForms([...forms, newFormId]);
  };

  const handleDeleteForm = (id: number) => {
    setForms(forms.filter((formId) => formId !== id));

    const savedData = localStorage.getItem("AllExperienceData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      delete parsedData[id];
      localStorage.setItem("AllExperienceData", JSON.stringify(parsedData));
    }
  };

  return (
    <div>
      

      {forms.map((formId) => (
        <ExperienceForm
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
       Yeni Deneyim Ekle <FaPlus />{" "}
      </Button>
    </div>
  );
};

export default Experience;
