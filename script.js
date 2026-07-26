const rustProjects = [
    {
        name: "Programas básicos Rust", icon: "🦀",
        description: "Curso introductorio de Rust en español con ejemplos prácticos, organizado en lecciones.",
        url: "https://github.com/m4n14ck/Rust", tags: ["Rust", "CLI", "Código"]
    },
    {
        name: "md5-tool", icon: "🔐",
        description: "Utilidades de hashing y procesamiento de archivos.",
        url: "https://github.com/m4n14ck/md5-tool", tags: ["Rust", "Hash"]
    },
    {
        name: "process", icon: "⚙️",
        description: "Biblioteca para administración y procesos del sistema.",
        url: "https://github.com/m4n14ck/process", tags: ["Rust", "Systems"]
    },
    {
        name: "File Manager in Rust", icon: "🗂️",
        description: "Administrador de archivos interactivo con detección automática y selección numérica.",
        url: "https://github.com/m4n14ck/rust-file-manager", tags: ["Rust", "Systems", "Manager"]
    },
    {
        name: "Introducción a Rust", icon: "📚",
        description: "Curso práctico para aprender Rust desde cero y avanzar progresivamente.",
        url: "https://github.com/m4n14ck/Introduccion_a_rust", tags: ["Rust", "PDF", "Curso"]
    }
];

const otherProjects = [
    {
        name: "ADB-Exploiter", icon: "📱",
        description: "Toolkit para auditorías Android mediante ADB.",
        url: "https://github.com/m4n14ck/ADB-Exploiter", tags: ["C++", "Android"]
    },
    {
        name: "Dexsploit", icon: "⚡",
        description: "Framework para ingeniería inversa y análisis de archivos DEX.",
        url: "https://github.com/m4n14ck/Dexsploit", tags: ["Java", "Reverse"]
    },
    {
        name: "wifi-password-viewer", icon: "📶",
        description: "Recuperación de perfiles WiFi locales.",
        url: "https://github.com/m4n14ck/wifi-password-viewer", tags: ["Python", "Windows"]
    }
];

function createCard(project) {
    return `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card">
        <div class="card-top"><h3>${project.icon} ${project.name}</h3></div>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        <span class="view">View Repository →</span>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rust-projects").innerHTML = rustProjects.map(createCard).join("");
    document.getElementById("other-projects").innerHTML = otherProjects.map(createCard).join("");
});
