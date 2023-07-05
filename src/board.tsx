import React from 'react';
import Carta from './carta';
import clasecarta from './cartaclase';
import styles from "./board.module.css"

interface BoardProps {
    carta1: clasecarta;
    carta2: clasecarta;
  }
  const Board: React.FC<BoardProps> = ({ carta1, carta2 }) => {
    return (
      <div className={styles.board}>
          <Carta carta={carta1} />
          <Carta carta={carta2} />
      </div>
    );
  };

export default Board;
