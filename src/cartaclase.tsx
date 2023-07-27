"use client"
type color = 'roja' | 'azul' | 'morada' | 'naranja' |  'verde' | 'verdef' | 'duelo'
type tipocolordict = {
  [key:string]: color[];
};
class clasecarta {
  static mazo:clasecarta[];
    private color: color;
    private numero: number;
    private tipo: string;
    public moviendose: boolean;
    public id: number;
    constructor(color: color, numero: number, tipo: string, id: number) {
      this.color = color;
      this.numero = numero;
      this.tipo = tipo;
      this.moviendose = false;
      this.id = id;
    }
    static generarmazo(){
      clasecarta.mazo = []
      const tipos:tipocolordict = {"agua":["azul","morada"],"fuego":["roja","naranja"],"planta":["verde","verdef"]};
      const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let currentid =0
      for (let clave in tipos) {
        for (let j = 0; j < numeros.length; j++) {
          for(let tip of tipos[clave])
          {
          const tipo = clave;
          const numero = numeros[j];
          const color = tip;
          clasecarta.mazo.push(new clasecarta(color,numero,tipo,currentid));
          currentid++;
          clasecarta.mazo.push(new clasecarta(color,numero,tipo,currentid));
          currentid++;
          }
        }
      }
      console.log('mazoinicializado')
    };
    
    public getImage(): string{
      return "/carta_"+this.getColor()+this.getNumero()+".png";
    }
    public getColor(): color{ 
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
