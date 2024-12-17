"use client"
import React, { createContext, useContext,useState } from "react";


const CvContext = createContext<any>("");


export  function MyProvider({ children }:{
  children: React.ReactNode;}) {
  const [cvData, setCVData] = useState({
    personalInfo: {},
    experiences: [],
    education: [],
  });

  return (
    <CvContext.Provider value={{ cvData, setCVData }}>
      {children}
    </CvContext.Provider>
  );
}

// Consumer Hook
export function useCvContext() {
  return useContext(CvContext);
}
