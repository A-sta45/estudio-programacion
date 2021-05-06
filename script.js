//String

/*
let myName = "Thomas";
let myLastName = "Solano";
let myAllName="";
//Texto, propiedades es lenght

console.log(myName.length);

// Metodos charAt()

console.log(myName.charAt(0));
console.log(myName.charAt(5));
console.log(myName[2]);
console.log(myName.charAt(myName.length-1));

//to upper case y to lower case
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//operacion concatenar:
myAllName = myName+" "+myLastName;
console.log(myAllName);

//metodo trim() elimina los espacios al inicio y al final
myAllName = "                            "+myAllName + "                      ";
console.log(myAllName);
console.log(myAllName.trim());

// metodo split()
console.log(myName.split(""));

for(let i=0;i<myName.length;i++){
    console.log(myName[i]);
}
*/
//recibir un nombre e imprimir cada letra en mayuscula.
let youName =  'Leon'

for(let contador=0;contador<youName.length;contador++){
    console.log(youName.toUpperCase().charAt(contador))
}