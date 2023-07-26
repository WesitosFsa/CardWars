import styles from './puntaje.module.css';
import Image from 'next/image';

interface Scoreprops {
  Puntaje: { [key: string]: number };
}
const Puntaje: React.FC<Scoreprops> = ({ Puntaje }) => {
  const puntos = () => {
    let puntosimagenes=[];
    for (const color in Puntaje) {
      for (let i = 0; i < 3; i++) {
      if (Puntaje[color]>i){
        puntosimagenes.push(<img src={"/punto_"+color+".png"}></img>)
      }
      else{
        puntosimagenes.push(<div className={styles.empty}></div>)
      }
        
      }
    }
    return puntosimagenes
  }
  return (
    <div className={styles.Puntaje}>
      {puntos()
      }
      <div className={styles.puntajeItem}>
      </div>
      
    </div>
  );
};

export default Puntaje;
