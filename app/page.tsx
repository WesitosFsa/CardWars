// @ts-nocheck
"use client";
import React, { useState, useEffect } from 'react';
import Board from '../src/board';
import clasecarta from '@/src/cartaclase';
import Mano from '@/src/mano';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../styles/home.module.css';
import compumano from '@/src/computadora';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [turnodejugador, setturnodejugador] = useState(true);
  const [computadora,setComputadora]=useState(null);
  const juegapc = () => {
    setturnodejugador(false);
    const cartajugada = computadora.jugar();
    setturnodejugador(true);
    return cartajugada;
  };
  const iniciar =() => {
    clasecarta.generarmazo();
    setComputadora(new compumano())
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulando una carga de 2 segundos
  };
  

  useEffect(() => {
    if (loading){
        iniciar();
        console.log("asdasjdkasdja")
    }
  }, [loading]); // Iniciar carga al montar el componente
  if (loading ){return (    
    <p>Cargando...</p>)
  }
  else{
    return (
      <div className={styles.container}>

            <button onClick={iniciar}>Iniciar</button>
            <DndProvider backend={HTML5Backend}>
              <Board turnopc={juegapc} />
              <Mano miturno={turnodejugador}/> 
            </DndProvider>
      </div>
    );
  }

};

export default Home;
