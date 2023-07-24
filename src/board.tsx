import React, { useState } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from './board.module.css';
import { useDrop } from 'react-dnd';
import Puntaje from './puntaje';
interface boardprops {
  turnopc: () => clasecarta;
}
const Board: React.FC<boardprops> = ({ turnopc }) => {
  const [carta1, setCarta1] = useState(new clasecarta('duelo', 0, 'duelos', -1));
  const [carta2, setCarta2] = useState(new clasecarta('duelo', 0, 'duelos', -1));
  const [puntaje, setPuntaje] = useState({ gancarta1: true, gancarta2: true });
  let [{ diddrop, item }, drop] = useDrop(() => ({
    accept: 'draggable',
    drop: (item: clasecarta) => {
      setCarta1(item);
      const newcarta = turnopc();
      setCarta2(newcarta);
      // Lógica de comparación de cartas y actualización del puntaje
      const resultado = compararCartas(item, newcarta);
      if (resultado === 'ganar') {
        setPuntaje({ gancarta1: true, gancarta2: false });
      } else if (resultado === 'perder') {
        setPuntaje({ gancarta1: false, gancarta2: true });
      }else if (resultado === 'empate') {
        setPuntaje({ gancarta1: false, gancarta2: false });
      }


      return item;
    },
    collect: (monitor) => ({
      diddrop: monitor.didDrop(),
      item: monitor.getDropResult(),
    }),
  }));
  const modelo = { agua: 1 };
  const compararCartas = (carta1: clasecarta, carta2: clasecarta): 'ganar' | 'perder' | 'empate' => {
    if (carta1.getTipo() === carta2.getTipo()) {
      if (carta1.getNumero() > carta2.getNumero()) {
        return 'ganar';
      } else if (carta1.getNumero() < carta2.getNumero()) {
        return 'perder';
      } else {
        return 'empate';
      }
    } else {
      if (
        (carta1.getTipo() === 'fuego' && carta2.getTipo() === 'planta') ||
        (carta1.getTipo() === 'agua' && carta2.getTipo() === 'fuego') ||
        (carta1.getTipo() === 'planta' && carta2.getTipo() === 'agua') 
      ) {
        return 'ganar';
      } else {
        return 'perder';
      }
    }
  };

  return (
    <div className={styles.puntaje}>
      {/*<Puntaje Puntaje={puntaje} />*/}
      <div className={styles.board} ref={drop}>
        <Carta carta={carta1} movible={false} removercarta={() => {}} />
        <Carta carta={carta2} movible={false} removercarta={() => {}} />
      </div>
      {/*<Puntaje Puntaje={modelo} />*/}
    </div>
  );
};
export default Board;