import React, { useState, useEffect } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./mano.module.css"

class compumano {
    public cartasEnMano: clasecarta[];
  //const [cartasEnMano, setCartasEnMano] = useState<clasecarta[]>([]);
  constructor (){
    const car1 = clasecarta.conseguircarta();
    const car2 = clasecarta.conseguircarta();
    const car3 = clasecarta.conseguircarta();
    const car4 = clasecarta.conseguircarta();
    const car5 = clasecarta.conseguircarta();
    this.cartasEnMano = [car1, car2, car3, car4, car5];

  };
  setCartasEnMano(borrador:clasecarta[]){
    this.cartasEnMano=borrador
  };
  removerCarta(carta: clasecarta){
    const borrador = this.cartasEnMano.filter(c => c.id !== carta.id);
    if (clasecarta.haycartasenelmazo()) {
      const nuevacarta = clasecarta.conseguircarta();
      borrador.push(nuevacarta);
    }
  };
  jugar():clasecarta{
    const randomcarta=Math.floor(Math.random() * this.cartasEnMano.length);
    const cartaajugar=this.cartasEnMano.splice(randomcarta, 1)[0];
    const nuevacarta=clasecarta.conseguircarta()
    this.cartasEnMano.push(nuevacarta);
    return cartaajugar;
    
  };

};

export default compumano;