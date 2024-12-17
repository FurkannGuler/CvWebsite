import React from 'react'
const logoWhite ='./logo-beyaz.svg'
import './footer.css'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-hover px-[10%] pt-[3%] flex flex-col ">
      <div className="list-area  w-full h-full grid grid-cols-3 max-[600px]:grid-cols-1">
        <div className=" col-span-1 flex items-center justify-center">
          <img src={logoWhite} alt="" className="w-56" />
        </div>
        <div className="list col-span-1">
          <h1 className="list-title">Ürün</h1>
          <a href="" className="list-item">
            CV Şablonları
          </a>
          <a href="" className="list-item">
            Fiyatlandırma
          </a>
        </div>
        <div className="list col-span-1">
          <h1 className="list-title">Destek</h1>
          <a href="" className="list-item">
            Sıkça Sorulan Sorular
          </a>
          <a href="" className="list-item">
            Hakkımızda
          </a>
          <a href="" className="list-item">
            Bize Ulaşın
          </a>
          <a href="" className="list-item">
            Fiyatlandırma
          </a>
        </div>
      </div>
      <div className="language h-20 w-full  py-[1%] ">
        <div className="  max-[1000px]:border-none  flex justify-center items-center gap-x-[5%]">
          <a href="" className="iletisim">
            <FaWhatsappSquare className="iletisim-item" />
          </a>
          <a href="" className="iletisim">
            <FaFacebookMessenger className="iletisim-item" />
          
          </a>
          <a href="" className="iletisim">
            <FaPhoneSquareAlt className="iletisim-item" />
          </a>
          <a href="" className="iletisim">
            <FaFacebookSquare className="iletisim-item" />
          </a>
          <a href="" className="iletisim">
            <FaInstagramSquare className="iletisim-item" />
          </a>
        </div>
        
        
      </div>
    </footer>
  );
}

export default Footer