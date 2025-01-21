// let pepe = [1,2,3, true, "lola",[1,2,3]]


// console.log(pepe[5,1])

// const ob = {
//   nombre: "lucas", 
//   edad:2,
//   hablar: function(frase){
//     console.log(frase)
//   }
// }

// console.log(ob["nombre"], ob.edad)
// console.log(ob.hablar("hola"))

// //============================================

// function sumar(num1, num2=20){
//   console.log(num1+num2)
// }

// sumar(5,30)

// function restar(num1, num2=0){
//   return num1-num2
// }

// console.log(restar(5,30))


// num nom @
// crear contacto
// buscar
// listar
// actualizar contacto
// eliminar

var contactos = [
  {
    nombre: "juan",
    numero: "3210846216",
    email: "juan_mail.com"
  },
  {
    nombre: "pepe",
    numero: "3210846261",
    email: "pepe_mail.com"
  },
  {
    nombre: "lola",
    numero: "3210846226",
    email: "lola_mail.com"
  }
]
console.log(contactos)

console.log(contactos[0]["nombre"])// primera forma de traer un valor de un objeto
console.log(contactos[0].nombre)// segunda forma de traer un valor de un arreglo

// for

function listar() {
  for (let i = 0; i <= contactos.length - 1; i++) {
    console.log(`nombre: ${contactos[i].nombre}`)
    console.log(`numero: ${contactos[i].numero}`)
    console.log(`correo: ${contactos[i].email}`)
  }
}

while(true){
  const op = menu()
  if (op === 1){
    console.log("crear usuario")
  }
  if (op === 2){
    console.log("crear usuario")
  }
  if (op === 3){
    console.log("listar usuario")
    listar()
  }
  if (op === 4){
    console.log("crear usuario")
  }
  if (op === 5){
    console.log("crear usuario")
  }
  if (op === 6){
    break
  }
}


function menu() {
  const op = parseInt(prompt("ingrese una opcion\n 1.crear \n 2.buscar \n 3.listar \n 4.actualizar \n 5.eliminar \n 6.salir"))
  return op
}