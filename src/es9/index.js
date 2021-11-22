const obj = {
    name: 'Fernando',
    age: 30,
    country: 'MX'
};

//utilizar operador de reposo para separar elementos
let {name, ...all} = obj;
//con all tenemos todos los objetos a disposicion
console.log(name,all);


//usando propagacion podemos unir objetos a un nuevo objeto
const obj = {
    name: 'Fernando',
    age: 30,
};
const obj1 = {
    //operador de propagacion para unir obj
    ...obj,
    country: 'MX'
};
console.log(obj1);


//Saber cuando ha terminado el llamado
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        // ? resolve('Hello World')
        ? setTimeout(() => resolve('hello World'), 3000)
        : reject(new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(err => console.log(error))
    //mostrar que se ejecutó la respuesta
    .finally(() =>console.log('Finalizado'))



//Agrupar y manejar los REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

//permitir si estan los datos establecidos sobre el regex
const match = regexData.exec('2021-09-22');

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
