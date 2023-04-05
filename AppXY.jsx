import React from 'react';
import './AppXY.css';
import { useState } from 'react';

export default function AppXY() {

  const [xy, setXY] = useState({x : 0, y : 0})
  /* 
  const [x, setX] = useState(0);
  const [Y, setY] = useState(0); */

  const xyHandler = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setXY({x : mouseX, y: mouseY});
    
  }
/* 동적으로 움직이기 위해서 style로 한다. */
  return (
    <div className='container' onMouseMove={xyHandler} >
      <div className='pointer' style ={{
      transform : `translate(${xy.x}px, ${xy.y}px)`
    }} />
    </div>
  );
}