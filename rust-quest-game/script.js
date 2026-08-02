const K = text => `<code class="keyword">${text}</code>`;
const V = text => `<code class="variable">${text}</code>`;
const N = text => `<code class="number">${text}</code>`;
const S = text => `<code class="value">${text}</code>`;
const O = text => `<code class="symbol">${text}</code>`;

const explanationTokens = {
  "String::from": "keyword", "push_str": "keyword", "println!": "keyword",
  "Vec<T>": "keyword", "vec!": "keyword", "Result": "keyword",
  "Ok(valor)": "value", "Err(error)": "value", "&String": "symbol",
  "&mut": "symbol", "&str": "keyword", "main": "variable",
  "let": "keyword", "mut": "keyword", "i32": "keyword", "u32": "keyword",
  "u16": "keyword", "f64": "keyword", "bool": "keyword", "true": "value",
  "false": "value", "if": "keyword", "else": "keyword", "match": "keyword",
  "for": "keyword", "while": "keyword", "fn": "keyword", "return": "keyword", "push": "keyword",
  "String": "keyword", "Ownership": "keyword", "struct": "keyword",
  "enum": "keyword", "const": "keyword", "impl": "keyword", "self": "variable",
  "Option": "keyword", "Some": "value", "None": "value",
  "Ok": "value", "Err": "value", "=>": "symbol", "->": "symbol",
  "assert_eq!": "keyword", "+=": "symbol", "..=": "symbol", "%": "symbol", "?": "symbol"
};

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function highlightExplanation(text) {
  const tokens = Object.keys(explanationTokens).sort((a, b) => b.length - a.length);
  const alternatives = tokens.map(token => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])(?:${alternatives})(?![\\p{L}\\p{N}_])`, "gu");
  let html = "";
  let lastIndex = 0;
  for (const match of text.matchAll(pattern)) {
    html += escapeHtml(text.slice(lastIndex, match.index));
    html += `<code class="${explanationTokens[match[0]]}">${escapeHtml(match[0])}</code>`;
    lastIndex = match.index + match[0].length;
  }
  return html + escapeHtml(text.slice(lastIndex));
}

const missions = [
  {
    module: "01 · PRIMEROS PASOS", title: "Primer contacto", concept: "println!",
    lesson: "Todo programa de Rust comienza en la función main. La macro println! permite mostrar texto en la terminal. El contenido que se encuentra entre comillas es el mensaje que verá el usuario.",
    example: 'fn main() {\n    println!("Hola, mundo");\n}',
    objective: `Usa ${K("println!")} y escribe ${S("cualquier mensaje")} dentro de ${O('" "')}.`,
    starter: 'fn main() {\n    println!("");\n}',
    hint: "Escribe tu mensaje entre las dos comillas sin borrarlas.",
    output: "Mensaje enviado", valid: c => /println!\s*\(\s*"[^"\n]+"\s*\)\s*;?/.test(c)
  },
  {
    module: "01 · PRIMEROS PASOS", title: "Guardar datos", concept: "let",
    lesson: "Una variable es un espacio con nombre donde guardamos información. let crea la variable; después escribimos su nombre, el signo igual y el valor. La instrucción termina con punto y coma.",
    example: "let puntos = 10;",
    objective: `Usa ${K("let")}, crea ${V("energia")} y asígnale ${N("100")}.`,
    starter: "fn main() {\n    // Crea la variable aquí\n}",
    hint: "Sigue el orden: let nombre = valor;",
    output: "Variable energia creada", valid: c => /\blet\s+energia\s*=\s*100\s*;/.test(c)
  },
  {
    module: "01 · PRIMEROS PASOS", title: "Tipos básicos", concept: "i32",
    lesson: "Rust puede inferir el tipo de muchos valores, pero también podemos escribirlo. i32 representa números enteros, f64 números decimales, bool valores true/false y &str texto prestado.",
    example: 'let edad: i32 = 20;\nlet activo: bool = true;',
    objective: `Crea ${V("temperatura")} con tipo ${K("f64")} y valor ${N("24.5")}.`,
    starter: "fn main() {\n    // Declara la variable con su tipo\n}",
    hint: "El tipo se escribe después del nombre: let nombre: tipo = valor;",
    output: "Tipo f64 reconocido", valid: c => /\blet\s+temperatura\s*:\s*f64\s*=\s*24\.5\s*;/.test(c)
  },
  {
    module: "01 · PRIMEROS PASOS", title: "Núcleo mutable", concept: "mut",
    lesson: "Las variables de Rust son inmutables por defecto. Esto evita cambios accidentales. Si un valor debe cambiar, colocamos mut después de let y luego podemos asignarle un nuevo valor.",
    example: "let mut vidas = 3;\nvidas = 5;",
    objective: `Crea ${V("energia")} con ${K("let mut")} y valor ${N("40")}; después cámbiala a ${N("100")}.`,
    starter: "fn main() {\n    // Crea y modifica la variable\n}",
    hint: "Primero declara con let mut. En la segunda línea usa solamente energia = 100;",
    output: "Energía restaurada al 100%", valid: c => /\blet\s+mut\s+energia\s*=\s*40\s*;/.test(c) && /\benergia\s*=\s*100\s*;/.test(c)
  },
  {
    module: "02 · DECISIONES", title: "Puerta de acceso", concept: "if",
    lesson: "if ejecuta un bloque únicamente cuando su condición es verdadera. La condición no necesita paréntesis y las instrucciones que dependen de ella se colocan entre llaves.",
    example: 'if edad >= 18 {\n    println!("Puede entrar");\n}',
    objective: `Usa ${K("if")} para comprobar ${V("nivel")} ${O("&gt;=")} ${N("5")} y muestra ${S('"Acceso concedido"')}.`,
    starter: "fn main() {\n    let nivel = 7;\n\n    // Escribe la condición completa\n}",
    hint: "Crea if nivel >= 5 { ... } y coloca println! dentro del bloque.",
    output: "Acceso concedido", valid: c => /\bif\s+nivel\s*>=\s*5\s*\{[\s\S]*?println!\s*\(\s*"Acceso concedido"\s*\)\s*;?[\s\S]*?\}/.test(c)
  },
  {
    module: "02 · DECISIONES", title: "Dos caminos", concept: "else",
    lesson: "else añade un camino alternativo. Si la condición de if es falsa, Rust ignora el primer bloque y ejecuta el bloque de else.",
    example: 'if puntos > 50 {\n    println!("Victoria");\n} else {\n    println!("Inténtalo otra vez");\n}',
    objective: `Si ${V("energia")} ${O(">")} ${N("0")} muestra ${S('"Activo"')}; en ${K("else")} muestra ${S('"Apagado"')}.`,
    starter: "fn main() {\n    let energia = 0;\n\n    // Crea if y else\n}",
    hint: "Necesitas dos bloques: if energia > 0 { ... } else { ... }",
    output: "Apagado", valid: c => /\bif\s+energia\s*>\s*0\s*\{[\s\S]*?"Activo"[\s\S]*?\}\s*else\s*\{[\s\S]*?"Apagado"[\s\S]*?\}/.test(c)
  },
  {
    module: "02 · DECISIONES", title: "Selector de estado", concept: "match",
    lesson: "match compara un valor con distintos patrones. Cada brazo usa => para indicar qué debe ocurrir. El patrón _ funciona como opción predeterminada para cualquier caso restante.",
    example: 'match nivel {\n    1 => println!("Básico"),\n    2 => println!("Medio"),\n    _ => println!("Otro"),\n}',
    objective: `Usa ${K("match")} con ${V("codigo")}: ${N("200")} debe mostrar ${S('"OK"')} y ${O("_")} debe mostrar ${S('"Error"')}.`,
    starter: "fn main() {\n    let codigo = 200;\n\n    // Crea el match\n}",
    hint: "Incluye los brazos 200 => ... y _ => ... dentro de match codigo.",
    output: "OK", valid: c => /\bmatch\s+codigo\s*\{[\s\S]*?200\s*=>[\s\S]*?"OK"[\s\S]*?_\s*=>[\s\S]*?"Error"[\s\S]*?\}/.test(c)
  },
  {
    module: "03 · CICLOS", title: "Contador controlado", concept: "for",
    lesson: "for recorre una secuencia. El rango inclusivo 1..=5 contiene 1, 2, 3, 4 y 5. En cada vuelta, la variable del ciclo recibe el siguiente número.",
    example: 'for numero in 1..=3 {\n    println!("{}", numero);\n}',
    objective: `Crea ${K("for")} con ${V("nodo")} sobre ${N("1..=5")} y muestra cada nodo con ${K("println!")}.`,
    starter: "fn main() {\n    // Escribe el ciclo completo\n}",
    hint: 'Usa for nodo in 1..=5 y dentro println!("Nodo {}", nodo);',
    output: "Nodo 1\nNodo 2\nNodo 3\nNodo 4\nNodo 5", valid: c => /\bfor\s+nodo\s+in\s+1\s*\.\.\s*=\s*5\s*\{[\s\S]*?println!\s*\(\s*"Nodo \{\}"\s*,\s*nodo\s*\)/.test(c)
  },
  {
    module: "03 · CICLOS", title: "Ciclo condicionado", concept: "while",
    lesson: "while repite un bloque mientras una condición siga siendo verdadera. Es importante modificar el valor usado en la condición para que el ciclo pueda terminar.",
    example: 'let mut x = 1;\nwhile x <= 3 {\n    x += 1;\n}',
    objective: `Crea ${V("contador")} en ${N("1")}; usa ${K("while")} mientras sea ${O("<=")} ${N("3")} y aumenta con ${O("+=")} ${N("1")}.`,
    starter: "fn main() {\n    // Crea la variable y el ciclo\n}",
    hint: "La variable debe ser mutable. Dentro del while usa contador += 1;",
    output: "Ciclo finalizado", valid: c => /let\s+mut\s+contador\s*=\s*1\s*;/.test(c) && /while\s+contador\s*<=\s*3\s*\{[\s\S]*?contador\s*\+=\s*1\s*;/.test(c)
  },
  {
    module: "04 · FUNCIONES", title: "Código reutilizable", concept: "fn",
    lesson: "Una función agrupa instrucciones que pueden ejecutarse desde distintos lugares. Se declara con fn, un nombre, paréntesis y un bloque entre llaves.",
    example: 'fn saludar() {\n    println!("Hola");\n}\n\nfn main() {\n    saludar();\n}',
    objective: `Crea ${K("fn")} ${V("iniciar")} que muestre ${S('"Sistema listo"')} y llámala desde ${V("main")}.`,
    starter: "fn main() {\n    // Llama aquí a la función\n}\n\n// Crea aquí la función",
    hint: "Crea fn iniciar() { ... } fuera de main y escribe iniciar(); dentro de main.",
    output: "Sistema listo", valid: c => /fn\s+iniciar\s*\(\s*\)\s*\{[\s\S]*?"Sistema listo"[\s\S]*?\}/.test(c) && /fn\s+main\s*\(\s*\)\s*\{[\s\S]*?iniciar\s*\(\s*\)\s*;/.test(c)
  },
  {
    module: "04 · FUNCIONES", title: "Datos de entrada", concept: "parámetros",
    lesson: "Los parámetros permiten que una función reciba datos. Cada parámetro lleva nombre y tipo. Al llamar la función, enviamos un argumento compatible.",
    example: 'fn mostrar(numero: i32) {\n    println!("{}", numero);\n}\n\nmostrar(8);',
    objective: `Crea ${V("duplicar")} con parámetro ${V("numero: i32")} y muestra ${V("numero")} ${O("*")} ${N("2")}.`,
    starter: "fn main() {\n    duplicar(5);\n}\n\n// Crea la función",
    hint: "Comienza con fn duplicar(numero: i32) { ... }",
    output: "10", valid: c => /fn\s+duplicar\s*\(\s*numero\s*:\s*i32\s*\)\s*\{[\s\S]*?numero\s*\*\s*2/.test(c)
  },
  {
    module: "04 · FUNCIONES", title: "Devolver resultados", concept: "->",
    lesson: "Una función puede devolver un valor. -> indica el tipo de salida. En Rust, la última expresión sin punto y coma se devuelve automáticamente.",
    example: "fn sumar(a: i32, b: i32) -> i32 {\n    a + b\n}",
    objective: `Crea ${V("cuadrado")} que reciba ${V("n: i32")}, devuelva ${K("i32")} y retorne ${V("n")} ${O("*")} ${V("n")}.`,
    starter: "fn main() {\n    let resultado = cuadrado(4);\n}\n\n// Crea la función",
    hint: "Usa fn cuadrado(n: i32) -> i32 y deja n * n sin punto y coma.",
    output: "Resultado: 16", valid: c => /fn\s+cuadrado\s*\(\s*n\s*:\s*i32\s*\)\s*->\s*i32\s*\{[\s\S]*?\bn\s*\*\s*n\s*\}?\s*/.test(c)
  },
  {
    module: "05 · COLECCIONES", title: "Lista dinámica", concept: "Vec",
    lesson: "Vec<T> es una colección que guarda varios valores del mismo tipo. vec! crea el vector y push agrega un elemento al final. La variable debe ser mutable para crecer.",
    example: "let mut numeros = vec![1, 2];\nnumeros.push(3);",
    objective: `Crea el vector mutable ${V("puertos")} con ${N("80, 443")} y agrega ${N("8080")} usando ${K("push")}.`,
    starter: "fn main() {\n    // Crea y modifica el vector\n}",
    hint: "Usa let mut puertos = vec![80, 443]; y después puertos.push(8080);",
    output: "Puertos: [80, 443, 8080]", valid: c => /let\s+mut\s+puertos\s*=\s*vec!\s*\[\s*80\s*,\s*443\s*\]\s*;/.test(c) && /puertos\s*\.\s*push\s*\(\s*8080\s*\)\s*;/.test(c)
  },
  {
    module: "05 · COLECCIONES", title: "Texto dinámico", concept: "String",
    lesson: "String almacena texto que puede crecer y modificarse. String::from crea una cadena propia y push_str añade más texto al final.",
    example: 'let mut mensaje = String::from("Hola");\nmensaje.push_str(" Rust");',
    objective: `Crea ${V("usuario")} con ${K("String::from")} y texto ${S('"m4n14ck"')}; añade ${S('"_rust"')} con ${K("push_str")}.`,
    starter: "fn main() {\n    // Crea y amplía el String\n}",
    hint: 'Declara usuario como mutable y usa usuario.push_str("_rust");',
    output: "m4n14ck_rust", valid: c => /let\s+mut\s+usuario\s*=\s*String\s*::\s*from\s*\(\s*"m4n14ck"\s*\)\s*;/.test(c) && /usuario\s*\.\s*push_str\s*\(\s*"_rust"\s*\)\s*;/.test(c)
  },
  {
    module: "06 · RUST ESENCIAL", title: "Mover propiedad", concept: "Ownership",
    lesson: "Cada valor de tipo String tiene un propietario. Al asignarlo a otra variable, la propiedad se mueve y el nombre anterior deja de ser válido. Este sistema evita dobles liberaciones de memoria.",
    example: 'let mensaje = String::from("Hola");\nlet copia = mensaje;\nprintln!("{}", copia);',
    objective: `Crea ${V("origen")} con ${K("String::from")} y mueve su propiedad a ${V("destino")}; imprime ${V("destino")}.`,
    starter: "fn main() {\n    // Crea, mueve e imprime el String\n}",
    hint: "Después de crear origen, usa let destino = origen; y no vuelvas a utilizar origen.",
    output: "Propiedad movida correctamente", valid: c => /let\s+origen\s*=\s*String\s*::\s*from\s*\([^)]+\)\s*;/.test(c) && /let\s+destino\s*=\s*origen\s*;/.test(c) && /println!\s*\([^;]*destino[^;]*\)\s*;/.test(c)
  },
  {
    module: "06 · RUST ESENCIAL", title: "Pedir prestado", concept: "&",
    lesson: "Una referencia permite usar un valor sin tomar su propiedad. &String crea un préstamo inmutable: la función puede leer el texto y el propietario original sigue siendo válido.",
    example: 'fn ver(texto: &String) {\n    println!("{}", texto);\n}\n\nver(&mensaje);',
    objective: `Crea ${V("mostrar")} con parámetro ${V("texto: &String")} y llámala pasando ${O("&")}${V("mensaje")}.`,
    starter: 'fn main() {\n    let mensaje = String::from("Rust");\n    // Llama la función\n}\n\n// Crea la función',
    hint: "La función recibe texto: &String y la llamada usa mostrar(&mensaje);",
    output: "Préstamo válido", valid: c => /fn\s+mostrar\s*\(\s*texto\s*:\s*&\s*String\s*\)/.test(c) && /mostrar\s*\(\s*&\s*mensaje\s*\)\s*;/.test(c)
  },
  {
    module: "06 · RUST ESENCIAL", title: "Préstamo mutable", concept: "&mut",
    lesson: "Una referencia mutable permite modificar un valor prestado sin quedarse con su propiedad. El propietario y el parámetro deben marcarse como mutables.",
    example: 'fn agregar(texto: &mut String) {\n    texto.push_str("!");\n}\n\nagregar(&mut mensaje);',
    objective: `Crea ${V("completar")} con ${V("texto: &mut String")} y añade ${S('" listo"')} mediante ${K("push_str")}.`,
    starter: 'fn main() {\n    let mut estado = String::from("Sistema");\n    completar(&mut estado);\n}\n\n// Crea la función',
    hint: 'Usa fn completar(texto: &mut String) y texto.push_str(" listo");',
    output: "Sistema listo", valid: c => /fn\s+completar\s*\(\s*texto\s*:\s*&\s*mut\s+String\s*\)/.test(c) && /texto\s*\.\s*push_str\s*\(\s*" listo"\s*\)\s*;/.test(c)
  },
  {
    module: "07 · MODELOS DE DATOS", title: "Crear una estructura", concept: "struct",
    lesson: "Una struct reúne datos relacionados bajo un mismo tipo. Primero declaramos sus campos y tipos; después construimos una instancia proporcionando un valor para cada campo.",
    example: 'struct Usuario {\n    nombre: String,\n    nivel: u32,\n}',
    objective: `Declara ${K("struct")} ${V("Servidor")} con campos ${V("ip: String")} y ${V("puerto: u16")}.`,
    starter: "// Declara la estructura\n\nfn main() {\n}",
    hint: "Escribe struct Servidor { ip: String, puerto: u16 }",
    output: "Struct Servidor creada", valid: c => /struct\s+Servidor\s*\{[\s\S]*?ip\s*:\s*String\s*,?[\s\S]*?puerto\s*:\s*u16\s*,?[\s\S]*?\}/.test(c)
  },
  {
    module: "07 · MODELOS DE DATOS", title: "Estados posibles", concept: "enum",
    lesson: "Un enum define un conjunto limitado de variantes. Resulta útil cuando un valor solo puede representar uno de varios estados conocidos.",
    example: "enum Direccion {\n    Norte,\n    Sur,\n}",
    objective: `Crea ${K("enum")} ${V("Estado")} con variantes ${V("Activo")}, ${V("Inactivo")} y ${V("Error")}.`,
    starter: "// Declara el enum\n\nfn main() {\n}",
    hint: "Coloca las tres variantes separadas por comas dentro de enum Estado.",
    output: "Enum Estado creado", valid: c => /enum\s+Estado\s*\{[\s\S]*?\bActivo\b[\s\S]*?\bInactivo\b[\s\S]*?\bError\b[\s\S]*?\}/.test(c)
  },
  {
    module: "08 · MANEJO DE ERRORES", title: "Resultado seguro", concept: "Result",
    lesson: "Result representa una operación que puede tener éxito o fallar. Sus variantes son Ok(valor) y Err(error). match permite tratar ambos resultados sin ignorar posibles errores.",
    example: 'match resultado {\n    Ok(valor) => println!("{}", valor),\n    Err(error) => println!("{}", error),\n}',
    objective: `Usa ${K("match")} con ${V("resultado")}; maneja las variantes ${K("Ok(valor)")} y ${K("Err(error)")}.`,
    starter: 'fn main() {\n    let resultado: Result<i32, &str> = Ok(10);\n\n    // Maneja ambos resultados\n}',
    hint: "Dentro de match resultado crea un brazo Ok(valor) y otro Err(error).",
    output: "Resultado controlado", valid: c => /match\s+resultado\s*\{[\s\S]*?Ok\s*\(\s*valor\s*\)\s*=>[\s\S]*?Err\s*\(\s*error\s*\)\s*=>[\s\S]*?\}/.test(c)
  }
];

const missionGuides = [
  {
    lesson: "Un programa necesita una forma de comunicarse con quien lo ejecuta. En Rust usamos println! para enviar una línea de texto a la terminal. Piensa en esta macro como la voz del programa: todo lo escrito entre comillas será lo que diga. fn main() es el punto donde Rust comienza a ejecutar las instrucciones.",
    points: ["fn main() marca el inicio del programa.", "println! muestra una línea y después agrega un salto de línea.", "El mensaje debe estar rodeado por comillas y la instrucción termina con ;."],
    examples: ['println!("Bienvenido");', 'println!("Mi nivel es 1");', 'println!("Rust es rápido");'],
    error: "Escribir el mensaje sin comillas o confundir println! con println. El signo ! forma parte de la macro."
  },
  {
    lesson: "Una variable funciona como una caja con una etiqueta. La etiqueta es el nombre y dentro guardamos un valor. let le indica a Rust que queremos crear esa caja. Después usamos = para colocar el dato y ; para terminar la instrucción.",
    points: ["let crea una variable nueva.", "El nombre debe describir el dato que guarda.", "= asigna el valor que aparece a la derecha."],
    examples: ["let vidas = 3;", "let edad = 20;", 'let nombre = "Ferris";'],
    error: "Olvidar el punto y coma o intentar crear la variable sin escribir let."
  },
  {
    lesson: "Los tipos le explican a Rust qué clase de dato contiene una variable. Esto permite detectar operaciones incorrectas antes de ejecutar el programa. Rust suele inferir el tipo, pero escribirlo de forma explícita ayuda a aprender y resulta útil cuando necesitamos precisión.",
    points: ["i32 guarda enteros positivos y negativos.", "f64 guarda números con decimales.", "bool solo acepta true o false; &str representa texto prestado."],
    examples: ["let intentos: i32 = 5;", "let precio: f64 = 19.99;", "let conectado: bool = true;"],
    error: "Usar una coma decimal. En código Rust los decimales se escriben con punto: 24.5."
  },
  {
    lesson: "Rust protege las variables contra cambios accidentales. Por eso son inmutables de manera predeterminada. Cuando sabemos que un dato deberá cambiar, añadimos mut al declararlo. Así dejamos clara nuestra intención desde el inicio.",
    points: ["let crea una variable inmutable.", "let mut crea una variable que sí puede cambiar.", "Para reasignarla no se vuelve a escribir let."],
    examples: ["let mut puntos = 10;\npuntos = 25;", "let mut online = false;\nonline = true;"],
    error: "Intentar cambiar una variable creada sin mut o repetir let al asignar el segundo valor."
  },
  {
    lesson: "Los programas toman decisiones evaluando condiciones. if pregunta si algo es verdadero; si lo es, ejecuta el bloque entre llaves. Los operadores como >, <, >=, <= y == permiten comparar valores.",
    points: ["La condición se escribe después de if sin paréntesis obligatorios.", "El bloque que depende de la condición va entre { }.", "== compara; = asigna un valor."],
    examples: ['if puntos >= 100 {\n    println!("Nivel superado");\n}', 'if conectado == true {\n    println!("En línea");\n}'],
    error: "Usar = cuando se desea comparar igualdad. Para comparar se utiliza ==."
  },
  {
    lesson: "No todas las decisiones tienen un solo resultado. else define qué ocurrirá cuando la condición de if sea falsa. De esta manera el programa siempre puede elegir entre dos caminos claros.",
    points: ["if controla el primer camino.", "else no lleva condición.", "Solo uno de los dos bloques se ejecuta."],
    examples: ['if saldo > 0 {\n    println!("Disponible");\n} else {\n    println!("Sin saldo");\n}', 'if aprobado {\n    println!("Continúa");\n} else {\n    println!("Reintenta");\n}'],
    error: "Colocar un punto y coma después del bloque de if antes de escribir else."
  },
  {
    lesson: "match es ideal cuando un valor puede tener varios casos. Rust compara el valor con cada patrón de arriba hacia abajo. Cada brazo une un patrón con su acción mediante =>, y _ captura cualquier caso no mencionado.",
    points: ["match debe considerar todos los casos posibles.", "Cada brazo utiliza =>.", "_ funciona como caso predeterminado."],
    examples: ['match opcion {\n    1 => println!("Inicio"),\n    2 => println!("Salir"),\n    _ => println!("Inválida"),\n}', 'match activo {\n    true => println!("Sí"),\n    false => println!("No"),\n}'],
    error: "Olvidar el caso _ cuando no se cubren todos los valores posibles."
  },
  {
    lesson: "for repite instrucciones recorriendo una colección o un rango. En cada vuelta crea temporalmente una variable con el elemento actual. El rango 1..5 llega hasta 4; para incluir el 5 se utiliza 1..=5.",
    points: ["in conecta la variable con la secuencia.", ".. excluye el último número.", "..= incluye el último número."],
    examples: ['for numero in 1..4 {\n    println!("{}", numero);\n}', 'for letra in ["A", "B", "C"] {\n    println!("{}", letra);\n}'],
    error: "Confundir 1..5 con 1..=5. El primer rango no incluye el número 5."
  },
  {
    lesson: "while repite un bloque mientras su condición sea verdadera. Es útil cuando no sabemos exactamente cuántas vueltas serán necesarias. Algo dentro del ciclo debe acercar la condición a false para evitar que el programa se repita para siempre.",
    points: ["La condición se revisa antes de cada vuelta.", "La variable de control normalmente debe ser mut.", "El ciclo termina cuando la condición se vuelve falsa."],
    examples: ["let mut x = 0;\nwhile x < 3 {\n    x += 1;\n}", "let mut energia = 3;\nwhile energia > 0 {\n    energia -= 1;\n}"],
    error: "No modificar la variable de la condición, lo que produce un ciclo infinito."
  },
  {
    lesson: "Una función es un conjunto de instrucciones con nombre. Permite dividir un programa grande en tareas pequeñas y reutilizables. Rust no ejecuta una función solo por declararla: debemos llamarla escribiendo su nombre seguido de ().",
    points: ["fn declara la función.", "Los paréntesis forman parte de su definición y de su llamada.", "Una función puede declararse antes o después de main."],
    examples: ['fn mostrar_menu() {\n    println!("1. Iniciar");\n}', 'fn apagar() {\n    println!("Apagando");\n}\n\napagar();'],
    error: "Crear la función correctamente pero olvidar llamarla desde main."
  },
  {
    lesson: "Los parámetros son datos que una función recibe para trabajar. Se colocan entre paréntesis indicando nombre y tipo. Así una misma función puede producir resultados distintos dependiendo del argumento enviado.",
    points: ["Parámetro: variable declarada en la función.", "Argumento: valor enviado al llamar la función.", "Cada parámetro necesita un tipo."],
    examples: ['fn saludar(nombre: &str) {\n    println!("Hola {}", nombre);\n}', "fn triplicar(n: i32) {\n    println!(\"{}\", n * 3);\n}"],
    error: "Enviar un argumento de tipo diferente al tipo definido en el parámetro."
  },
  {
    lesson: "Una función puede calcular y devolver un resultado. -> indica el tipo que saldrá de ella. La última expresión sin punto y coma se convierte automáticamente en el valor devuelto.",
    points: ["-> i32 significa que la función devuelve un i32.", "La expresión final no lleva ;.", "El resultado puede guardarse en una variable."],
    examples: ["fn doble(n: i32) -> i32 {\n    n * 2\n}", "fn es_mayor(n: i32) -> bool {\n    n > 10\n}"],
    error: "Añadir ; a la expresión final sin usar return, haciendo que la función devuelva ()."
  },
  {
    lesson: "Un vector guarda varios valores del mismo tipo y puede cambiar de tamaño. vec! crea el contenido inicial. Como push modifica el vector agregando un elemento al final, la variable debe declararse con mut.",
    points: ["Todos los elementos deben ser compatibles entre sí.", "vec![] crea un vector.", "push agrega y pop elimina el último elemento."],
    examples: ["let numeros = vec![10, 20, 30];", 'let mut nombres = vec!["Ana"];\nnombres.push("Luis");'],
    error: "Intentar utilizar push sobre un vector que no fue declarado con mut."
  },
  {
    lesson: "String es texto que pertenece al programa y puede modificarse. String::from convierte un texto literal en un String. push_str añade otra cadena completa, mientras push agrega un solo carácter.",
    points: ["String puede crecer durante la ejecución.", "push_str recibe texto entre comillas dobles.", "push recibe un char entre comillas simples."],
    examples: ['let nombre = String::from("Ferris");', 'let mut texto = String::from("Hola");\ntexto.push_str(" Rust");', "texto.push('!');"],
    error: "Usar comillas dobles con push o comillas simples con push_str."
  },
  {
    lesson: "Ownership es el sistema con el que Rust administra memoria sin recolector de basura. Cada valor tiene un único propietario. Al mover un String a otra variable, el propietario anterior deja de poder usarlo y el nuevo se encarga de liberarlo.",
    points: ["Cada valor tiene un propietario.", "La asignación de un String normalmente mueve la propiedad.", "Cuando el propietario sale de su bloque, Rust libera el valor."],
    examples: ['let primero = String::from("dato");\nlet segundo = primero;\nprintln!("{}", segundo);', "let a = 10;\nlet b = a; // i32 se copia"],
    error: "Intentar utilizar primero después de haber movido su String a segundo."
  },
  {
    lesson: "Una referencia permite prestar acceso a un valor sin entregar su propiedad. & crea una referencia inmutable: puede leer el dato, pero no modificarlo. Cuando termina el préstamo, el propietario original continúa siendo válido.",
    points: ["&valor crea una referencia.", "&String describe el tipo recibido.", "El préstamo evita mover la propiedad."],
    examples: ['fn longitud(texto: &String) {\n    println!("{}", texto.len());\n}', "let nombre = String::from(\"Rust\");\nlongitud(&nombre);\nprintln!(\"{}\", nombre);"],
    error: "Recibir String en lugar de &String cuando solamente se necesita leer; eso movería la propiedad."
  },
  {
    lesson: "Una referencia mutable presta un valor y permite modificarlo. Se escribe &mut tanto en el parámetro como al realizar la llamada. Rust limita estos préstamos para impedir que dos partes modifiquen el mismo dato al mismo tiempo.",
    points: ["El propietario debe declararse con mut.", "El parámetro utiliza &mut Tipo.", "La llamada utiliza &mut variable."],
    examples: ['fn añadir(texto: &mut String) {\n    texto.push_str("!");\n}', 'let mut mensaje = String::from("Hola");\nañadir(&mut mensaje);'],
    error: "Olvidar mut en la variable propietaria o &mut al llamar la función."
  },
  {
    lesson: "Una struct crea un tipo propio agrupando datos relacionados. Es como una ficha con campos definidos: cada instancia tendrá esos mismos campos, aunque sus valores puedan ser diferentes.",
    points: ["struct define el nombre del nuevo tipo.", "Cada campo se escribe como nombre: Tipo.", "Los campos se separan mediante comas."],
    examples: ["struct Punto {\n    x: i32,\n    y: i32,\n}", "struct Cuenta {\n    usuario: String,\n    activa: bool,\n}"],
    error: "Terminar los campos con ; en lugar de separarlos con comas."
  },
  {
    lesson: "Un enum representa un valor que solo puede estar en uno de varios estados. A diferencia de una struct, que reúne todos sus campos, una instancia de enum elige una sola variante.",
    points: ["enum define un conjunto cerrado de posibilidades.", "Las variantes comienzan normalmente con mayúscula.", "match es muy útil para trabajar con enums."],
    examples: ["enum Semaforo {\n    Rojo,\n    Amarillo,\n    Verde,\n}", "enum Mensaje {\n    Salir,\n    Texto(String),\n}"],
    error: "Pensar que una variable enum contiene todas las variantes al mismo tiempo; solo contiene una."
  },
  {
    lesson: "Result obliga a reconocer que una operación puede funcionar o fallar. Ok contiene el resultado exitoso y Err contiene información del problema. Esto evita ignorar errores y hace que el flujo del programa sea explícito.",
    points: ["Result<T, E> contiene un valor T o un error E.", "Ok representa éxito.", "Err representa fallo; match permite manejar ambos casos."],
    examples: ['let dato: Result<i32, &str> = Ok(10);', 'let dato: Result<i32, &str> = Err("No disponible");', 'match dato {\n    Ok(n) => println!("{}", n),\n    Err(e) => println!("{}", e),\n}'],
    error: "Manejar únicamente Ok y olvidar Err; match exige cubrir todas las posibilidades."
  }
];

missions.push(
  {
    module: "09 · FUNDAMENTOS EXTRA", title: "Valores permanentes", concept: "const",
    lesson: "Una constante representa un valor que no cambiará durante el programa. Se declara con const, su nombre suele escribirse en mayúsculas y siempre debemos indicar el tipo.",
    example: "const LIMITE: u32 = 100;",
    objective: `Declara ${K("const")} ${V("MAX_VIDAS")} de tipo ${K("u32")} con valor ${N("3")}.`,
    starter: "// Declara la constante\n\nfn main() {\n}",
    hint: "Usa const NOMBRE: Tipo = valor;",
    output: "Constante MAX_VIDAS creada", valid: c => /const\s+MAX_VIDAS\s*:\s*u32\s*=\s*3\s*;/.test(c)
  },
  {
    module: "09 · FUNDAMENTOS EXTRA", title: "Ocultar una variable", concept: "shadowing",
    lesson: "Shadowing permite declarar otra variable con el mismo nombre. La nueva oculta a la anterior e incluso puede utilizar un tipo diferente, sin convertir la variable en mutable.",
    example: 'let dato = 10;\nlet dato = "diez";',
    objective: `Crea ${V("codigo")} con ${N("10")} y vuelve a declararla con el texto ${S('"diez"')}.`,
    starter: "fn main() {\n    // Declara dos veces codigo\n}",
    hint: "Escribe dos instrucciones let usando el mismo nombre.",
    output: "Shadowing aplicado", valid: c => /let\s+codigo\s*=\s*10\s*;[\s\S]*?let\s+codigo\s*=\s*"diez"\s*;/.test(c)
  },
  {
    module: "09 · FUNDAMENTOS EXTRA", title: "Operaciones", concept: "aritmética",
    lesson: "Rust utiliza +, -, *, / y % para calcular. Podemos combinar variables dentro de una expresión y guardar el resultado en otra variable.",
    example: "let total = precio * cantidad;\nlet resto = 10 % 3;",
    objective: `Crea ${V("base")} en ${N("10")}, ${V("altura")} en ${N("5")} y guarda ${V("base * altura")} en ${V("area")}.`,
    starter: "fn main() {\n    // Calcula el área\n}",
    hint: "Declara las dos medidas y luego let area = base * altura;",
    output: "Área: 50", valid: c => /let\s+base\s*=\s*10\s*;/.test(c) && /let\s+altura\s*=\s*5\s*;/.test(c) && /let\s+area\s*=\s*base\s*\*\s*altura\s*;/.test(c)
  },
  {
    module: "10 · DATOS COMPUESTOS", title: "Agrupar valores", concept: "tuplas",
    lesson: "Una tupla agrupa una cantidad fija de valores que pueden tener tipos diferentes. Se accede a cada posición con .0, .1, .2 y así sucesivamente.",
    example: 'let jugador = ("Ana", 25, true);\nprintln!("{}", jugador.0);',
    objective: `Crea ${V("usuario")} con ${S('"Ferris"')} y ${N("10")}; muestra ${V("usuario.0")} y ${V("usuario.1")}.`,
    starter: "fn main() {\n    // Crea y utiliza la tupla\n}",
    hint: 'Usa let usuario = ("Ferris", 10); y dos println! para sus posiciones.',
    output: "Ferris\n10", valid: c => /let\s+usuario\s*=\s*\(\s*"Ferris"\s*,\s*10\s*\)\s*;/.test(c) && /usuario\s*\.\s*0/.test(c) && /usuario\s*\.\s*1/.test(c)
  },
  {
    module: "10 · DATOS COMPUESTOS", title: "Tamaño fijo", concept: "arrays",
    lesson: "Un array guarda varios elementos del mismo tipo y su tamaño no cambia. El tipo [u16; 3] significa tres valores u16. Los índices comienzan en cero.",
    example: "let notas: [i32; 3] = [8, 9, 10];\nprintln!(\"{}\", notas[0]);",
    objective: `Crea ${V("puertos: [u16; 3]")} con ${N("80, 443, 8080")} y muestra el índice ${N("[1]")}.`,
    starter: "fn main() {\n    // Crea y consulta el array\n}",
    hint: "Declara el array con su tipo y usa puertos[1] dentro de println!.",
    output: "443", valid: c => /let\s+puertos\s*:\s*\[\s*u16\s*;\s*3\s*\]\s*=\s*\[\s*80\s*,\s*443\s*,\s*8080\s*\]\s*;/.test(c) && /puertos\s*\[\s*1\s*\]/.test(c)
  },
  {
    module: "10 · DATOS COMPUESTOS", title: "Una vista prestada", concept: "slices",
    lesson: "Un slice es una referencia a una parte continua de una colección. No posee los datos: solamente permite verlos. &[i32] puede referirse a todo un array o únicamente a un rango.",
    example: "let datos = [1, 2, 3, 4];\nlet parte = &datos[1..3];",
    objective: `Crea ${V("datos")} con ${N("[10, 20, 30, 40]")} y el slice ${V("parte")} usando ${O("&datos[0..2]")}.`,
    starter: "fn main() {\n    // Crea el array y su slice\n}",
    hint: "Después del array escribe let parte = &datos[0..2];",
    output: "Slice: [10, 20]", valid: c => /let\s+datos\s*=\s*\[\s*10\s*,\s*20\s*,\s*30\s*,\s*40\s*\]\s*;/.test(c) && /let\s+parte\s*=\s*&\s*datos\s*\[\s*0\s*\.\.\s*2\s*\]\s*;/.test(c)
  },
  {
    module: "11 · PATRONES DE RUST", title: "Valor opcional", concept: "Option",
    lesson: "Option representa un valor que puede existir o estar ausente. Some contiene el valor y None indica que no hay ninguno. Así Rust evita utilizar null.",
    example: "let puerto: Option<u16> = Some(443);\nlet vacio: Option<u16> = None;",
    objective: `Crea ${V("puerto: Option<u16>")} con ${K("Some(443)")} y maneja ${K("Some(valor)")} y ${K("None")} mediante ${K("match")}.`,
    starter: "fn main() {\n    // Crea y maneja el Option\n}",
    hint: "Declara Option<u16> y crea un match con los dos casos.",
    output: "Puerto: 443", valid: c => /let\s+puerto\s*:\s*Option\s*<\s*u16\s*>\s*=\s*Some\s*\(\s*443\s*\)\s*;/.test(c) && /match\s+puerto\s*\{[\s\S]*?Some\s*\(\s*valor\s*\)[\s\S]*?None/.test(c)
  },
  {
    module: "11 · PATRONES DE RUST", title: "Métodos propios", concept: "impl",
    lesson: "impl añade comportamiento a una struct. Un método recibe &self para leer la instancia y se llama con punto, como rectangulo.area().",
    example: "impl Punto {\n    fn mostrar(&self) {\n        println!(\"{}\", self.x);\n    }\n}",
    objective: `Crea ${K("impl Rectangulo")} y el método ${V("area(&self) -> u32")} que devuelva ${V("self.ancho * self.alto")}.`,
    starter: "struct Rectangulo {\n    ancho: u32,\n    alto: u32,\n}\n\n// Implementa el método",
    hint: "Usa impl Rectangulo { fn area(&self) -> u32 { ... } }",
    output: "Método area creado", valid: c => /impl\s+Rectangulo\s*\{[\s\S]*?fn\s+area\s*\(\s*&\s*self\s*\)\s*->\s*u32\s*\{[\s\S]*?self\s*\.\s*ancho\s*\*\s*self\s*\.\s*alto/.test(c)
  },
  {
    module: "11 · PATRONES DE RUST", title: "Propagar errores", concept: "?",
    lesson: "El operador ? simplifica funciones que devuelven Result. Si la operación produce Ok, extrae el valor; si produce Err, detiene la función y devuelve el error automáticamente.",
    example: 'fn cargar() -> Result<String, std::io::Error> {\n    let texto = std::fs::read_to_string("datos.txt")?;\n    Ok(texto)\n}',
    objective: `Dentro de ${V("leer_config")}, usa ${K("read_to_string")} con ${S('"config.txt"')}${O("?")} y devuelve ${K("Ok(contenido)")}.`,
    starter: "fn leer_config() -> Result<String, std::io::Error> {\n    // Lee y devuelve el contenido\n}",
    hint: 'Crea let contenido = std::fs::read_to_string("config.txt")?; y luego Ok(contenido)',
    output: "Error propagado de forma segura", valid: c => /fn\s+leer_config\s*\(\s*\)\s*->\s*Result\s*<\s*String\s*,\s*std\s*::\s*io\s*::\s*Error\s*>/.test(c) && /read_to_string\s*\(\s*"config\.txt"\s*\)\s*\?\s*;/.test(c) && /Ok\s*\(\s*contenido\s*\)/.test(c)
  }
);

missionGuides.push(
  {lesson:"Las constantes sirven para configuraciones y límites que nunca deben cambiar. A diferencia de let, const puede declararse fuera de una función y exige escribir el tipo.",points:["Se declara con const, no con let.","Su nombre suele usar MAYÚSCULAS_CON_GUIONES.","Siempre necesita una anotación de tipo."],examples:["const PI: f64 = 3.1416;","const INTENTOS: u32 = 3;"],error:"Intentar usar mut con una constante o no indicar su tipo."},
  {lesson:"Shadowing crea una variable nueva con el mismo nombre. Es útil para transformar un dato por etapas y permite cambiar su tipo, porque no estamos modificando la variable anterior.",points:["Se vuelve a escribir let.","La segunda declaración oculta la primera.","Puede cambiar el tipo del dato."],examples:["let entrada = \"42\";\nlet entrada = 42;","let espacios = \"   \";\nlet espacios = espacios.len();"],error:"Confundir shadowing con reasignación. Sin un nuevo let sería necesario mut y conservar el mismo tipo."},
  {lesson:"Las expresiones aritméticas permiten construir nuevos valores. Rust respeta la prioridad habitual: multiplicación y división antes que suma y resta; los paréntesis cambian el orden.",points:["+ suma y - resta.","* multiplica, / divide y % obtiene el residuo.","Los operandos deben tener tipos compatibles."],examples:["let suma = 8 + 2;","let resultado = (5 + 3) * 2;","let par = 10 % 2 == 0;"],error:"Dividir enteros esperando decimales: 5 / 2 produce 2 si ambos valores son enteros."},
  {lesson:"Las tuplas agrupan pocos valores relacionados aunque tengan tipos distintos. Su tamaño y tipos quedan definidos al crearlas. También pueden desestructurarse para obtener variables individuales.",points:["Se escriben entre paréntesis.","Las posiciones empiezan en .0.","Pueden mezclar String, números y bool."],examples:['let datos = ("Ana", 20);','let (nombre, edad) = datos;'],error:"Intentar acceder con [0]. Las tuplas usan .0; los arrays usan [0]."},
  {lesson:"Los arrays son ideales para listas pequeñas cuyo tamaño conocemos al compilar. Todos sus elementos tienen el mismo tipo y acceder fuera del rango provoca un error.",points:["[T; N] indica tipo y longitud.","Los índices comienzan en 0.","Su longitud no puede crecer."],examples:["let dias = [1, 2, 3, 4, 5];","let ceros = [0; 4];"],error:"Usar un índice igual a la longitud. En un array de 3 elementos el último índice es 2."},
  {lesson:"Un slice permite prestar solamente una sección de un array, vector o String. La sintaxis inicio..fin incluye el inicio pero excluye el final.",points:["No copia ni posee los datos.","&datos[a..b] crea el slice.","El límite final no se incluye."],examples:["let parte = &datos[..2];","let final_parte = &datos[2..];","let todo = &datos[..];"],error:"Crear un rango fuera de los límites de la colección."},
  {lesson:"Option obliga a manejar explícitamente la ausencia de un valor. Some(T) significa que existe; None significa que no. Esto elimina gran parte de los errores causados por null.",points:["Option<T> tiene Some(T) o None.","match puede manejar ambos casos.","if let es útil cuando interesa un solo caso."],examples:["let primero = Some(10);","let vacio: Option<i32> = None;","if let Some(n) = primero {\n    println!(\"{}\", n);\n}"],error:"Intentar usar directamente el valor sin comprobar primero si es Some."},
  {lesson:"Un bloque impl reúne funciones relacionadas con un tipo. Cuando una función recibe self, &self o &mut self se convierte en método y puede llamarse mediante punto.",points:["impl Tipo conecta métodos con la struct.","&self permite leer la instancia.","&mut self permite modificarla."],examples:["impl Cuenta {\n    fn activa(&self) -> bool {\n        self.saldo > 0\n    }\n}","cuenta.activa();"],error:"Olvidar &self y luego intentar acceder a campos mediante self.campo."},
  {lesson:"El operador ? reduce el código repetitivo al trabajar con Result. Actúa como un match automático: continúa con el valor de Ok o devuelve inmediatamente el Err.",points:["Solo se usa en funciones compatibles con Result u Option.","Se coloca después de la operación que puede fallar.","No oculta el error: lo propaga al llamador."],examples:['let texto = std::fs::read_to_string("a.txt")?;',"let numero = entrada.parse::<i32>()?;"],error:"Usar ? dentro de main cuando main no devuelve un tipo compatible."}
);

missions.push(
  {
    module: "12 · PENSAMIENTO DE PROGRAMADOR", title: "Nombres que explican", concept: "nombres claros",
    lesson: "Un nombre descriptivo reduce la cantidad de comentarios necesarios. Cuando una variable explica qué contiene, otra persona puede entender el código sin adivinar.",
    example: "let intentos_restantes = 3;",
    objective: `Crea ${V("intentos_restantes")} con ${K("let")} y valor ${N("3")}. No uses nombres de una sola letra.`,
    starter: "fn main() {\n    // Usa un nombre que explique el dato\n}",
    hint: "Escribe el nombre completo en snake_case: let intentos_restantes = 3;",
    output: "Nombre descriptivo reconocido", valid: c => /\blet\s+intentos_restantes\s*=\s*3\s*;/.test(c)
  },
  {
    module: "12 · PENSAMIENTO DE PROGRAMADOR", title: "Divide el problema", concept: "funciones pequeñas",
    lesson: "Un problema grande resulta más fácil cuando lo dividimos en funciones pequeñas. Cada función debe realizar una tarea concreta y tener un nombre que describa esa tarea.",
    example: "fn es_par(numero: i32) -> bool {\n    numero % 2 == 0\n}",
    objective: `Crea ${K("fn")} ${V("es_par")} que reciba ${V("numero: i32")}, devuelva ${K("bool")} y compruebe ${V("numero % 2 == 0")}.`,
    starter: "// Crea una función que responda true o false\n",
    hint: "La última expresión debe ser numero % 2 == 0 y no lleva punto y coma.",
    output: "Función es_par creada", valid: c => /fn\s+es_par\s*\(\s*numero\s*:\s*i32\s*\)\s*->\s*bool\s*\{[\s\S]*?numero\s*%\s*2\s*==\s*0\s*\}/.test(c)
  },
  {
    module: "12 · PENSAMIENTO DE PROGRAMADOR", title: "Depura por partes", concept: "corregir tipos",
    lesson: "Depurar significa localizar la causa de un problema. Conviene leer el error, identificar la línea señalada y corregir una sola causa antes de volver a probar.",
    example: "// Incorrecto: let edad: i32 = \"20\";\n// Correcto:\nlet edad: i32 = 20;",
    objective: `Corrige la variable ${V("edad")} para que su valor sea el número ${N("20")} y no el texto ${S('"20"')}.`,
    starter: "fn main() {\n    let edad: i32 = \"20\";\n    println!(\"Edad: {}\", edad);\n}",
    hint: "El tipo i32 necesita un número sin comillas.",
    output: "Edad: 20\nError de tipo corregido", valid: c => /let\s+edad\s*:\s*i32\s*=\s*20\s*;/.test(c) && !/let\s+edad[^;]*\"20\"/.test(c)
  },
  {
    module: "13 · CÓDIGO DE CALIDAD", title: "Comprueba resultados", concept: "assert_eq!",
    lesson: "Una prueba automática compara el resultado obtenido con el esperado. assert_eq! falla cuando ambos valores son diferentes y ayuda a descubrir errores después de modificar el programa.",
    example: "assert_eq!(sumar(2, 3), 5);",
    objective: `Usa ${K("assert_eq!")} para comprobar que ${V("sumar(2, 3)")} produce ${N("5")}.`,
    starter: "fn sumar(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    // Comprueba el resultado\n}",
    hint: "Dentro de main escribe assert_eq!(sumar(2, 3), 5);",
    output: "Prueba superada: 5 == 5", valid: c => /assert_eq!\s*\(\s*sumar\s*\(\s*2\s*,\s*3\s*\)\s*,\s*5\s*\)\s*;/.test(c)
  },
  {
    module: "13 · CÓDIGO DE CALIDAD", title: "Sal temprano", concept: "return temprano",
    lesson: "Un retorno temprano permite terminar una función cuando aparece un caso que impide continuar. Esto reduce bloques anidados y hace más claro el camino principal.",
    example: "if edad < 18 {\n    println!(\"Acceso denegado\");\n    return;\n}\nprintln!(\"Bienvenido\");",
    objective: `Si ${V("edad")} es menor que ${N("18")}, muestra ${S('"Acceso denegado"')} y usa ${K("return")}; después muestra ${S('"Bienvenido"')}.`,
    starter: "fn verificar(edad: i32) {\n    // Maneja primero el caso no permitido\n}\n",
    hint: "Crea if edad < 18, imprime el mensaje y escribe return; dentro del bloque.",
    output: "Flujo simplificado con retorno temprano", valid: c => /if\s+edad\s*<\s*18\s*\{[\s\S]*?\"Acceso denegado\"[\s\S]*?return\s*;[\s\S]*?\}[\s\S]*?\"Bienvenido\"/.test(c)
  },
  {
    module: "13 · CÓDIGO DE CALIDAD", title: "Evita repetir código", concept: "refactorización",
    lesson: "Refactorizar es mejorar la estructura sin cambiar el resultado. Cuando varias partes hacen lo mismo, podemos extraer ese comportamiento a una función reutilizable.",
    example: "fn mostrar_estado(estado: &str) {\n    println!(\"Estado: {}\", estado);\n}",
    objective: `Crea ${K("fn")} ${V("mostrar_estado(estado: &str)")} y llámala con ${S('"Activo"')} y ${S('"Inactivo"')}.`,
    starter: "fn main() {\n    // Llama dos veces a la función\n}\n\n// Evita repetir println! creando una función\n",
    hint: "La función recibe estado: &str. Después llámala dos veces desde main.",
    output: "Estado: Activo\nEstado: Inactivo\nCódigo reutilizado", valid: c => /fn\s+mostrar_estado\s*\(\s*estado\s*:\s*&str\s*\)/.test(c) && /mostrar_estado\s*\(\s*\"Activo\"\s*\)\s*;/.test(c) && /mostrar_estado\s*\(\s*\"Inactivo\"\s*\)\s*;/.test(c)
  }
);

missionGuides.push(
  {lesson:"Los nombres claros son parte del diseño del programa. snake_case es la convención de Rust para variables y funciones. Un buen nombre expresa intención: intentos_restantes comunica más que x o ir.",points:["Usa snake_case para variables y funciones.","Nombra el dato por lo que representa, no por su tipo.","Evita abreviaturas que otra persona tendría que adivinar."],examples:["let usuarios_activos = 12;","let tiempo_restante = 30;","let archivo_encontrado = true;"],error:"Elegir nombres genéricos como dato, cosa, x o temp cuando el propósito puede expresarse mejor."},
  {lesson:"Dividir un problema consiste en convertir una tarea grande en operaciones pequeñas. Primero identifica entradas, proceso y salida; después crea una función para cada responsabilidad.",points:["Una función debe responder a una tarea concreta.","Su nombre debe describir una acción.","Las funciones pequeñas son más fáciles de probar y reutilizar."],examples:["fn es_par(n: i32) -> bool {\n    n % 2 == 0\n}","fn calcular_total(precio: f64, cantidad: f64) -> f64 {\n    precio * cantidad\n}"],error:"Crear una sola función enorme que lea datos, calcule, valide e imprima todo al mismo tiempo."},
  {lesson:"Los errores del compilador contienen pistas. Lee primero el tipo de error, luego la línea señalada y finalmente qué esperaba Rust frente a qué encontró. Corrige una causa y vuelve a comprobar.",points:["No cambies muchas líneas al mismo tiempo.","Compara el tipo esperado con el tipo encontrado.","Reduce el código hasta aislar el problema."],examples:["let edad: i32 = 20;","let precio: f64 = 19.99;","let activo: bool = true;"],error:"Copiar una solución sin entender el mensaje; el mismo error reaparecerá con otro código."},
  {lesson:"Las pruebas convierten una expectativa en código. Si una función cambia, las pruebas indican rápidamente si todavía produce el resultado correcto. Empieza probando casos normales, límites y entradas inesperadas.",points:["Una prueba necesita entrada y resultado esperado.","Prueba valores pequeños y fáciles de verificar.","Incluye casos límite como cero, vacío o el valor máximo permitido."],examples:["assert_eq!(2 + 2, 4);","assert_eq!(doble(0), 0);","assert_eq!(es_par(8), true);"],error:"Probar solamente el caso que ya sabes que funciona y olvidar los límites."},
  {lesson:"El retorno temprano atiende primero errores o casos especiales y deja el camino principal con menos indentación. El código se puede leer de arriba hacia abajo con mayor facilidad.",points:["Valida primero lo que impide continuar.","Usa return cuando ya no exista trabajo útil.","Mantén el camino exitoso lo menos anidado posible."],examples:["if entrada.is_empty() {\n    return;\n}\nprocesar(entrada);","if edad < 18 {\n    return;\n}\npermitir_acceso();"],error:"Agregar demasiados if dentro de otros if hasta dificultar seguir el flujo."},
  {lesson:"La refactorización elimina duplicación y aclara responsabilidades sin cambiar el comportamiento. Antes de extraer una función, identifica exactamente qué líneas se repiten y qué datos cambian.",points:["No repitas una misma regla en varios lugares.","Convierte las diferencias en parámetros.","Refactoriza en pasos pequeños y comprueba después de cada paso."],examples:["fn mostrar(mensaje: &str) {\n    println!(\"{}\", mensaje);\n}","mostrar(\"Activo\");\nmostrar(\"Inactivo\");"],error:"Crear funciones para cada línea aunque no exista repetición ni una responsabilidad clara."}
);

const moduleGrowthGuides = {
  "01": {goal:"Construye memoria muscular con la sintaxis básica antes de intentar memorizar todo Rust.",tips:["Escribe cada ejemplo de nuevo sin copiar y compáralo al terminar.","Cambia nombres y valores para comprobar que entiendes qué parte hace cada cosa.","Practica sesiones cortas de 20 minutos y termina creando un programa pequeño."],challenge:"Crea desde cero un programa con tres variables de tipos distintos y muéstralas."},
  "02": {goal:"Aprende a convertir reglas escritas en condiciones que puedan ser verdaderas o falsas.",tips:["Antes de escribir if, expresa la condición como una pregunta de sí o no.","Prueba el valor límite, uno menor y uno mayor.","Si una condición se vuelve larga, guárdala en una variable con nombre descriptivo."],challenge:"Prueba una condición con los valores 4, 5 y 6 y predice cada resultado antes de ejecutar."},
  "03": {goal:"Visualiza cómo cambian las variables en cada vuelta para dominar los ciclos.",tips:["Haz una tabla en papel con vuelta, valor actual y resultado.","Usa for cuando conozcas el recorrido y while cuando dependa de una condición.","Comprueba siempre qué hará que un while termine."],challenge:"Recorre del 1 al 10 y muestra únicamente los números pares."},
  "04": {goal:"Divide programas grandes en funciones pequeñas que hagan una sola cosa.",tips:["Nombra funciones con verbos como calcular, validar o mostrar.","Mantén separadas la entrada, el cálculo y la salida.","Si una función necesita demasiados parámetros, quizá realiza más de una tarea."],challenge:"Divide una calculadora en cuatro funciones: sumar, restar, multiplicar y dividir."},
  "05": {goal:"Elige la colección según lo que necesitas hacer con los datos.",tips:["Usa nombres plurales para colecciones: puertos, usuarios o notas.","Antes de modificar un vector, pregunta si realmente necesita mut.","Imprime temporalmente la colección después de cada cambio para observarla."],challenge:"Crea un vector, agrega dos elementos y elimina el último con pop."},
  "06": {goal:"Razona sobre quién posee cada dato en lugar de solucionar todo mediante clone.",tips:["Dibuja una flecha desde cada valor hacia su propietario.","Si una función solo lee, envía una referencia inmutable.","Usa &mut únicamente cuando la función deba modificar el valor."],challenge:"Escribe una función que reciba &String, muestre su longitud y permita usar el String después."},
  "07": {goal:"Modela primero el problema y después escribe las estructuras de datos.",tips:["Agrupa en una struct los datos que siempre viajan juntos.","Usa enum cuando solo pueda existir uno entre varios estados.","Elige nombres del dominio real: Usuario, Servidor, Estado o Pedido."],challenge:"Modela un videojuego con una struct Jugador y un enum EstadoJugador."},
  "08": {goal:"Trata los errores como una parte normal del programa, no como algo que debe ocultarse.",tips:["Lee los errores desde la primera causa relevante.","Usa Result cuando una operación puede fallar y el llamador debe decidir.","Evita unwrap mientras aprendes a manejar cada posibilidad."],challenge:"Crea un Result con Ok y Err y escribe qué debería ocurrir en cada caso."},
  "09": {goal:"Expresa intención mediante constantes, shadowing y operaciones sencillas.",tips:["Usa const para límites que no deben cambiar.","Añade paréntesis cuando hagan más evidente el orden de una fórmula.","Prefiere shadowing para transformar un dato por etapas sin crear nombres artificiales."],challenge:"Convierte un texto numérico en número usando shadowing y calcula su doble."},
  "10": {goal:"Reconoce cuándo necesitas una tupla, un array o solamente una vista prestada.",tips:["Usa tupla para pocos datos diferentes y relacionados.","Usa array cuando el tipo y el tamaño sean fijos.","Usa slice para trabajar con una parte sin copiar toda la colección."],challenge:"Crea un array de cinco notas y pasa solo las tres primeras como slice."},
  "11": {goal:"Aprovecha los tipos de Rust para representar claramente posibilidades y fallos.",tips:["Haz que match cubra explícitamente cada estado importante.","Usa Option cuando la ausencia de un dato sea válida.","Usa ? para propagar un error cuando esta función no pueda resolverlo."],challenge:"Modela una búsqueda que devuelva Some cuando encuentra un número y None cuando no."},
  "12": {goal:"Piensa primero en el problema: entradas, pasos, casos especiales y salida esperada.",tips:["Escribe pseudocódigo antes de abrir el editor.","Resuelve una versión pequeña y luego amplíala.","Cuando algo falle, aísla la línea y cambia una sola cosa por intento."],challenge:"Describe en cinco pasos cómo comprobarías si una contraseña cumple tres reglas."},
  "13": {goal:"Escribe código que otra persona pueda leer, comprobar y modificar con confianza.",tips:["Prueba casos normales, límites y errores.","Elimina duplicación solo después de identificar el patrón repetido.","Prefiere nombres claros y retornos tempranos antes que comentarios que expliquen código confuso."],challenge:"Toma un programa anterior, añade dos pruebas y refactoriza una sección repetida."}
};

const storageKey = "rustQuestCompleteV2";
let state = { active: 0, done: [], codes: missions.map(m => m.starter) };
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved && Array.isArray(saved.done) && Array.isArray(saved.codes)) {
    state = {
      ...state,
      ...saved,
      active: Math.min(Math.max(Number(saved.active) || 0, 0), missions.length - 1),
      done: saved.done.filter(index => Number.isInteger(index) && index >= 0 && index < missions.length),
      codes: missions.map((mission, index) => typeof saved.codes[index] === "string" ? saved.codes[index] : mission.starter)
    };
  }
} catch {}

const $ = id => document.getElementById(id);
const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
const unlocked = index => index === 0 || state.done.includes(index - 1);
const pad = value => String(value).padStart(2, "0");
const visitCounterKey = "m4n14ck_github_io_rust_quest_visits_2026";
async function loadVisitCount() {
  const display = $("visitorCount");
  const countedThisSession = sessionStorage.getItem("rustQuestVisitCounted") === "yes";
  const action = countedThisSession ? "get" : "hit";

  try {
    const response = await fetch(
      `https://countapi.mileshilliard.com/api/v1/${action}/${visitCounterKey}`,
      { method: "GET", mode: "cors", credentials: "omit", referrerPolicy: "no-referrer" }
    );
    if (!response.ok) throw new Error("No se pudo consultar el contador");
    const data = await response.json();
    const visits = Number.parseInt(data.value, 10);
    if (!Number.isSafeInteger(visits) || visits < 0) throw new Error("Respuesta inválida");

    display.textContent = visits.toLocaleString("es-MX");
    if (!countedThisSession) sessionStorage.setItem("rustQuestVisitCounted", "yes");
  } catch {
    display.textContent = "—";
    display.closest(".visitor-count").title = "El contador no está disponible temporalmente";
  }
}

