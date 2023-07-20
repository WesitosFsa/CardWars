"use client"
import styles from './puntaje.module.css';
interface Scoreprops{
    Puntaje: {[key: string]: number};
}
const Puntaje: React.FC <Scoreprops> = ({Puntaje}) => {
    return (
    <div className={styles.Puntaje}>
    </div>
    );
}
export default Puntaje;