"use client"
import React from 'react';
import Board from '../src/board';
import clasecarta from '@/src/cartaclase';
import Mano from "@/src/mano"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const Home = () => {
  const carta1= new clasecarta("duelo",0,"planta")
  const carta2= new clasecarta("duelo",0,"agua")
  const car1 = clasecarta.conseguircarta()
  const car2 = clasecarta.conseguircarta()
  const car3 = clasecarta.conseguircarta()
  const car4 = clasecarta.conseguircarta()
  const car5 = clasecarta.conseguircarta()
  const vectorcartas = [car1,car2,car3,car4,car5]

  return (
    
    <div>
       <h1>¡Bienvenido al tablero de cartas!</h1>
      <DndProvider backend={HTML5Backend}>
        <Board/>
        <Mano cartas={vectorcartas}></Mano>
      </DndProvider>
     
    </div>
  );
};

export default Home;