const completions = [
  { label: "println!", match: "println", description: "Mostrar texto", snippet: 'println!("${cursor}");' },
  { label: "let", match: "let", description: "Crear variable", snippet: "let ${cursor}nombre = valor;" },
  { label: "let mut", match: "mut", description: "Variable mutable", snippet: "let mut ${cursor}nombre = valor;" },
  { label: "if", match: "if", description: "Crear condición", snippet: "if ${cursor}condicion {\n    \n}" },
  { label: "if / else", match: "else", description: "Dos caminos", snippet: "if ${cursor}condicion {\n    \n} else {\n    \n}" },
  { label: "match", match: "match", description: "Comparar patrones", snippet: "match ${cursor}valor {\n    patron => accion,\n    _ => otra_accion,\n}" },
  { label: "for", match: "for", description: "Recorrer un rango", snippet: "for ${cursor}numero in 1..=5 {\n    \n}" },
  { label: "while", match: "while", description: "Repetir con condición", snippet: "while ${cursor}condicion {\n    \n}" },
  { label: "fn", match: "fn", description: "Crear función", snippet: "fn ${cursor}nombre() {\n    \n}" },
  { label: "return", match: "return", description: "Terminar la función", snippet: "return${cursor};" },
  { label: "assert_eq!", match: "assert", description: "Comprobar dos valores", snippet: "assert_eq!(${cursor}resultado, esperado);" },
  { label: "Vec", match: "vec", description: "Crear vector", snippet: "let mut ${cursor}datos = vec![];" },
  { label: "String::from", match: "string", description: "Crear String", snippet: 'String::from("${cursor}")' },
  { label: "struct", match: "struct", description: "Crear estructura", snippet: "struct ${cursor}Nombre {\n    campo: Tipo,\n}" },
  { label: "enum", match: "enum", description: "Crear enumeración", snippet: "enum ${cursor}Nombre {\n    Variante,\n}" },
  { label: "Result", match: "result", description: "Resultado seguro", snippet: "Result<${cursor}Tipo, Error>" },
  { label: "const", match: "const", description: "Crear constante", snippet: "const ${cursor}NOMBRE: Tipo = valor;" },
  { label: "Option", match: "option", description: "Valor opcional", snippet: "Option<${cursor}Tipo>" },
  { label: "impl", match: "impl", description: "Implementar métodos", snippet: "impl ${cursor}Tipo {\n    \n}" }
];

