import React, { useState, useEffect } from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./mano.module.css"

interface manoprops{
  miturno: boolean;
}

const Mano: React.FC < manoprops > = ({miturno}) => {
  const [cartasEnMano, setCartasEnMano] = useState<clasecarta[]>([]);
  const [elementoid, setelemntoid]=useState(0);
  const iniciar = () => {
    const car1 = clasecarta.conseguircarta();
    const car2 = clasecarta.conseguircarta();
    const car3 = clasecarta.conseguircarta();
    const car4 = clasecarta.conseguircarta();
    const car5 = clasecarta.conseguircarta();
    const nuevoVectorCartas = [car1, car2, car3, car4, car5];
    setCartasEnMano(nuevoVectorCartas);
  };

  useEffect(() => {
    iniciar();
  }, []);

  const removerCarta = (carta: clasecarta) => {
    const borrador = cartasEnMano.filter(c => c.id !== carta.id);
    if (clasecarta.haycartasenelmazo()) {
      const nuevacarta = clasecarta.conseguircarta();
      borrador.push(nuevacarta);
    }
    setCartasEnMano(borrador);
  };
  console.log(miturno)
  return (
    <div className={styles.mano}>
      {cartasEnMano.map((carta, index) => (
        <Carta key={`${carta.id}_${new Date().getTime()}`} carta={carta} movible={miturno} removercarta={removerCarta} />
      ))}
    </div>
  );
};

export default Mano;