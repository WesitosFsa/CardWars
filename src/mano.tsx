import React, { useState, useEffect } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./mano.module.css"
  const Mano: React.FC = ({}) => {
    const [cartasenmano, setcartasdemano] = useState<clasecarta[]>([]);
      const iniciar =() => {
        const car1 = clasecarta.conseguircarta();
        const car2 = clasecarta.conseguircarta();
        const car3 = clasecarta.conseguircarta();
        const car4 = clasecarta.conseguircarta();
        const car5 = clasecarta.conseguircarta();
        const nuevoVectorCartas = [car1, car2, car3, car4, car5];
        setcartasdemano(nuevoVectorCartas)
    };
  useEffect(() => {
    iniciar();
  }, []); // Iniciar carga al montar el componente
  const removercarta = (Carta: clasecarta) => {
    const borrador = cartasenmano.filter(carta => carta.id !== Carta.id);
    if (clasecarta.haycartasenelmazo()){
      const nuevacarta = clasecarta.conseguircarta();
      borrador.push(nuevacarta)
    }
    console.log(borrador);
    setcartasdemano(borrador)
  }
    return (
      <div className={styles.mano}>
        {
             cartasenmano.map((carta)=>(<Carta carta={carta} movible={true} removercarta={removercarta} ></Carta>))
        }
      </div>
    );
  };

export default Mano;
