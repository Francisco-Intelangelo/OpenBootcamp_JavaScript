let nombre = "Francisco";
let apellido = "Intelangelo";
let estudiante = (nombre+" "+apellido);
console.log(estudiante)

let estudianteMayus = estudiante;
console.log(estudianteMayus.toUpperCase())

let estudianteMinus = estudiante;
console.log(estudianteMinus.toLowerCase())

let espacioEstudiante = estudiante;
console.log(espacioEstudiante.length)

let primerLetraNombre = nombre;
console.log(primerLetraNombre.charAt())

let ultimaLetraApellido = apellido;
console.log(ultimaLetraApellido.charAt(10))

let espaciosOff = estudiante;
console.log(espaciosOff.trim())

let var1 = (estudiante.includes(nombre))
console.log(var1)