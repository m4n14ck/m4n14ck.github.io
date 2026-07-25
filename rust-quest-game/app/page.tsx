"use client";

import { useEffect, useMemo, useState } from "react";

type Mission = {
  id: number;
  title: string;
  concept: string;
  objective: string;
  briefing: string;
  starter: string;
  hint: string;
  successOutput: string;
  validate: (code: string) => boolean;
};

const missions: Mission[] = [
  {
    id: 1,
    title: "Primer contacto",
    concept: "println!",
    objective: "Imprime el mensaje «Sistema en línea».",
    briefing:
      "En Rust, println! muestra información en la consola. El signo ! indica que es una macro.",
    starter: 'fn main() {\n    println!("_____");\n}',
    hint: 'Reemplaza _____ por Sistema en línea, sin borrar las comillas.',
    successOutput: "Sistema en línea",
    validate: (code) =>
      /println!\s*\(\s*"Sistema en l[ií]nea"\s*\)\s*;?/i.test(code),
  },
  {
    id: 2,
    title: "Guardar energía",
    concept: "Variables",
    objective: "Crea una variable llamada energia con el valor 100.",
    briefing:
      "La palabra let crea una variable. Rust infiere automáticamente el tipo del número.",
    starter: "fn main() {\n    // Crea la variable aquí\n}",
    hint: "La estructura es: let nombre = valor;",
    successOutput: "energia almacenada: 100",
    validate: (code) => /\blet\s+energia\s*=\s*100\s*;/.test(code),
  },
  {
    id: 3,
    title: "Núcleo mutable",
    concept: "mut",
    objective: "Declara energia en 40 y después cámbiala a 100.",
    briefing:
      "Las variables son inmutables por defecto. Agrega mut para permitir que su valor cambie.",
    starter:
      "fn main() {\n    let energia = 40;\n    // Recarga la energía\n}",
    hint: "Primero agrega mut después de let. Luego usa: energia = 100;",
    successOutput: "Núcleo recargado al 100%",
    validate: (code) =>
      /\blet\s+mut\s+energia\s*=\s*40\s*;/.test(code) &&
      /\benergia\s*=\s*100\s*;/.test(code),
  },
  {
    id: 4,
    title: "Puerta de acceso",
    concept: "if",
    objective: "Comprueba si nivel es mayor o igual que 5.",
    briefing:
      "if ejecuta un bloque solamente cuando su condición es verdadera. No necesita paréntesis.",
    starter:
      'fn main() {\n    let nivel = 7;\n\n    // Comprueba el nivel\n    {\n        println!("Acceso concedido");\n    }\n}',
    hint: "Antes del bloque escribe: if nivel >= 5",
    successOutput: "Acceso concedido",
    validate: (code) => /\bif\s+nivel\s*>=\s*5\s*\{/.test(code),
  },
  {
    id: 5,
    title: "Escaneo final",
    concept: "for",
    objective: "Recorre los números del 1 al 5 usando un ciclo for.",
    briefing:
      "Un rango inclusivo como 1..=5 genera todos los números desde 1 hasta 5.",
    starter:
      'fn main() {\n    // Crea el ciclo\n    {\n        println!("Analizando nodo {}", nodo);\n    }\n}',
    hint: "Usa: for nodo in 1..=5",
    successOutput:
      "Analizando nodo 1\nAnalizando nodo 2\nAnalizando nodo 3\nAnalizando nodo 4\nAnalizando nodo 5",
    validate: (code) => /\bfor\s+nodo\s+in\s+1\s*\.\.\s*=\s*5\s*\{/.test(code),
  },
];

const STORAGE_KEY = "rustQuestProgress";

export default function Home() {
  const [activeId, setActiveId] = useState(1);
  const [completed, setCompleted] = useState<number[]>([]);
  const [codes, setCodes] = useState<Record<number, string>>(() =>
    Object.fromEntries(missions.map((mission) => [mission.id, mission.starter])),
  );
  const [consoleText, setConsoleText] = useState(
    "[RUST QUEST]\nSelecciona una misión y completa el código.",
  );
  const [showHint, setShowHint] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const progress = JSON.parse(saved);
        if (Array.isArray(progress.completed)) setCompleted(progress.completed);
        if (progress.codes) setCodes((current) => ({ ...current, ...progress.codes }));
        if (progress.activeId) setActiveId(progress.activeId);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ completed, codes, activeId }),
      );
    }
  }, [activeId, codes, completed, loaded]);

  const mission = missions[activeId - 1];
  const xp = completed.length * 100;
  const level = Math.floor(xp / 200) + 1;
  const progress = (completed.length / missions.length) * 100;
  const allComplete = completed.length === missions.length;

  const statusLabel = useMemo(() => {
    if (allComplete) return "RUST OPERATIVE";
    if (completed.length >= 3) return "SYSTEMS APPRENTICE";
    return "NEW RECRUIT";
  }, [allComplete, completed.length]);

  function isUnlocked(id: number) {
    return id === 1 || completed.includes(id - 1);
  }

  function selectMission(id: number) {
    if (!isUnlocked(id)) {
      setConsoleText(
        "[ACCESO DENEGADO]\nCompleta la misión anterior para desbloquear este nodo.",
      );
      return;
    }
    setActiveId(id);
    setShowHint(false);
    setConsoleText(`[MISIÓN ${String(id).padStart(2, "0")}]\n${missions[id - 1].objective}`);
  }

  function runCode() {
    const code = codes[activeId] ?? "";
    if (mission.validate(code)) {
      const firstCompletion = !completed.includes(activeId);
      setCompleted((current) =>
        current.includes(activeId) ? current : [...current, activeId].sort(),
      );
      setConsoleText(
        `[COMPILACIÓN SIMULADA: OK]\n\n${mission.successOutput}\n\n✓ MISIÓN COMPLETADA${firstCompletion ? "\n+100 XP" : ""}`,
      );
    } else {
      setConsoleText(
        "[ERROR DE MISIÓN]\nEl código todavía no cumple el objetivo.\n\nRevisa la sintaxis o solicita una pista.",
      );
    }
  }

  function resetMission() {
    setCodes((current) => ({ ...current, [activeId]: mission.starter }));
    setShowHint(false);
    setConsoleText("[SISTEMA]\nCódigo de la misión restaurado.");
  }

  function nextMission() {
    const next = activeId + 1;
    if (next <= missions.length && isUnlocked(next)) selectMission(next);
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Rust Quest inicio">
          <span className="brand-mark">RQ</span>
          <span>
            <strong>RUST QUEST</strong>
            <small>CODE TO SURVIVE</small>
          </span>
        </a>
        <div className="player-stats">
          <div>
            <span>RANGO</span>
            <strong>{statusLabel}</strong>
          </div>
          <div>
            <span>NIVEL</span>
            <strong>{String(level).padStart(2, "0")}</strong>
          </div>
          <div className="xp-box">
            <span>EXPERIENCIA</span>
            <strong>{xp} XP</strong>
          </div>
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">// PROTOCOLO DE ENTRENAMIENTO ACTIVO</p>
          <h1>Aprende Rust.<br /><em>Supera la misión.</em></h1>
          <p className="hero-copy">
            Domina los fundamentos de Rust resolviendo desafíos dentro de una
            terminal simulada. Cada línea de código desbloquea el siguiente nodo.
          </p>
        </div>
        <div className="global-progress" aria-label={`${progress}% completado`}>
          <div className="progress-orbit">
            <span>{Math.round(progress)}%</span>
            <small>COMPLETADO</small>
          </div>
          <p>{completed.length} / {missions.length} MISIONES</p>
        </div>
      </section>

      <section className="game-grid">
        <aside className="mission-panel">
          <div className="panel-heading">
            <span>RUTA DE APRENDIZAJE</span>
            <b>{completed.length}/{missions.length}</b>
          </div>
          <nav className="mission-list" aria-label="Misiones">
            {missions.map((item) => {
              const done = completed.includes(item.id);
              const unlocked = isUnlocked(item.id);
              return (
                <button
                  key={item.id}
                  className={`mission-card ${activeId === item.id ? "active" : ""} ${done ? "done" : ""} ${!unlocked ? "locked" : ""}`}
                  onClick={() => selectMission(item.id)}
                  aria-current={activeId === item.id ? "step" : undefined}
                >
                  <span className="mission-number">
                    {done ? "✓" : unlocked ? String(item.id).padStart(2, "0") : "×"}
                  </span>
                  <span className="mission-name">
                    <small>MISIÓN {String(item.id).padStart(2, "0")}</small>
                    <strong>{item.title}</strong>
                    <em>{item.concept}</em>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <section className="workspace">
          <div className="briefing">
            <div>
              <p className="eyebrow">// MISIÓN {String(activeId).padStart(2, "0")} · {mission.concept}</p>
              <h2>{mission.title}</h2>
              <p>{mission.briefing}</p>
            </div>
            <div className="objective">
              <span>OBJETIVO</span>
              <p>{mission.objective}</p>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <div className="dots"><i /><i /><i /></div>
              <span>main.rs</span>
              <b>RUST · SIMULADO</b>
            </div>
            <div className="editor-wrap">
              <div className="line-numbers" aria-hidden="true">
                {(codes[activeId] ?? "").split("\n").map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>
              <textarea
                value={codes[activeId] ?? ""}
                onChange={(event) =>
                  setCodes((current) => ({
                    ...current,
                    [activeId]: event.target.value,
                  }))
                }
                spellCheck={false}
                aria-label="Editor de código Rust"
              />
            </div>
            <div className="terminal-actions">
              <button className="hint-button" onClick={() => setShowHint((value) => !value)}>
                {showHint ? "OCULTAR PISTA" : "SOLICITAR PISTA"}
              </button>
              <button className="reset-button" onClick={resetMission}>REINICIAR</button>
              <button className="run-button" onClick={runCode}>
                <span>▶</span> EJECUTAR CÓDIGO
              </button>
            </div>
          </div>

          {showHint && (
            <div className="hint-box">
              <b>PISTA DEL SISTEMA</b>
              <p>{mission.hint}</p>
            </div>
          )}

          <div className="output-panel" aria-live="polite">
            <div className="output-heading">
              <span>CONSOLA / SALIDA</span>
              <i />
            </div>
            <pre>{consoleText}</pre>
          </div>

          {completed.includes(activeId) && activeId < missions.length && (
            <button className="next-button" onClick={nextMission}>
              CONTINUAR A LA SIGUIENTE MISIÓN →
            </button>
          )}

          {allComplete && activeId === missions.length && (
            <div className="victory">
              <span>🏆</span>
              <div>
                <small>ENTRENAMIENTO FINALIZADO</small>
                <h3>Rust Operative desbloqueado</h3>
                <p>Has completado los fundamentos iniciales de Rust.</p>
              </div>
            </div>
          )}
        </section>
      </section>

      <footer>
        <span>© 2026 m4n14ck</span>
        <p>HECHO CON <b>♥</b> Y MUCHO RUST</p>
        <a href="https://github.com/m4n14ck" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </footer>
    </main>
  );
}
