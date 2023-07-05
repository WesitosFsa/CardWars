import React from 'react';
import styles from './carta.module.css';
import clasecarta from "./cartaclase";

interface CartaProps {
    carta:clasecarta
  }
  
  const Carta: React.FC<CartaProps> = ({carta}) => {
  const imagen = `/carta_${carta.getColor()}.png`;

  return (
    <div className={styles.carta}>
      <img src={imagen} alt={carta.getColor()} />
      <span>{carta.getNumero()}</span>
    </div>
  );
};

export default Carta;
