// Datos de proyectos
const rustProjects = [
    {
        name: "Curso Rust",
        icon: "🦀",
        description: "Curso introductorio de Rust en español, organizado en lecciones (carpetas 1_Leccion a 7_Leccion) con ejemplos prácticos de código",
        url: "https://github.com/m4n14ck/Rust",
        tags: ["Rust", "CLI", "Curso"]
    },
    {
        name: "md5-tool",
        icon: "🔐",
        description: "Utilidades de hashing y procesamiento de archivos.",
        url: "https://github.com/m4n14ck/md5-tool",
        tags: ["Rust", "Crypto"]
    },
    {
        name: "process",
        icon: "⚙️",
        description: "Biblioteca para administración y procesos del sistema.",
        url: "https://github.com/m4n14ck/process",
        tags: ["Rust", "Systems"]
    }
];

const otherProjects = [
    {
        name: "ADB-Exploiter",
        icon: "📱",
        description: "Toolkit para auditorías Android mediante ADB.",
        url: "https://github.com/m4n14ck/ADB-Exploiter",
        tags: ["Python", "Android"]
    },
    {
        name: "Dexsploit",
        icon: "⚡",
        description: "Framework para ingeniería inversa y análisis de archivos DEX.",
        url: "https://github.com/m4n14ck/Dexsploit",
        tags: ["Java", "Reverse"]
    },
    {
        name: "wifi-password-viewer",
        icon: "📶",
        description: "Recuperación de perfiles WiFi locales.",
        url: "https://github.com/m4n14ck/wifi-password-viewer",
        tags: ["Python", "Windows"]
    }
];

// Función para crear tarjetas
function createCard(project) {
    return `
        <a href="${project.url}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="project-card">
            <div class="card-top">
                <h3>${project.icon} ${project.name}</h3>
            </div>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <span class="view">View Repository →</span>
        </a>
    `;
}

// Renderizar proyectos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    const rustContainer = document.getElementById("rust-projects");
    const otherContainer = document.getElementById("other-projects");
    
    if (rustContainer) {
        rustContainer.innerHTML = rustProjects.map(createCard).join("");
    } else {
        console.warn("No se encontró el contenedor #rust-projects");
    }
    
    if (otherContainer) {
        otherContainer.innerHTML = otherProjects.map(createCard).join("");
    } else {
        console.warn("No se encontró el contenedor #other-projects");
    }
    
    // Log de éxito
    console.log(`✅ Proyectos cargados: ${rustProjects.length} Rust + ${otherProjects.length} Others = ${rustProjects.length + otherProjects.length} total`);
});
