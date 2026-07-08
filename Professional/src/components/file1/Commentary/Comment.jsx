import React from 'react'
import "./Comment.css"
import rasm5 from "./003.jpg"
const Comment = () => {
  return (
    <div className='comment'>
        <div className="chap">
            <h1>Наш магазин в Киеве </h1>
            <h2 className='a3'>ТЦ "Променада Центр,"</h2>
            <h2 className='a1'>вуличця Овручька, 18</h2>
            <h2 className='a2'>+38 (067) 198-33-77</h2>
            <p>Ежедневно с 10:00 до 20:00</p>
            <button>Посмотреть на карте</button>
        </div>
        <div className="ong">
            <img src={rasm5} alt="" />
        </div>
    </div>
  )
}

export default Comment