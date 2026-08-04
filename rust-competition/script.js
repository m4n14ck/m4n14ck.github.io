"use strict";

const levels = {
  easy: {
    label: "Fácil", seconds: 150, topic: "FUNDAMENTOS",
    challenges: [
      {title:"Variable de energía",objective:'Declara una variable inmutable llamada energia con valor 100. Después imprime exactamente "Energía: 100" usando println!("Energía: {}", energia).',starter:"fn main() {\n    // Declara energia e imprime el mensaje\n\n}",solution:"fn main() {\n    let energia = 100;\n    println!(\"Energía: {}\", energia);\n}",output:"Energía: 100",topic:"Variables",advice:"Repasa el módulo de variables. Usa let energia = 100; y pasa energia al marcador {} de println!.",valid:code=>/\blet\s+energia(?:\s*:\s*i32)?\s*=\s*100\s*;/.test(code)&&/println!\s*\(\s*"Energia: \{\}"\s*,\s*energia\s*\)\s*;/.test(code)},
      {title:"Mensaje de inicio",objective:'Usa println! para mostrar exactamente "Rust listo".',starter:'fn main() {\n    println!("");\n}',solution:'fn main() {\n    println!("Rust listo");\n}',output:"Rust listo",topic:"Impresión en pantalla",advice:"println! es una macro. Escribe el texto entre comillas, dentro de los paréntesis, y termina la línea con punto y coma.",valid:code=>/println!\s*\(\s*"Rust listo"\s*\)\s*;/.test(code)},
      {title:"Acceso por nivel",objective:'Crea un if que compruebe si nivel es mayor o igual que 5. Dentro de sus llaves imprime exactamente "Acceso concedido" usando println!("Acceso concedido").',starter:"fn main() {\n    let nivel = 7;\n    // Crea la condición e imprime el mensaje\n\n}",solution:'fn main() {\n    let nivel = 7;\n    if nivel >= 5 {\n        println!("Acceso concedido");\n    }\n}',output:"Acceso concedido",topic:"Condiciones",advice:"Escribe if nivel >= 5 y coloca println! dentro de las llaves de la condición.",valid:code=>/\bif\s+nivel\s*>=\s*5\s*\{[\s\S]*?println!\s*\(\s*"Acceso concedido"\s*\)\s*;/.test(code)},
      {title:"Rango completo",objective:'Usa for numero in 1..=5 y, dentro del ciclo, imprime cada número con println!("{}", numero). Deben mostrarse del 1 al 5.',starter:"fn main() {\n    // Crea el ciclo e imprime cada número\n\n}",solution:'fn main() {\n    for numero in 1..=5 {\n        println!("{}", numero);\n    }\n}',output:"1\n2\n3\n4\n5",topic:"Ciclos y rangos",advice:"El rango inclusivo 1..=5 contiene ambos extremos. Dentro de las llaves del for, imprime numero con el marcador {}.",valid:code=>/\bfor\s+numero\s+in\s+1\s*\.\.=\s*5\s*\{[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*numero\s*\)\s*;/.test(code)},
      {title:"Puntos mutables",objective:'Crea puntos con let mut y valor 10, aumenta 5 mediante += y finalmente imprime 15 usando println!("{}", puntos).',starter:"fn main() {\n    // Crea, aumenta e imprime puntos\n\n}",solution:'fn main() {\n    let mut puntos = 10;\n    puntos += 5;\n    println!("{}", puntos);\n}',output:"15",topic:"Mutabilidad",advice:"Agrega mut después de let, modifica puntos con += 5 y luego pasa puntos al marcador {} de println!.",valid:code=>/let\s+mut\s+puntos\s*=\s*10\s*;/.test(code)&&/puntos\s*\+=\s*5\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*puntos\s*\)\s*;/.test(code)}
    ]
  },
  medium: {
    label: "Medio", seconds: 150, topic: "DESARROLLO",
    challenges: [
      {title:"Función sumar",objective:'Declara fn sumar(a: i32, b: i32) -> i32 que devuelva a + b. En main imprime el resultado de sumar(4, 6) con println!("{}", sumar(4, 6)).',starter:"// Declara la función sumar\n\nfn main() {\n    // Imprime sumar(4, 6)\n}\n",solution:"fn sumar(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!(\"{}\", sumar(4, 6));\n}",output:"10",topic:"Funciones y retornos",advice:"La última expresión a + b se devuelve sin punto y coma. Después llama sumar(4, 6) dentro de println!.",valid:code=>/fn\s+sumar\s*\(\s*a\s*:\s*i32\s*,\s*b\s*:\s*i32\s*\)\s*->\s*i32\s*\{[\s\S]*?\ba\s*\+\s*b/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*sumar\s*\(\s*4\s*,\s*6\s*\)\s*\)\s*;/.test(code)},
      {title:"Vector dinámico",objective:'Crea numeros como vec![1, 2, 3] mutable, agrega 4 con push y muestra el vector completo usando println!("{:?}", numeros).',starter:"fn main() {\n    // Crea, modifica e imprime el vector\n\n}",solution:'fn main() {\n    let mut numeros = vec![1, 2, 3];\n    numeros.push(4);\n    println!("{:?}", numeros);\n}',output:"[1, 2, 3, 4]",topic:"Vectores",advice:"Un Vec debe ser mutable para usar push. El formato {:?} permite imprimir el vector completo para depuración.",valid:code=>/let\s+mut\s+numeros\s*=\s*vec!\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*;/.test(code)&&/numeros\s*\.\s*push\s*\(\s*4\s*\)\s*;/.test(code)&&/println!\s*\(\s*"\{:\?\}"\s*,\s*numeros\s*\)\s*;/.test(code)},
      {title:"String ampliable",objective:'Crea mensaje con String::from("Hola"), añade " Rust" usando push_str y muestra exactamente "Hola Rust" con println!("{}", mensaje).',starter:"fn main() {\n    // Crea, amplía e imprime el String\n\n}",solution:'fn main() {\n    let mut mensaje = String::from("Hola");\n    mensaje.push_str(" Rust");\n    println!("{}", mensaje);\n}',output:"Hola Rust",topic:"String",advice:"String debe ser mutable para usar push_str. Al final pasa mensaje al marcador {} de println!.",valid:code=>/let\s+mut\s+mensaje\s*=\s*String\s*::\s*from\s*\(\s*"Hola"\s*\)\s*;/.test(code)&&/mensaje\s*\.\s*push_str\s*\(\s*" Rust"\s*\)\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*mensaje\s*\)\s*;/.test(code)},
      {title:"Código HTTP",objective:'Usa match codigo. El caso 200 debe ejecutar println!("OK") y el caso _ debe ejecutar println!("Error"). Con codigo = 200 la salida será "OK".',starter:"fn main() {\n    let codigo = 200;\n    // Crea el match e imprime ambos casos\n\n}",solution:'fn main() {\n    let codigo = 200;\n    match codigo {\n        200 => println!("OK"),\n        _ => println!("Error"),\n    }\n}',output:"OK",topic:"Pattern matching",advice:"match debe cubrir todas las posibilidades. Usa println! en cada brazo y _ como caso general.",valid:code=>/match\s+codigo\s*\{[\s\S]*?200\s*=>\s*println!\s*\(\s*"OK"\s*\)[\s\S]*?_\s*=>\s*println!\s*\(\s*"Error"\s*\)/.test(code)},
      {title:"Modelo Usuario",objective:'Declara struct Usuario con nombre: String y nivel: u32. En main crea usuario con nombre "Ana" y nivel 3; imprime "Ana - 3" usando println!("{} - {}", usuario.nombre, usuario.nivel).',starter:"// Declara la estructura Usuario\n\nfn main() {\n    // Crea usuario e imprime sus campos\n}\n",solution:'struct Usuario {\n    nombre: String,\n    nivel: u32,\n}\n\nfn main() {\n    let usuario = Usuario { nombre: String::from("Ana"), nivel: 3 };\n    println!("{} - {}", usuario.nombre, usuario.nivel);\n}',output:"Ana - 3",topic:"Estructuras",advice:"Define ambos campos, crea una instancia Usuario y accede a los campos mediante usuario.nombre y usuario.nivel.",valid:code=>/struct\s+Usuario\s*\{[\s\S]*?nombre\s*:\s*String\s*,?[\s\S]*?nivel\s*:\s*u32/.test(code)&&/let\s+usuario\s*=\s*Usuario\s*\{[\s\S]*?String\s*::\s*from\s*\(\s*"Ana"\s*\)[\s\S]*?nivel\s*:\s*3/.test(code)&&/println!\s*\(\s*"\{\} - \{\}"\s*,\s*usuario\.nombre\s*,\s*usuario\.nivel\s*\)\s*;/.test(code)}
    ]
  },
  advanced: {
    label: "Avanzado", seconds: 150, topic: "RUST ESENCIAL",
    challenges: [
      {title:"Transferir propiedad",objective:'Crea origen con String::from("Rust"), mueve su propiedad a destino y muestra exactamente "Rust" con println!("{}", destino).',starter:"fn main() {\n    // Crea, mueve e imprime el String\n\n}",solution:'fn main() {\n    let origen = String::from("Rust");\n    let destino = origen;\n    println!("{}", destino);\n}',output:"Rust",topic:"Ownership",advice:"Crea origen, asígnalo a destino para mover su propiedad y luego imprime únicamente destino.",valid:code=>/let\s+origen\s*=\s*String\s*::\s*from\s*\(\s*"Rust"\s*\)\s*;/.test(code)&&/let\s+destino\s*=\s*origen\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*destino\s*\)\s*;/.test(code)},
      {title:"Préstamo inmutable",objective:'Crea fn longitud(texto: &String) -> usize que devuelva texto.len(). En main crea "Rust" e imprime longitud(&texto) con println!("{}", longitud(&texto)).',starter:"// Crea la función longitud\n\nfn main() {\n    // Crea texto e imprime su longitud\n}\n",solution:'fn longitud(texto: &String) -> usize {\n    texto.len()\n}\n\nfn main() {\n    let texto = String::from("Rust");\n    println!("{}", longitud(&texto));\n}',output:"4",topic:"Préstamos",advice:"&String presta el texto sin moverlo. Llama la función con &texto y muestra el usize devuelto.",valid:code=>/fn\s+longitud\s*\(\s*texto\s*:\s*&\s*String\s*\)\s*->\s*usize\s*\{[\s\S]*?texto\s*\.\s*len\s*\(\s*\)/.test(code)&&/let\s+texto\s*=\s*String\s*::\s*from\s*\(\s*"Rust"\s*\)\s*;/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*longitud\s*\(\s*&\s*texto\s*\)\s*\)\s*;/.test(code)},
      {title:"Resultado controlado",objective:'Usa match resultado. Ok(valor) debe imprimir valor con println!("{}", valor) y Err(error) debe imprimir error con println!("{}", error). El resultado inicial Ok(10) mostrará 10.',starter:'fn main() {\n    let resultado: Result<i32, &str> = Ok(10);\n    // Maneja e imprime ambos casos\n\n}',solution:'fn main() {\n    let resultado: Result<i32, &str> = Ok(10);\n    match resultado {\n        Ok(valor) => println!("{}", valor),\n        Err(error) => println!("{}", error),\n    }\n}',output:"10",topic:"Result y errores",advice:"Result puede ser Ok o Err. Cada brazo debe imprimir el dato que extrae del patrón.",valid:code=>/match\s+resultado\s*\{[\s\S]*?Ok\s*\(\s*valor\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)[\s\S]*?Err\s*\(\s*error\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*error\s*\)/.test(code)},
      {title:"Método de área",objective:'Implementa area(&self) -> u32 para Rectangulo y devuelve ancho * alto. En main crea uno de 4 por 5 e imprime rectangulo.area() con println!("{}", rectangulo.area()).',starter:"struct Rectangulo {\n    ancho: u32,\n    alto: u32,\n}\n\n// Implementa area y úsala en main\n",solution:'struct Rectangulo { ancho: u32, alto: u32 }\n\nimpl Rectangulo {\n    fn area(&self) -> u32 {\n        self.ancho * self.alto\n    }\n}\n\nfn main() {\n    let rectangulo = Rectangulo { ancho: 4, alto: 5 };\n    println!("{}", rectangulo.area());\n}',output:"20",topic:"Métodos e impl",advice:"Define el método dentro de impl, crea una instancia 4 × 5 y llama area() desde println!.",valid:code=>/impl\s+Rectangulo\s*\{[\s\S]*?fn\s+area\s*\(\s*&\s*self\s*\)\s*->\s*u32[\s\S]*?self\s*\.\s*ancho\s*\*\s*self\s*\.\s*alto/.test(code)&&/let\s+rectangulo\s*=\s*Rectangulo\s*\{[\s\S]*?ancho\s*:\s*4[\s\S]*?alto\s*:\s*5/.test(code)&&/println!\s*\(\s*"\{\}"\s*,\s*rectangulo\.area\s*\(\s*\)\s*\)\s*;/.test(code)},
      {title:"Eliminar duplicación",objective:'Crea mostrar_estado(estado: &str) que imprima estado con println!("{}", estado). Llámala con "Activo" e "Inactivo" para mostrar ambos textos en líneas separadas.',starter:"fn main() {\n    // Llama la función dos veces\n}\n\n// Crea mostrar_estado e imprime estado\n",solution:'fn mostrar_estado(estado: &str) {\n    println!("{}", estado);\n}\n\nfn main() {\n    mostrar_estado("Activo");\n    mostrar_estado("Inactivo");\n}',output:"Activo\nInactivo",topic:"Refactorización",advice:"La función reutilizable recibe el texto, lo imprime y evita repetir dos llamadas a println! con la misma estructura.",valid:code=>/fn\s+mostrar_estado\s*\(\s*estado\s*:\s*&str\s*\)\s*\{[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*estado\s*\)\s*;/.test(code)&&/mostrar_estado\s*\(\s*"Activo"\s*\)\s*;/.test(code)&&/mostrar_estado\s*\(\s*"Inactivo"\s*\)\s*;/.test(code)}
    ]
  }
};

function extraChallenge(title,objective,starter,solution,output,topic,advice,checks){
  return {
    title,objective,starter,solution,output,topic,advice,
    valid:code=>checks.every(([,pattern])=>pattern.test(code)),
    requirements:checks.map(([message,pattern])=>({message,test:code=>pattern.test(code)}))
  };
}

const extraChallenges={
  easy:[
    extraChallenge("Saludo con nombre",'Crea nombre con el texto "M4n14ck" y muestra exactamente "Hola, M4n14ck" usando println!("Hola, {}", nombre).','fn main() {\n    // Crea nombre e imprime el saludo\n\n}','fn main() {\n    let nombre = "M4n14ck";\n    println!("Hola, {}", nombre);\n}',"Hola, M4n14ck","Variables",'Guarda el texto en nombre y pásalo al marcador {} de println!.',[["Crea `let nombre = \"M4n14ck\";`.",/let\s+nombre\s*=\s*"M4n14ck"\s*;/],["Imprime con `println!(\"Hola, {}\", nombre);`.",/println!\s*\(\s*"Hola, \{\}"\s*,\s*nombre\s*\)\s*;/]]),
    extraChallenge("Suma de monedas",'Declara monedas = 12 y extra = 8. Imprime la suma 20 usando println!("{}", monedas + extra).','fn main() {\n    // Declara los valores e imprime la suma\n\n}','fn main() {\n    let monedas = 12;\n    let extra = 8;\n    println!("{}", monedas + extra);\n}',"20","Operadores",'Declara ambos enteros y suma las variables dentro de println!.',[["Declara `let monedas = 12;`.",/let\s+monedas\s*=\s*12\s*;/],["Declara `let extra = 8;`.",/let\s+extra\s*=\s*8\s*;/],["Imprime `monedas + extra`.",/println!\s*\(\s*"\{\}"\s*,\s*monedas\s*\+\s*extra\s*\)\s*;/]]),
    extraChallenge("Energia restante",'Declara energia = 100 y dano = 35. Muestra 65 usando println!("{}", energia - dano).','fn main() {\n    // Calcula la energia restante\n\n}','fn main() {\n    let energia = 100;\n    let dano = 35;\n    println!("{}", energia - dano);\n}',"65","Operadores",'Resta dano a energia y muestra el resultado.',[["Declara `energia` con 100.",/let\s+energia\s*=\s*100\s*;/],["Declara `dano` con 35.",/let\s+dano\s*=\s*35\s*;/],["Imprime `energia - dano`.",/println!\s*\(\s*"\{\}"\s*,\s*energia\s*-\s*dano\s*\)\s*;/]]),
    extraChallenge("Puntaje doble",'Declara puntos = 25 y muestra 50 multiplicando puntos por 2 dentro de println!.','fn main() {\n    let puntos = 25;\n    // Imprime el doble\n\n}','fn main() {\n    let puntos = 25;\n    println!("{}", puntos * 2);\n}',"50","Operadores",'Usa el operador * con puntos y el valor 2.',[["Multiplica `puntos * 2` dentro de `println!`.",/println!\s*\(\s*"\{\}"\s*,\s*puntos\s*\*\s*2\s*\)\s*;/]]),
    extraChallenge("Division de equipo",'Declara jugadores = 12 y equipos = 3. Imprime 4 usando jugadores / equipos.','fn main() {\n    // Declara los valores y divide\n\n}','fn main() {\n    let jugadores = 12;\n    let equipos = 3;\n    println!("{}", jugadores / equipos);\n}',"4","Operadores",'La división entre enteros produce otro entero.',[["Declara `jugadores = 12`.",/let\s+jugadores\s*=\s*12\s*;/],["Declara `equipos = 3`.",/let\s+equipos\s*=\s*3\s*;/],["Imprime `jugadores / equipos`.",/println!\s*\(\s*"\{\}"\s*,\s*jugadores\s*\/\s*equipos\s*\)\s*;/]]),
    extraChallenge("Numero par",'Declara numero = 14 y muestra el residuo 0 usando numero % 2 dentro de println!.','fn main() {\n    let numero = 14;\n    // Imprime el residuo\n\n}','fn main() {\n    let numero = 14;\n    println!("{}", numero % 2);\n}',"0","Operadores",'El operador % devuelve el residuo de una división.',[["Usa `numero % 2` dentro de `println!`.",/println!\s*\(\s*"\{\}"\s*,\s*numero\s*%\s*2\s*\)\s*;/]]),
    extraChallenge("Estado activo",'Crea activo con el valor booleano true y muestra exactamente "true" con println!("{}", activo).','fn main() {\n    // Crea el booleano e imprimelo\n\n}','fn main() {\n    let activo = true;\n    println!("{}", activo);\n}',"true","Booleanos",'Los booleanos de Rust son true y false sin comillas.',[["Declara `let activo = true;`.",/let\s+activo\s*=\s*true\s*;/],["Imprime `activo`.",/println!\s*\(\s*"\{\}"\s*,\s*activo\s*\)\s*;/]]),
    extraChallenge("Comparacion de edad",'Declara edad = 20 y muestra true evaluando edad >= 18 dentro de println!.','fn main() {\n    let edad = 20;\n    // Imprime la comparacion\n\n}','fn main() {\n    let edad = 20;\n    println!("{}", edad >= 18);\n}',"true","Comparaciones",'Una comparación produce un valor booleano.',[["Imprime la comparación `edad >= 18`.",/println!\s*\(\s*"\{\}"\s*,\s*edad\s*>=\s*18\s*\)\s*;/]]),
    extraChallenge("Mayor o menor",'Con edad = 16, crea if else: imprime exactamente "Menor" cuando edad sea menor que 18 y "Adulto" en caso contrario.','fn main() {\n    let edad = 16;\n    // Crea el if else\n\n}','fn main() {\n    let edad = 16;\n    if edad < 18 {\n        println!("Menor");\n    } else {\n        println!("Adulto");\n    }\n}',"Menor","Condiciones",'Escribe las dos salidas dentro de los bloques if y else.',[["Crea `if edad < 18`.",/if\s+edad\s*<\s*18\s*\{/],["Imprime `Menor` dentro del `if`.",/if\s+edad\s*<\s*18\s*\{[\s\S]*?println!\s*\(\s*"Menor"\s*\)/],["Agrega `else` e imprime `Adulto`.",/else\s*\{[\s\S]*?println!\s*\(\s*"Adulto"\s*\)/]]),
    extraChallenge("Contador while",'Usa while para imprimir los numeros 1, 2 y 3. Comienza con let mut contador = 1 y aumenta con contador += 1.','fn main() {\n    // Crea el contador y el while\n\n}','fn main() {\n    let mut contador = 1;\n    while contador <= 3 {\n        println!("{}", contador);\n        contador += 1;\n    }\n}',"1\n2\n3","Ciclos",'El contador debe ser mutable y aumentar dentro del while.',[["Declara `let mut contador = 1;`.",/let\s+mut\s+contador\s*=\s*1\s*;/],["Crea `while contador <= 3`.",/while\s+contador\s*<=\s*3\s*\{/],["Imprime y aumenta `contador`.",/println!\s*\(\s*"\{\}"\s*,\s*contador\s*\)[\s\S]*?contador\s*\+=\s*1\s*;/]]),
    extraChallenge("Salir de loop",'Crea un loop que imprima exactamente "Fin" una vez y después use break para terminar.','fn main() {\n    // Crea el loop\n\n}','fn main() {\n    loop {\n        println!("Fin");\n        break;\n    }\n}',"Fin","Ciclos",'break detiene un loop infinito.',[["Crea un bloque `loop`.",/\bloop\s*\{/],["Imprime `Fin` dentro del loop.",/loop\s*\{[\s\S]*?println!\s*\(\s*"Fin"\s*\)/],["Agrega `break;`.",/loop\s*\{[\s\S]*?break\s*;/]]),
    extraChallenge("Rango exclusivo",'Usa for indice in 0..3 e imprime indice. La salida debe ser 0, 1 y 2 en lineas separadas.','fn main() {\n    // Recorre el rango exclusivo\n\n}','fn main() {\n    for indice in 0..3 {\n        println!("{}", indice);\n    }\n}',"0\n1\n2","Rangos",'El rango 0..3 no incluye el valor 3.',[["Crea `for indice in 0..3`.",/for\s+indice\s+in\s+0\s*\.\.\s*3\s*\{/],["Imprime `indice` dentro del ciclo.",/for\s+indice[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*indice\s*\)/]]),
    extraChallenge("Array de niveles",'Crea niveles = [1, 2, 3] e imprime el array con println!("{:?}", niveles).','fn main() {\n    // Crea e imprime el array\n\n}','fn main() {\n    let niveles = [1, 2, 3];\n    println!("{:?}", niveles);\n}',"[1, 2, 3]","Arrays",'El formato {:?} muestra colecciones que implementan Debug.',[["Crea `let niveles = [1, 2, 3];`.",/let\s+niveles\s*=\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*;/],["Imprime con `{:?}`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*niveles\s*\)\s*;/]]),
    extraChallenge("Primer elemento",'Crea codigos = [10, 20, 30] y muestra 10 accediendo a codigos[0].','fn main() {\n    // Crea el array e imprime su primer elemento\n\n}','fn main() {\n    let codigos = [10, 20, 30];\n    println!("{}", codigos[0]);\n}',"10","Arrays",'Los índices comienzan en cero.',[["Crea el array `codigos`.",/let\s+codigos\s*=\s*\[\s*10\s*,\s*20\s*,\s*30\s*\]\s*;/],["Imprime `codigos[0]`.",/println!\s*\(\s*"\{\}"\s*,\s*codigos\s*\[\s*0\s*\]\s*\)\s*;/]]),
    extraChallenge("Tupla de jugador",'Crea jugador = ("Ana", 5), desestructura con let (nombre, nivel) = jugador e imprime exactamente "Ana 5".','fn main() {\n    // Crea y desestructura la tupla\n\n}','fn main() {\n    let jugador = ("Ana", 5);\n    let (nombre, nivel) = jugador;\n    println!("{} {}", nombre, nivel);\n}',"Ana 5","Tuplas",'La desestructuración asigna cada posición a una variable.',[["Crea `jugador = (\"Ana\", 5)`.",/let\s+jugador\s*=\s*\(\s*"Ana"\s*,\s*5\s*\)\s*;/],["Desestructura la tupla.",/let\s*\(\s*nombre\s*,\s*nivel\s*\)\s*=\s*jugador\s*;/],["Imprime `nombre` y `nivel`.",/println!\s*\(\s*"\{\} \{\}"\s*,\s*nombre\s*,\s*nivel\s*\)\s*;/]]),
    extraChallenge("Caracter Rust",'Declara inicial: char = \'R\' y muestra R con println!("{}", inicial).','fn main() {\n    // Declara un char e imprimelo\n\n}',"fn main() {\n    let inicial: char = 'R';\n    println!(\"{}\", inicial);\n}","R","Tipos primitivos",'Un char usa comillas simples.',[["Declara `inicial: char = 'R'`.",/let\s+inicial\s*:\s*char\s*=\s*'R'\s*;/],["Imprime `inicial`.",/println!\s*\(\s*"\{\}"\s*,\s*inicial\s*\)\s*;/]]),
    extraChallenge("Valor decimal",'Declara version: f64 = 1.5 y muestra 1.5 con println!("{}", version).','fn main() {\n    // Declara el decimal e imprimelo\n\n}','fn main() {\n    let version: f64 = 1.5;\n    println!("{}", version);\n}',"1.5","Tipos primitivos",'Anota el tipo f64 después del nombre.',[["Declara `version: f64 = 1.5`.",/let\s+version\s*:\s*f64\s*=\s*1\.5\s*;/],["Imprime `version`.",/println!\s*\(\s*"\{\}"\s*,\s*version\s*\)\s*;/]]),
    extraChallenge("Constante maxima",'Declara const MAXIMO: u32 = 99 fuera de main y muestra 99 dentro de main.','// Declara la constante\n\nfn main() {\n    // Imprime MAXIMO\n}\n','const MAXIMO: u32 = 99;\n\nfn main() {\n    println!("{}", MAXIMO);\n}',"99","Constantes",'Las constantes usan const, un nombre en mayúsculas y tipo obligatorio.',[["Declara `const MAXIMO: u32 = 99;`.",/const\s+MAXIMO\s*:\s*u32\s*=\s*99\s*;/],["Imprime `MAXIMO`.",/println!\s*\(\s*"\{\}"\s*,\s*MAXIMO\s*\)\s*;/]]),
    extraChallenge("Shadowing",'Declara valor = 5 y vuelve a declarar valor = valor + 5. Imprime 10.','fn main() {\n    // Usa shadowing con valor\n\n}','fn main() {\n    let valor = 5;\n    let valor = valor + 5;\n    println!("{}", valor);\n}',"10","Shadowing",'Rust permite volver a declarar una variable con let.',[["Declara primero `let valor = 5;`.",/let\s+valor\s*=\s*5\s*;/],["Vuelve a declarar `valor = valor + 5`.",/let\s+valor\s*=\s*valor\s*\+\s*5\s*;/],["Imprime `valor`.",/println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)\s*;/]]),
    extraChallenge("Semaforo match",'Con color = "verde", usa match para imprimir "Avanza" en "verde" y "Espera" en cualquier otro caso.','fn main() {\n    let color = "verde";\n    // Crea el match\n\n}','fn main() {\n    let color = "verde";\n    match color {\n        "verde" => println!("Avanza"),\n        _ => println!("Espera"),\n    }\n}',"Avanza","Match",'Incluye el patrón verde y un patrón general _.',[["Crea `match color`.",/match\s+color\s*\{/],["Agrega el caso `\"verde\" => println!(\"Avanza\")`.",/"verde"\s*=>\s*println!\s*\(\s*"Avanza"\s*\)/],["Agrega `_ => println!(\"Espera\")`.",/_\s*=>\s*println!\s*\(\s*"Espera"\s*\)/]]),
    extraChallenge("String propio",'Crea lenguaje con String::from("Rust") y muestra exactamente "Rust".','fn main() {\n    // Crea el String e imprimelo\n\n}','fn main() {\n    let lenguaje = String::from("Rust");\n    println!("{}", lenguaje);\n}',"Rust","String",'String::from crea texto con memoria propia.',[["Crea `String::from(\"Rust\")`.",/let\s+lenguaje\s*=\s*String\s*::\s*from\s*\(\s*"Rust"\s*\)\s*;/],["Imprime `lenguaje`.",/println!\s*\(\s*"\{\}"\s*,\s*lenguaje\s*\)\s*;/]]),
    extraChallenge("Longitud del array",'Crea datos = [4, 8, 15, 16] y muestra 4 usando datos.len().','fn main() {\n    // Crea el array e imprime su longitud\n\n}','fn main() {\n    let datos = [4, 8, 15, 16];\n    println!("{}", datos.len());\n}',"4","Arrays",'El método len devuelve la cantidad de elementos.',[["Crea el array `datos` con cuatro valores.",/let\s+datos\s*=\s*\[\s*4\s*,\s*8\s*,\s*15\s*,\s*16\s*\]\s*;/],["Imprime `datos.len()`.",/println!\s*\(\s*"\{\}"\s*,\s*datos\.len\s*\(\s*\)\s*\)\s*;/]]),
    extraChallenge("Funcion cuadrado",'Crea fn cuadrado(numero: i32) -> i32 que devuelva numero * numero. En main imprime cuadrado(6).','// Crea cuadrado\n\nfn main() {\n    // Imprime cuadrado(6)\n}\n','fn cuadrado(numero: i32) -> i32 {\n    numero * numero\n}\n\nfn main() {\n    println!("{}", cuadrado(6));\n}',"36","Funciones",'La última expresión se devuelve sin punto y coma.',[["Declara `fn cuadrado(numero: i32) -> i32`.",/fn\s+cuadrado\s*\(\s*numero\s*:\s*i32\s*\)\s*->\s*i32/],["Devuelve `numero * numero`.",/fn\s+cuadrado[\s\S]*?numero\s*\*\s*numero/],["Imprime `cuadrado(6)`.",/println!\s*\(\s*"\{\}"\s*,\s*cuadrado\s*\(\s*6\s*\)\s*\)\s*;/]]),
    extraChallenge("Funcion es positivo",'Crea fn es_positivo(numero: i32) -> bool que devuelva numero > 0. Imprime es_positivo(8).','// Crea es_positivo\n\nfn main() {\n    // Imprime el resultado\n}\n','fn es_positivo(numero: i32) -> bool {\n    numero > 0\n}\n\nfn main() {\n    println!("{}", es_positivo(8));\n}',"true","Funciones",'La comparación numero > 0 ya produce un bool.',[["Declara `fn es_positivo(numero: i32) -> bool`.",/fn\s+es_positivo\s*\(\s*numero\s*:\s*i32\s*\)\s*->\s*bool/],["Devuelve `numero > 0`.",/fn\s+es_positivo[\s\S]*?numero\s*>\s*0/],["Imprime `es_positivo(8)`.",/println!\s*\(\s*"\{\}"\s*,\s*es_positivo\s*\(\s*8\s*\)\s*\)\s*;/]]),
    extraChallenge("Conversor Celsius",'Declara celsius = 20 y calcula fahrenheit = celsius * 9 / 5 + 32. Imprime 68.','fn main() {\n    // Convierte 20 C a Fahrenheit\n\n}','fn main() {\n    let celsius = 20;\n    let fahrenheit = celsius * 9 / 5 + 32;\n    println!("{}", fahrenheit);\n}',"68","Operadores",'Respeta la fórmula indicada y guarda el resultado.',[["Declara `let celsius = 20;`.",/let\s+celsius\s*=\s*20\s*;/],["Calcula `celsius * 9 / 5 + 32`.",/let\s+fahrenheit\s*=\s*celsius\s*\*\s*9\s*\/\s*5\s*\+\s*32\s*;/],["Imprime `fahrenheit`.",/println!\s*\(\s*"\{\}"\s*,\s*fahrenheit\s*\)\s*;/]])
  ],
  medium:[
    extraChallenge("Funcion doble",'Crea fn doble(n: i32) -> i32 que devuelva n * 2. Imprime doble(7).','// Crea doble\n\nfn main() {\n    // Imprime doble(7)\n}\n','fn doble(n: i32) -> i32 { n * 2 }\nfn main() { println!("{}", doble(7)); }',"14","Funciones",'Define el parámetro, el retorno y la llamada.',[["Declara `fn doble(n: i32) -> i32`.",/fn\s+doble\s*\(\s*n\s*:\s*i32\s*\)\s*->\s*i32/],["Devuelve `n * 2`.",/fn\s+doble[\s\S]*?n\s*\*\s*2/],["Imprime `doble(7)`.",/println!\s*\(\s*"\{\}"\s*,\s*doble\s*\(\s*7\s*\)\s*\)/]]),
    extraChallenge("Funcion maximo",'Crea fn maximo(a: i32, b: i32) -> i32 usando if. Imprime maximo(9, 4).','// Crea maximo\n\nfn main() {\n    // Imprime maximo(9, 4)\n}\n','fn maximo(a: i32, b: i32) -> i32 {\n    if a > b { a } else { b }\n}\nfn main() { println!("{}", maximo(9, 4)); }',"9","Funciones",'Un if puede devolver un valor desde cada rama.',[["Declara `fn maximo(a: i32, b: i32) -> i32`.",/fn\s+maximo\s*\(\s*a\s*:\s*i32\s*,\s*b\s*:\s*i32\s*\)\s*->\s*i32/],["Usa `if a > b` con ramas `a` y `b`.",/if\s+a\s*>\s*b\s*\{\s*a\s*\}\s*else\s*\{\s*b\s*\}/],["Imprime `maximo(9, 4)`.",/maximo\s*\(\s*9\s*,\s*4\s*\)/]]),
    extraChallenge("Eliminar del vector",'Crea datos = vec![10, 20, 30] mutable, ejecuta datos.pop() e imprime [10, 20].','fn main() {\n    // Crea, modifica e imprime datos\n\n}','fn main() {\n    let mut datos = vec![10, 20, 30];\n    datos.pop();\n    println!("{:?}", datos);\n}',"[10, 20]","Vectores",'pop elimina el último elemento de un vector mutable.',[["Crea `let mut datos = vec![10, 20, 30];`.",/let\s+mut\s+datos\s*=\s*vec!\s*\[\s*10\s*,\s*20\s*,\s*30\s*\]\s*;/],["Llama `datos.pop();`.",/datos\.pop\s*\(\s*\)\s*;/],["Imprime `datos` con `{:?}`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*datos\s*\)/]]),
    extraChallenge("Suma del vector",'Crea numeros = vec![2, 4, 6] y suma sus elementos con numeros.iter().sum::<i32>(). Imprime 12.','fn main() {\n    // Crea el vector, suma e imprime\n\n}','fn main() {\n    let numeros = vec![2, 4, 6];\n    let total = numeros.iter().sum::<i32>();\n    println!("{}", total);\n}',"12","Iteradores",'iter recorre referencias y sum acumula sus valores.',[["Crea `numeros = vec![2, 4, 6]`.",/let\s+numeros\s*=\s*vec!\s*\[\s*2\s*,\s*4\s*,\s*6\s*\]/],["Usa `numeros.iter().sum::<i32>()`.",/numeros\.iter\s*\(\s*\)\.sum\s*::\s*<\s*i32\s*>\s*\(\s*\)/],["Imprime `total`.",/println!\s*\(\s*"\{\}"\s*,\s*total\s*\)/]]),
    extraChallenge("Slice central",'Crea datos = [1, 2, 3, 4], toma &datos[1..3] en medio e imprime [2, 3] con {:?}.','fn main() {\n    // Crea el array y su slice\n\n}','fn main() {\n    let datos = [1, 2, 3, 4];\n    let medio = &datos[1..3];\n    println!("{:?}", medio);\n}',"[2, 3]","Slices",'Un slice presta una región continua sin copiarla.',[["Crea el array `datos`.",/let\s+datos\s*=\s*\[\s*1\s*,\s*2\s*,\s*3\s*,\s*4\s*\]/],["Crea `medio = &datos[1..3]`.",/let\s+medio\s*=\s*&\s*datos\s*\[\s*1\s*\.\.\s*3\s*\]\s*;/],["Imprime `medio` con `{:?}`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*medio\s*\)/]]),
    extraChallenge("Reemplazar texto",'Crea texto = String::from("Hola mundo"), usa replace("mundo", "Rust") e imprime "Hola Rust".','fn main() {\n    // Reemplaza e imprime el texto\n\n}','fn main() {\n    let texto = String::from("Hola mundo");\n    let nuevo = texto.replace("mundo", "Rust");\n    println!("{}", nuevo);\n}',"Hola Rust","String",'replace devuelve un String nuevo con el cambio.',[["Crea `texto` con `Hola mundo`.",/let\s+texto\s*=\s*String::from\s*\(\s*"Hola mundo"\s*\)/],["Usa `texto.replace(\"mundo\", \"Rust\")`.",/texto\.replace\s*\(\s*"mundo"\s*,\s*"Rust"\s*\)/],["Imprime `nuevo`.",/println!\s*\(\s*"\{\}"\s*,\s*nuevo\s*\)/]]),
    extraChallenge("Contar caracteres",'Crea palabra = "Rustaceo" y muestra 8 usando palabra.chars().count().','fn main() {\n    // Cuenta los caracteres\n\n}','fn main() {\n    let palabra = "Rustaceo";\n    println!("{}", palabra.chars().count());\n}',"8","String",'chars recorre caracteres Unicode y count los cuenta.',[["Declara `palabra = \"Rustaceo\"`.",/let\s+palabra\s*=\s*"Rustaceo"\s*;/],["Imprime `palabra.chars().count()`.",/println!\s*\(\s*"\{\}"\s*,\s*palabra\.chars\s*\(\s*\)\.count\s*\(\s*\)\s*\)/]]),
    extraChallenge("Struct Punto",'Declara struct Punto con x: i32 e y: i32. Crea Punto { x: 3, y: 7 } e imprime "3,7".','// Declara Punto\n\nfn main() {\n    // Crea e imprime el punto\n}\n','struct Punto { x: i32, y: i32 }\nfn main() {\n    let punto = Punto { x: 3, y: 7 };\n    println!("{},{}", punto.x, punto.y);\n}',"3,7","Estructuras",'Define los campos, crea la instancia y accede con punto.campo.',[["Declara `struct Punto` con `x` e `y` tipo i32.",/struct\s+Punto\s*\{[\s\S]*?x\s*:\s*i32[\s\S]*?y\s*:\s*i32/],["Crea `Punto { x: 3, y: 7 }`.",/Punto\s*\{\s*x\s*:\s*3\s*,\s*y\s*:\s*7\s*\}/],["Imprime `punto.x` y `punto.y`.",/println!\s*\(\s*"\{\},\{\}"\s*,\s*punto\.x\s*,\s*punto\.y\s*\)/]]),
    extraChallenge("Metodo incrementar",'Declara struct Contador { valor: i32 } e implementa incrementar(&mut self) con self.valor += 1. Parte de 4, incrementa e imprime 5.','struct Contador { valor: i32 }\n\n// Implementa incrementar y usa el metodo\n','struct Contador { valor: i32 }\nimpl Contador { fn incrementar(&mut self) { self.valor += 1; } }\nfn main() {\n    let mut contador = Contador { valor: 4 };\n    contador.incrementar();\n    println!("{}", contador.valor);\n}',"5","Metodos",'El método necesita &mut self y la instancia debe ser mutable.',[["Implementa `fn incrementar(&mut self)`.",/fn\s+incrementar\s*\(\s*&\s*mut\s+self\s*\)/],["Suma con `self.valor += 1`.",/self\.valor\s*\+=\s*1\s*;/],["Crea `contador` mutable con valor 4.",/let\s+mut\s+contador\s*=\s*Contador\s*\{\s*valor\s*:\s*4\s*\}/],["Llama `contador.incrementar()` e imprime el valor.",/contador\.incrementar\s*\(\s*\)[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*contador\.valor\s*\)/]]),
    extraChallenge("Enum Estado",'Declara enum Estado { Activo, Inactivo }. Con Estado::Activo usa match para imprimir exactamente "activo".','// Declara Estado\n\nfn main() {\n    // Crea el estado y usa match\n}\n','enum Estado { Activo, Inactivo }\nfn main() {\n    let estado = Estado::Activo;\n    match estado {\n        Estado::Activo => println!("activo"),\n        Estado::Inactivo => println!("inactivo"),\n    }\n}',"activo","Enums",'Cada variante del enum debe tener un brazo del match.',[["Declara `enum Estado` con ambas variantes.",/enum\s+Estado\s*\{[\s\S]*?Activo[\s\S]*?Inactivo/],["Crea `Estado::Activo`.",/let\s+estado\s*=\s*Estado\s*::\s*Activo\s*;/],["Usa `match estado` e imprime `activo`.",/match\s+estado\s*\{[\s\S]*?Estado::Activo\s*=>\s*println!\s*\(\s*"activo"\s*\)/]]),
    extraChallenge("Option con if let",'Crea valor = Some(42) y usa if let Some(numero) = valor para imprimir 42.','fn main() {\n    let valor = Some(42);\n    // Extrae e imprime el numero\n\n}','fn main() {\n    let valor = Some(42);\n    if let Some(numero) = valor {\n        println!("{}", numero);\n    }\n}',"42","Option",'if let permite manejar un patrón sin escribir un match completo.',[["Crea `valor = Some(42)`.",/let\s+valor\s*=\s*Some\s*\(\s*42\s*\)\s*;/],["Usa `if let Some(numero) = valor`.",/if\s+let\s+Some\s*\(\s*numero\s*\)\s*=\s*valor\s*\{/],["Imprime `numero`.",/println!\s*\(\s*"\{\}"\s*,\s*numero\s*\)/]]),
    extraChallenge("Result con match",'Crea resultado: Result<i32, &str> = Ok(9). Usa match para imprimir 9 en Ok y "fallo" en Err.','fn main() {\n    let resultado: Result<i32, &str> = Ok(9);\n    // Maneja el Result\n\n}','fn main() {\n    let resultado: Result<i32, &str> = Ok(9);\n    match resultado {\n        Ok(valor) => println!("{}", valor),\n        Err(_) => println!("fallo"),\n    }\n}',"9","Result",'Extrae el valor de Ok y cubre también Err.',[["Crea el `Result` con `Ok(9)`.",/let\s+resultado\s*:\s*Result\s*<\s*i32\s*,\s*&str\s*>\s*=\s*Ok\s*\(\s*9\s*\)/],["Maneja `Ok(valor)` e imprime valor.",/Ok\s*\(\s*valor\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)/],["Maneja `Err(_)` e imprime `fallo`.",/Err\s*\(\s*_\s*\)\s*=>\s*println!\s*\(\s*"fallo"\s*\)/]]),
    extraChallenge("Mapa de puntajes",'Importa HashMap, inserta "Ana" con 100 y muestra 100 accediendo con puntajes["Ana"].','// Importa HashMap\n\nfn main() {\n    // Crea el mapa, inserta e imprime\n}\n','use std::collections::HashMap;\nfn main() {\n    let mut puntajes = HashMap::new();\n    puntajes.insert("Ana", 100);\n    println!("{}", puntajes["Ana"]);\n}',"100","HashMap",'HashMap almacena pares clave-valor y necesita importación.',[["Importa `std::collections::HashMap`.",/use\s+std\s*::\s*collections\s*::\s*HashMap\s*;/],["Crea `puntajes = HashMap::new()` mutable.",/let\s+mut\s+puntajes\s*=\s*HashMap::new\s*\(\s*\)/],["Inserta `\"Ana\", 100`.",/puntajes\.insert\s*\(\s*"Ana"\s*,\s*100\s*\)/],["Imprime `puntajes[\"Ana\"]`.",/println!\s*\(\s*"\{\}"\s*,\s*puntajes\s*\[\s*"Ana"\s*\]\s*\)/]]),
    extraChallenge("Mapear al doble",'Crea vec![1, 2, 3], usa into_iter().map(|n| n * 2).collect::<Vec<i32>>() e imprime [2, 4, 6].','fn main() {\n    // Transforma el vector\n\n}','fn main() {\n    let dobles = vec![1, 2, 3].into_iter().map(|n| n * 2).collect::<Vec<i32>>();\n    println!("{:?}", dobles);\n}',"[2, 4, 6]","Iteradores",'map transforma cada elemento y collect reúne el resultado.',[["Usa `.into_iter().map(|n| n * 2)`.",/vec!\s*\[[\s\S]*?\]\.into_iter\s*\(\s*\)\.map\s*\(\s*\|\s*n\s*\|\s*n\s*\*\s*2\s*\)/],["Recolecta con `collect::<Vec<i32>>()`.",/collect\s*::\s*<\s*Vec\s*<\s*i32\s*>\s*>\s*\(\s*\)/],["Imprime `dobles` con `{:?}`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*dobles\s*\)/]]),
    extraChallenge("Filtrar pares",'Filtra vec![1, 2, 3, 4] con filter(|n| n % 2 == 0), recolecta Vec<i32> e imprime [2, 4].','fn main() {\n    // Filtra los numeros pares\n\n}','fn main() {\n    let pares = vec![1, 2, 3, 4].into_iter().filter(|n| n % 2 == 0).collect::<Vec<i32>>();\n    println!("{:?}", pares);\n}',"[2, 4]","Iteradores",'filter conserva únicamente los elementos que cumplen la condición.',[["Usa `filter(|n| n % 2 == 0)`.",/filter\s*\(\s*\|\s*n\s*\|\s*n\s*%\s*2\s*==\s*0\s*\)/],["Recolecta en `Vec<i32>`.",/collect\s*::\s*<\s*Vec\s*<\s*i32\s*>\s*>\s*\(\s*\)/],["Imprime `pares`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*pares\s*\)/]]),
    extraChallenge("Closure triple",'Crea una closure triple = |n: i32| n * 3 e imprime triple(5).','fn main() {\n    // Crea y usa la closure\n\n}','fn main() {\n    let triple = |n: i32| n * 3;\n    println!("{}", triple(5));\n}',"15","Closures",'Una closure se define entre barras verticales.',[["Declara `triple = |n: i32| n * 3`.",/let\s+triple\s*=\s*\|\s*n\s*:\s*i32\s*\|\s*n\s*\*\s*3\s*;/],["Imprime `triple(5)`.",/println!\s*\(\s*"\{\}"\s*,\s*triple\s*\(\s*5\s*\)\s*\)/]]),
    extraChallenge("Ordenar vector",'Crea numeros = vec![3, 1, 2] mutable, llama numeros.sort() e imprime [1, 2, 3].','fn main() {\n    // Ordena el vector\n\n}','fn main() {\n    let mut numeros = vec![3, 1, 2];\n    numeros.sort();\n    println!("{:?}", numeros);\n}',"[1, 2, 3]","Vectores",'sort modifica el vector, por eso debe ser mutable.',[["Crea el vector mutable `[3, 1, 2]`.",/let\s+mut\s+numeros\s*=\s*vec!\s*\[\s*3\s*,\s*1\s*,\s*2\s*\]/],["Llama `numeros.sort();`.",/numeros\.sort\s*\(\s*\)\s*;/],["Imprime `numeros`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*numeros\s*\)/]]),
    extraChallenge("Eliminar repetidos",'Crea datos = vec![1, 1, 2, 2, 3] mutable, llama datos.dedup() e imprime [1, 2, 3].','fn main() {\n    // Elimina duplicados consecutivos\n\n}','fn main() {\n    let mut datos = vec![1, 1, 2, 2, 3];\n    datos.dedup();\n    println!("{:?}", datos);\n}',"[1, 2, 3]","Vectores",'dedup elimina duplicados consecutivos de un vector mutable.',[["Crea `datos` mutable con valores repetidos.",/let\s+mut\s+datos\s*=\s*vec!\s*\[\s*1\s*,\s*1\s*,\s*2\s*,\s*2\s*,\s*3\s*\]/],["Llama `datos.dedup();`.",/datos\.dedup\s*\(\s*\)\s*;/],["Imprime `datos`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*datos\s*\)/]]),
    extraChallenge("Desestructurar struct",'Declara struct Color { r: u8, g: u8, b: u8 }, crea Color { r: 10, g: 20, b: 30 }, desestructura e imprime "10 20 30".','// Declara Color\n\nfn main() {\n    // Crea, desestructura e imprime\n}\n','struct Color { r: u8, g: u8, b: u8 }\nfn main() {\n    let color = Color { r: 10, g: 20, b: 30 };\n    let Color { r, g, b } = color;\n    println!("{} {} {}", r, g, b);\n}',"10 20 30","Estructuras",'El patrón de desestructuración usa el nombre de la estructura.',[["Declara `struct Color` con `r`, `g` y `b`.",/struct\s+Color\s*\{[\s\S]*?r\s*:\s*u8[\s\S]*?g\s*:\s*u8[\s\S]*?b\s*:\s*u8/],["Crea `Color { r: 10, g: 20, b: 30 }`.",/Color\s*\{\s*r\s*:\s*10\s*,\s*g\s*:\s*20\s*,\s*b\s*:\s*30\s*\}/],["Desestructura con `let Color { r, g, b } = color`.",/let\s+Color\s*\{\s*r\s*,\s*g\s*,\s*b\s*\}\s*=\s*color\s*;/],["Imprime `r`, `g` y `b`.",/println!\s*\(\s*"\{\} \{\} \{\}"\s*,\s*r\s*,\s*g\s*,\s*b\s*\)/]]),
    extraChallenge("Match con rango",'Con nota = 85 usa match: 90..=100 imprime "A", 80..=89 imprime "B" y _ imprime "C".','fn main() {\n    let nota = 85;\n    // Clasifica la nota\n\n}','fn main() {\n    let nota = 85;\n    match nota {\n        90..=100 => println!("A"),\n        80..=89 => println!("B"),\n        _ => println!("C"),\n    }\n}',"B","Match",'Los patrones de rango permiten agrupar varios valores.',[["Crea `match nota`.",/match\s+nota\s*\{/],["Agrega `90..=100 => println!(\"A\")`.",/90\s*\.\.=\s*100\s*=>\s*println!\s*\(\s*"A"\s*\)/],["Agrega `80..=89 => println!(\"B\")`.",/80\s*\.\.=\s*89\s*=>\s*println!\s*\(\s*"B"\s*\)/],["Agrega el caso `_`.",/_\s*=>\s*println!\s*\(\s*"C"\s*\)/]]),
    extraChallenge("While let pop",'Crea pila = vec![1, 2, 3] mutable y usa while let Some(valor) = pila.pop() para imprimir 3, 2 y 1.','fn main() {\n    // Crea la pila y vaciala\n\n}','fn main() {\n    let mut pila = vec![1, 2, 3];\n    while let Some(valor) = pila.pop() {\n        println!("{}", valor);\n    }\n}',"3\n2\n1","Pattern matching",'pop devuelve Option y while let repite mientras exista Some.',[["Crea `pila` mutable.",/let\s+mut\s+pila\s*=\s*vec!\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]/],["Usa `while let Some(valor) = pila.pop()`.",/while\s+let\s+Some\s*\(\s*valor\s*\)\s*=\s*pila\.pop\s*\(\s*\)\s*\{/],["Imprime `valor`.",/println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)/]]),
    extraChallenge("Retornar tupla",'Crea fn limites() -> (i32, i32) que devuelva (1, 10). En main desestructura e imprime "1-10".','// Crea limites\n\nfn main() {\n    // Desestructura e imprime\n}\n','fn limites() -> (i32, i32) { (1, 10) }\nfn main() {\n    let (minimo, maximo) = limites();\n    println!("{}-{}", minimo, maximo);\n}',"1-10","Funciones",'Una función puede devolver una tupla con varios datos.',[["Declara `fn limites() -> (i32, i32)`.",/fn\s+limites\s*\(\s*\)\s*->\s*\(\s*i32\s*,\s*i32\s*\)/],["Devuelve `(1, 10)`.",/fn\s+limites[\s\S]*?\(\s*1\s*,\s*10\s*\)/],["Desestructura `limites()`.",/let\s*\(\s*minimo\s*,\s*maximo\s*\)\s*=\s*limites\s*\(\s*\)/],["Imprime `minimo` y `maximo`.",/println!\s*\(\s*"\{\}-\{\}"\s*,\s*minimo\s*,\s*maximo\s*\)/]]),
    extraChallenge("Constructor new",'Declara struct Usuario { nivel: u32 } e implementa fn new(nivel: u32) -> Self. Crea Usuario::new(8) e imprime 8.','struct Usuario { nivel: u32 }\n\n// Implementa new y usalo\n','struct Usuario { nivel: u32 }\nimpl Usuario { fn new(nivel: u32) -> Self { Self { nivel } } }\nfn main() {\n    let usuario = Usuario::new(8);\n    println!("{}", usuario.nivel);\n}',"8","Metodos asociados",'new es una función asociada porque no recibe self.',[["Implementa `fn new(nivel: u32) -> Self`.",/fn\s+new\s*\(\s*nivel\s*:\s*u32\s*\)\s*->\s*Self/],["Devuelve `Self { nivel }`.",/Self\s*\{\s*nivel\s*\}/],["Crea `Usuario::new(8)`.",/Usuario\s*::\s*new\s*\(\s*8\s*\)/],["Imprime `usuario.nivel`.",/println!\s*\(\s*"\{\}"\s*,\s*usuario\.nivel\s*\)/]]),
    extraChallenge("Funcion generica identidad",'Crea fn identidad<T>(valor: T) -> T que devuelva valor. Imprime identidad(21).','// Crea identidad generica\n\nfn main() {\n    // Imprime identidad(21)\n}\n','fn identidad<T>(valor: T) -> T { valor }\nfn main() { println!("{}", identidad(21)); }',"21","Genericos",'El parámetro T permite aceptar cualquier tipo.',[["Declara `fn identidad<T>(valor: T) -> T`.",/fn\s+identidad\s*<\s*T\s*>\s*\(\s*valor\s*:\s*T\s*\)\s*->\s*T/],["Devuelve `valor`.",/fn\s+identidad[\s\S]*?\{\s*valor\s*\}/],["Imprime `identidad(21)`.",/identidad\s*\(\s*21\s*\)/]]),
    extraChallenge("Trait Saludar",'Declara trait Saludar con fn saludo(&self) -> &str. Implementalo para Persona y devuelve "Hola". Imprime persona.saludo().','struct Persona;\n\n// Declara e implementa Saludar\n','trait Saludar { fn saludo(&self) -> &str; }\nstruct Persona;\nimpl Saludar for Persona { fn saludo(&self) -> &str { "Hola" } }\nfn main() { let persona = Persona; println!("{}", persona.saludo()); }',"Hola","Traits",'Un trait define comportamiento que un tipo puede implementar.',[["Declara `trait Saludar`.",/trait\s+Saludar\s*\{/],["Define `fn saludo(&self) -> &str`.",/fn\s+saludo\s*\(\s*&\s*self\s*\)\s*->\s*&str/],["Implementa `Saludar for Persona`.",/impl\s+Saludar\s+for\s+Persona/],["Devuelve `\"Hola\"` e imprime `persona.saludo()`.",/"Hola"[\s\S]*?println!\s*\([\s\S]*?persona\.saludo\s*\(\s*\)/]])
  ],
  advanced:[
    extraChallenge("Clonar propiedad",'Crea original = String::from("Rust"), clona en copia con original.clone() e imprime "Rust Rust" usando ambas variables.','fn main() {\n    // Crea, clona e imprime\n\n}','fn main() {\n    let original = String::from("Rust");\n    let copia = original.clone();\n    println!("{} {}", original, copia);\n}',"Rust Rust","Ownership",'clone duplica los datos del heap y conserva ambos propietarios.',[["Crea `original` con `String::from(\"Rust\")`.",/let\s+original\s*=\s*String::from\s*\(\s*"Rust"\s*\)/],["Crea `copia = original.clone()`.",/let\s+copia\s*=\s*original\.clone\s*\(\s*\)\s*;/],["Imprime `original` y `copia`.",/println!\s*\(\s*"\{\} \{\}"\s*,\s*original\s*,\s*copia\s*\)/]]),
    extraChallenge("Prestamo mutable",'Crea fn agregar(texto: &mut String) que ejecute texto.push_str("!"). En main presta un String mutable e imprime "Rust!".','// Crea agregar\n\nfn main() {\n    // Crea texto, prestalo e imprime\n}\n','fn agregar(texto: &mut String) { texto.push_str("!"); }\nfn main() {\n    let mut texto = String::from("Rust");\n    agregar(&mut texto);\n    println!("{}", texto);\n}',"Rust!","Prestamos mutables",'El valor y la referencia deben ser mutables.',[["Declara `fn agregar(texto: &mut String)`.",/fn\s+agregar\s*\(\s*texto\s*:\s*&\s*mut\s*String\s*\)/],["Usa `texto.push_str(\"!\")`.",/texto\.push_str\s*\(\s*"!"\s*\)/],["Crea `texto` mutable y llama `agregar(&mut texto)`.",/let\s+mut\s+texto[\s\S]*?agregar\s*\(\s*&\s*mut\s+texto\s*\)/],["Imprime `texto`.",/println!\s*\(\s*"\{\}"\s*,\s*texto\s*\)/]]),
    extraChallenge("Dividir slice mutable",'Crea datos = [1, 2, 3, 4] mutable, usa split_at_mut(2), cambia izquierda[0] = 9 e imprime [9, 2, 3, 4].','fn main() {\n    // Divide y modifica el array\n\n}','fn main() {\n    let mut datos = [1, 2, 3, 4];\n    let (izquierda, _) = datos.split_at_mut(2);\n    izquierda[0] = 9;\n    println!("{:?}", datos);\n}',"[9, 2, 3, 4]","Prestamos",'split_at_mut crea regiones mutables que no se superponen.',[["Crea `datos` mutable.",/let\s+mut\s+datos\s*=\s*\[\s*1\s*,\s*2\s*,\s*3\s*,\s*4\s*\]/],["Usa `datos.split_at_mut(2)`.",/datos\.split_at_mut\s*\(\s*2\s*\)/],["Asigna `izquierda[0] = 9`.",/izquierda\s*\[\s*0\s*\]\s*=\s*9\s*;/],["Imprime `datos`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*datos\s*\)/]]),
    extraChallenge("Lifetime mayor",'Crea fn mayor<\'a>(a: &\'a str, b: &\'a str) -> &\'a str que devuelva el texto más largo. Imprime mayor("Rust", "Programacion").','// Crea mayor con lifetime\n\nfn main() {\n    // Imprime el texto mayor\n}\n',"fn mayor<'a>(a: &'a str, b: &'a str) -> &'a str {\n    if a.len() > b.len() { a } else { b }\n}\nfn main() { println!(\"{}\", mayor(\"Rust\", \"Programacion\")); }","Programacion","Lifetimes",'El lifetime relaciona las referencias de entrada con la salida.',[["Declara el lifetime `<'a>`.",/fn\s+mayor\s*<\s*'a\s*>/],["Usa `&'a str` en ambas entradas y la salida.",/\(\s*a\s*:\s*&\s*'a\s+str\s*,\s*b\s*:\s*&\s*'a\s+str\s*\)\s*->\s*&\s*'a\s+str/],["Compara `a.len()` y `b.len()`.",/a\.len\s*\(\s*\)\s*>\s*b\.len\s*\(\s*\)/],["Imprime la llamada a `mayor`.",/mayor\s*\(\s*"Rust"\s*,\s*"Programacion"\s*\)/]]),
    extraChallenge("Maximo generico",'Crea fn maximo<T: PartialOrd + Copy>(a: T, b: T) -> T usando if. Imprime maximo(8, 3).','// Crea maximo generico\n\nfn main() {\n    // Imprime maximo(8, 3)\n}\n','fn maximo<T: PartialOrd + Copy>(a: T, b: T) -> T { if a > b { a } else { b } }\nfn main() { println!("{}", maximo(8, 3)); }',"8","Genericos",'PartialOrd permite comparar y Copy devolver el valor por copia.',[["Declara `T: PartialOrd + Copy`.",/fn\s+maximo\s*<\s*T\s*:\s*PartialOrd\s*\+\s*Copy\s*>/],["Recibe `(a: T, b: T) -> T`.",/\(\s*a\s*:\s*T\s*,\s*b\s*:\s*T\s*\)\s*->\s*T/],["Devuelve `a` o `b` con un `if`.",/if\s+a\s*>\s*b\s*\{\s*a\s*\}\s*else\s*\{\s*b\s*\}/],["Imprime `maximo(8, 3)`.",/maximo\s*\(\s*8\s*,\s*3\s*\)/]]),
    extraChallenge("Trait Resumen",'Declara trait Resumen con fn resumen(&self) -> String. Implementalo para Articulo { titulo: String } devolviendo self.titulo.clone() e imprime "Rust seguro".','struct Articulo { titulo: String }\n\n// Declara e implementa Resumen\n','trait Resumen { fn resumen(&self) -> String; }\nstruct Articulo { titulo: String }\nimpl Resumen for Articulo { fn resumen(&self) -> String { self.titulo.clone() } }\nfn main() { let a = Articulo { titulo: String::from("Rust seguro") }; println!("{}", a.resumen()); }',"Rust seguro","Traits",'El trait define el contrato y el impl aporta el comportamiento.',[["Declara `trait Resumen`.",/trait\s+Resumen\s*\{/],["Define `fn resumen(&self) -> String`.",/fn\s+resumen\s*\(\s*&\s*self\s*\)\s*->\s*String/],["Implementa `Resumen for Articulo`.",/impl\s+Resumen\s+for\s+Articulo/],["Devuelve `self.titulo.clone()`.",/self\.titulo\.clone\s*\(\s*\)/],["Imprime `a.resumen()`.",/println!\s*\([\s\S]*?a\.resumen\s*\(\s*\)/]]),
    extraChallenge("Implementar Display",'Implementa std::fmt::Display para Punto { x: i32, y: i32 } usando write!(f, "({}, {})", self.x, self.y). Imprime (2, 5).','use std::fmt;\nstruct Punto { x: i32, y: i32 }\n\n// Implementa Display\n','use std::fmt;\nstruct Punto { x: i32, y: i32 }\nimpl fmt::Display for Punto {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result { write!(f, "({}, {})", self.x, self.y) }\n}\nfn main() { println!("{}", Punto { x: 2, y: 5 }); }',"(2, 5)","Traits estandar",'Display controla cómo se presenta un tipo con {}.',[["Implementa `fmt::Display for Punto`.",/impl\s+fmt\s*::\s*Display\s+for\s+Punto/],["Declara `fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result`.",/fn\s+fmt\s*\(\s*&\s*self\s*,\s*f\s*:\s*&\s*mut\s+fmt::Formatter\s*\)\s*->\s*fmt::Result/],["Usa `write!` con `self.x` y `self.y`.",/write!\s*\(\s*f\s*,\s*"\(\{\}, \{\}\)"\s*,\s*self\.x\s*,\s*self\.y\s*\)/],["Imprime un `Punto` con `{}`.",/println!\s*\(\s*"\{\}"\s*,\s*Punto\s*\{/]]),
    extraChallenge("Propagar Result",'Crea fn duplicar(texto: &str) -> Result<i32, std::num::ParseIntError>. Convierte con texto.parse::<i32>()? y devuelve Ok(numero * 2). Imprime duplicar("21").unwrap().','// Crea duplicar con Result y ?\n\nfn main() {\n    // Imprime el resultado\n}\n','fn duplicar(texto: &str) -> Result<i32, std::num::ParseIntError> {\n    let numero = texto.parse::<i32>()?;\n    Ok(numero * 2)\n}\nfn main() { println!("{}", duplicar("21").unwrap()); }',"42","Propagacion de errores",'El operador ? devuelve el error automáticamente si parse falla.',[["Declara el retorno `Result<i32, std::num::ParseIntError>`.",/fn\s+duplicar[\s\S]*?->\s*Result\s*<\s*i32\s*,\s*std::num::ParseIntError\s*>/],["Usa `texto.parse::<i32>()?`.",/texto\.parse\s*::\s*<\s*i32\s*>\s*\(\s*\)\s*\?/],["Devuelve `Ok(numero * 2)`.",/Ok\s*\(\s*numero\s*\*\s*2\s*\)/],["Imprime `duplicar(\"21\").unwrap()`.",/duplicar\s*\(\s*"21"\s*\)\.unwrap\s*\(\s*\)/]]),
    extraChallenge("Transformar error",'Crea resultado = "abc".parse::<i32>().map_err(|_| "numero invalido"). Usa match e imprime "numero invalido" en Err.','fn main() {\n    // Convierte, transforma el error e imprime\n\n}','fn main() {\n    let resultado = "abc".parse::<i32>().map_err(|_| "numero invalido");\n    match resultado { Ok(n) => println!("{}", n), Err(e) => println!("{}", e) }\n}',"numero invalido","Result",'map_err cambia el tipo o mensaje del error sin perder Result.',[["Usa `.parse::<i32>()`.",/"abc"\.parse\s*::\s*<\s*i32\s*>\s*\(\s*\)/],["Transforma con `.map_err(|_| \"numero invalido\")`.",/\.map_err\s*\(\s*\|\s*_\s*\|\s*"numero invalido"\s*\)/],["Maneja `Err(e)` e imprime `e`.",/Err\s*\(\s*e\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*e\s*\)/]]),
    extraChallenge("Option map",'Crea valor = Some(5), transforma con valor.map(|n| n * 2) e imprime 10 usando unwrap().','fn main() {\n    // Transforma el Option\n\n}','fn main() {\n    let valor = Some(5);\n    let doble = valor.map(|n| n * 2);\n    println!("{}", doble.unwrap());\n}',"10","Option",'map transforma el contenido de Some y conserva None.',[["Crea `valor = Some(5)`.",/let\s+valor\s*=\s*Some\s*\(\s*5\s*\)/],["Usa `valor.map(|n| n * 2)`.",/valor\.map\s*\(\s*\|\s*n\s*\|\s*n\s*\*\s*2\s*\)/],["Imprime `doble.unwrap()`.",/println!\s*\(\s*"\{\}"\s*,\s*doble\.unwrap\s*\(\s*\)\s*\)/]]),
    extraChallenge("Option por defecto",'Crea valor: Option<i32> = None y muestra 7 usando valor.unwrap_or(7).','fn main() {\n    // Usa un valor por defecto\n\n}','fn main() {\n    let valor: Option<i32> = None;\n    println!("{}", valor.unwrap_or(7));\n}',"7","Option",'unwrap_or devuelve el contenido de Some o el valor alternativo.',[["Declara `valor: Option<i32> = None`.",/let\s+valor\s*:\s*Option\s*<\s*i32\s*>\s*=\s*None\s*;/],["Imprime `valor.unwrap_or(7)`.",/println!\s*\(\s*"\{\}"\s*,\s*valor\.unwrap_or\s*\(\s*7\s*\)\s*\)/]]),
    extraChallenge("Acumular con fold",'Usa (1..=4).fold(0, |acumulado, n| acumulado + n) y muestra 10.','fn main() {\n    // Acumula el rango con fold\n\n}','fn main() {\n    let total = (1..=4).fold(0, |acumulado, n| acumulado + n);\n    println!("{}", total);\n}',"10","Iteradores",'fold parte de un acumulador inicial y combina cada elemento.',[["Usa `(1..=4).fold(0, ...)`.",/\(\s*1\s*\.\.=\s*4\s*\)\.fold\s*\(\s*0\s*,/],["Suma `acumulado + n` en la closure.",/\|\s*acumulado\s*,\s*n\s*\|\s*acumulado\s*\+\s*n/],["Imprime `total`.",/println!\s*\(\s*"\{\}"\s*,\s*total\s*\)/]]),
    extraChallenge("Encadenar iteradores",'Encadena [1, 2].iter() con [3, 4].iter() usando chain y copied().collect::<Vec<i32>>(). Imprime [1, 2, 3, 4].','fn main() {\n    // Encadena los arrays\n\n}','fn main() {\n    let unidos = [1, 2].iter().chain([3, 4].iter()).copied().collect::<Vec<i32>>();\n    println!("{:?}", unidos);\n}',"[1, 2, 3, 4]","Iteradores",'chain une dos secuencias y copied convierte &i32 en i32.',[["Usa `.chain([3, 4].iter())`.",/\[\s*1\s*,\s*2\s*\]\.iter\s*\(\s*\)\.chain\s*\(\s*\[\s*3\s*,\s*4\s*\]\.iter\s*\(\s*\)\s*\)/],["Usa `.copied().collect::<Vec<i32>>()`.",/\.copied\s*\(\s*\)\.collect\s*::\s*<\s*Vec\s*<\s*i32\s*>\s*>\s*\(\s*\)/],["Imprime `unidos`.",/println!\s*\(\s*"\{:\?\}"\s*,\s*unidos\s*\)/]]),
    extraChallenge("Valor en Box",'Crea valor = Box::new(42) y muestra 42 desreferenciando con *valor.','fn main() {\n    // Crea el Box e imprime su contenido\n\n}','fn main() {\n    let valor = Box::new(42);\n    println!("{}", *valor);\n}',"42","Smart pointers",'Box almacena el dato en el heap y * accede a su contenido.',[["Crea `Box::new(42)`.",/let\s+valor\s*=\s*Box\s*::\s*new\s*\(\s*42\s*\)/],["Imprime `*valor`.",/println!\s*\(\s*"\{\}"\s*,\s*\*\s*valor\s*\)/]]),
    extraChallenge("Contador Rc",'Importa Rc, crea dato = Rc::new(String::from("Rust")), clona con Rc::clone(&dato) e imprime Rc::strong_count(&dato), que debe ser 2.','// Importa Rc\n\nfn main() {\n    // Crea, clona y cuenta referencias\n}\n','use std::rc::Rc;\nfn main() {\n    let dato = Rc::new(String::from("Rust"));\n    let _copia = Rc::clone(&dato);\n    println!("{}", Rc::strong_count(&dato));\n}',"2","Rc",'Rc permite varios propietarios en un solo hilo.',[["Importa `std::rc::Rc`.",/use\s+std\s*::\s*rc\s*::\s*Rc\s*;/],["Crea `dato = Rc::new(...)`.",/let\s+dato\s*=\s*Rc::new\s*\(/],["Clona con `Rc::clone(&dato)`.",/Rc::clone\s*\(\s*&\s*dato\s*\)/],["Imprime `Rc::strong_count(&dato)`.",/println!\s*\([\s\S]*?Rc::strong_count\s*\(\s*&\s*dato\s*\)/]]),
    extraChallenge("Mutabilidad interior",'Importa RefCell, crea valor = RefCell::new(5), modifica con *valor.borrow_mut() += 3 e imprime 8 usando valor.borrow().','// Importa RefCell\n\nfn main() {\n    // Crea, modifica e imprime\n}\n','use std::cell::RefCell;\nfn main() {\n    let valor = RefCell::new(5);\n    *valor.borrow_mut() += 3;\n    println!("{}", valor.borrow());\n}',"8","RefCell",'RefCell comprueba las reglas de préstamo durante la ejecución.',[["Importa `std::cell::RefCell`.",/use\s+std\s*::\s*cell\s*::\s*RefCell\s*;/],["Crea `RefCell::new(5)`.",/let\s+valor\s*=\s*RefCell::new\s*\(\s*5\s*\)/],["Modifica con `*valor.borrow_mut() += 3`.",/\*\s*valor\.borrow_mut\s*\(\s*\)\s*\+=\s*3\s*;/],["Imprime `valor.borrow()`.",/println!\s*\([\s\S]*?valor\.borrow\s*\(\s*\)/]]),
    extraChallenge("Arc Mutex",'Importa Arc y Mutex. Crea contador = Arc::new(Mutex::new(0)), bloquea con contador.lock().unwrap(), suma 1 e imprime 1.','// Importa Arc y Mutex\n\nfn main() {\n    // Crea, bloquea, modifica e imprime\n}\n','use std::sync::{Arc, Mutex};\nfn main() {\n    let contador = Arc::new(Mutex::new(0));\n    *contador.lock().unwrap() += 1;\n    println!("{}", *contador.lock().unwrap());\n}',"1","Concurrencia",'Mutex protege el dato y Arc permite compartir propiedad.',[["Importa `Arc` y `Mutex`.",/use\s+std\s*::\s*sync\s*::\s*\{[\s\S]*?Arc[\s\S]*?Mutex[\s\S]*?\}\s*;/],["Crea `Arc::new(Mutex::new(0))`.",/Arc::new\s*\(\s*Mutex::new\s*\(\s*0\s*\)\s*\)/],["Usa `contador.lock().unwrap()` y suma 1.",/\*\s*contador\.lock\s*\(\s*\)\.unwrap\s*\(\s*\)\s*\+=\s*1\s*;/],["Imprime el valor bloqueado.",/println!\s*\([\s\S]*?contador\.lock\s*\(\s*\)\.unwrap\s*\(\s*\)/]]),
    extraChallenge("Hilo con join",'Importa std::thread, crea un hilo con thread::spawn(|| 21 * 2), recupera con join().unwrap() e imprime 42.','// Importa thread\n\nfn main() {\n    // Crea el hilo, espera e imprime\n}\n','use std::thread;\nfn main() {\n    let manejador = thread::spawn(|| 21 * 2);\n    let resultado = manejador.join().unwrap();\n    println!("{}", resultado);\n}',"42","Hilos",'join espera la terminación del hilo y devuelve su resultado.',[["Importa `std::thread`.",/use\s+std\s*::\s*thread\s*;/],["Crea `thread::spawn(|| 21 * 2)`.",/thread::spawn\s*\(\s*\|\s*\|\s*21\s*\*\s*2\s*\)/],["Usa `manejador.join().unwrap()`.",/manejador\.join\s*\(\s*\)\.unwrap\s*\(\s*\)/],["Imprime `resultado`.",/println!\s*\(\s*"\{\}"\s*,\s*resultado\s*\)/]]),
    extraChallenge("Closure move",'Crea texto = String::from("Rust"), crea mostrar = move || println!("{}", texto) y llama mostrar().','fn main() {\n    // Captura texto con move\n\n}','fn main() {\n    let texto = String::from("Rust");\n    let mostrar = move || println!("{}", texto);\n    mostrar();\n}',"Rust","Closures",'move transfiere las capturas al entorno de la closure.',[["Crea `texto` con `String::from(\"Rust\")`.",/let\s+texto\s*=\s*String::from\s*\(\s*"Rust"\s*\)/],["Crea `move || println!(\"{}\", texto)`.",/let\s+mostrar\s*=\s*move\s*\|\s*\|\s*println!\s*\(\s*"\{\}"\s*,\s*texto\s*\)\s*;/],["Llama `mostrar();`.",/mostrar\s*\(\s*\)\s*;/]]),
    extraChallenge("Conversion From",'Declara struct Metros(i32). Implementa From<i32> for Metros devolviendo Metros(valor). Convierte 12 con Metros::from(12) e imprime 12.','struct Metros(i32);\n\n// Implementa From<i32>\n','struct Metros(i32);\nimpl From<i32> for Metros { fn from(valor: i32) -> Self { Metros(valor) } }\nfn main() { let distancia = Metros::from(12); println!("{}", distancia.0); }',"12","Conversiones",'From define una conversión explícita y reutilizable.',[["Implementa `From<i32> for Metros`.",/impl\s+From\s*<\s*i32\s*>\s+for\s+Metros/],["Declara `fn from(valor: i32) -> Self`.",/fn\s+from\s*\(\s*valor\s*:\s*i32\s*\)\s*->\s*Self/],["Devuelve `Metros(valor)`.",/Metros\s*\(\s*valor\s*\)/],["Crea `Metros::from(12)` e imprime `.0`.",/Metros::from\s*\(\s*12\s*\)[\s\S]*?println!\s*\([\s\S]*?distancia\.0/]]),
    extraChallenge("Iterador personalizado",'Declara struct Contador { actual: u32 }, implementa Iterator<Item = u32> aumentando actual hasta 3 y suma con Contador { actual: 0 }.sum::<u32>(). Imprime 6.','struct Contador { actual: u32 }\n\n// Implementa Iterator y suma\n','struct Contador { actual: u32 }\nimpl Iterator for Contador {\n    type Item = u32;\n    fn next(&mut self) -> Option<Self::Item> {\n        self.actual += 1;\n        if self.actual <= 3 { Some(self.actual) } else { None }\n    }\n}\nfn main() { let total = Contador { actual: 0 }.sum::<u32>(); println!("{}", total); }',"6","Iteradores personalizados",'Iterator requiere Item y next, que devuelve Option.',[["Implementa `Iterator for Contador`.",/impl\s+Iterator\s+for\s+Contador/],["Define `type Item = u32`.",/type\s+Item\s*=\s*u32\s*;/],["Declara `fn next(&mut self) -> Option<Self::Item>`.",/fn\s+next\s*\(\s*&\s*mut\s+self\s*\)\s*->\s*Option\s*<\s*Self::Item\s*>/],["Devuelve `Some(self.actual)` hasta 3 y luego `None`.",/Some\s*\(\s*self\.actual\s*\)[\s\S]*?None/],["Suma el iterador e imprime total.",/Contador\s*\{\s*actual\s*:\s*0\s*\}\.sum\s*::\s*<\s*u32\s*>\s*\(\s*\)[\s\S]*?println!/]]),
    extraChallenge("Metodo consumidor",'Declara struct Mensaje(String) e implementa fn consumir(self) -> String que devuelva self.0. Crea "listo", consume e imprime.','struct Mensaje(String);\n\n// Implementa consumir\n','struct Mensaje(String);\nimpl Mensaje { fn consumir(self) -> String { self.0 } }\nfn main() { let mensaje = Mensaje(String::from("listo")); println!("{}", mensaje.consumir()); }',"listo","Ownership en metodos",'Recibir self mueve la instancia dentro del método.',[["Implementa `fn consumir(self) -> String`.",/fn\s+consumir\s*\(\s*self\s*\)\s*->\s*String/],["Devuelve `self.0`.",/fn\s+consumir[\s\S]*?self\.0/],["Crea un `Mensaje` con `listo`.",/Mensaje\s*\(\s*String::from\s*\(\s*"listo"\s*\)\s*\)/],["Imprime `mensaje.consumir()`.",/println!\s*\([\s\S]*?mensaje\.consumir\s*\(\s*\)/]]),
    extraChallenge("Cow prestado",'Importa std::borrow::Cow. Crea texto: Cow<str> = Cow::Borrowed("Rust") e imprime "Rust".','// Importa Cow\n\nfn main() {\n    // Crea un Cow prestado e imprime\n}\n','use std::borrow::Cow;\nfn main() {\n    let texto: Cow<str> = Cow::Borrowed("Rust");\n    println!("{}", texto);\n}',"Rust","Cow",'Cow puede contener datos prestados o poseídos.',[["Importa `std::borrow::Cow`.",/use\s+std\s*::\s*borrow\s*::\s*Cow\s*;/],["Declara `texto: Cow<str> = Cow::Borrowed(\"Rust\")`.",/let\s+texto\s*:\s*Cow\s*<\s*str\s*>\s*=\s*Cow::Borrowed\s*\(\s*"Rust"\s*\)/],["Imprime `texto`.",/println!\s*\(\s*"\{\}"\s*,\s*texto\s*\)/]]),
    extraChallenge("Lista recursiva",'Declara enum Lista { Nodo(i32, Box<Lista>), Fin }. Crea Nodo(7, Box::new(Lista::Fin)) y usa match para imprimir 7.','// Declara Lista\n\nfn main() {\n    // Crea un nodo y extrae su valor\n}\n','enum Lista { Nodo(i32, Box<Lista>), Fin }\nfn main() {\n    let lista = Lista::Nodo(7, Box::new(Lista::Fin));\n    match lista { Lista::Nodo(valor, _) => println!("{}", valor), Lista::Fin => println!("vacia") }\n}',"7","Tipos recursivos",'Box da un tamaño conocido a la referencia recursiva.',[["Declara `enum Lista` con `Nodo(i32, Box<Lista>)` y `Fin`.",/enum\s+Lista\s*\{[\s\S]*?Nodo\s*\(\s*i32\s*,\s*Box\s*<\s*Lista\s*>\s*\)[\s\S]*?Fin/],["Crea `Lista::Nodo(7, Box::new(Lista::Fin))`.",/Lista::Nodo\s*\(\s*7\s*,\s*Box::new\s*\(\s*Lista::Fin\s*\)\s*\)/],["Extrae `valor` con match e imprimelo.",/Lista::Nodo\s*\(\s*valor\s*,\s*_\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)/]]),
    extraChallenge("Trait bound imprimir",'Crea fn mostrar<T: std::fmt::Display>(valor: T) que imprima valor. Llama mostrar("Rust").','// Crea mostrar con trait bound\n\nfn main() {\n    // Llama mostrar\n}\n','fn mostrar<T: std::fmt::Display>(valor: T) { println!("{}", valor); }\nfn main() { mostrar("Rust"); }',"Rust","Trait bounds",'El bound Display garantiza que T puede imprimirse con {}.',[["Declara `fn mostrar<T: std::fmt::Display>(valor: T)`.",/fn\s+mostrar\s*<\s*T\s*:\s*std::fmt::Display\s*>\s*\(\s*valor\s*:\s*T\s*\)/],["Imprime `valor` dentro de la función.",/fn\s+mostrar[\s\S]*?println!\s*\(\s*"\{\}"\s*,\s*valor\s*\)/],["Llama `mostrar(\"Rust\")`.",/mostrar\s*\(\s*"Rust"\s*\)\s*;/]]),
  ]
};

Object.entries(extraChallenges).forEach(([levelName,challenges])=>levels[levelName].challenges.push(...challenges));

// Cada dificultad sigue una ruta de aprendizaje concreta.
const easyOutsideCurriculum=new Set([
  "Array de niveles","Primer elemento","Tupla de jugador","Semaforo match",
  "String propio","Longitud del array","Funcion cuadrado","Funcion es positivo"
]);
levels.easy.challenges=levels.easy.challenges.filter(challenge=>!easyOutsideCurriculum.has(challenge.title));
levels.easy.challenges.push(
  extraChallenge("Dos mensajes",'Usa dos llamadas a println!: primero muestra exactamente "Rust" y despues "Quest" en otra linea.','fn main() {\n    // Imprime los dos mensajes\n\n}','fn main() {\n    println!("Rust");\n    println!("Quest");\n}',"Rust\nQuest","Primeros pasos",'Cada println! crea una linea de salida y termina con punto y coma.',[["Agrega `println!(\"Rust\");`.",/println!\s*\(\s*"Rust"\s*\)\s*;/],["Despues agrega `println!(\"Quest\");`.",/println!\s*\(\s*"Rust"\s*\)\s*;[\s\S]*?println!\s*\(\s*"Quest"\s*\)\s*;/]]),
  extraChallenge("Vida mutable",'Declara vida con let mut y valor 100, resta 25 usando vida -= 25 e imprime exactamente 75.','fn main() {\n    // Declara, modifica e imprime vida\n\n}','fn main() {\n    let mut vida = 100;\n    vida -= 25;\n    println!("{}", vida);\n}',"75","Mutabilidad",'Una variable solo puede cambiar si se declara con mut.',[["Declara `let mut vida = 100;`.",/let\s+mut\s+vida\s*=\s*100\s*;/],["Resta con `vida -= 25;`.",/vida\s*-=\s*25\s*;/],["Imprime `vida` con `println!`.",/println!\s*\(\s*"\{\}"\s*,\s*vida\s*\)\s*;/]]),
  extraChallenge("Clave correcta",'Declara clave = 1234. Usa if clave == 1234 para imprimir exactamente "Correcta".','fn main() {\n    let clave = 1234;\n    // Comprueba la clave\n\n}','fn main() {\n    let clave = 1234;\n    if clave == 1234 {\n        println!("Correcta");\n    }\n}',"Correcta","Condiciones",'El operador == compara dos valores sin modificarlos.',[["Crea `if clave == 1234`.",/if\s+clave\s*==\s*1234\s*\{/],["Dentro del `if`, imprime `Correcta`.",/if\s+clave\s*==\s*1234\s*\{[\s\S]*?println!\s*\(\s*"Correcta"\s*\)\s*;/]]),
  extraChallenge("Acceso doble",'Con edad = 20 y tiene_pase = true, usa if con edad >= 18 && tiene_pase e imprime exactamente "Entrar".','fn main() {\n    let edad = 20;\n    let tiene_pase = true;\n    // Comprueba ambas condiciones\n\n}','fn main() {\n    let edad = 20;\n    let tiene_pase = true;\n    if edad >= 18 && tiene_pase {\n        println!("Entrar");\n    }\n}',"Entrar","Condiciones",'El operador && exige que las dos condiciones sean verdaderas.',[["Usa `if edad >= 18 && tiene_pase`.",/if\s+edad\s*>=\s*18\s*&&\s*tiene_pase\s*\{/],["Dentro del `if`, imprime `Entrar`.",/if\s+edad[\s\S]*?\{[\s\S]*?println!\s*\(\s*"Entrar"\s*\)\s*;/]]),
  extraChallenge("Clasificar puntos",'Con puntos = 75, usa if, else if y else: 90 o mas imprime "Oro", 60 o mas imprime "Plata" y el resto "Bronce".','fn main() {\n    let puntos = 75;\n    // Clasifica los puntos\n\n}','fn main() {\n    let puntos = 75;\n    if puntos >= 90 {\n        println!("Oro");\n    } else if puntos >= 60 {\n        println!("Plata");\n    } else {\n        println!("Bronce");\n    }\n}',"Plata","Condiciones",'Las condiciones se prueban de arriba hacia abajo; coloca primero el limite mayor.',[["Crea `if puntos >= 90` e imprime `Oro`.",/if\s+puntos\s*>=\s*90\s*\{[\s\S]*?println!\s*\(\s*"Oro"\s*\)/],["Agrega `else if puntos >= 60` e imprime `Plata`.",/else\s+if\s+puntos\s*>=\s*60\s*\{[\s\S]*?println!\s*\(\s*"Plata"\s*\)/],["Agrega `else` e imprime `Bronce`.",/else\s*\{[\s\S]*?println!\s*\(\s*"Bronce"\s*\)/]]),
  extraChallenge("Cuenta regresiva",'Usa let mut numero = 3 y un while numero >= 1 para imprimir 3, 2 y 1. Resta uno con numero -= 1.','fn main() {\n    // Crea la cuenta regresiva\n\n}','fn main() {\n    let mut numero = 3;\n    while numero >= 1 {\n        println!("{}", numero);\n        numero -= 1;\n    }\n}',"3\n2\n1","Ciclos",'El while repite el bloque mientras su condicion sea verdadera.',[["Declara `let mut numero = 3;`.",/let\s+mut\s+numero\s*=\s*3\s*;/],["Crea `while numero >= 1`.",/while\s+numero\s*>=\s*1\s*\{/],["Imprime y resta uno a `numero`.",/println!\s*\(\s*"\{\}"\s*,\s*numero\s*\)[\s\S]*?numero\s*-=\s*1\s*;/]]),
  extraChallenge("Suma del rango",'Crea total mutable con 0. Recorre 1..=4 con for numero y acumula usando total += numero. Al final imprime 10.','fn main() {\n    // Suma los numeros del 1 al 4\n\n}','fn main() {\n    let mut total = 0;\n    for numero in 1..=4 {\n        total += numero;\n    }\n    println!("{}", total);\n}',"10","Ciclos",'El acumulador debe existir antes del for y ser mutable.',[["Declara `let mut total = 0;`.",/let\s+mut\s+total\s*=\s*0\s*;/],["Recorre `for numero in 1..=4`.",/for\s+numero\s+in\s+1\s*\.\.=\s*4\s*\{/],["Dentro del ciclo usa `total += numero;`.",/for\s+numero[\s\S]*?\{[\s\S]*?total\s*\+=\s*numero\s*;/],["Imprime `total` despues del ciclo.",/\}[\s\n]*println!\s*\(\s*"\{\}"\s*,\s*total\s*\)\s*;/]]),
  extraChallenge("Saltar el tres",'Recorre 1..=5. Si numero == 3 usa continue; en los demas casos imprime numero. La salida debe ser 1, 2, 4 y 5.','fn main() {\n    // Recorre el rango y salta el 3\n\n}','fn main() {\n    for numero in 1..=5 {\n        if numero == 3 {\n            continue;\n        }\n        println!("{}", numero);\n    }\n}',"1\n2\n4\n5","Ciclos",'continue termina la vuelta actual y pasa a la siguiente.',[["Recorre `for numero in 1..=5`.",/for\s+numero\s+in\s+1\s*\.\.=\s*5\s*\{/],["Comprueba `if numero == 3`.",/if\s+numero\s*==\s*3\s*\{/],["Dentro del `if`, usa `continue;`.",/if\s+numero\s*==\s*3\s*\{[\s\S]*?continue\s*;/],["Imprime `numero` en el ciclo.",/println!\s*\(\s*"\{\}"\s*,\s*numero\s*\)\s*;/]])
);

const mediumOutsideCurriculum=new Set(["Funcion generica identidad","Trait Saludar"]);
levels.medium.challenges=levels.medium.challenges.filter(challenge=>!mediumOutsideCurriculum.has(challenge.title));
levels.medium.challenges.push(
  extraChallenge("Funcion descuento",'Crea fn aplicar_descuento(precio: f64, porcentaje: f64) -> f64 que devuelva precio - precio * porcentaje / 100.0. Imprime aplicar_descuento(200.0, 25.0), que debe mostrar 150.','// Crea aplicar_descuento\n\nfn main() {\n    // Imprime el precio final\n}\n','fn aplicar_descuento(precio: f64, porcentaje: f64) -> f64 {\n    precio - precio * porcentaje / 100.0\n}\nfn main() {\n    println!("{}", aplicar_descuento(200.0, 25.0));\n}',"150","Funciones",'La funcion recibe dos parametros y devuelve la expresion final sin punto y coma.',[["Declara `fn aplicar_descuento(precio: f64, porcentaje: f64) -> f64`.",/fn\s+aplicar_descuento\s*\(\s*precio\s*:\s*f64\s*,\s*porcentaje\s*:\s*f64\s*\)\s*->\s*f64/],["Devuelve la formula indicada.",/precio\s*-\s*precio\s*\*\s*porcentaje\s*\/\s*100\.0/],["Imprime `aplicar_descuento(200.0, 25.0)`.",/println!\s*\(\s*"\{\}"\s*,\s*aplicar_descuento\s*\(\s*200\.0\s*,\s*25\.0\s*\)\s*\)\s*;/]]),
  extraChallenge("Enum con datos",'Declara enum Evento con Mensaje(String) y Salir. Crea Evento::Mensaje(String::from("Listo")) y usa match para imprimir el texto; Salir debe imprimir "Fin".','// Declara Evento\n\nfn main() {\n    // Crea el evento y usa match\n}\n','enum Evento {\n    Mensaje(String),\n    Salir,\n}\nfn main() {\n    let evento = Evento::Mensaje(String::from("Listo"));\n    match evento {\n        Evento::Mensaje(texto) => println!("{}", texto),\n        Evento::Salir => println!("Fin"),\n    }\n}',"Listo","Enums y match",'Una variante puede guardar datos que se extraen mediante un patron de match.',[["Declara `Evento::Mensaje(String)` y `Evento::Salir`.",/enum\s+Evento\s*\{[\s\S]*?Mensaje\s*\(\s*String\s*\)[\s\S]*?Salir/],["Crea un `Evento::Mensaje` con `Listo`.",/let\s+evento\s*=\s*Evento\s*::\s*Mensaje\s*\(\s*String\s*::\s*from\s*\(\s*"Listo"\s*\)\s*\)\s*;/],["Extrae `texto` e imprimelo en `match`.",/Evento\s*::\s*Mensaje\s*\(\s*texto\s*\)\s*=>\s*println!\s*\(\s*"\{\}"\s*,\s*texto\s*\)/],["Maneja `Evento::Salir` imprimiendo `Fin`.",/Evento\s*::\s*Salir\s*=>\s*println!\s*\(\s*"Fin"\s*\)/]])
);

function removeChallengeAccents(value){
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}

Object.values(levels).forEach(level=>{
  level.challenges.forEach(challenge=>{
    ["title","objective","starter","solution","output","topic","advice"].forEach(property=>{
      challenge[property]=removeChallengeAccents(challenge[property]);
    });
    if(challenge.requirements){
      challenge.requirements.forEach(requirement=>{
        requirement.message=removeChallengeAccents(requirement.message);
      });
    }
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
  const requirements=challenge.requirements||challengeRequirements[challenge.title]||[];
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
      || /^[A-Za-z_]\w*\s*(?:\+|-|\*|\/|%)=/.test(code)
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
    const mutation=new RegExp(`\\b${name}\\s*(?:(?:\\+|-|\\*|/|%)=|\\.\\s*(?:push|push_str)\\s*\\()`).exec(later);
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
  const pattern=/"(?:\\.|[^"\\])*"|String::from|println!|write!|vec!|push_str|\b(?:let|mut|fn|if|else|for|while|loop|break|continue|in|match|struct|enum|impl|trait|type|Self|self|use|move|const|return|Result|Option|Some|None|Ok|Err|String|Vec|Box|HashMap|Rc|RefCell|Arc|Mutex|Cow|i32|u32|u16|u8|usize|f64|bool|char|str|PartialOrd|Copy|Display|Iterator|From)\b|&mut|&String|&str|\.\.=|\.\.|>=|<=|==|!=|&&|\|\||\+=|-=|->|::|%|\d+(?:\.\d+)?/g;
  const keywords=new Set(["let","mut","fn","if","else","for","while","loop","break","continue","in","match","struct","enum","impl","trait","type","Self","self","use","move","const","return"]);
  const types=new Set(["String","Result","Option","Some","None","Ok","Err","Vec","Box","HashMap","Rc","RefCell","Arc","Mutex","Cow","i32","u32","u16","u8","usize","f64","bool","char","str","&String","&str","&mut","PartialOrd","Copy","Display","Iterator","From"]);
  const macros=new Set(["println!","write!","vec!"]);
  const fragment=document.createDocumentFragment();
  const keyFragment=document.createDocumentFragment();
  const usedKeys=new Set();
  let position=0;
  for(const match of text.matchAll(pattern)){
    if(match.index>position)fragment.append(document.createTextNode(text.slice(position,match.index)));
    const token=document.createElement("span");
    const value=match[0];
    token.textContent=value;
    token.className=value.startsWith('"')?"objective-string":macros.has(value)?"objective-macro":keywords.has(value)?"objective-keyword":types.has(value)?"objective-type":/^\d+(?:\.\d+)?$/.test(value)?"objective-number":/^(?:\.\.=|\.\.|>=|<=|==|!=|&&|\|\||\+=|-=|->|::|%)$/.test(value)?"objective-operator":"objective-name";
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
  $("startCompetition").innerHTML=`INICIAR COMPETENCIA · ${formatTime(levels[name].seconds)} <span class="ui-icon" data-icon="arrow-right" aria-hidden="true"></span>`;
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
  activeChallenges=shuffle(level.challenges).slice(0,5);
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
