//Normal JS
function newFuncion(name,age,country){
    var name = name || 'Fer';
    var age = age || 21;
    var country = country || 'MX';
    console.log(name,age,country);
}

//ES6

function newFuncion2(name='Fer',age=21,country='MX'){
    console.log(name,age,country);
}

//Para llamar

//toma los elementos por defecto
newFuncion2()
//con elementos especificos
newFuncion2('Fernando', 24, 'CO');


//Template Literals
//Separan o unen varios elementos

//SIN
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//CON
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);




// LET y CONST, Multilínea, Spread Operator y Desestructuración

//ANTES
let lorem = "Quiero aprender ECMAScript y ser genial \n"
+ "una nueva aventura";

//AHORA
let lorem2=`otra frase epica super genial
ahora es otra frase diferente
`;
console.log(lorem);
console.log(lorem2);

//Destructuracion de elementos
//SIN
let person = {
    'name': 'John',
    'age': 34,
    'country': 'MX'
}
console.log(person.name,person.age,person.country);

//CON
let {name,age,country} = person;
console.log(name,age,country);


//Operador de propagacion para expandir elementos
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Jessica', 'Camila']

let education = ['David', ...team1, ...team2];
console.log(education);

//Elementos para guardar en memoria

//ANTES
var hola = 'Hola';

//Es accesible
{
    var globalVar = "Global";
}

//no es accesible por fuera
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//uso de Const, no permite reasignar
const a = 'b';


// Arrow Functions, Promesas y Parámetros en objetos

//Asignacion de objetos
let name = 'Fer';
let age = 21;

//ANTES
obj = {name: name, age: age};

//AHORA
obj2= { name , age};
console.log(obj2);

const names = [
    {name: 'Fer', age: 21},
    {name: 'Arrow', age:24}
];
//ANTES CON FUNCION ANONIMA
let listOfNames = names.map(function(item){
    console.log(item.name);
})

//AHORA CON ARROW FUNCTION
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
}

const listOfNames4 = name => {
}

const square = num => num * num;

//PROMESAS PARA TRABAJAR EL ASINCRONISMO
const helloPromise = () => {
    //va a resolver o ser rechazada
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Fine!!");
        } else{
            reject("Not working!");
        }
    });
}
//Ejecutar promesa
helloPromise()
//retorna el valor
.then(response =>console.log(response))
.then(response =>console.log("Hola"))
//atrapa el error
.catch(error =>console.log(error))





//Clases, Módulos y Generadores
class calculator{
    //constructor para inicializar la clase
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    //Metodo de suma
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

//trabajar objetos y herencia
const calc = new calculator();
console.log(calc.sum(2,2));


//IMPORTAR Y EXPORTAR MODULOS
import {hello} from './module';

hello();

//GENERADORES
function* helloWorld() {
    //segun el algoritmo retorna los valores
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World!';
    }
};

const generatorHello = helloWorld();
//permite ejecutar la logica y obtener valor, y a la siguiente recuerda el valor
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);