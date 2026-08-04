"use strict";

const levels = {
  easy: {
    label: "Fácil", seconds: 90, topic: "FUNDAMENTOS",
    challenges: [
      {title:"Variable de energía",objective:'Declara una variable inmutable llamada energia con valor 100. Después imprime exactamente "Energía: 100" usando println!("Energía: {}", energia).',starter:"fn main() {\n    // Declara energia e imprime el mensaje\n\n}",solution:"fn main() {\n    let energia = 100;\n    println!(\"Energía: {}\", energia);\n}",output:"Energía: 100",topic:"Variables",advice:"Repasa el módulo de variables. Usa let energia = 100; y pasa energia al marcador {} de println!.",valid:code=>/\blet\s+energia(?:\s*:\s*i32)?\s*=\s*100\s*;/.test(code)&&/println!\s*\(\s*"Energia: \{\}"\s*,\s*energia\s*\)\s*;/.test(code)},
      {title:"Mensaje de inicio",objective:'Usa println! para mostrar exactamente "Rust listo".',starter:'fn main() {\n    println!("");\n}',solution:'fn main() {\n    println!("Rust listo");\n}',output:"Rust listo",topic:"Impresión en pantalla",advice:"println! es una macro. Escribe el texto entre comillas, dentro de los paréntesis, y termina la línea con punto y coma.",valid:code=>/println!\s*\(\s*"Rust listo"\s*\)\s*;/.test(code)},
      {title:"Acceso por nivel",objective:'Crea un if que compruebe si nivel es mayor o igual que 5. Dentro de sus llaves imprime exactamente "Acceso concedido" usando println!("Acceso concedido").',starter:"fn main() {\n    let nivel = 7;\n    // Crea la condición e imprime el mensaje\n\n}",solution:'fn main() {\n    let nivel = 7;\n    if nivel >= 5 {\n        println!("Acceso concedido");\n    }\n}',output:"Acceso concedido",topic:"Condiciones",advice:"Escribe if nivel >= 5 y coloca println! dentro de las llaves de la condición.",valid:code=>/\bif\s+nivel\s*>=\s*5\s*\{[\s\S]*?println!\s*\(\s*"Acceso concedido"\s*\)\s*;/.test(code)},
      {title:"Rango completo",objective:'Usa for numero in 1..=5 y, dentro del ciclo, imprime cada número con println!("{}", numero). Deben mostrarse del 1 al 5.',starter:"fn main() {\n    // Crea el ciclo e imprime cada número\n\n}",solution:'fn main() {\n    for numero in 1..=5 {\n        println!("{}", numero);\n    }\n}',output:"1\n2\n3\n4\n5",topic:"Ciclos y rangos",advice:"El rango inclusivo 1..=5 contiene ambos extremos. Dentro de las llaves del for, imprime numero con el marcador {}.",valid:code=>/\bfor\s+numero\s+in\s+1\s*\.\.=\s*5\s*\{[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*numero\s*\)\s*;/.test(code)},
      {title:"Puntos mutables",objective:'Crea puntos con let mut y valor 10, aumenta 5 mediante += y finalmente imprime 15 usando println!("{}", puntos).',starter:"fn main() {\n    // Crea, aumenta e imprime puntos\n\n}",solution:'fn main() {\n    let mut puntos = 10;\n    puntos += 5;\n    println!("{}", puntos);\n}',output:"15",topic:"Mutabilidad",advice:"Agrega mut después de let, modifica puntos con += 5 y luego pasa puntos al marcador {} de println!.",valid:code=>/let\s+mut\s+puntos\s*=\s*10\s*;/.test(code)&&/puntos\s*\+=\s*5\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*puntos\s*\)\s*;/.test(code)}
    ]
  },
  medium: {
    label: "Medio", seconds: 120, topic: "DESARROLLO",
    challenges: [
      {title:"Función sumar",objective:'Declara fn sumar(a: i32, b: i32) -> i32 que devuelva a + b. En main imprime el resultado de sumar(4, 6) con println!("{}", sumar(4, 6)).',starter:"// Declara la función sumar\n\nfn main() {\n    // Imprime sumar(4, 6)\n}\n",solution:"fn sumar(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!(\"{}\", sumar(4, 6));\n}",output:"10",topic:"Funciones y retornos",advice:"La última expresión a + b se devuelve sin punto y coma. Después llama sumar(4, 6) dentro de println!.",valid:code=>/fn\s+sumar\s*\(\s*a\s*:\s*i32\s*,\s*b\s*:\s*i32\s*\)\s*->\s*i32\s*\{[\s\S]*?\ba\s*\+\s*b/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*sumar\s*\(\s*4\s*,\s*6\s*\)\s*\)\s*;/.test(code)},
      {title:"Vector dinámico",objective:'Crea numeros como vec![1, 2, 3] mutable, agrega 4 con push y muestra el vector completo usando println!("{:?}", numeros).',starter:"fn main() {\n    // Crea, modifica e imprime el vector\n\n}",solution:'fn main() {\n    let mut numeros = vec![1, 2, 3];\n    numeros.push(4);\n    println!("{:?}", numeros);\n}',output:"[1, 2, 3, 4]",topic:"Vectores",advice:"Un Vec debe ser mutable para usar push. El formato {:?} permite imprimir el vector completo para depuración.",valid:code=>/let\s+mut\s+numeros\s*=\s*vec!\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*;/.test(code)&&/numeros\s*\.\s*push\s*\(\s*4\s*\)\s*;/.test(code)&&/println!\s*\(\s*"\{:\?\}"\s*,\s*numeros\s*\)\s*;/.test(code)},
      {title:"String ampliable",objective:'Crea mensaje con String::from("Hola"), añade " Rust" usando push_str y muestra exactamente "Hola Rust" con println!("{}", mensaje).',starter:"fn main() {\n    // Crea, amplía e imprime el String\n\n}",solution:'fn main() {\n    let mut mensaje = String::from("Hola");\n    mensaje.push_str(" Rust");\n    println!("{}", mensaje);\n}',output:"Hola Rust",topic:"String",advice:"String debe ser mutable para usar push_str. Al final pasa mensaje al marcador {} de println!.",valid:code=>/let\s+mut\s+mensaje\s*=\s*String\s*::\s*from\s*\(\s*"Hola"\s*\)\s*;/.test(code)&&/mensaje\s*\.\s*push_str\s*\(\s*" Rust"\s*\)\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*mensaje\s*\)\s*;/.test(code)},
      {title:"Código HTTP",objective:'Usa match codigo. El caso 200 debe ejecutar println!("OK") y el caso _ debe ejecutar println!("Error"). Con codigo = 200 la salida será "OK".',starter:"fn main() {\n    let codigo = 200;\n    // Crea el match e imprime ambos casos\n\n}",solution:'fn main() {\n    let codigo = 200;\n    match codigo {\n        200 => println!("OK"),\n        _ => println!("Error"),\n    }\n}',output:"OK",topic:"Pattern matching",advice:"match debe cubrir todas las posibilidades. Usa println! en cada brazo y _ como caso general.",valid:code=>/match\s+codigo\s*\{[\s\S]*?200\s*=>\s*println!\s*\(\s*"OK"\s*\)[\s\S]*?_\s*=>\s*println!\s*\(\s*"Error"\s*\)/.test(code)},
      {title:"Modelo Usuario",objective:'Declara struct Usuario con nombre: String y nivel: u32. En main crea usuario con nombre "Ana" y nivel 3; imprime "Ana - 3" usando println!("{} - {}", usuario.nombre, usuario.nivel).',starter:"// Declara la estructura Usuario\n\nfn main() {\n    // Crea usuario e imprime sus campos\n}\n",solution:'struct Usuario {\n    nombre: String,\n    nivel: u32,\n}\n\nfn main() {\n    let usuario = Usuario { nombre: String::from("Ana"), nivel: 3 };\n    println!("{} - {}", usuario.nombre, usuario.nivel);\n}',output:"Ana - 3",topic:"Estructuras",advice:"Define ambos campos, crea una instancia Usuario y accede a los campos mediante usuario.nombre y usuario.nivel.",valid:code=>/struct\s+Usuario\s*\{[\s\S]*?nombre\s*:\s*String\s*,?[\s\S]*?nivel\s*:\s*u32/.test(code)&&/let\s+usuario\s*=\s*Usuario\s*\{[\s\S]*?String\s*::\s*from\s*\(\s*"Ana"\s*\)[\s\S]*?nivel\s*:\s*3/.test(code)&&/println!\s*\(\s*"\{\} - \{\}"\s*,\s*usuario\.nombre\s*,\s*usuario\.nivel\s*\)\s*;/.test(code)}
    ]
  },
  advanced: {
    label: "Avanzado", seconds: 180, topic: "RUST ESENCIAL",
    challenges: [
      {title:"Transferir propiedad",objective:'Crea origen con String::from("Rust"), mueve su propiedad a destino y muestra exactamente "Rust" con println!("{}", destino).',starter:"fn main() {\n    // Crea, mueve e imprime el String\n\n}",solution:'fn main() {\n    let origen = String::from("Rust");\n    let destino = origen;\n    println!("{}", destino);\n}',output:"Rust",topic:"Ownership",advice:"Crea origen, asígnalo a destino para mover su propiedad y luego imprime únicamente destino.",valid:code=>/let\s+origen\s*=\s*String\s*::\s*from\s*\(\s*"Rust"\s*\)\s*;/.test(code)&&/let\s+destino\s*=\s*origen\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*destino\s*\)\s*;/.test(code)},
      {title:"Préstamo inmutable",objective:'Crea fn longitud(texto: &String) -> usize que devuelva texto.len(). En main crea "Rust" e imprime longitud(&texto) con println!("{}", longitud(&texto)).',starter:"// Crea la función longitud\n\nfn main() {\n    // Crea texto e imprime su longitud\n}\n",solution:'fn longitud(texto: &String) -> usize {\n    texto.len()\n}\n\nfn main() {\n    let texto = String::from("Rust");\n    println!("{}", longitud(&texto));\n}',output:"4",topic:"Préstamos",advice:"&String presta el texto sin moverlo. Llama la función con &texto y muestra el usize devuelto.",valid:code=>/fn\s+longitud\s*\(\s*texto\s*:\s*&\s*String\s*\)\s*->\s*usize\s*\{[\s\S]*?texto\s*\.\s*len\s*\(\s*\)/.test(code)&&/let\s+texto\s*=\s*String\s*::\s*from\s*\(\s*"Rust"\s*\)\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*longitud\s*\(\s*&\s*texto\s*\)\s*\)\s*;/.test(code)},
      {title:"Resultado controlado",objective:'Usa match resultado. Ok(valor) debe imprimir valor con println!("{}", valor) y Err(error) debe imprimir error con println!("{}", error). El resultado inicial Ok(10) mostrará 10.',starter:'fn main() {\n    let resultado: Result<i32, &str> = Ok(10);\n    // Maneja e imprime ambos casos\n\n}',solution:'fn main() {\n    let resultado: Result<i32, &str> = Ok(10);\n    match resultado {\n        Ok(valor) => println!("{}", valor),\n        Err(error) => println!("{}", error),\n    }\n}',output:"10",topic:"Result y errores",advice:"Result puede ser Ok o Err. Cada brazo debe imprimir el dato que extrae del patrón.",valid:code=>/match\s+resultado\s*\{[\s\S]*?Ok\s*\(\s*valor\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)[\s\S]*?Err\s*\(\s*error\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*error\s*\)/.test(code)},
      {title:"Método de área",objective:'Implementa area(&self) -> u32 para Rectangulo y devuelve ancho * alto. En main crea uno de 4 por 5 e imprime rectangulo.area() con println!("{}", rectangulo.area()).',starter:"struct Rectangulo {\n    ancho: u32,\n    alto: u32,\n}\n\n// Implementa area y úsala en main\n",solution:'struct Rectangulo { ancho: u32, alto: u32 }\n\nimpl Rectangulo {\n    fn area(&self) -> u32 {\n        self.ancho * self.alto\n    }\n}\n\nfn main() {\n    let rectangulo = Rectangulo { ancho: 4, alto: 5 };\n    println!("{}", rectangulo.area());\n}',output:"20",topic:"Métodos e impl",advice:"Define el método dentro de impl, crea una instancia 4 × 5 y llama area() desde println!.",valid:code=>/impl\s+Rectangulo\s*\{[\s\S]*?fn\s+area\s*\(\s*&\s*self\s*\)\s*->\s*u32[\s\S]*?self\s*\.\s*ancho\s*\*\s*self\s*\.\s*alto/.test(code)&&/let\s+rectangulo\s*=\s*Rectangulo\s*\{[\s\S]*?ancho\s*:\s*4[\s\S]*?alto\s*:\s*5/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*rectangulo\.area\s*\(\s*\)\s*\)\s*;/.test(code)},
      {title:"Eliminar duplicación",objective:'Crea mostrar_estado(estado: &str) que imprima estado con println!("{}", estado). Llámala con "Activo" e "Inactivo" para mostrar ambos textos en líneas separadas.',starter:"fn main() {\n    // Llama la función dos veces\n}\n\n// Crea mostrar_estado e imprime estado\n",solution:'fn mostrar_estado(estado: &str) {\n    println!("{}", estado);\n}\n\nfn main() {\n    mostrar_estado("Activo");\n    mostrar_estado("Inactivo");\n}',output:"Activo\nInactivo",topic:"Refactorización",advice:"La función reutilizable recibe el texto, lo imprime y evita repetir dos llamadas a println! con la misma estructura.",valid:code=>/fn\s+mostrar_estado\s*\(\s*estado\s*:\s*&str\s*\)\s*\{[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*estado\s*\)\s*;/.test(code)&&/mostrar_estado\s*\(\s*"Activo"\s*\)\s*;/.test(code)&&/mostrar_estado\s*\(\s*"Inactivo"\s*\)\s*;/.test(code)}
    ]
  }
};

function removeChallengeAccents(value){
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}

Object.values(levels).forEach(level=>{
  level.challenges.forEach(challenge=>{
    ["title","objective","starter","solution","output","topic","advice"].forEach(property=>{
      challenge[property]=removeChallengeAccents(challenge[property]);
    });
  });
});

const challengeRequirements={
  "Variable de energia":[
    {message:'Declara la variable exactamente con `let energia = 100;`.',test:code=>/\blet\s+energia(?:\s*:\s*i32)?\s*=\s*100\s*;/.test(code)},
    {message:'Imprime el resultado con `println!("Energia: {}", energia);`.',test:code=>/println!\s*\(\s*"Energia: \{\}"\s*,\s*energia\s*\)\s*;/.test(code)}
  ],
  "Mensaje de inicio":[
    {message:'Escribe `println!("Rust listo");` dentro de `main`.',test:code=>/println!\s*\(\s*"Rust listo"\s*\)\s*;/.test(code)}
  ],
  "Acceso por nivel":[
    {message:'Crea la condicion `if nivel >= 5 { ... }`.',test:code=>/\bif\s+nivel\s*>=\s*5\s*\{/.test(code)},
    {message:'Dentro del `if`, agrega `println!("Acceso concedido");`.',test:code=>/\bif\s+nivel\s*>=\s*5\s*\{[\s\S]*?println!\s*\(\s*"Acceso concedido"\s*\)\s*;/.test(code)}
  ],
  "Rango completo":[
    {message:'Crea el ciclo inclusivo `for numero in 1..=5 { ... }`.',test:code=>/\bfor\s+numero\s+in\s+1\s*\.\.=\s*5\s*\{/.test(code)},
    {message:'Dentro del ciclo, imprime `numero` con `println!("{}", numero);`.',test:code=>/\bfor\s+numero\s+in\s+1\s*\.\.=\s*5\s*\{[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*numero\s*\)\s*;/.test(code)}
  ],
  "Puntos mutables":[
    {message:'Declara `puntos` como mutable con `let mut puntos = 10;`.',test:code=>/\blet\s+mut\s+puntos\s*=\s*10\s*;/.test(code)},
    {message:'Suma 5 con `puntos += 5;`.',test:code=>/\bpuntos\s*\+=\s*5\s*;/.test(code)},
    {message:'Muestra el resultado con `println!("{}", puntos);`.',test:code=>/println!\s*\(\s*"\{\}"\s*,\s*puntos\s*\)\s*;/.test(code)}
  ],
  "Funcion sumar":[
    {message:'Declara `fn sumar(a: i32, b: i32) -> i32`.',test:code=>/fn\s+sumar\s*\(\s*a\s*:\s*i32\s*,\s*b\s*:\s*i32\s*\)\s*->\s*i32/.test(code)},
    {message:'Devuelve `a + b` como ultima expresion de `sumar`.',test:code=>/fn\s+sumar[\s\S]*?\{[\s\S]*?\ba\s*\+\s*b/.test(code)},
    {message:'En `main`, imprime `sumar(4, 6)` con `println!("{}", sumar(4, 6));`.',test:code=>/println!\s*\(\s*"\{\}"\s*,\s*sumar\s*\(\s*4\s*,\s*6\s*\)\s*\)\s*;/.test(code)}
  ],
  "Vector dinamico":[
    {message:'Crea `let mut numeros = vec![1, 2, 3];`.',test:code=>/let\s+mut\s+numeros\s*=\s*vec!\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*;/.test(code)},
    {message:'Agrega el numero 4 con `numeros.push(4);`.',test:code=>/numeros\s*\.\s*push\s*\(\s*4\s*\)\s*;/.test(code)},
    {message:'Imprime el vector con `println!("{:?}", numeros);`.',test:code=>/println!\s*\(\s*"\{:\?\}"\s*,\s*numeros\s*\)\s*;/.test(code)}
  ],
  "String ampliable":[
    {message:'Crea `let mut mensaje = String::from("Hola");`.',test:code=>/let\s+mut\s+mensaje\s*=\s*String\s*::\s*from\s*\(\s*"Hola"\s*\)\s*;/.test(code)},
    {message:'Agrega el texto con `mensaje.push_str(" Rust");`.',test:code=>/mensaje\s*\.\s*push_str\s*\(\s*" Rust"\s*\)\s*;/.test(code)},
    {message:'Imprime `mensaje` con `println!("{}", mensaje);`.',test:code=>/println!\s*\(\s*"\{\}"\s*,\s*mensaje\s*\)\s*;/.test(code)}
  ],
  "Codigo HTTP":[
    {message:'Crea un bloque `match codigo { ... }`.',test:code=>/match\s+codigo\s*\{/.test(code)},
    {message:'Agrega el caso `200 => println!("OK")`.',test:code=>/200\s*=>\s*println!\s*\(\s*"OK"\s*\)/.test(code)},
    {message:'Agrega el caso general `_ => println!("Error")`.',test:code=>/_\s*=>\s*println!\s*\(\s*"Error"\s*\)/.test(code)}
  ],
  "Modelo Usuario":[
    {message:'Declara `struct Usuario` con el campo `nombre: String`.',test:code=>/struct\s+Usuario\s*\{[\s\S]*?nombre\s*:\s*String/.test(code)},
    {message:'Agrega el campo `nivel: u32` dentro de `Usuario`.',test:code=>/struct\s+Usuario\s*\{[\s\S]*?nivel\s*:\s*u32/.test(code)},
    {message:'Crea `usuario` con nombre `Ana` y nivel `3`.',test:code=>/let\s+usuario\s*=\s*Usuario\s*\{[\s\S]*?String\s*::\s*from\s*\(\s*"Ana"\s*\)[\s\S]*?nivel\s*:\s*3/.test(code)},
    {message:'Imprime ambos campos con `println!("{} - {}", usuario.nombre, usuario.nivel);`.',test:code=>/println!\s*\(\s*"\{\} - \{\}"\s*,\s*usuario\.nombre\s*,\s*usuario\.nivel\s*\)\s*;/.test(code)}
  ],
  "Transferir propiedad":[
    {message:'Crea `origen` con `String::from("Rust")`.',test:code=>/let\s+origen\s*=\s*String\s*::\s*from\s*\(\s*"Rust"\s*\)\s*;/.test(code)},
    {message:'Mueve el valor con `let destino = origen;`.',test:code=>/let\s+destino\s*=\s*origen\s*;/.test(code)},
    {message:'Imprime `destino` con `println!("{}", destino);`.',test:code=>/println!\s*\(\s*"\{\}"\s*,\s*destino\s*\)\s*;/.test(code)}
  ],
  "Prestamo inmutable":[
    {message:'Declara `fn longitud(texto: &String) -> usize`.',test:code=>/fn\s+longitud\s*\(\s*texto\s*:\s*&\s*String\s*\)\s*->\s*usize/.test(code)},
    {message:'Devuelve la longitud usando `texto.len()`.',test:code=>/fn\s+longitud[\s\S]*?\{[\s\S]*?texto\s*\.\s*len\s*\(\s*\)/.test(code)},
    {message:'Crea `texto` con `String::from("Rust")`.',test:code=>/let\s+texto\s*=\s*String\s*::\s*from\s*\(\s*"Rust"\s*\)\s*;/.test(code)},
    {message:'Imprime `longitud(&texto)` con `println!`.',test:code=>/println!\s*\(\s*"\{\}"\s*,\s*longitud\s*\(\s*&\s*texto\s*\)\s*\)\s*;/.test(code)}
  ],
  "Resultado controlado":[
    {message:'Crea un bloque `match resultado { ... }`.',test:code=>/match\s+resultado\s*\{/.test(code)},
    {message:'En `Ok(valor)`, imprime `valor` con `println!`.',test:code=>/Ok\s*\(\s*valor\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)/.test(code)},
    {message:'En `Err(error)`, imprime `error` con `println!`.',test:code=>/Err\s*\(\s*error\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*error\s*\)/.test(code)}
  ],
  "Metodo de area":[
    {message:'Crea `impl Rectangulo` y el metodo `fn area(&self) -> u32`.',test:code=>/impl\s+Rectangulo\s*\{[\s\S]*?fn\s+area\s*\(\s*&\s*self\s*\)\s*->\s*u32/.test(code)},
    {message:'Haz que `area` devuelva `self.ancho * self.alto`.',test:code=>/fn\s+area[\s\S]*?self\s*\.\s*ancho\s*\*\s*self\s*\.\s*alto/.test(code)},
    {message:'Crea `rectangulo` con ancho 4 y alto 5.',test:code=>/let\s+rectangulo\s*=\s*Rectangulo\s*\{[\s\S]*?ancho\s*:\s*4[\s\S]*?alto\s*:\s*5/.test(code)},
    {message:'Imprime `rectangulo.area()` con `println!`.',test:code=>/println!\s*\(\s*"\{\}"\s*,\s*rectangulo\.area\s*\(\s*\)\s*\)\s*;/.test(code)}
  ],
  "Eliminar duplicacion":[
    {message:'Declara `fn mostrar_estado(estado: &str)` e imprime `estado` dentro.',test:code=>/fn\s+mostrar_estado\s*\(\s*estado\s*:\s*&str\s*\)\s*\{[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*estado\s*\)\s*;/.test(code)},
    {message:'Llama `mostrar_estado("Activo");`.',test:code=>/mostrar_estado\s*\(\s*"Activo"\s*\)\s*;/.test(code)},
    {message:'Llama `mostrar_estado("Inactivo");`.',test:code=>/mostrar_estado\s*\(\s*"Inactivo"\s*\)\s*;/.test(code)}
  ]
};

function getMissingRequirements(challenge,code){
  const requirements=challengeRequirements[challenge.title]||[];
  return requirements.filter(requirement=>!requirement.test(code)).map(requirement=>requirement.message);
}

const $ = id => document.getElementById(id);
let selectedLevel = "easy";
let activeChallenges = [];
let challengeIndex = 0;
let score = 0;
let secondsLeft = levels.easy.seconds;
let bonusSeconds = 0;
let timerId = null;
let running = false;
let confettiFrameId = null;

function pad(value){return String(value).padStart(2,"0")}
function formatTime(seconds){return `${pad(Math.floor(seconds/60))}:${pad(seconds%60)}`}
function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
function escapeHtml(text){return text.replace(/[&<>]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[char]))}

function highlightRust(code){
  const tokens=[];
  const protectedCode=code.replace(/\/\/[^\n]*|"(?:\\.|[^"\\])*"/g,match=>{const key=String.fromCharCode(0xE000+tokens.length);tokens.push({text:match,type:match.startsWith("//")?"comment":"string"});return key});
  let html=escapeHtml(protectedCode)
    .replace(/\b(fn|let|mut|if|else|for|in|while|loop|match|struct|impl|return|pub|use|mod|enum|trait|where|move|ref|self|Self|as|const|static)\b/g,'<span class="tok-keyword">$1</span>')
    .replace(/\b(String|Result|Option|Vec|i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|usize|isize|str|bool|Ok|Err|Some|None)\b/g,'<span class="tok-type">$1</span>')
    .replace(/\b(\d+)\b/g,'<span class="tok-number">$1</span>')
    .replace(/\b([A-Za-z_][A-Za-z0-9_]*)!/g,'<span class="tok-macro">$1!</span>')
    .replace(/\b(fn\s+)<span class="tok-keyword">([A-Za-z_][A-Za-z0-9_]*)<\/span>/g,'$1<span class="tok-function">$2</span>');
  return html.replace(/[\uE000-\uF8FF]/g,key=>{const token=tokens[key.charCodeAt(0)-0xE000];return `<span class="tok-${token.type}">${escapeHtml(token.text)}</span>`})+"\n";
}

function renderEditor(){
  const editor=$("competitionCode");
  $("competitionHighlight").innerHTML=highlightRust(editor.value);
  $("competitionLines").textContent=Array.from({length:Math.max(1,editor.value.split("\n").length)},(_,i)=>i+1).join("\n");
  syncEditorScroll();
}
function syncEditorScroll(){const editor=$("competitionCode");$("competitionHighlight").scrollTop=editor.scrollTop;$("competitionHighlight").scrollLeft=editor.scrollLeft;$("competitionLines").scrollTop=editor.scrollTop}

function placeCaretInStarter(){
  const editor=$("competitionCode");
  const commentStart=editor.value.indexOf("//");
  if(commentStart>=0){
    const commentEnd=editor.value.indexOf("\n",commentStart);
    editor.setSelectionRange(commentStart,commentEnd<0?editor.value.length:commentEnd);
  }else{
    const bodyStart=editor.value.indexOf("\n")+1;
    const indentation=(editor.value.slice(bodyStart).match(/^\s*/)||[""])[0].length;
    editor.setSelectionRange(bodyStart+indentation,bodyStart+indentation);
  }
  editor.focus();
}

function sourceLocation(source,index){
  const before=source.slice(0,index).split("\n");
  const line=before.length;
  const column=before[before.length-1].length+1;
  return {line,column,text:source.split("\n")[line-1]||""};
}

function makeCompilerError(source,index,code,message,help="",length=1){
  return {...sourceLocation(source,index),code,message,help,length:Math.max(1,length)};
}

function maskRustStringsAndComments(source,errors){
  const masked=source.split("");
  let stringStart=-1;
  let inString=false;
  let inComment=false;
  let escaped=false;

  for(let index=0;index<source.length;index++){
    const character=source[index];
    if(inComment){
      if(character==="\n")inComment=false;
      else masked[index]=" ";
      continue;
    }
    if(inString){
      masked[index]=character==="\n"?"\n":" ";
      if(escaped){escaped=false;continue}
      if(character==="\\"){escaped=true;continue}
      if(character==='"'){inString=false;stringStart=-1}
      continue;
    }
    if(character==="/"&&source[index+1]==="/"){
      masked[index]=masked[index+1]=" ";
      inComment=true;index++;continue;
    }
    if(character==='"'){
      masked[index]=" ";inString=true;stringStart=index;
    }
  }

  if(inString){
    errors.push(makeCompilerError(source,stringStart,"E0765","cadena de texto sin cerrar",'agrega una comilla doble (\") para cerrar el texto'));
  }
  return masked.join("");
}

function simulateRustCompile(source){
  const errors=[];
  const masked=maskRustStringsAndComments(source,errors);
  const addMatch=(pattern,code,message,help,length)=>{
    const match=pattern.exec(masked);
    if(match)errors.push(makeCompilerError(source,match.index,code,message,help,length||match[0].length));
  };

  addMatch(/\.\s*as_string\s*\(/,"E0599",'no existe el metodo `as_string` para este valor','usa `.to_string()`; ese es el nombre del metodo en Rust');
  addMatch(/\.\s*toString\s*\(/,"E0599",'no existe el metodo `toString` para este valor','en Rust se escribe `.to_string()`');
  addMatch(/\.\s*length\s*\(/,"E0599",'no existe el metodo `length` para este valor','usa `.len()` para obtener la longitud');
  addMatch(/\bString\s*\.\s*from\s*\(/,"E0223",'forma incorrecta de llamar a `String::from`','usa `String::from("texto")` con dos puntos dobles');
  addMatch(/\bprintln\s*\(/,"E0423",'`println` es una macro, no una funcion','escribe `println!(...)` con el signo `!`');
  addMatch(/\bprint\s*\(/,"E0423",'`print` es una macro, no una funcion','escribe `print!(...)` con el signo `!`');
  addMatch(/\bvec\s*\[/,"E0423",'`vec` es una macro','escribe `vec![...]` con el signo `!`');
  addMatch(/\bfn\s+[A-Za-z_]\w*\s*\([^\n{}]*\)\s*=>/,"E0178",'se uso `=>` como tipo de retorno','usa `->`, por ejemplo: `fn sumar() -> i32`');
  addMatch(/\b(?:and|or)\b/,"E0425",'operador logico no valido en Rust','usa `&&` para AND o `||` para OR');

  const bracketStack=[];
  const pairs={"{":"}","(":")","[":"]"};
  const opening=new Set(Object.keys(pairs));
  const closing=new Set(Object.values(pairs));
  for(let index=0;index<masked.length;index++){
    const character=masked[index];
    if(opening.has(character))bracketStack.push({character,index});
    else if(closing.has(character)){
      const last=bracketStack[bracketStack.length-1];
      if(!last||pairs[last.character]!==character){
        errors.push(makeCompilerError(source,index,"E0001",`delimitador inesperado \`${character}\``,'revisa el orden de `{}`, `()` y `[]`'));
        break;
      }
      bracketStack.pop();
    }
  }
  if(bracketStack.length){
    const last=bracketStack[bracketStack.length-1];
    errors.push(makeCompilerError(source,last.index,"E0002",`delimitador \`${last.character}\` sin cerrar`,`agrega \`${pairs[last.character]}\` para cerrar este bloque`));
  }

  if(!/\bfn\s+main\s*\(/.test(masked)){
    errors.push(makeCompilerError(source,0,"E0601",'no se encontro la funcion `main`','agrega `fn main() { ... }` como punto de entrada'));
  }

  const lines=source.split("\n");
  const maskedLines=masked.split("\n");
  let offset=0;
  lines.forEach((line,lineIndex)=>{
    const code=maskedLines[lineIndex].trim();
    const needsSemicolon=/^let\b/.test(code)
      || /^(?:println!|print!)\s*\(/.test(code)
      || /^[A-Za-z_]\w*\s*\+=/.test(code)
      || /^[A-Za-z_]\w*\s*\.\s*(?:push|push_str)\s*\(/.test(code)
      || /^mostrar_estado\s*\(/.test(code);
    const validEnding=/[;,{}]$/.test(code);
    if(needsSemicolon&&code&&!validEnding){
      const index=offset+Math.max(0,line.search(/\s*$/)-1);
      errors.push(makeCompilerError(source,index,"E0003",'falta `;` al final de la instruccion','agrega un punto y coma `;` al final de esta linea'));
    }
    offset+=line.length+1;
  });

  const immutableDeclarations=[...masked.matchAll(/\blet\s+(?!mut\b)([A-Za-z_]\w*)\s*=/g)];
  immutableDeclarations.forEach(declaration=>{
    const name=declaration[1];
    const later=source.slice(declaration.index+declaration[0].length);
    const mutation=new RegExp(`\\b${name}\\s*(?:\\+=|\\.\\s*(?:push|push_str)\\s*\\()`).exec(later);
    if(mutation){
      const index=declaration.index+declaration[0].length+mutation.index;
      errors.push(makeCompilerError(source,index,"E0596",`no se puede modificar \`${name}\` porque no es mutable`,`declara la variable con \`let mut ${name}\``));
    }
  });

  const move=/\blet\s+destino\s*=\s*origen\s*;/.exec(masked);
  if(move){
    const later=masked.slice(move.index+move[0].length);
    const reused=/\borigen\b/.exec(later);
    if(reused){
      errors.push(makeCompilerError(source,move.index+move[0].length+reused.index,"E0382",'uso de `origen` despues de mover su valor a `destino`','usa `destino` o clona el String antes del movimiento'));
    }
  }

  const unique=[];
  const seen=new Set();
  errors.sort((a,b)=>a.line-b.line||a.column-b.column).forEach(error=>{
    const key=`${error.line}:${error.column}:${error.code}`;
    if(!seen.has(key)){seen.add(key);unique.push(error)}
  });
  return unique.slice(0,4);
}

function formatCompilerErrors(errors){
  return errors.map(error=>{
    const marker=`${" ".repeat(Math.max(0,error.column-1))}${"^".repeat(Math.min(error.length,18))}`;
    return `error[${error.code}]: ${error.message}\n --> main.rs:${error.line}:${error.column}\n  |\n${String(error.line).padStart(2," ")} | ${error.text}\n  | ${marker}${error.help?`\n  = ayuda: ${error.help}`:""}`;
  }).join("\n\n");
}

function setConsole(status,message,type=""){
  $("consoleStatus").textContent=status;
  $("competitionFeedback").textContent=message;
  $("competitionFeedback").className=`feedback${type?` ${type}`:""}`;
}

function setConsoleOutput(label,output,state=""){
  $("consoleOutputLabel").textContent=label;
  $("challengeExpectedOutput").textContent=output.replace(/\n/g," · ");
  $("challengeExpectedOutput").title=output;
  $("consoleOutputBox").classList.toggle("success",state===true||state==="success");
  $("consoleOutputBox").classList.toggle("error",state==="error");
}

function renderObjective(text){
  const target=$("challengeObjective");
  const keyTarget=$("challengeKeyTokens");
  const pattern=/"(?:\\.|[^"\\])*"|String::from|println!|vec!|push_str|\b(?:let|mut|fn|if|for|in|match|struct|impl|Result|Ok|Err|String|i32|u32|usize|energia|nivel|numero|puntos|sumar|numeros|mensaje|codigo|Usuario|usuario|origen|destino|longitud|texto|resultado|valor|error|Rectangulo|rectangulo|mostrar_estado|estado|area|ancho|alto|self|main|push|len)\b|&String|&str|\.\.=|>=|\+=|->|::|\d+/g;
  const keywords=new Set(["let","mut","fn","if","for","in","match","struct","impl","self"]);
  const types=new Set(["String","Result","Ok","Err","i32","u32","usize","&String","&str","Usuario","Rectangulo"]);
  const macros=new Set(["println!","vec!"]);
  const fragment=document.createDocumentFragment();
  const keyFragment=document.createDocumentFragment();
  const usedKeys=new Set();
  let position=0;
  for(const match of text.matchAll(pattern)){
    if(match.index>position)fragment.append(document.createTextNode(text.slice(position,match.index)));
    const token=document.createElement("span");
    const value=match[0];
    token.textContent=value;
    token.className=value.startsWith('"')?"objective-string":macros.has(value)?"objective-macro":keywords.has(value)?"objective-keyword":types.has(value)?"objective-type":/^\d+$/.test(value)?"objective-number":/^(?:\.\.=|>=|\+=|->|::)$/.test(value)?"objective-operator":"objective-name";
    if(!usedKeys.has(value)&&usedKeys.size<10){const key=token.cloneNode(true);key.classList.add("key-token");keyFragment.append(key);usedKeys.add(value)}
    fragment.append(token);position=match.index+value.length;
  }
  if(position<text.length)fragment.append(document.createTextNode(text.slice(position)));
  target.replaceChildren(fragment);
  keyTarget.replaceChildren(keyFragment);
}

function selectLevel(name){
  if(running||!levels[name])return;
  selectedLevel=name;
  document.querySelectorAll("[data-level]").forEach(button=>{const selected=button.dataset.level===name;button.classList.toggle("selected",selected);button.setAttribute("aria-pressed",String(selected))});
  $("startCompetition").innerHTML=`INICIAR COMPETENCIA · ${formatTime(levels[name].seconds)} <span class="ui-icon" aria-hidden="true">&#xE919;</span>`;
}

function renderChallenge(){
  const challenge=activeChallenges[challengeIndex];
  $("competitionProgress").textContent=`${challengeIndex+1} / ${activeChallenges.length}`;
  $("competitionScore").textContent=score*100;
  $("challengeTopic").textContent=levels[selectedLevel].topic;
  $("challengeTitle").textContent=challenge.title;
  renderObjective(challenge.objective);
  setConsoleOutput("SALIDA OBJETIVO",challenge.output);
  $("competitionCode").value=challenge.starter;
  $("checkSolution").disabled=false;
  $("resetChallenge").disabled=false;
  setConsole("LISTO","> Compilador simulado preparado\n\nEscribe tu solucion y pulsa “Ejecutar y comprobar”.");
  renderEditor();
  requestAnimationFrame(placeCaretInStarter);
}

function updateTimer(){
  $("competitionTimer").textContent=formatTime(secondsLeft);
  $("competitionTimer").parentElement.classList.toggle("danger",secondsLeft<=15);
}

function addTimeBonus(){
  bonusSeconds+=20;
  secondsLeft+=20;
  updateTimer();
  const timerCard=$("competitionTimer").parentElement;
  timerCard.classList.remove("time-bonus");
  requestAnimationFrame(()=>timerCard.classList.add("time-bonus"));
  setTimeout(()=>timerCard.classList.remove("time-bonus"),850);
}

function stopMatrixConfetti(){
  if(confettiFrameId)cancelAnimationFrame(confettiFrameId);
  confettiFrameId=null;
  const canvas=$("matrixConfetti");
  canvas.classList.add("hidden");
  const context=canvas.getContext("2d");
  context?.clearRect(0,0,canvas.width,canvas.height);
}

function startMatrixConfetti(){
  stopMatrixConfetti();
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const canvas=$("matrixConfetti");
  const context=canvas.getContext("2d");
  const ratio=Math.min(window.devicePixelRatio||1,2);
  const width=window.innerWidth;const height=window.innerHeight;
  canvas.width=Math.floor(width*ratio);canvas.height=Math.floor(height*ratio);
  canvas.classList.remove("hidden");
  context.setTransform(ratio,0,0,ratio,0,0);
  const symbols=["0","1","R","U","S","T","{","}","<",">",";","fn","let"];
  const colors=["#a3be8c","#8fbcbb","#88c0d0","#ebcb8b","#d08770"];
  const amount=Math.min(220,Math.max(90,Math.floor(width/7)));
  const particles=Array.from({length:amount},()=>({x:Math.random()*width,y:-Math.random()*height,speed:2.3+Math.random()*5.4,size:11+Math.random()*14,swing:(Math.random()-.5)*1.5,rotation:Math.random()*Math.PI,symbol:symbols[Math.floor(Math.random()*symbols.length)],color:colors[Math.floor(Math.random()*colors.length)],alpha:.55+Math.random()*.45}));
  const started=performance.now();
  function draw(now){
    context.clearRect(0,0,width,height);
    particles.forEach(particle=>{
      particle.y+=particle.speed;particle.x+=Math.sin(particle.y*.018)*particle.swing;particle.rotation+=.012;
      if(particle.y>height+30){particle.y=-30-Math.random()*180;particle.x=Math.random()*width}
      context.save();context.translate(particle.x,particle.y);context.rotate(particle.rotation);context.globalAlpha=particle.alpha;context.fillStyle=particle.color;context.shadowColor=particle.color;context.shadowBlur=8;context.font=`800 ${particle.size}px ui-monospace, monospace`;context.fillText(particle.symbol,0,0);context.restore();
    });
    if(now-started<6000)confettiFrameId=requestAnimationFrame(draw);else stopMatrixConfetti();
  }
  confettiFrameId=requestAnimationFrame(draw);
}

function startCompetition(){
  const level=levels[selectedLevel];
  document.body.classList.add("competition-active");
  clearInterval(timerId);
  activeChallenges=shuffle(level.challenges);
  challengeIndex=0;score=0;bonusSeconds=0;secondsLeft=level.seconds;running=true;
  stopMatrixConfetti();
  $("competitionSetup").classList.add("hidden");
  $("competitionResults").classList.add("hidden");
  $("competitionArena").classList.remove("hidden");
  $("competitionDifficulty").textContent=level.label.toUpperCase();
  updateTimer();renderChallenge();
  timerId=setInterval(()=>{secondsLeft=Math.max(0,secondsLeft-1);updateTimer();if(secondsLeft===0)finishCompetition("time")},1000);
  window.scrollTo({top:0,behavior:"smooth"});
}

function finishCompetition(reason){
  if(!running)return;
  document.body.classList.remove("competition-active");
  running=false;clearInterval(timerId);timerId=null;
  const level=levels[selectedLevel];
  const challenge=activeChallenges[Math.min(challengeIndex,activeChallenges.length-1)];
  $("competitionArena").classList.add("hidden");
  $("competitionResults").classList.remove("hidden");
  $("competitionResults").classList.toggle("perfect-result",reason==="complete");
  $("resultKicker").textContent=reason==="complete"?"FELICITACIONES":"TIEMPO AGOTADO";
  $("resultTitle").textContent=reason==="complete"?`¡${score} de ${activeChallenges.length} retos completados!`:`${score} de ${activeChallenges.length} resueltos`;
  $("resultSubtitle").textContent=reason==="complete"?"¡Terminaste todos los retos antes de que se agotara el tiempo!":`Llegaste al problema ${Math.min(challengeIndex+1,activeChallenges.length)} de ${activeChallenges.length}.`;
  $("resultPoints").textContent=score*100;
  $("resultTime").textContent=formatTime(level.seconds+bonusSeconds).replace(/^0/,"");
  $("resultTimeNote").textContent=bonusSeconds?`+${bonusSeconds} s ganados`:`Nivel ${level.label}`;
  $("resultProgress").textContent=`${score}/${activeChallenges.length}`;
  $("resultLevel").textContent=level.label;
  $("improvementTopic").textContent=reason==="complete"?"Velocidad y claridad":challenge.topic;
  $("improvementAdvice").textContent=reason==="complete"?"Dominaste esta ronda. Intenta el siguiente nivel o repite buscando una solución más clara y breve.":challenge.advice;
  const showEasySolution=selectedLevel==="easy"&&reason==="time";
  $("easySolutionPanel").classList.toggle("hidden",!showEasySolution);
  $("noSolutionPanel").classList.toggle("hidden",showEasySolution||reason==="complete");
  if(showEasySolution){$("solutionTitle").textContent=challenge.title;$("resultSolution").textContent=challenge.solution;$("resultOutput").textContent=challenge.output}
  if(reason==="complete")startMatrixConfetti();else stopMatrixConfetti();
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll("[data-level]").forEach(button=>button.addEventListener("click",()=>selectLevel(button.dataset.level)));
$("startCompetition").addEventListener("click",startCompetition);
$("newCompetition").addEventListener("click",()=>{stopMatrixConfetti();document.body.classList.remove("competition-active");$("competitionResults").classList.add("hidden");$("competitionSetup").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})});
$("leaveCompetition").addEventListener("click",()=>{if(!running)return;document.body.classList.remove("competition-active");running=false;clearInterval(timerId);timerId=null;$("competitionArena").classList.add("hidden");$("competitionSetup").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})});
$("checkSolution").addEventListener("click",()=>{
  if(!running||challengeIndex>=activeChallenges.length)return;
  const challenge=activeChallenges[challengeIndex];
  const code=$("competitionCode").value;
  const compilerErrors=simulateRustCompile(code);
  if(compilerErrors.length){
    setConsole("NO COMPILA",`[COMPILADOR RUST · SIMULADO]\n\n${formatCompilerErrors(compilerErrors)}`,"error");
    setConsoleOutput("COMPILACION","ERROR","error");
    return;
  }
  if(!challenge.valid(code)){
    const detectedMissing=getMissingRequirements(challenge,code);
    const missing=detectedMissing.length?detectedMissing:["Completa todos los elementos indicados en el objetivo."];
    const missingList=missing.map((requirement,index)=>`${index+1}. ${requirement}`).join("\n");
    setConsole("TE FALTA CODIGO",`[REVISION DE COMPILACION SUPERADA]\n\nEl codigo no tiene errores basicos, pero al reto le falta:\n\n${missingList}`,"warning");
    setConsoleOutput(`FALTAN ${missing.length} ${missing.length===1?"REQUISITO":"REQUISITOS"}`,missing[0]);
    return;
  }
  score++;challengeIndex++;addTimeBonus();$("checkSolution").disabled=true;$("resetChallenge").disabled=true;$("competitionScore").textContent=score*100;setConsole("CORRECTO","[EJECUCION COMPLETADA]\n\n[OK] Reto superado · +100 puntos · +20 segundos","ok");setConsoleOutput("SALIDA OBTENIDA",challenge.output,true);
  if(challengeIndex>=activeChallenges.length){clearInterval(timerId);timerId=null;setTimeout(()=>finishCompetition("complete"),1100)}else{setTimeout(()=>{if(running)renderChallenge()},1100)}
});
$("resetChallenge").addEventListener("click",()=>{
  if(!running||challengeIndex>=activeChallenges.length)return;
  $("competitionCode").value=activeChallenges[challengeIndex].starter;
  renderEditor();
  setConsole("REINICIADO","> Código restaurado\n\nPuedes comenzar nuevamente este reto.");
  setConsoleOutput("SALIDA OBJETIVO",activeChallenges[challengeIndex].output);
  placeCaretInStarter();
});
$("competitionCode").addEventListener("input",renderEditor);
$("competitionCode").addEventListener("scroll",syncEditorScroll);
$("competitionCode").addEventListener("keydown",event=>{
  const editor=event.currentTarget;
  if(event.key==="Tab"){
    event.preventDefault();
    const start=editor.selectionStart;const end=editor.selectionEnd;
    if(start!==end&&editor.value.slice(start,end).includes("\n")){
      const lineStart=editor.value.lastIndexOf("\n",start-1)+1;
      const block=editor.value.slice(lineStart,end);
      const changed=event.shiftKey?block.replace(/^ {1,4}/gm,""):block.replace(/^/gm,"    ");
      editor.setRangeText(changed,lineStart,end,"select");
    }else if(event.shiftKey){
      const lineStart=editor.value.lastIndexOf("\n",start-1)+1;
      const spaces=editor.value.slice(lineStart,start).match(/ {1,4}$/)?.[0].length||0;
      if(spaces)editor.setRangeText("",start-spaces,start,"end");
    }else editor.setRangeText("    ",start,end,"end");
    renderEditor();return;
  }
  if(event.key==="Enter"){
    event.preventDefault();const start=editor.selectionStart;const before=editor.value.slice(0,start);const after=editor.value.slice(editor.selectionEnd);const currentLine=before.slice(before.lastIndexOf("\n")+1);const baseIndent=(currentLine.match(/^\s*/)||[""])[0];
    if(currentLine.trimEnd().endsWith("{")&&after.trimStart().startsWith("}")){
      const insertion=`\n${baseIndent}    \n${baseIndent}`;editor.setRangeText(insertion,start,editor.selectionEnd,"end");editor.setSelectionRange(start+baseIndent.length+5,start+baseIndent.length+5);
    }else{
      const indentation=baseIndent+(currentLine.trimEnd().endsWith("{")?"    ":"");editor.setRangeText(`\n${indentation}`,start,editor.selectionEnd,"end");
    }
    renderEditor();return;
  }
  const pairs={"{":"}","(":")","[":"]",'"':'"',"'":"'"};
  if(["}",")","]",'"',"'"].includes(event.key)&&editor.value[editor.selectionStart]===event.key){event.preventDefault();editor.setSelectionRange(editor.selectionStart+1,editor.selectionStart+1);return}
  if(pairs[event.key]){
    event.preventDefault();const start=editor.selectionStart;const end=editor.selectionEnd;const selected=editor.value.slice(start,end);editor.setRangeText(`${event.key}${selected}${pairs[event.key]}`,start,end,"end");editor.setSelectionRange(start+1,start+1+selected.length);renderEditor();return;
  }
  if(event.key==="Backspace"&&editor.selectionStart===editor.selectionEnd){const start=editor.selectionStart;const closing=pairs[editor.value[start-1]];if(closing&&editor.value[start]===closing){event.preventDefault();editor.setRangeText("",start-1,start+1,"end");renderEditor()}}
});

selectLevel("easy");
