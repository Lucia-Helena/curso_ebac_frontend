class Veiculo {
    constructor(marca) {
      this.marca = marca;
    }
  
    
    acelerar() {
      throw new Error("Método 'acelerar' deve ser implementado");
    }
  }
  
  
  class Carro extends Veiculo {
    acelerar() {
      return "Carro acelerando...";
    }
  }
  
  
  class Moto extends Veiculo {
    acelerar() {
      return "Moto acelerando...";
    }
  }
  
  
  const carro1 = new Carro("Toyota");
  const carro2 = new Carro("Honda");
  const moto1 = new Moto("Yamaha");
  
  
  console.log(`${carro1.marca}: ${carro1.acelerar()}`);
  console.log(`${carro2.marca}: ${carro2.acelerar()}`);
  console.log(`${moto1.marca}: ${moto1.acelerar()}`);