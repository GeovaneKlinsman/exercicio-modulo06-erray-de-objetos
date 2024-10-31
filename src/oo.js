//function Pokemon(name, type) {
//    this.name = name;
//    this.type = type;
//}

//const pikachu = new Pokemon('Pikachu', 'Electric');

class Pokemon {
    // encapsulamento com #
    #hp = 100;
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    attack(attackName) {
        console.log(`${this.nome} used ${attackName}`);
    }
    // método privado
    receiveDamage() {
        this.#hp -= 10;
    }
    // retorna o valor de hp privado
    showhp() {
        console.log(this.#hp);
    }
}
// class filha
class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Electric');
    }
    attack(attackName) {
        console.log(`${this.nome} used ${attackName} and did 10 damage`);
    }
}

const maxPikachu = new Pikachu();
maxPikachu.receiveDamage();
// testando o encapsulamento
maxPikachu.hp = 5000

maxPikachu.showhp();



const pikachu = new Pokemon('Pikachu', 'Electric');
pikachu.attack('Thunderbolt');
console.log(maxPikachu.hp);


console.log(pikachu);
console.log(maxPikachu);

console.log(pikachu instanceof Pokemon);
console.log(maxPikachu instanceof Pokemon);