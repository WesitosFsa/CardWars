"use client"
import React, { useState } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./board.module.css"
import { useDrop } from 'react-dnd';

const Board: React.FC = () => {
  const [carta1, setCarta1] = useState(new clasecarta("duelo", 0, "duelos", -1));
  const [carta2, setCarta2] = useState(new clasecarta("duelo", 0, "duelos", -1));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'draggable',
    drop: (item: clasecarta) => {
      console.log(item);
      if (carta1.id === -1) {
        setCarta1(item);
      } else if (carta2.id === -1) {
        setCarta2(item);
      }
      return item;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div className={styles.board} ref={drop}>
      <Carta carta={carta1} movible={false} removercarta={() => {}} />
      <Carta carta={carta2} movible={false} removercarta={() => {}} />
    </div>
  );
};

export default Board;