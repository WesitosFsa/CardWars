class clasecarta {
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
    
  }
  
  export default clasecarta;