let visibleCompletions = [];
let completionIndex = 0;
let completionWordStart = 0;

function updateEditorState() {
  state.codes[state.active] = $("code").value;
  save();
  renderLines();
}

function currentWord() {
  const editor = $("code");
  const beforeCursor = editor.value.slice(0, editor.selectionStart);
  const match = beforeCursor.match(/[A-Za-z_]+$/);
  completionWordStart = match ? editor.selectionStart - match[0].length : editor.selectionStart;
  return match ? match[0].toLowerCase() : "";
}

function showCompletions() {
  const word = currentWord();
  const box = $("autocomplete");
  if (!word) {
    box.classList.add("hidden");
    visibleCompletions = [];
    return;
  }
  visibleCompletions = completions.filter(item =>
    item.match.startsWith(word) || item.label.toLowerCase().startsWith(word)
  ).slice(0, 6);
  if (!visibleCompletions.length) {
    box.classList.add("hidden");
    return;
  }
  completionIndex = Math.min(completionIndex, visibleCompletions.length - 1);
  box.innerHTML = `<div class="autocomplete-header">SUGERENCIAS DE RUST · ENTER PARA INSERTAR</div>` +
    visibleCompletions.map((item, index) =>
      `<button class="autocomplete-item ${index === completionIndex ? "selected" : ""}" data-index="${index}" type="button">
        <code>${item.label}</code><span>${item.description}</span>
      </button>`
    ).join("");
  box.classList.remove("hidden");
  box.querySelectorAll(".autocomplete-item").forEach(button => {
    button.onmousedown = event => {
      event.preventDefault();
      acceptCompletion(Number(button.dataset.index));
    };
  });
}

