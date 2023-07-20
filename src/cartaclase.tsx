"use client"
type tipocolor = {
  [key: string]: string;
};
class clasecarta {
  static mazo:clasecarta[];
    private color: string;
    private numero: number;
    private tipo: string;
    public moviendose: boolean;
    public id: number;
    constructor(color: string, numero: number, tipo: string, id: number) {
      this.color = color;
      this.numero = numero;
      this.tipo = tipo;
      this.moviendose = false;
      this.id = id;
    }
    static generarmazo(){
      clasecarta.mazo = []
      const tipos:tipocolor = {"agua":"azul","fuego":"roja","planta":"verde","agua2":"morada","fuego2":"naranja","planta2":"verdef"};
      const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let currentid =0
      for (let clave in tipos) {
        for (let j = 0; j < numeros.length; j++) {
          const tipo = clave;
          const numero = numeros[j];
          const color = tipos[clave]+numero
          clasecarta.mazo.push(new clasecarta(color,numero,tipo,currentid));
          currentid++;
          clasecarta.mazo.push(new clasecarta(color,numero,tipo,currentid));
          currentid++;
        }
      }
      console.log('mazoinicializado')
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
      const randomIndex = Math.floor(Math.random() * clasecarta.mazo.length);

      // Selecciona y elimina el elemento aleatorio del array copiado
      return clasecarta.mazo.splice(randomIndex, 1)[0];   
    }

    static haycartasenelmazo(): boolean{
      return clasecarta.mazo.length >0
    }
  }
  
  export default clasecarta;