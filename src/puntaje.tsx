import styles from './puntaje.module.css';
import Image from 'next/image';

interface Scoreprops {
  Puntaje: { [key: string]: number };
}
const Puntaje: React.FC<Scoreprops> = ({ Puntaje }) => {
  return (
    <div className={styles.Puntaje}>
      <div className={styles.puntajeItem}>
        <Image
          src={`/images/${Puntaje['ganadas'] > Puntaje['perdidas'] ? 'ganaste.png' : Puntaje['ganadas'] < Puntaje['perdidas'] ? 'perdiste.png' : 'empate.png'}`}
          alt="Resultado"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.puntajeItem}>
        <p>Ganadas: {Puntaje['ganadas']}</p>
      </div>
      <div className={styles.puntajeItem}>
        <p>Perdidas: {Puntaje['perdidas']}</p>
      </div>
    </div>
  );
};

export default Puntaje;
