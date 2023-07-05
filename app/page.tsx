import React from 'react';
import Board from '../src/board';
import clasecarta from '@/src/cartaclase';
import Mano from "@/src/mano"
const Home = () => {
  const carta1= new clasecarta("duelo",0,"planta")
  const carta2= new clasecarta("duelo",0,"agua")
  const car1 = new clasecarta ("roja",8,"planta")
  const car2 = new clasecarta ("azul",8,"planta")
  const car3 = new clasecarta ("verde",8,"planta")
  const car4 = new clasecarta ("rojaa",8,"planta")
  const car5 = new clasecarta ("azull",8,"planta")
  const vectorcartas = [car1,car2,car3,car4,car5]

  return (
    <div>
      <h1>¡Bienvenido al tablero de cartas!</h1>
      <Board carta1={carta1} carta2={carta2}/>
      <Mano cartas={vectorcartas}></Mano>
    </div>
  );
};

export default Home;
