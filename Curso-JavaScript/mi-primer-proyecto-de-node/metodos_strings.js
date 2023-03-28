//Metodos mas usados para las cadenas de caracteres

//Longitud del string
let str = "Hola buen dia";
console.log(str.length)

//Partes de las cadenas
let slice_str = str.slice(3, 8)
console.log(slice_str)

let substring_str = str.slice(3, 8)
console.log(substring_str)


//Reemplazar parte del contenido de un string, solo la primera instancia
let cadena = "Esto es una cadena de texto";
console.log(cadena)
console.log(cadena.replace('una cadena de texto', 'un string'))

let str1 = "chau y chau";
console.log(str1.replace('chau','hola'))

//Reemplaza todas las instancias con el /g (global)
let str2 = "chau y chau";
console.log(str2.replace(/chau/g, 'hola'))

//Convertir letras a minusculas y mayusculas
let input = "Hola";
console.log(input.toLowerCase())
let input2 = "hola";
console.log(input2.toUpperCase())


//Concatenar cadenas
let cadena1 = "Primer cadena";
let cadena2 = "Segunda cadena";
console.log(cadena1.concat(" y ",cadena2))
console.log(cadena1 + " y " + cadena2)
console.log(`${cadena1} y ${cadena2}`)

//Eliminar espacios del principio y final
let str3 = " Hola - Bueno - Malo - Chau  "
console.log(str3.length)
console.log(str3.trim().length)
console.log(str3.trimStart().length)
console.log(str3.trimEnd().length)


//Obtener el caracter de cierta posicion
let str4 = "escribiendo un texto de prueba"
console.log(str4.charAt(17))
console.log(str4[17])


//Obtener la posicion de la palabra
let str5 = "Hola esto es una pruba Hola para ver Hola"
console.log(str5.indexOf("Hola"))
console.log(str5.lastIndexOf("Hola"))


//Verificar si exciste la cadena de caracteres dentro del texto
let str6 = " probando 1 2 3, probando probando, hola hola"
console.log(str6.includes("hola"))
//Muestra si empieza y termina con una palabra
console.log(str6.startsWith("hola"))
console.log(str6.endsWith("hola"))





