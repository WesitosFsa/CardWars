"use client"
import React, { useState } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./board.module.css"
import { useDrop } from 'react-dnd';


const Board: React.FC = () => {
  const [carta1,setcarta1]=useState(new clasecarta("duelo",0,"duelos")) 
  const [carta2,setcarta2]=useState(new clasecarta("duelo",0,"duelos"))   
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'draggable',
    drop: (item:clasecarta) => {
      setcarta1(item);// Accede a los datos transferidos desde el componente arrastrable
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  return (
    <div className={styles.board} ref={drop}>
      <Carta carta={carta1} />
      <Carta carta={carta2} />
    </div>
  );
};

export default Board;
