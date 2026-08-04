const rustProjects = [
    {
        name: "Programas básicos Rust", icon: "EA68",
        description: "Curso introductorio de Rust en español con ejemplos prácticos, organizado en lecciones.",
        url: "https://github.com/m4n14ck/Rust", tags: ["Rust", "CLI", "Código"]
    },
    {
        name: "md5-tool", icon: "E9F1",
        description: "Utilidades de hashing y procesamiento de archivos.",
        url: "https://github.com/m4n14ck/md5-tool", tags: ["Rust", "Hash"]
    },
    {
        name: "process", icon: "E9F7",
        description: "Biblioteca para administración y procesos del sistema.",
        url: "https://github.com/m4n14ck/process", tags: ["Rust", "Systems"]
    },
    {
        name: "File Manager in Rust", icon: "E98C",
        description: "Administrador de archivos interactivo con detección automática y selección numérica.",
        url: "https://github.com/m4n14ck/rust-file-manager", tags: ["Rust", "Systems", "Manager"]
    },
    {
        name: "Introducción a Rust", icon: "E96E",
        description: "Curso práctico para aprender Rust desde cero y avanzar progresivamente.",
        url: "https://github.com/m4n14ck/Introduccion_a_rust", tags: ["Rust", "PDF", "Curso"]
    }
];

const otherProjects = [
    {
        name: "ADB-Exploiter", icon: "E9FE",
        description: "Toolkit para auditorías Android mediante ADB.",
        url: "https://github.com/m4n14ck/ADB-Exploiter", tags: ["C++", "Android"]
    },
    {
        name: "Dexsploit", icon: "E98F",
        description: "Framework para ingeniería inversa y análisis de archivos DEX.",
        url: "https://github.com/m4n14ck/Dexsploit", tags: ["Java", "Reverse"]
    },
    {
        name: "wifi-password-viewer", icon: "E9D8",
        description: "Recuperación de perfiles WiFi locales.",
        url: "https://github.com/m4n14ck/wifi-password-viewer", tags: ["Python", "Windows"]
    }
];

function createCard(project) {
    return `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card">
        <div class="card-top"><h3><span class="ui-icon" aria-hidden="true">&#x${project.icon};</span> ${project.name}</h3></div>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        <span class="view">View Repository <i class="ui-icon" aria-hidden="true">&#xE919;</i></span>
    </a>`;
}

async function loadHomeVisitCount() {
    const display = document.getElementById("homeVisitorCount");
    const counterKey = "m4n14ck_github_io_home_visits_2026";
    const countedThisSession = sessionStorage.getItem("m4n14ckHomeVisitCounted") === "yes";
    const action = countedThisSession ? "get" : "hit";

    try {
        const response = await fetch(
            `https://countapi.mileshilliard.com/api/v1/${action}/${counterKey}`,
            { method: "GET", mode: "cors", credentials: "omit", referrerPolicy: "no-referrer" }
        );
        if (!response.ok) throw new Error("No se pudo consultar el contador");

        const data = await response.json();
        const visits = Number.parseInt(data.value, 10);
        if (!Number.isSafeInteger(visits) || visits < 0) throw new Error("Respuesta inválida");

        display.textContent = visits.toLocaleString("es-MX");
        if (!countedThisSession) sessionStorage.setItem("m4n14ckHomeVisitCounted", "yes");
    } catch {
        display.textContent = "—";
        display.closest(".home-visits").title = "El contador no está disponible temporalmente";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rust-projects").innerHTML = rustProjects.map(createCard).join("");
    document.getElementById("other-projects").innerHTML = otherProjects.map(createCard).join("");
    loadHomeVisitCount();
});
