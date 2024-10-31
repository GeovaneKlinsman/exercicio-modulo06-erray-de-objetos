// spread operator

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0);
    return soma;
}

console.log(somarComRest(10, 20, 30))

// spread operator

const numeros = [1, 2, 3, 4];
console.log(...numeros)

const timesDeFutebolDeSp = ['São Paulo', 'Corinthians', 'Palmeiras', 'Santos'];
const timesDeFutebolDoRio = ['Flamengo', 'Vasco', 'Botafogo', 'Fluminense'];

//const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

console.log(timesDeFutebol)

const carroDoMax = {
    marca: 'Dodge',
    modelo: 'Charger R/T',
    motor: '5.2 V8',
    ano: 1977,
}

const carroDoLuiz = {
    ...carroDoMax,
    ano: 1978,
    modelo: 'Dart',
}

console.log(carroDoMax)
console.log(carroDoLuiz)

// destructuring
//Extrai a propriedade 'motor' do objeto 'carroDoMax'
const motorDoCarroDoMax = carroDoMax.motor;

console.log(motorDoCarroDoMax)

// Extrai e renomeia as propriedades 'ano' e 'modelo' do objeto 'carroDoMax'
const { ano: anoDoCarroDoMax, modelo: modeloDoCarroDoMax } = carroDoMax;

// Extrai e renomeia as propriedades 'ano' e 'modelo' do objeto 'carroDoLuiz'
const { ano: anoDoCarroDoLuiz, modelo: modeloDoCarroDoLuiz } = carroDoLuiz;

console.log(carroDoMax)
console.log(carroDoLuiz)

// Destructuring on arrays
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)
