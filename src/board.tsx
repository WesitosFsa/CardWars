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
  const [estadocartas, setEstadocartas] = useState({ gancarta1: true, gancarta2: true });
  const [puntaje1, setPuntaje1] = useState({"agua":0,"fuego": 0,"planta":0});
  const [puntaje2, setPuntaje2] = useState({"agua":0,"fuego": 0,"planta":0});
  let [{ diddrop, item }, drop] = useDrop(() => ({
    accept: 'draggable',
    drop: (item: clasecarta) => {
      setCarta1(item);
      const newcarta = turnopc();
      setCarta2(newcarta);
      setEstadocartas({gancarta1: true, gancarta2: true});
      // Lógica de comparación de cartas y actualización del puntaje
      const resultado = compararCartas(item, newcarta);
      setTimeout(() => {
        if (resultado === 'ganar') {
          setEstadocartas({ gancarta1: true, gancarta2: false });
          const tipo=item.getTipo()
          const nuevopuntaje={...puntaje1, [tipo]:puntaje1[tipo]+1}
          console.log(nuevopuntaje)
          setPuntaje1(nuevopuntaje)
        } else if (resultado === 'perder') {
          setEstadocartas({ gancarta1: false, gancarta2: true });
        }else if (resultado === 'empate') {
          setEstadocartas({ gancarta1: false, gancarta2: false });
        }  
      }, 1000);
      

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
        <Carta carta={carta1} gris={!estadocartas.gancarta1} />
        <Carta carta={carta2} gris={!estadocartas.gancarta2}/>
      </div>
      {/*<Puntaje Puntaje={modelo} />*/}
    </div>
  );
};
export default Board;