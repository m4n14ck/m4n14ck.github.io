"use strict";

const levels = {
  easy: {
    label: "Fácil", seconds: 90, topic: "FUNDAMENTOS",
    challenges: [
      {title:"Variable de energía",objective:"Crea una variable llamada energia con el valor 100 usando let.",starter:"fn main() {\n    // Crea la variable energia aquí\n\n}",solution:"fn main() {\n    let energia = 100;\n    println!(\"Energía: {}\", energia);\n}",output:"Energía: 100",topic:"Variables",advice:"Repasa el módulo de variables. En Rust se usa let, después el nombre, el signo = y el valor; la instrucción termina con punto y coma.",valid:code=>/\blet\s+energia\s*=\s*100\s*;/.test(code)},
      {title:"Mensaje de inicio",objective:'Usa println! para mostrar exactamente "Rust listo".',starter:'fn main() {\n    println!("");\n}',solution:'fn main() {\n    println!("Rust listo");\n}',output:"Rust listo",topic:"Impresión en pantalla",advice:"println! es una macro. Escribe el texto entre comillas, dentro de los paréntesis, y termina la línea con punto y coma.",valid:code=>/println!\s*\(\s*"Rust listo"\s*\)\s*;/.test(code)},
      {title:"Acceso por nivel",objective:'Crea un if que compruebe si nivel es mayor o igual que 5 y muestre "Acceso concedido".',starter:"fn main() {\n    let nivel = 7;\n    // Crea la condición aquí\n\n}",solution:'fn main() {\n    let nivel = 7;\n    if nivel >= 5 {\n        println!("Acceso concedido");\n    }\n}',output:"Acceso concedido",topic:"Condiciones",advice:"Una condición if recibe una expresión booleana sin paréntesis obligatorios. El código que se ejecutará va dentro de llaves.",valid:code=>/\bif\s+nivel\s*>=\s*5\s*\{[\s\S]*?println!\s*\(\s*"Acceso concedido"/.test(code)},
      {title:"Rango completo",objective:"Usa for con la variable numero para recorrer del 1 al 5, incluyendo el 5.",starter:"fn main() {\n    // Crea el ciclo aquí\n\n}",solution:'fn main() {\n    for numero in 1..=5 {\n        println!("{}", numero);\n    }\n}',output:"1\n2\n3\n4\n5",topic:"Ciclos y rangos",advice:"El rango inclusivo 1..=5 contiene ambos extremos. for toma cada valor del rango y lo guarda temporalmente en la variable numero.",valid:code=>/\bfor\s+numero\s+in\s+1\s*\.\.=\s*5\s*\{/.test(code)},
      {title:"Puntos mutables",objective:"Crea puntos con let mut y valor 10; después aumenta 5 mediante +=.",starter:"fn main() {\n    // Crea y aumenta puntos\n\n}",solution:'fn main() {\n    let mut puntos = 10;\n    puntos += 5;\n    println!("{}", puntos);\n}',output:"15",topic:"Mutabilidad",advice:"Las variables de Rust son inmutables de forma predeterminada. Agrega mut después de let cuando el valor deba cambiar.",valid:code=>/let\s+mut\s+puntos\s*=\s*10\s*;/.test(code)&&/puntos\s*\+=\s*5\s*;/.test(code)}
    ]
  },
  medium: {
    label: "Medio", seconds: 120, topic: "DESARROLLO",
    challenges: [
      {title:"Función sumar",objective:"Declara sumar con dos parámetros i32 y devuelve i32.",starter:"// Declara la función sumar\n\nfn main() {\n}\n",solution:"fn sumar(a: i32, b: i32) -> i32 {\n    a + b\n}",output:"El valor que resulte de a + b",topic:"Funciones y retornos",advice:"Repasa parámetros tipados, el operador -> y el retorno implícito de la última expresión sin punto y coma.",valid:code=>/fn\s+sumar\s*\([^)]*:\s*i32\s*,[^)]*:\s*i32\s*\)\s*->\s*i32\s*\{/.test(code)},
      {title:"Vector dinámico",objective:"Crea numeros como vec![1, 2, 3] mutable y agrega 4 mediante push.",starter:"fn main() {\n    // Crea y modifica el vector\n\n}",solution:"fn main() {\n    let mut numeros = vec![1, 2, 3];\n    numeros.push(4);\n}",output:"[1, 2, 3, 4]",topic:"Vectores",advice:"Un Vec puede crecer, pero la variable que lo contiene necesita mut para poder llamar métodos que lo modifican.",valid:code=>/let\s+mut\s+numeros\s*=\s*vec!\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*;/.test(code)&&/numeros\s*\.\s*push\s*\(\s*4\s*\)\s*;/.test(code)},
      {title:"String ampliable",objective:'Crea mensaje con String::from("Hola") y añade " Rust" usando push_str.',starter:"fn main() {\n    // Crea y amplía el String\n\n}",solution:'fn main() {\n    let mut mensaje = String::from("Hola");\n    mensaje.push_str(" Rust");\n}',output:"Hola Rust",topic:"String",advice:"String almacena texto modificable. Para añadir un &str se usa push_str y la variable debe ser mutable.",valid:code=>/let\s+mut\s+mensaje\s*=\s*String\s*::\s*from\s*\(\s*"Hola"\s*\)\s*;/.test(code)&&/mensaje\s*\.\s*push_str\s*\(\s*" Rust"\s*\)\s*;/.test(code)},
      {title:"Código HTTP",objective:'Usa match con codigo: 200 muestra "OK" y _ muestra "Error".',starter:"fn main() {\n    let codigo = 200;\n    // Crea el match\n\n}",solution:'match codigo {\n    200 => println!("OK"),\n    _ => println!("Error"),\n}',output:"OK si el código es 200; Error en cualquier otro caso",topic:"Pattern matching",advice:"match debe cubrir todas las posibilidades. El patrón _ funciona como caso general cuando ninguno de los anteriores coincide.",valid:code=>/match\s+codigo\s*\{[\s\S]*?200\s*=>[\s\S]*?"OK"[\s\S]*?_\s*=>[\s\S]*?"Error"/.test(code)},
      {title:"Modelo Usuario",objective:"Declara struct Usuario con nombre: String y nivel: u32.",starter:"// Declara la estructura\n\nfn main() {\n}\n",solution:"struct Usuario {\n    nombre: String,\n    nivel: u32,\n}",output:"Una estructura Usuario lista para crear instancias",topic:"Estructuras",advice:"Una struct agrupa datos relacionados. Cada campo lleva nombre, dos puntos, tipo y normalmente una coma.",valid:code=>/struct\s+Usuario\s*\{[\s\S]*?nombre\s*:\s*String\s*,?[\s\S]*?nivel\s*:\s*u32/.test(code)}
    ]
  },
  advanced: {
    label: "Avanzado", seconds: 180, topic: "RUST ESENCIAL",
    challenges: [
      {title:"Transferir propiedad",objective:"Crea origen como String, mueve su propiedad a destino e imprime destino.",starter:"fn main() {\n    // Crea, mueve e imprime\n\n}",solution:'let origen = String::from("Rust");\nlet destino = origen;\nprintln!("{}", destino);',output:"Rust",topic:"Ownership",advice:"Repasa qué tipos se mueven al asignarlos y por qué la variable original deja de estar disponible después de transferir la propiedad.",valid:code=>/let\s+origen\s*=\s*String\s*::\s*from\s*\([^)]+\)\s*;/.test(code)&&/let\s+destino\s*=\s*origen\s*;/.test(code)&&/println!\s*\([^;]*destino/.test(code)},
      {title:"Préstamo inmutable",objective:"Crea longitud(texto: &String) -> usize y devuelve texto.len().",starter:"// Crea una función que pida prestado el String\n\n",solution:"fn longitud(texto: &String) -> usize {\n    texto.len()\n}",output:"La cantidad de bytes del String prestado",topic:"Préstamos",advice:"Una referencia &String permite leer el valor sin tomar su propiedad. Revisa el alcance de las referencias y el tipo usize.",valid:code=>/fn\s+longitud\s*\(\s*texto\s*:\s*&\s*String\s*\)\s*->\s*usize\s*\{[\s\S]*?texto\s*\.\s*len\s*\(\s*\)/.test(code)},
      {title:"Resultado controlado",objective:"Usa match resultado y maneja tanto Ok(valor) como Err(error).",starter:'fn main() {\n    let resultado: Result<i32, &str> = Ok(10);\n    // Maneja ambos casos\n\n}',solution:"match resultado {\n    Ok(valor) => println!(\"{}\", valor),\n    Err(error) => println!(\"{}\", error),\n}",output:"El valor correcto o el mensaje de error",topic:"Result y errores",advice:"Result representa éxito con Ok o fallo con Err. Un match obliga a pensar y manejar ambos caminos de ejecución.",valid:code=>/match\s+resultado\s*\{[\s\S]*?Ok\s*\(\s*valor\s*\)\s*=>[\s\S]*?Err\s*\(\s*error\s*\)\s*=>/.test(code)},
      {title:"Método de área",objective:"Implementa area(&self) -> u32 para Rectangulo y devuelve ancho * alto.",starter:"struct Rectangulo {\n    ancho: u32,\n    alto: u32,\n}\n\n// Crea impl Rectangulo\n",solution:"impl Rectangulo {\n    fn area(&self) -> u32 {\n        self.ancho * self.alto\n    }\n}",output:"El área del rectángulo",topic:"Métodos e impl",advice:"Los métodos se definen dentro de impl. &self permite consultar los campos de la instancia sin consumirla.",valid:code=>/impl\s+Rectangulo\s*\{[\s\S]*?fn\s+area\s*\(\s*&\s*self\s*\)\s*->\s*u32[\s\S]*?self\s*\.\s*ancho\s*\*\s*self\s*\.\s*alto/.test(code)},
      {title:"Eliminar duplicación",objective:'Crea mostrar_estado(estado: &str) y llámala con "Activo" e "Inactivo".',starter:"fn main() {\n    // Reutiliza una sola función\n}\n\n// Crea mostrar_estado\n",solution:'fn mostrar_estado(estado: &str) {\n    println!("{}", estado);\n}\n\nfn main() {\n    mostrar_estado("Activo");\n    mostrar_estado("Inactivo");\n}',output:"Activo\nInactivo",topic:"Refactorización",advice:"Extrae el comportamiento repetido a una función que reciba la parte variable como parámetro. Así reduces duplicación y facilitas cambios.",valid:code=>/fn\s+mostrar_estado\s*\(\s*estado\s*:\s*&str\s*\)/.test(code)&&/mostrar_estado\s*\(\s*"Activo"\s*\)\s*;/.test(code)&&/mostrar_estado\s*\(\s*"Inactivo"\s*\)\s*;/.test(code)}
    ]
  }
};

const $ = id => document.getElementById(id);
let selectedLevel = "easy";
let activeChallenges = [];
let challengeIndex = 0;
let score = 0;
let secondsLeft = levels.easy.seconds;
let timerId = null;
let running = false;

function pad(value){return String(value).padStart(2,"0")}
function formatTime(seconds){return `${pad(Math.floor(seconds/60))}:${pad(seconds%60)}`}
function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
function escapeHtml(text){return text.replace(/[&<>]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[char]))}

function highlightRust(code){
  const tokens=[];
  const protectedCode=code.replace(/\/\/[^\n]*|"(?:\\.|[^"\\])*"/g,match=>{const key=`\u0000${tokens.length}\u0000`;tokens.push({text:match,type:match.startsWith("//")?"comment":"string"});return key});
  let html=escapeHtml(protectedCode)
    .replace(/\b(fn|let|mut|if|else|for|in|while|loop|match|struct|impl|return|pub|use|mod|enum|trait|where|move|ref|self|Self|as|const|static)\b/g,'<span class="tok-keyword">$1</span>')
    .replace(/\b(String|Result|Option|Vec|i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|usize|isize|str|bool|Ok|Err|Some|None)\b/g,'<span class="tok-type">$1</span>')
    .replace(/\b(\d+)\b/g,'<span class="tok-number">$1</span>')
    .replace(/\b([A-Za-z_][A-Za-z0-9_]*)!/g,'<span class="tok-macro">$1!</span>')
    .replace(/\b(fn\s+)<span class="tok-keyword">([A-Za-z_][A-Za-z0-9_]*)<\/span>/g,'$1<span class="tok-function">$2</span>');
  return html.replace(/\u0000(\d+)\u0000/g,(_,index)=>`<span class="tok-${tokens[index].type}">${escapeHtml(tokens[index].text)}</span>`)+"\n";
}

function renderEditor(){
  const editor=$("competitionCode");
  $("competitionHighlight").innerHTML=highlightRust(editor.value);
  $("competitionLines").textContent=Array.from({length:Math.max(1,editor.value.split("\n").length)},(_,i)=>i+1).join("\n");
  syncEditorScroll();
}
function syncEditorScroll(){const editor=$("competitionCode");$("competitionHighlight").scrollTop=editor.scrollTop;$("competitionHighlight").scrollLeft=editor.scrollLeft;$("competitionLines").scrollTop=editor.scrollTop}

function setConsole(status,message,type=""){
  $("consoleStatus").textContent=status;
  $("competitionFeedback").textContent=message;
  $("competitionFeedback").className=`feedback${type?` ${type}`:""}`;
}

function selectLevel(name){
  if(running||!levels[name])return;
  selectedLevel=name;
  document.querySelectorAll("[data-level]").forEach(button=>{const selected=button.dataset.level===name;button.classList.toggle("selected",selected);button.setAttribute("aria-pressed",String(selected))});
  $("startCompetition").textContent=`INICIAR COMPETENCIA · ${formatTime(levels[name].seconds)} →`;
}

function renderChallenge(){
  const challenge=activeChallenges[challengeIndex];
  $("competitionProgress").textContent=`${challengeIndex+1} / ${activeChallenges.length}`;
  $("competitionScore").textContent=score*100;
  $("challengeTopic").textContent=levels[selectedLevel].topic;
  $("challengeTitle").textContent=challenge.title;
  $("challengeObjective").textContent=challenge.objective;
  $("competitionCode").value=challenge.starter;
  $("checkSolution").disabled=false;
  $("resetChallenge").disabled=false;
  setConsole("LISTO","> Sistema preparado\n\nEscribe tu solución y pulsa “Ejecutar y comprobar”.");
  renderEditor();
  requestAnimationFrame(()=>$("competitionCode").focus());
}

function updateTimer(){
  $("competitionTimer").textContent=formatTime(secondsLeft);
  $("competitionTimer").parentElement.classList.toggle("danger",secondsLeft<=15);
}

function startCompetition(){
  const level=levels[selectedLevel];
  clearInterval(timerId);
  activeChallenges=shuffle(level.challenges);
  challengeIndex=0;score=0;secondsLeft=level.seconds;running=true;
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
  running=false;clearInterval(timerId);timerId=null;
  const level=levels[selectedLevel];
  const challenge=activeChallenges[Math.min(challengeIndex,activeChallenges.length-1)];
  $("competitionArena").classList.add("hidden");
  $("competitionResults").classList.remove("hidden");
  $("resultKicker").textContent=reason==="complete"?"COMPETENCIA COMPLETADA":"TIEMPO AGOTADO";
  $("resultTitle").textContent=`${score} de ${activeChallenges.length} resueltos`;
  $("resultSubtitle").textContent=reason==="complete"?"¡Terminaste todos los retos antes de que se agotara el tiempo!":`Llegaste al problema ${Math.min(challengeIndex+1,activeChallenges.length)} de ${activeChallenges.length}.`;
  $("resultPoints").textContent=score*100;
  $("resultTime").textContent=formatTime(level.seconds).replace(/^0/,"");
  $("resultTimeNote").textContent=`Nivel ${level.label}`;
  $("resultProgress").textContent=`${score}/${activeChallenges.length}`;
  $("resultLevel").textContent=level.label;
  $("improvementTopic").textContent=reason==="complete"?"Velocidad y claridad":challenge.topic;
  $("improvementAdvice").textContent=reason==="complete"?"Dominaste esta ronda. Intenta el siguiente nivel o repite buscando una solución más clara y breve.":challenge.advice;
  const showEasySolution=selectedLevel==="easy"&&reason==="time";
  $("easySolutionPanel").classList.toggle("hidden",!showEasySolution);
  $("noSolutionPanel").classList.toggle("hidden",showEasySolution||reason==="complete");
  if(showEasySolution){$("solutionTitle").textContent=challenge.title;$("resultSolution").textContent=challenge.solution;$("resultOutput").textContent=challenge.output}
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll("[data-level]").forEach(button=>button.addEventListener("click",()=>selectLevel(button.dataset.level)));
$("startCompetition").addEventListener("click",startCompetition);
$("newCompetition").addEventListener("click",()=>{$("competitionResults").classList.add("hidden");$("competitionSetup").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})});
$("leaveCompetition").addEventListener("click",()=>{if(!running)return;running=false;clearInterval(timerId);timerId=null;$("competitionArena").classList.add("hidden");$("competitionSetup").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})});
$("checkSolution").addEventListener("click",()=>{
  if(!running||challengeIndex>=activeChallenges.length)return;
  const challenge=activeChallenges[challengeIndex];
  if(!challenge.valid($("competitionCode").value)){setConsole("ERROR","[ERROR DE VALIDACIÓN]\n\nNo se encontró todo lo solicitado en el objetivo.\n\nRevisa los nombres, operadores, llaves y puntos y coma.","error");return}
  score++;challengeIndex++;$("checkSolution").disabled=true;$("resetChallenge").disabled=true;$("competitionScore").textContent=score*100;setConsole("CORRECTO",`[EJECUCIÓN COMPLETADA]\n\n${challenge.output}\n\n✓ Reto superado · +100 puntos`,"ok");
  if(challengeIndex>=activeChallenges.length){clearInterval(timerId);timerId=null;setTimeout(()=>finishCompetition("complete"),1100)}else{setTimeout(()=>{if(running)renderChallenge()},1100)}
});
$("resetChallenge").addEventListener("click",()=>{
  if(!running||challengeIndex>=activeChallenges.length)return;
  $("competitionCode").value=activeChallenges[challengeIndex].starter;
  renderEditor();
  setConsole("REINICIADO","> Código restaurado\n\nPuedes comenzar nuevamente este reto.");
  $("competitionCode").focus();
});
$("competitionCode").addEventListener("input",renderEditor);
$("competitionCode").addEventListener("scroll",syncEditorScroll);
$("competitionCode").addEventListener("keydown",event=>{
  if(event.key==="Tab"){
    event.preventDefault();const editor=event.currentTarget;editor.setRangeText("    ",editor.selectionStart,editor.selectionEnd,"end");renderEditor();return;
  }
  if(event.key==="Enter"){
    event.preventDefault();const editor=event.currentTarget;const before=editor.value.slice(0,editor.selectionStart);const currentLine=before.slice(before.lastIndexOf("\n")+1);const indentation=(currentLine.match(/^\s*/)||[""])[0]+(currentLine.trimEnd().endsWith("{")?"    ":"");editor.setRangeText(`\n${indentation}`,editor.selectionStart,editor.selectionEnd,"end");renderEditor();
  }
});

selectLevel("easy");
