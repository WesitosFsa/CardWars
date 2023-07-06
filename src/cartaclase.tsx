"use client"

class clasecarta {
  static mazo:clasecarta[]=[new clasecarta ("roja1",1,"fuego"),new clasecarta ("roja2",2,"fuego"),new clasecarta ("roja7",7,"fuego"),new clasecarta ("azul5",5,"agua"),new clasecarta ("azul8",8,"agua"), new clasecarta("verde1",1,"planta"),new clasecarta ("verde2",2,"planta"),new clasecarta ("verde3",3,"planta"),new clasecarta ("verde4",4,"planta")]
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