function acceptCompletion(index = completionIndex) {
  const item = visibleCompletions[index];
  if (!item) return;
  const editor = $("code");
  const end = editor.selectionStart;
  const marker = "${cursor}";
  const markerIndex = item.snippet.indexOf(marker);
  const cleanSnippet = item.snippet.replace(marker, "");
  editor.setRangeText(cleanSnippet, completionWordStart, end, "end");
  const caret = completionWordStart + (markerIndex >= 0 ? markerIndex : cleanSnippet.length);
  editor.setSelectionRange(caret, caret);
  $("autocomplete").classList.add("hidden");
  visibleCompletions = [];
  updateEditorState();
  editor.focus();
}

function insertTab(event) {
  const editor = $("code");
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const hasSelection = start !== end;
  if (!hasSelection) {
    if (event.shiftKey) {
      const lineStart = editor.value.lastIndexOf("\n", start - 1) + 1;
      const removable = editor.value.slice(lineStart, start).match(/^ {1,4}/)?.[0] ?? "";
      if (removable) {
        editor.setRangeText("", lineStart, lineStart + removable.length, "end");
        editor.setSelectionRange(start - removable.length, start - removable.length);
      }
    } else {
      editor.setRangeText("    ", start, end, "end");
    }
  } else {
    const lineStart = editor.value.lastIndexOf("\n", start - 1) + 1;
    const lineEndSearch = editor.value.indexOf("\n", end);
    const lineEnd = lineEndSearch === -1 ? editor.value.length : lineEndSearch;
    const block = editor.value.slice(lineStart, lineEnd);
    const transformed = event.shiftKey
      ? block.split("\n").map(line => line.replace(/^ {1,4}/, "")).join("\n")
      : block.split("\n").map(line => `    ${line}`).join("\n");
    editor.setRangeText(transformed, lineStart, lineEnd, "select");
  }
  updateEditorState();
}

