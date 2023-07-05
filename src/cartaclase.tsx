"use client"

class clasecarta {
  static mazo:clasecarta[]=[new clasecarta ("roja",8,"planta"),new clasecarta ("azul",8,"planta"),new clasecarta ("verde",8,"planta"),new clasecarta ("rojaa",8,"planta"),new clasecarta ("azull",8,"planta"), new clasecarta("azull",4,"agua"),new clasecarta ("roja",8,"planta"),new clasecarta ("roja",8,"planta"),new clasecarta ("roja",8,"planta"),new clasecarta ("roja",8,"planta"),new clasecarta ("roja",8,"planta"),new clasecarta ("roja",8,"planta")]
    private color: string;
    private numero: number;
    private tipo: string;
    constructor(color: string, numero: number, tipo: string) {
      this.color = color;
      this.numero = numero;
      this.tipo = tipo;
    }
  
    public getColor(): string {
      return this.color;
    }
  
    public getNumero(): number {
      return this.numero;
    }
  
    public getTipo(): string {
      return this.tipo;
    }
    static conseguircarta():clasecarta{
      // Genera un índice aleatorio
      console.log(this.mazo)
      const randomIndex = Math.floor(Math.random() * this.mazo.length);

      // Selecciona y elimina el elemento aleatorio del array copiado
      return this.mazo.splice(randomIndex, 1)[0];
            

    }
  }
  
  export default clasecarta;