"use client"
import React, { useState } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./board.module.css"
import { useDrop } from 'react-dnd';

interface boardprops {
  turnopc: () => void
}

const Board: React.FC <boardprops> = ({turnopc}) => {
  const [carta1, setCarta1] = useState(new clasecarta("duelo", 0, "duelos", -1));
  const [carta2, setCarta2] = useState(new clasecarta("duelo", 0, "duelos", -1));

  const [{ diddrop, item }, drop] = useDrop(() => ({
    accept: 'draggable',
    drop: (item: clasecarta) => {
      setCarta1(item);
      return item;
    },
    collect: (monitor) => ({
      diddrop: monitor.didDrop(),
      item: monitor.getDropResult(),
    }),
  }));
  
  if (diddrop){
    turnopc();
  }

  return (
    <div className={styles.board} ref={drop}>
      <Carta carta={carta1} movible={false} removercarta={() => {}} />
      <Carta carta={carta2} movible={false} removercarta={() => {}} />
    </div>
  );
};

export default Board;