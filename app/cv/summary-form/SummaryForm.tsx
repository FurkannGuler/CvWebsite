"use client"
import React,{useState,useEffect} from 'react'
import { Textarea,useToast,Button } from '@chakra-ui/react';


const SummaryForm = () => {

    
    const[summary, setSummary] = useState("");

   useEffect(() => {
     const savedFormData = localStorage.getItem("Summary");
     if (savedFormData) {
       const parsedFormData = JSON.parse(savedFormData);
       setSummary(parsedFormData.summary || "");
     
      
     }
   }, []);

   const toast = useToast();

   const handleSave = () => {
     const formData = {
       summary,
      
     };
     localStorage.setItem("Summary", JSON.stringify(formData));
     toast({
       title: "Başarıyla Kaydedildi!",
       description: "Eğitim verileriniz başarıyla kaydedildi.",
       status: "success",
       duration: 3000,
       isClosable: true,
     });
     console.log("Veriler kaydedildi:", formData);
   };
  return (
    <div className="grid grid-cols-1  w-full   border-2 rounded-xl p-4 ">
      <div id="grid-row" className="col-span-1 row-span-1">
        <label htmlFor="">Özet</label>
        <Textarea
          variant="filled"
          placeholder="Özet Yazınızı Giriniz:"
          size="lg"
          height={200}
          typeof="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-5">
        <Button colorScheme="green" onClick={handleSave}>
          Kaydet
        </Button>
      </div>
     
    </div>
  );
}

export default SummaryForm