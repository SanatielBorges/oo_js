// Classe base
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  realizarAcao() {
    console.log(`${this.nome} está fazendo algo!`);
  }

  detalhes() {
    return `${this.nome} tem ${this.idade} anos.`;
  }
}

// Classe Cachorro que herda de Animal
class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  realizarAcao() {
    console.log(`${this.nome}, um ${this.raca}, está correndo no parque!`);
  }
}

// Classe Gato que herda de Animal
class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  realizarAcao() {
    console.log(`${this.nome}, um gato ${this.cor}, está subindo na árvore!`);
  }
}

// Criando instâncias
const cachorro1 = new Cachorro("Rex", 5, "Labrador");
const cachorro2 = new Cachorro("Spike", 3, "Bulldog");
const gato1 = new Gato("Mimi", 2, "preto");

// Chamando métodos
console.log(cachorro1.detalhes());
cachorro1.realizarAcao();

console.log(cachorro2.detalhes());
cachorro2.realizarAcao();

console.log(gato1.detalhes());
gato1.realizarAcao();
