import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton: React.FC = () => {
  return (
    <button className="fixed bottom-4 right-4 bg-[#25D366] text-white p-5  rounded-full shadow-lg hover:bg-hover transition duration-300 z-20 max-[850px]:p-4">
      <FaWhatsapp className="w-10 h-10" />
    </button>
  );
};

export default FloatingButton;
