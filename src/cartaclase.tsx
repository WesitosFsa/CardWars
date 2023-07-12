"use client"
type tipocolor = {
  [key: string]: string;
};
class clasecarta {
  static mazo:clasecarta[];
    private color: string;
    private numero: number;
    private tipo: string;
    constructor(color: string, numero: number, tipo: string) {
      this.color = color;
      this.numero = numero;
      this.tipo = tipo;
    }
    static generarmazo(){
      clasecarta.mazo = []
      const tipos:tipocolor = {"agua":"azul","fuego":"roja","planta":"verde"};
      const numeros = [1, 2];
      for (let clave in tipos) {
        for (let j = 0; j < numeros.length; j++) {
          const tipo = clave;
          const numero = numeros[j];
          const color = tipos[clave]+numero
          clasecarta.mazo.push(new clasecarta(color,numero,tipo));
          clasecarta.mazo.push(new clasecarta(color,numero,tipo));
        }
      }
    };
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