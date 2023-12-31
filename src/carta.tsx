"use client"
import React, { useState } from 'react';
import styles from './carta.module.css';
import clasecarta from "./cartaclase";
import { useDrag } from 'react-dnd';

interface CartaProps {
  carta: clasecarta,
  movible?: boolean,
  removercarta?: (carta: clasecarta) => void,
  gris?: boolean,
}

const Carta: React.FC<CartaProps> = ({ carta, movible=false, removercarta=() => {}, gris=false }) => {
  const imagen = carta.getImage();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'draggable',
    item: carta,
    canDrag: movible,
    end: (cartadropeada, monitor) => {
      if (monitor.didDrop()) {
        removercarta(cartadropeada);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={styles.carta +  (gris ? " " + styles.grayscale:"") } ref={drag}>
      <img src={imagen} alt={carta.getColor()} />
      {carta.getTipo() !== "duelos" && <span>{carta.getNumero()}</span>}
    </div>
  );
};

export default Carta;