function insertSmartNewline() {
  const editor = $("code");
  const start = editor.selectionStart;
  const before = editor.value.slice(0, start);
  const after = editor.value.slice(start);
  const currentLine = before.slice(before.lastIndexOf("\n") + 1);
  const indentation = currentLine.match(/^\s*/)?.[0] ?? "";
  const opensBlock = currentLine.trimEnd().endsWith("{");
  const closesBlock = after.trimStart().startsWith("}");
  if (opensBlock && closesBlock) {
    const text = `\n${indentation}    \n${indentation}`;
    editor.setRangeText(text, start, start, "end");
    const caret = start + indentation.length + 5;
    editor.setSelectionRange(caret, caret);
  } else {
    const extra = opensBlock ? "    " : "";
    editor.setRangeText(`\n${indentation}${extra}`, start, start, "end");
  }
  updateEditorState();
}

function insertPair(opening) {
  const pairs = { "(": ")", "[": "]", "{": "}", '"': '"' };
  const editor = $("code");
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const selected = editor.value.slice(start, end);
  editor.setRangeText(`${opening}${selected}${pairs[opening]}`, start, end, "end");
  const caret = selected ? start + selected.length + 2 : start + 1;
  editor.setSelectionRange(caret, caret);
  updateEditorState();
}

function renderNav() {
  let lastModule = "";
  $("missions").innerHTML = missions.map((mission, index) => {
    const moduleHeader = mission.module !== lastModule
      ? `<div class="module-title">${mission.module}</div>`
      : "";
    lastModule = mission.module;
    const done = state.done.includes(index);
    return `${moduleHeader}<button class="mission ${index === state.active ? "active" : ""} ${done ? "done" : ""} ${!unlocked(index) ? "locked" : ""}" data-id="${index}">
      <b>${done ? "✓" : pad(index + 1)}</b>
      <span><small>MISIÓN ${pad(index + 1)}</small><strong>${mission.title}</strong><em>${mission.concept}</em></span>
    </button>`;
  }).join("");

  document.querySelectorAll(".mission").forEach(button => {
    button.onclick = () => {
      const index = Number(button.dataset.id);
      if (!unlocked(index)) return message("[ACCESO DENEGADO]\nCompleta la misión anterior para desbloquear este nivel.");
      state.active = index;
      save();
      render();
      message(`[MISIÓN ${pad(index + 1)}]\n${stripHtml(missions[index].objective)}`);
    };
  });
}

