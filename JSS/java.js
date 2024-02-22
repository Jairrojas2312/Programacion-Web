
//var nombre='Jair';
//var edad=21;
//var string='string 2';

//let apellidos ="Rojas";
//let estatura = 1.72;

//const ESCUELA ='TECNM ROQUE';

//console.log("nombre: "+nombre);
//console.log("edad: "+edad);
//console.log('string 2 '+string);

//console.log('apellidos: '+apellidos);
//console.log('estatura: '+estatura);

//console.log(ESCUELA);

//let string='Cadenas de texto';
//let booleans = true;
//let booleans2 =false;
//let number =10;
//let number2=11;
//let bigInt=BigInt (10);
//let symbols=Symbol('Simbolo 1');
//let arrays=[1,20,30,40];
//let arrays2=[1,"otros datos",false];
//let object ={};

//console.log(string,booleans,booleans2,number,number2,bigInt,symbols,arrays,arrays2,object);

//let student={
    //name:"Jair",
    //lastname:"Rojas",
    //age:21,
   // topics:['Progamacion Web ',' Bases de datos' ,],

    //assements:{
      //  webDelopmenrn:10,
        //math:9,
  //  },

//};

//console.log(student['name']);
//console.log(student.name);
//console.log(student.propety1);
//console.log(student);

//student.name='Estupido';
//student.age=24;

//console.log(student);

//let name ='jair';
//let age=21;
//let student={
    //name1:name,
  //  age1:age,

//};

//let{name1:nombre,age1:edad}=student;

//let{name1, ...student2}=student;

/*let obj1={
    propObj1:'Value 1',
};

let obj2={
    propObj2:'Value 2',
};

let obj3={
    //propObj3:'Value 3',
    //...obj1,    
  //  ...obj2,
//};

console .table(obj3);*/

/*
function nombreFuncion(){
  console.log('Ejecutando funcion "NombreFuncion');
}

function nombreConParametros(nombre,apellido,edad){
  let text="Nombre: "+nombre +", apellido: "+apellido + ", edad: "+edad;
  console.log(text);
}

nombreFuncion();

nombreConParametros('Jair','Rojas',21);


/**
 * Retornar el cuadrado de un dado
 *@param Number number
 *@returns
 */
/*
function square(number){
  return number*number;
}

/**
 * Retorna el cubo de un dado
 * @param Number number 
 * @returns 
 */

/*
function cube(number){
  return number*number*number;
}

console.log(square(8));
console.log(cube(8));*/

/*
let result = 0.1+0.2;

console.log(result);*/

// Ciclo For

/**
 * 
 * @param {number} tabla 
 * @param {Number} limite 
 */
function tablaMultiplicarFor(tabla,limite){

for(let index=0;index<limite;index++){
let number=tabla*index;
console.log(number);
}
}


//Ciclo While
/**
 * 
 * @param {number} tabla 
 * @param {Number} limite 
 */
function tablaMultiplicarWhile(tabla,limite){

let indexWhile=0;
while(indexWhile<limite){
  let number =indexWhile*tabla;
  console.log(number);
  indexWhile++;
}
}

//Ciclo Do While
/**
 * 
 * @param {number} tabla 
 * @param {Number} limite 
 */
function tablaMultiplicarDoWhile(tabla,limite){
let indexDoWhile=0;
do{
  let number = indexDoWhile*tabla;
  console.log(number);
  indexDoWhile++;
}
while(indexDoWhile<limite);
}

tablaMultiplicarDoWhile(7,5);
tablaMultiplicarFor(8,100);
tablaMultiplicarWhile(8,10);