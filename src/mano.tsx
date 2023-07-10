import React from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./mano.module.css"

interface manoprops{
    cartas:clasecarta[]
}
  const Mano: React.FC<manoprops> = ({cartas}) => {
    return (
      <div className={styles.mano}>
        {
            cartas.map((carta)=>(<Carta carta={carta} movible={true}></Carta>))
        }
      </div>
    );
  };

export default Mano;
