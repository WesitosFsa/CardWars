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
  const iniciar =() => {
    setLoading(true);
    clasecarta.generarmazo();
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulando una carga de 2 segundos
  };

  useEffect(() => {
    iniciar();
  }, []); // Iniciar carga al montar el componente
  if (loading ){return       
    <p>Cargando...</p>
  }
  else{
    return (
      <div className={styles.container}>

            <button onClick={iniciar}>Iniciar</button>
            <DndProvider backend={HTML5Backend}>
              <Board />
              <Mano/>
            </DndProvider>
      </div>
    );
  }

};

export default Home;
