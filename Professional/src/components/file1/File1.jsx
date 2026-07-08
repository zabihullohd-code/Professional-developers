import React from 'react'
import "./File1.css"
import nom from "./4.jpg"
import Navbar from './Navbar/Navbar'
import Swiper12 from './Swiper/Swiper12'
import Brend from './Brend/Brend'
import Rek from './Rek/Rek'
import Rek2 from './Rek2/Rek2'
import Brend2 from './Brend2/Brend2'
import Brend3 from './Brend3/Brend3'
import Rek3 from './Rek3/Rek3'
import Brend4 from './Brend4/Brend4'
import Comment from './Commentary/Comment'
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
    <Rek />
    <Brend />
    <Rek2 />
    <Brend2 />
    <Brend3 />
    <Rek3 />
    <Brend4 />
    <Comment />
   
   
   
   
   
   
   
   
   
   
   
   
   
   </div>
  )
}

   
   
   
   
export default File1