function stripHtml(html) {
  const element = document.createElement("div");
  element.innerHTML = html;
  return element.textContent;
}

function render() {
  const mission = missions[state.active];
  const guide = missionGuides[state.active];
  const growth = moduleGrowthGuides[mission.module.slice(0, 2)];
  renderNav();
  $("missionTag").textContent = `// MISIÓN ${pad(state.active + 1)} · ${mission.module} · ${mission.concept}`;
  $("missionTitle").textContent = mission.title;
  $("lesson").innerHTML = highlightExplanation(guide.lesson);
  $("keyPoints").innerHTML = guide.points.map(point => `<li>${highlightExplanation(point)}</li>`).join("");
  $("commonError").innerHTML = highlightExplanation(guide.error);
  $("examples").innerHTML = guide.examples.map((example, index) =>
    `<div class="example-card"><span>EJEMPLO ${index + 1}</span><pre>${escapeHtml(example)}</pre></div>`
  ).join("");
  $("growthGoal").textContent = growth.goal;
  $("programmingTips").innerHTML = growth.tips.map(tip => `<li>${highlightExplanation(tip)}</li>`).join("");
  $("miniChallenge").textContent = growth.challenge;
  $("objective").innerHTML = mission.objective;
  $("ideMissionNumber").textContent = `// MISIÓN ${pad(state.active + 1)} · ${mission.module}`;
  $("ideMissionTitle").textContent = mission.title;
  $("ideObjective").innerHTML = mission.objective;
  $("ideKeyPoints").innerHTML = guide.points.map(point => `<li>${highlightExplanation(point)}</li>`).join("");
  $("ideExample").textContent = guide.examples[0];
  $("ideGrowthTip").textContent = growth.tips[state.active % growth.tips.length];
  $("code").value = state.codes[state.active];
  renderLines();

  const xp = state.done.length * 100;
  const percentage = Math.round(state.done.length / missions.length * 100);
  $("xp").textContent = xp;
  $("level").textContent = pad(Math.floor(xp / 400) + 1);
  $("percent").textContent = `${percentage}%`;
  $("counter").textContent = `${state.done.length} / ${missions.length} MISIONES`;
  $("progressBar").style.width = `${percentage}%`;
  $("next").classList.toggle("hidden", !state.done.includes(state.active) || state.active === missions.length - 1);
  $("hintBox").classList.add("hidden");
}

