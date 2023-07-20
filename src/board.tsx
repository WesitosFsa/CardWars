"use client"
import React, { useState } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./board.module.css"
import { useDrop } from 'react-dnd';
import Puntaje from './puntaje';

interface boardprops {
  turnopc: () => clasecarta
}

const Board: React.FC <boardprops> = ({turnopc}) => {
  const [carta1, setCarta1] = useState(new clasecarta("duelo", 0, "duelos", -1));
  const [carta2, setCarta2] = useState(new clasecarta("duelo", 0, "duelos", -1));

  let [{ diddrop, item }, drop] = useDrop(() => ({
    accept: 'draggable',
    drop: (item: clasecarta) => {
      setCarta1(item);
      const newcarta=turnopc();
      setCarta2(newcarta) 
      return item;
   
    },
    collect: (monitor) => ({
      diddrop: monitor.didDrop(),
      item: monitor.getDropResult(),
    }),
  }));
  const modelo={"agua":1}

  return (
    <div className={styles.puntaje}>
    <Puntaje Puntaje={modelo}/>
    <div className={styles.board} ref={drop}>
      <Carta carta={carta1} movible={false} removercarta={() => {}} />
      <Carta carta={carta2} movible={false} removercarta={() => {}} />
    </div>
    <Puntaje Puntaje={modelo}/>
    </div>
  );
};

export default Board;