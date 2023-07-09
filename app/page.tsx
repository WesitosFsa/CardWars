// @ts-nocheck
"use client";
import React, { useState, useEffect } from 'react';
import Board from '../src/board';
import clasecarta from '@/src/cartaclase';
import Mano from '@/src/mano';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../styles/home.module.css';
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [vectorcartas, setVectorCartas] = useState<clasecarta[]>([]);
  const iniciar = () => {
    setLoading(true);
    setTimeout(() => {
      const car1 = clasecarta.conseguircarta();
      const car2 = clasecarta.conseguircarta();
      const car3 = clasecarta.conseguircarta();
      const car4 = clasecarta.conseguircarta();
      const car5 = clasecarta.conseguircarta();
      const nuevoVectorCartas = [car1, car2, car3, car4, car5];
      setVectorCartas(nuevoVectorCartas);
      setLoading(false);
    }, 2000); // Simulando una carga de 2 segundos
  };

  useEffect(() => {
    iniciar();
  }, []); // Iniciar carga al montar el componente

  return (
    <div className={styles.container}>
      <h1>¡Bienvenido al tablero de cartas!</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <button onClick={iniciar}>Iniciar</button>
          <DndProvider backend={HTML5Backend}>
            <Board />
            <Mano cartas={vectorcartas} />
          </DndProvider>
        </>
      )}
    </div>
  );
};

export default Home;