function renderLines() {
  $("lines").textContent = $("code").value.split("\n").map((_, index) => index + 1).join("\n");
  renderSyntax();
}

function renderSyntax() {
  const source = $("code").value;
  const tokenPattern = /\/\/.*$|"(?:\\.|[^"\\])*"|\b(?:println!|print!|vec!|assert_eq!)|\b(?:fn|let|mut|const|if|else|match|for|in|while|struct|enum|return|pub|use|impl|self|loop|break|continue|as)\b|\b(?:String|Result|Vec|Option|Some|None|Ok|Err|i32|u32|u16|f64|bool|str)\b|\b\d+(?:\.\d+)?\b/gm;
  let html = "";
  let lastIndex = 0;
  for (const match of source.matchAll(tokenPattern)) {
    html += escapeHtml(source.slice(lastIndex, match.index));
    const token = match[0];
    let className = "tok-keyword";
    if (token.startsWith("//")) className = "tok-comment";
    else if (token.startsWith('"')) className = "tok-string";
    else if (/^\d/.test(token)) className = "tok-number";
    else if (token.endsWith("!")) className = "tok-macro";
    else if (/^(String|Result|Vec|Option|i32|u32|u16|f64|bool|str)$/.test(token)) className = "tok-type";
    html += `<span class="${className}">${escapeHtml(token)}</span>`;
    lastIndex = match.index + token.length;
  }
  $("highlighting").innerHTML = html + escapeHtml(source.slice(lastIndex)) + "\n";
  syncEditorScroll();
}

function syncEditorScroll() {
  const editor = $("code");
  const highlighting = $("highlighting");
  highlighting.style.transform = `translate(${-editor.scrollLeft}px, ${-editor.scrollTop}px)`;
  $("lines").style.transform = `translateY(${-editor.scrollTop}px)`;
}

function message(text) {
  $("output").textContent = text;
}

function showExecutionResult(text) {
  message(text);
  const consolePanel = $("output").closest(".console");
  consolePanel.classList.remove("result-focus");
  void consolePanel.offsetWidth;
  consolePanel.classList.add("result-focus");
  requestAnimationFrame(() => {
    consolePanel.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  setTimeout(() => consolePanel.classList.remove("result-focus"), 1400);
}

$("code").oninput = () => {
  updateEditorState();
  completionIndex = 0;
  showCompletions();
};

$("code").onkeydown = event => {
  const boxVisible = !$("autocomplete").classList.contains("hidden") && visibleCompletions.length;
  if (boxVisible && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    completionIndex = (completionIndex + direction + visibleCompletions.length) % visibleCompletions.length;
    showCompletions();
    return;
  }
  if (boxVisible && event.key === "Enter") {
    event.preventDefault();
    acceptCompletion();
    return;
  }
  if (event.key === "Escape" && boxVisible) {
    event.stopPropagation();
    $("autocomplete").classList.add("hidden");
    visibleCompletions = [];
    return;
  }
  if (event.key === "Tab") {
    event.preventDefault();
    insertTab(event);
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    insertSmartNewline();
    return;
  }
  if ([")", "]", "}"].includes(event.key)) {
    const editor = $("code");
    if (editor.value[editor.selectionStart] === event.key) {
      event.preventDefault();
      editor.setSelectionRange(editor.selectionStart + 1, editor.selectionStart + 1);
      return;
    }
  }
  if (["(", "[", "{", '"'].includes(event.key) && !event.ctrlKey && !event.metaKey) {
    const editor = $("code");
    if (event.key === '"' && editor.value[editor.selectionStart] === '"') {
      event.preventDefault();
      editor.setSelectionRange(editor.selectionStart + 1, editor.selectionStart + 1);
      return;
    }
    event.preventDefault();
    insertPair(event.key);
  }
};

$("code").onscroll = syncEditorScroll;

function openIde() {
  $("ideOverlay").classList.remove("hidden");
  $("ideOverlay").setAttribute("aria-hidden", "false");
  document.body.classList.add("ide-active");
  renderSyntax();
  requestAnimationFrame(() => $("code").focus());
}

function closeIde() {
  $("ideOverlay").classList.add("hidden");
  $("ideOverlay").setAttribute("aria-hidden", "true");
  document.body.classList.remove("ide-active");
  $("openIde").focus();
}

$("openIde").onclick = openIde;
$("closeIde").onclick = closeIde;
$("backFromIde").onclick = closeIde;
$("resetCourse").onclick = () => {
  const accepted = window.confirm(
    "¿Quieres reiniciar todo el curso?\n\nSe borrarán las misiones completadas, el XP y todo el código escrito."
  );
  if (!accepted) return;

  localStorage.removeItem(storageKey);
  state = { active: 0, done: [], codes: missions.map(mission => mission.starter) };
  if (!$("ideOverlay").classList.contains("hidden")) closeIde();
  render();
  message("[CURSO REINICIADO]\nTu progreso volvió a cero. Comienza nuevamente desde la misión 01.");
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("ideOverlay").onclick = event => {
  if (event.target === $("ideOverlay")) closeIde();
};
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !$("ideOverlay").classList.contains("hidden")) closeIde();
});

$("run").onclick = () => {
  const mission = missions[state.active];
  const code = state.codes[state.active];
  if (!mission.valid(code)) {
    showExecutionResult("[ERROR DE MISIÓN]\nEl código aún no cumple todos los requisitos resaltados.\nRevisa el objetivo o solicita una pista.");
    return;
  }

  const firstCompletion = !state.done.includes(state.active);
  if (firstCompletion) state.done.push(state.active);
  let result = mission.output;
  if (state.active === 0) {
    const match = code.match(/println!\s*\(\s*"([^"\n]+)"/);
    if (match) result = match[1];
  }
  save();
  render();
  showExecutionResult(`[COMPILACIÓN SIMULADA: OK]\n\n${result}\n\n✓ MISIÓN COMPLETADA${firstCompletion ? "\n+100 XP" : ""}${state.done.length === missions.length ? "\n\n🏆 CURSO COMPLETADO · RUST OPERATIVE" : ""}`);
};

$("hint").onclick = () => {
  const box = $("hintBox");
  box.innerHTML = `<b>💡 PISTA DEL SISTEMA</b><p>${missions[state.active].hint}</p>`;
  box.classList.toggle("hidden");
};

$("reset").onclick = () => {
  state.codes[state.active] = missions[state.active].starter;
  save();
  render();
  message("[SISTEMA]\nCódigo de la misión restaurado.");
};

