"use client"
import React, { useState, useEffect, useRef } from "react";


import { Input,Button,Textarea,useToast,Box,Image,Text,IconButton} from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';
import { InputLeftElement } from '@chakra-ui/react';
import { FaEdit, FaPhoneAlt, FaTrash } from "react-icons/fa";
import { Select } from "@chakra-ui/react";
import { MdWeb } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import { BsPersonBoundingBox } from "react-icons/bs";



const PersonalInfoForm:React.FC=()=>{
  



const [image , setImage]= useState("");
 const [name, setName] = useState("");
 const [surName, setSurName]= useState("");
 const [email, setEmail] = useState("");
 const [gender, setGender] = useState("");
 const [phone, setPhone] = useState("");
 const [bornDate, setBornDate] = useState("");
 const [job, setJob] = useState("");
 const [city, setCity] = useState("");
const [marital, setMarital] = useState("");
const [soldier, setSoldier] = useState("");
const [web, setWeb] = useState("");
const [link, setLink] = useState("");
const [adres, setAdres] = useState("");
   useEffect(() => {
     const savedFormData = localStorage.getItem("PersonelInfo");
     if (savedFormData) {
       const parsedFormData = JSON.parse(savedFormData);
       setImage(parsedFormData.image || "");
       setName(parsedFormData.name || ""); 
      setSurName(parsedFormData.surName || ""); 
       setEmail(parsedFormData.email || "");
       setGender(parsedFormData.gender || "");
       setPhone(parsedFormData.phone || "");
       setBornDate(parsedFormData.bornDate || "");
       setJob(parsedFormData.job || "");
       setCity(parsedFormData.city || "");
       setMarital(parsedFormData.marital || "");
       setSoldier(parsedFormData.soldier || "");
       setWeb(parsedFormData.web || "");
       setLink(parsedFormData.link || "");
       setAdres(parsedFormData.adres || "");
     }
   }, []); 

   const toast = useToast();
   
   const handleSave = () => {
     const formData = {image, name,surName, email, phone, bornDate, job, city, marital, soldier, web, link, gender, adres };
     localStorage.setItem("PersonelInfo", JSON.stringify(formData));
     toast({
       title: "Başarıyla Kaydedildi!",
       description: "Eğitim verileriniz başarıyla kaydedildi.",
       status: "success",
       duration: 3000,
       isClosable: true,
     });
     console.log("Veriler kaydedildi:", formData);
     
   };
   //image
   
   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (file) {
       const reader = new FileReader();
       reader.onloadend = () => {
         setImage(reader.result as string); 
       };
       reader.readAsDataURL(file); 
     }
   };

    const handleDeleteImage = () => {
      setImage(""); 
      const savedFormData = localStorage.getItem("PersonelInfo");
      if (savedFormData) {
        const parsedFormData = JSON.parse(savedFormData);
        parsedFormData.image = ""; 
        localStorage.setItem("PersonelInfo", JSON.stringify(parsedFormData));
      }
      toast({
        title: "Fotoğraf Silindi",
        description: "Yüklenen fotoğraf başarıyla silindi.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    };
    const fileInputRef = useRef<HTMLInputElement | null>(null);
   
    const handleEditImage = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click(); // input'a tıklayıp yeni bir fotoğraf seçme işlemini başlat
      }
    };
   
   //image
  
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-3  w-full   border-2 rounded-xl p-4 max-[1300px]:grid-cols-2 max-[960px]:grid-cols-1">
        <div
          id="grid-row"
          className="row-span-3 col-span-1 flex justify-center  "
        >
          <Box textAlign="center" mt={8} />
          <Box
            borderWidth="2px"
            borderColor="gray.300"
            borderRadius="md"
            padding={4}
            position="relative"
            width="300px"
            aspectRatio={1 / 1}
            mx="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            _hover={{ borderColor: "blue.400" }}
          >
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            />
            {image ? (
              <Box position="relative">
                <Image
                  src={image}
                  alt="Yüklenen Fotoğraf"
                  objectFit="cover"
                  borderRadius="md"
                  width="100%"
                  height="100%"
                />
                <Box
                  position="absolute"
                  top="5px"
                  right="5px"
                  display="flex"
                  alignItems="center"
                  bg="rgba(0, 0, 0, 0.6)"
                  borderRadius="md"
                  padding="5px"
                  gap="4px"
                >
                  <IconButton
                    aria-label="Fotoğrafı Düzenle"
                    icon={<FaEdit />}
                    size="sm"
                    onClick={handleEditImage} // Düzenleme işlemi
                    colorScheme="blue"
                  />
                  <IconButton
                    aria-label="Fotoğrafı Sil"
                    icon={<FaTrash />}
                    size="sm"
                    onClick={handleDeleteImage}
                    colorScheme="red"
                  />
                </Box>
              </Box>
            ) : (
              <Box textAlign="center">
                <BsPersonBoundingBox
                  size={90}
                  color="gray.500"
                  className=" flex justify-center w-full"
                />
                <Text mt={2} color="gray.500">
                  Fotoğraf Yükle
                </Text>
              </Box>
            )}
          </Box>
        </div>
        <div id="grid-row" className="col-span-1 row-span-1">
          <label htmlFor="">İsim</label>
          <Input
            variant="filled"
            size="lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg">
          <label htmlFor="">Soyisim</label>
          <Input
            variant="filled"
            size="lg"
            type="text"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          />
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg">
          <label htmlFor="">Telefon numarası</label>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaPhoneAlt color="gray.300" className="mt-2" />
            </InputLeftElement>
            <Input
              variant="filled"
              type="tel"
              size="lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg">
          <label htmlFor="email">E-Posta adresi</label>
          <Input
            variant="filled"
            size="lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg">
          <label htmlFor="">Meslek-Ünvan</label>
          <Input
            variant="filled"
            size="lg"
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg">
          <label htmlFor="">İlçe/Şehir</label>
          <Input
            variant="filled"
            type="city"
            size="lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg ">
          <label htmlFor="">Doğum Tarihi</label>
          <Input
            variant="filled"
            type="date"
            size="lg"
            value={bornDate}
            onChange={(e) => setBornDate(e.target.value)}
          />
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg ">
          <label htmlFor="">Cinsiyet</label>
          <Select
            variant="filled"
            size="lg"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="0"></option>
            <option value="Erkek">Erkek</option>
            <option value="Kadın">Kadın</option>
          </Select>
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg ">
          <label htmlFor="">Medeni Durum</label>
          <Select
            variant="filled"
            size="lg"
            value={marital}
            onChange={(e) => setMarital(e.target.value)}
          >
            <option value=""></option>
            <option value="Evli">Evli</option>
            <option value="Bekar">Bekar</option>
          </Select>
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg ">
          <label htmlFor="">Askerlik</label>
          <Select
            variant="filled"
            size="lg"
            value={soldier}
            onChange={(e) => setSoldier(e.target.value)}
          >
            <option value="0"></option>
            <option value="Yapıldı">Yapıldı</option>
            <option value="Muaf">Muaf</option>
            <option value="Tecilli">Tecilli</option>
          </Select>
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg ">
          <label htmlFor="">Web Sitesi</label>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdWeb color="gray.300" className="mt-2" />
            </InputLeftElement>
            <Input
              variant="filled"
              type="text"
              size="lg"
              name={web}
              value={web}
              onChange={(e) => setWeb(e.target.value)}
            />
          </InputGroup>
        </div>
        <div id="grid-row" className="col-span-1 row-span-1 text-lg ">
          <label htmlFor="">Linkedin</label>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaLinkedin color="gray.300" className="mt-2" />
            </InputLeftElement>
            <Input
              variant="filled"
              type="text"
              size="lg"
              name={link}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </InputGroup>
        </div>
        <div id="grid-row" className="col-span-full row-span-1 text-lg">
          <label htmlFor="">Adres</label>
          <Textarea
            variant="filled"
            size="lg"
            typeof="text"
            value={adres}
            onChange={(e) => setAdres(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Button colorScheme="green" onClick={handleSave}>
          Kaydet
        </Button>
      </div>
    </div>
  );}

  export default PersonalInfoForm


