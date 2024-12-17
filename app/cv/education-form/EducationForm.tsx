"use client"
import React, { useEffect, useState } from "react";
import { Input, Textarea, Select, Button, useToast } from "@chakra-ui/react";


import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

interface EducationFormProps {
  formId: number; // formId için türü belirtiyoruz
  onDelete: (formId: number) => void; // onDelete için türü belirtiyoruz
}

const EducationForm: React.FC<EducationFormProps> = ({ formId, onDelete }) => {
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
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
    const savedData = localStorage.getItem("AllEducationData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const formData = parsedData[formId] || {};
      setDegree(formData.degree || "");
      setSchool(formData.school || "");
       setCity(formData.city || "");
       setStartMonth(formData.startMonth || "");
        setStartYear(formData.startYear || "");
        setEndMonth(formData.endMonth || "");
         setEndYear(formData.endYear || "");
         setDescription(formData.description || "");
    }
  }, [formId]);

  const handleSave = () => {
    const savedData = localStorage.getItem("AllEducationData");
    const parsedData = savedData ? JSON.parse(savedData) : {};
    parsedData[formId] = { degree,school,city,startMonth,startYear,endMonth,endYear,description };
    localStorage.setItem("AllEducationData", JSON.stringify(parsedData));
    console.log(`Form ${formId} verileri kaydedildi:`, {
      degree,
      school,
      city,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
    });
    toast({
      title: "Başarıyla Kaydedildi!",
      description: "Eğitim verileriniz başarıyla kaydedildi.",
      status: "success",
      duration: 3000, 
      isClosable: true,
    });
  };

  const handleDelete = () => {
    onDelete(formId);
    setDegree("");
    setSchool("");
    setCity("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    toast({
      title: "Başarıyla Silindi!",
      description: "Eğitim verileriniz başarıyla Silindi.",
      status: "warning",
      duration: 3000, 
      isClosable: true,
    });
  };

  return (
    <div className="flex flex-col mb-[2%]  ">
      <div className="flex flex-col w-full border-2 rounded-xl">
        <div className="grid grid-cols-2 max-[960px]:grid max-[960px]:grid-cols-1 w-full py-4   ">
          <div
            id="grid-row"
            className="col-span-2 row-span-1 max-[961px]:col-span-1"
          >
            <label htmlFor="">Eğitim</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={degree}
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div id="grid-row" className="col-span-1 row-span-1 ">
            <label htmlFor="">Eğitim Kurumu</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={school}
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
          <div id="grid-row" className="col-span-1 row-span-1">
            <label htmlFor="">Şehir</label>
            <Input
              variant="filled"
              size="lg"
              type="text"
              name={city}
              value={city}
              onChange={(e) => setCity(e.target.value)}
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

const Education = () => {
 const [forms, setForms] = useState<number[]>([]);

 
 useEffect(() => {
   const savedForms = localStorage.getItem("EducationForms");
   if (savedForms) {
     const parsedForms = JSON.parse(savedForms);
     if (parsedForms.length > 0) {
       setForms(parsedForms);
     } else {
      
       const initialFormId = Date.now();
       setForms([initialFormId]);
       localStorage.setItem("EducationForms", JSON.stringify([initialFormId]));
     }
   } else {
     
     const initialFormId = Date.now();
     setForms([initialFormId]);
     localStorage.setItem("EducationForms", JSON.stringify([initialFormId]));
   }
 }, []);

 
 useEffect(() => {
   if (forms.length > 0) {
     localStorage.setItem("EducationForms", JSON.stringify(forms));
   }
 }, [forms]);

 const handleAddForm = () => {
   const newFormId = Date.now(); 
   setForms([...forms, newFormId]);
 };

 const handleDeleteForm = (id: number) => {
   setForms(forms.filter((formId) => formId !== id));
   
   const savedData = localStorage.getItem("AllEducationData");
   if (savedData) {
     const parsedData = JSON.parse(savedData);
     delete parsedData[id];
     localStorage.setItem("AllEducationData", JSON.stringify(parsedData));
   }
 };

  return (
    <div className="border-2 p-5 rounded-xl">
      

      {forms.map((formId) => (
        <EducationForm
          key={formId}
          formId={formId}
          onDelete={handleDeleteForm}
        />
      ))}
      
      <Button onClick={handleAddForm} colorScheme="gray" size={"lg"}  className=" w-full  gap-x-3" variant={"outline"}>Eğitim Ekle <FaPlus/> </Button>
    </div>
  );
};

export default Education;
