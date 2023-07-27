import React, { useEffect, useState } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from './board.module.css';
import { useDrop } from 'react-dnd';
import Puntaje from './puntaje';
interface boardprops {
  turnopc: () => clasecarta;
  actualizarestado: (estado:string) => void;
}
const Board: React.FC<boardprops> = ({ turnopc, actualizarestado }) => {
  const [carta1, setCarta1] = useState(new clasecarta('duelo', 0, 'duelos', -1));
  const [carta2, setCarta2] = useState(new clasecarta('duelo', 0, 'duelos', -1));
  const [estadocartas, setEstadocartas] = useState({ gancarta1: true, gancarta2: true });
  const [puntaje1, setPuntaje1] = useState({"roja":0,"azul": 0,"verde":0,"morada":0,"verdef": 0,"naranja":0, "duelo":0});
  const [puntaje2, setPuntaje2] = useState({"roja":0,"azul": 0,"verde":0,"morada":0,"verdef": 0,"naranja":0, "duelo":0});
  const change = () => {
    setEstadocartas({gancarta1: true, gancarta2: true});
      // Lógica de comparación de cartas y actualización del puntaje
      const resultado = compararCartas(carta1, carta2);
      setTimeout(() => {
        if (resultado === 'ganar') {
          setEstadocartas({ gancarta1: true, gancarta2: false });
          const color=carta1.getColor()
          const nuevopuntaje={...puntaje1, [color]:puntaje1[color]+1}
          console.log(nuevopuntaje)
          setPuntaje1(nuevopuntaje)
        } else if (resultado === 'perder') {
          setEstadocartas({ gancarta1: false, gancarta2: true });
          const color=carta2.getColor()
          const nuevopuntaje={...puntaje2, [color]:puntaje2[color]+1}
          setPuntaje2(nuevopuntaje)
        }else if (resultado === 'empate') {
          setEstadocartas({ gancarta1: false, gancarta2: false });
        }  
      }, 1000);
  }
  useEffect (change,[carta1,carta2]);
  let [{ diddrop, item }, drop] = useDrop(() => ({
    accept: 'draggable',
    drop: (item: clasecarta) => {
      setCarta1(item);
      const newcarta = turnopc();
      setCarta2(newcarta);
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

  const chekearpuntaje = (puntaje: {[color: string]: number}) => {
    for (const color in puntaje){
      if(puntaje[color]===3){
        return true;
      }
    }
    return false;
  }

  const gano = chekearpuntaje(puntaje1);
  const perdio = chekearpuntaje(puntaje2);
  if (gano) {
    actualizarestado('ganar');
  } else if(perdio){
    actualizarestado('perder');
  }

  return (
    <div className={styles.puntaje}>
      <Puntaje Puntaje={puntaje1} />
      <div className={styles.board} ref={drop}>
        <Carta carta={carta1} gris={!estadocartas.gancarta1} />
        <Carta carta={carta2} gris={!estadocartas.gancarta2}/>
      </div>
      <Puntaje Puntaje={puntaje2} />
    </div>
    
  );
};
export default Board;