$("next").onclick = () => {
  if (state.active < missions.length - 1) {
    closeIde();
    state.active++;
    save();
    render();
    message(`[NUEVA MISIÓN DESBLOQUEADA]\n${stripHtml(missions[state.active].objective)}`);
    requestAnimationFrame(() => {
      document.querySelector(".workspace").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
};

const practiceLevels = {
  easy: {
    label: "FÁCIL", seconds: 90,
    challenges: [
      {title:"Variable de energía",objective:"Crea una variable llamada energia con el valor 100 usando let.",starter:"fn main() {\n    // Crea la variable\n}",valid:code=>/\blet\s+energia\s*=\s*100\s*;/.test(code)},
      {title:"Mensaje de inicio",objective:'Usa println! para mostrar exactamente "Rust listo".',starter:'fn main() {\n    println!("");\n}',valid:code=>/println!\s*\(\s*"Rust listo"\s*\)\s*;/.test(code)},
      {title:"Acceso por nivel",objective:"Crea un if que compruebe si nivel es mayor o igual que 5.",starter:"fn main() {\n    let nivel = 7;\n    // Crea la condición\n}",valid:code=>/\bif\s+nivel\s*>=\s*5\s*\{/.test(code)},
      {title:"Rango completo",objective:"Usa for con la variable numero para recorrer del 1 al 5, incluyendo el 5.",starter:"fn main() {\n    // Crea el ciclo\n}",valid:code=>/\bfor\s+numero\s+in\s+1\s*\.\.=\s*5\s*\{/.test(code)},
      {title:"Puntos mutables",objective:"Crea puntos con let mut y valor 10; después aumenta 5 mediante +=.",starter:"fn main() {\n    // Crea y aumenta puntos\n}",valid:code=>/let\s+mut\s+puntos\s*=\s*10\s*;/.test(code)&&/puntos\s*\+=\s*5\s*;/.test(code)}
    ]
  },
  medium: {
    label: "MEDIO", seconds: 120,
    challenges: [
      {title:"Función sumar",objective:"Declara sumar con dos parámetros i32 y devuelve i32.",starter:"// Declara la función sumar\n",valid:code=>/fn\s+sumar\s*\([^)]*:\s*i32\s*,[^)]*:\s*i32\s*\)\s*->\s*i32\s*\{/.test(code)},
      {title:"Vector dinámico",objective:"Crea numeros como vec![1, 2, 3] mutable y agrega 4 mediante push.",starter:"fn main() {\n    // Crea y modifica el vector\n}",valid:code=>/let\s+mut\s+numeros\s*=\s*vec!\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*;/.test(code)&&/numeros\s*\.\s*push\s*\(\s*4\s*\)\s*;/.test(code)},
      {title:"String ampliable",objective:'Crea mensaje con String::from("Hola") y añade " Rust" usando push_str.',starter:"fn main() {\n    // Crea y amplía el String\n}",valid:code=>/let\s+mut\s+mensaje\s*=\s*String\s*::\s*from\s*\(\s*"Hola"\s*\)\s*;/.test(code)&&/mensaje\s*\.\s*push_str\s*\(\s*" Rust"\s*\)\s*;/.test(code)},
      {title:"Código HTTP",objective:'Usa match con codigo: 200 muestra "OK" y _ muestra "Error".',starter:"fn main() {\n    let codigo = 200;\n    // Crea el match\n}",valid:code=>/match\s+codigo\s*\{[\s\S]*?200\s*=>[\s\S]*?"OK"[\s\S]*?_\s*=>[\s\S]*?"Error"/.test(code)},
      {title:"Modelo Usuario",objective:"Declara struct Usuario con nombre: String y nivel: u32.",starter:"// Declara la estructura\n\nfn main() {}",valid:code=>/struct\s+Usuario\s*\{[\s\S]*?nombre\s*:\s*String\s*,?[\s\S]*?nivel\s*:\s*u32/.test(code)}
    ]
  },
  advanced: {
    label: "AVANZADO", seconds: 180,
    challenges: [
      {title:"Transferir propiedad",objective:"Crea origen como String, mueve su propiedad a destino e imprime destino.",starter:"fn main() {\n    // Crea, mueve e imprime\n}",valid:code=>/let\s+origen\s*=\s*String\s*::\s*from\s*\([^)]+\)\s*;/.test(code)&&/let\s+destino\s*=\s*origen\s*;/.test(code)&&/println!\s*\([^;]*destino/.test(code)},
      {title:"Préstamo inmutable",objective:"Crea longitud(texto: &String) -> usize y devuelve texto.len().",starter:"// Crea una función que pida prestado el String\n",valid:code=>/fn\s+longitud\s*\(\s*texto\s*:\s*&\s*String\s*\)\s*->\s*usize\s*\{[\s\S]*?texto\s*\.\s*len\s*\(\s*\)/.test(code)},
      {title:"Resultado controlado",objective:"Usa match resultado y maneja tanto Ok(valor) como Err(error).",starter:'fn main() {\n    let resultado: Result<i32, &str> = Ok(10);\n    // Maneja ambos casos\n}',valid:code=>/match\s+resultado\s*\{[\s\S]*?Ok\s*\(\s*valor\s*\)\s*=>[\s\S]*?Err\s*\(\s*error\s*\)\s*=>/.test(code)},
      {title:"Método de área",objective:"Implementa area(&self) -> u32 para Rectangulo y devuelve ancho * alto.",starter:"struct Rectangulo {\n    ancho: u32,\n    alto: u32,\n}\n\n// Crea impl Rectangulo\n",valid:code=>/impl\s+Rectangulo\s*\{[\s\S]*?fn\s+area\s*\(\s*&\s*self\s*\)\s*->\s*u32[\s\S]*?self\s*\.\s*ancho\s*\*\s*self\s*\.\s*alto/.test(code)},
      {title:"Eliminar duplicación",objective:'Crea mostrar_estado(estado: &str) y llámala con "Activo" e "Inactivo".',starter:"fn main() {\n    // Reutiliza una sola función\n}\n\n// Crea mostrar_estado\n",valid:code=>/fn\s+mostrar_estado\s*\(\s*estado\s*:\s*&str\s*\)/.test(code)&&/mostrar_estado\s*\(\s*"Activo"\s*\)\s*;/.test(code)&&/mostrar_estado\s*\(\s*"Inactivo"\s*\)\s*;/.test(code)}
    ]
  }
};

let selectedPracticeLevel = "easy";
let activePracticeChallenges = [];
let practiceTimerId = null;
let practiceSeconds = practiceLevels.easy.seconds;
let practiceIndex = 0;
let practiceScore = 0;
let practiceActive = false;

function formatPracticeTime(totalSeconds) {
  return `${pad(Math.floor(totalSeconds / 60))}:${pad(totalSeconds % 60)}`;
}

function shuffledChallenges(challenges) {
  const result = [...challenges];
  for (let index = result.length - 1; index > 0; index--) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function updatePracticeTimer() {
  $("practiceTimer").textContent = formatPracticeTime(practiceSeconds);
}

function renderPracticeChallenge() {
  const challenge = activePracticeChallenges[practiceIndex];
  $("practiceProgress").textContent = `${practiceIndex + 1} / ${activePracticeChallenges.length}`;
  $("practiceScore").textContent = practiceScore;
  $("practiceTitle").textContent = challenge.title;
  $("practiceObjective").textContent = challenge.objective;
  $("practiceCode").value = challenge.starter;
  $("practiceFeedback").textContent = "";
  $("practiceFeedback").className = "practice-feedback";
}

function finishPractice(reason) {
  if (!practiceActive) return;
  practiceActive = false;
  clearInterval(practiceTimerId);
  practiceTimerId = null;
  $("practiceChallenge").classList.add("hidden");
  $("practiceResult").classList.remove("hidden");
  document.querySelectorAll("[data-practice-level]").forEach(button => button.disabled = false);
  $("startPractice").disabled = false;
  $("startPractice").textContent = `INICIAR DE NUEVO · ${formatPracticeTime(practiceLevels[selectedPracticeLevel].seconds)} →`;
  $("practiceFinalScore").textContent = `${practiceScore} / ${activePracticeChallenges.length}`;
  $("practiceFinalMessage").textContent = reason === "time"
    ? "El tiempo terminó. Revisa los conceptos y vuelve a intentarlo."
    : practiceScore === activePracticeChallenges.length
      ? `¡Competencia ${practiceLevels[selectedPracticeLevel].label.toLowerCase()} perfecta! Completaste todos los retos a tiempo.`
      : "Práctica terminada. Cada intento hará que escribas Rust con más confianza.";
}

function startPractice() {
  if (practiceActive) return;
  const level = practiceLevels[selectedPracticeLevel];
  clearInterval(practiceTimerId);
  activePracticeChallenges = shuffledChallenges(level.challenges);
  practiceSeconds = level.seconds;
  practiceIndex = 0;
  practiceScore = 0;
  practiceActive = true;
  document.querySelectorAll("[data-practice-level]").forEach(button => button.disabled = true);
  $("startPractice").disabled = true;
  $("startPractice").textContent = "COMPETENCIA EN CURSO…";
  $("practicePanel").classList.remove("hidden");
  $("practiceChallenge").classList.remove("hidden");
  $("practiceResult").classList.add("hidden");
  $("practiceDifficulty").textContent = level.label;
  updatePracticeTimer();
  renderPracticeChallenge();
  practiceTimerId = setInterval(() => {
    practiceSeconds--;
    updatePracticeTimer();
    if (practiceSeconds <= 0) finishPractice("time");
  }, 1000);
  $("practicePanel").scrollIntoView({ behavior: "smooth", block: "start" });
  requestAnimationFrame(() => $("practiceCode").focus());
}

function selectPracticeLevel(levelName) {
  if (practiceActive || !practiceLevels[levelName]) return;
  selectedPracticeLevel = levelName;
  const level = practiceLevels[levelName];
  document.querySelectorAll("[data-practice-level]").forEach(button => {
    const selected = button.dataset.practiceLevel === levelName;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  practiceSeconds = level.seconds;
  updatePracticeTimer();
  $("practiceDifficulty").textContent = level.label;
  $("startPractice").textContent = `INICIAR COMPETENCIA · ${formatPracticeTime(level.seconds)} →`;
  $("practicePanel").classList.add("hidden");
}

document.querySelectorAll("[data-practice-level]").forEach(button => {
  button.onclick = () => selectPracticeLevel(button.dataset.practiceLevel);
});
$("startPractice").onclick = startPractice;
$("retryPractice").onclick = startPractice;
$("submitPractice").onclick = () => {
  if (!practiceActive) return;
  const challenge = activePracticeChallenges[practiceIndex];
  if (!challenge.valid($("practiceCode").value)) {
    $("practiceFeedback").textContent = "Aún falta algún requisito. Revisa el nombre, los símbolos y el punto y coma.";
    $("practiceFeedback").className = "practice-feedback error";
    return;
  }

  practiceScore++;
  $("practiceScore").textContent = practiceScore;
  $("practiceFeedback").textContent = "✓ Solución correcta";
  $("practiceFeedback").className = "practice-feedback ok";
  practiceIndex++;
  if (practiceIndex >= activePracticeChallenges.length) {
    setTimeout(() => {
      if (practiceActive) finishPractice("complete");
    }, 450);
  } else {
    setTimeout(renderPracticeChallenge, 450);
  }
};

$("practiceCode").addEventListener("keydown", event => {
  if (event.key !== "Tab") return;
  event.preventDefault();
  const editor = event.currentTarget;
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  editor.setRangeText("    ", start, end, "end");
});

render();
loadVisitCount();
