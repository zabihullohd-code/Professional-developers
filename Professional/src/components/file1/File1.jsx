import React from 'react'
import "./File1.css"
import nom from "./4.jpg"
import Navbar from './Navbar/Navbar'
import Swiper12 from './Swiper/Swiper12'
const File1 = () => {
  return (
   <div className="opshiy">

   
   <div className='navbar'>
        <select>
        <option value="">Рус</option>
        <option value="">Eng</option>
        <option value="">Uzb</option>
       </select>

       <i class="fa-solid fa-location-dot"></i>
       <a href="">Адрес</a>
       <i class="fa-solid fa-phone"></i>
       <a href="">(067) 198-33-77</a>

       <img src={nom} alt="" />

        <i className='fa-solid fa-search'></i>
        <a href="">Поиск</a>
        <i className='fa-solid fa-user'></i>
        <a href="">Войти</a>
        <i className='fa-solid fa-bag-shopping'></i>
        <a href="">Корзина</a>


        <div className="son"><p>2</p></div>

    </div>
   
   
    <Navbar />
    <Swiper12 />
   
   
   
   
   
   
   
   
   
   
   
   
   
   </div>
  )
}

   
   
   
   
export default File1