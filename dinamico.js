const rustProjects = [

{
name:"scanCraft",
icon:"🦀",
description:"Framework moderno para reconocimiento y automatización de auditorías con Nmap.",
url:"https://github.com/m4n14ck/scanCraft",
tags:["Rust","CLI","Networking"]
},

{
name:"md5-tool",
icon:"🔐",
description:"Utilidades de hashing y procesamiento de archivos.",
url:"https://github.com/m4n14ck/md5-tool",
tags:["Rust","Crypto"]
},

{
name:"process",
icon:"⚙️",
description:"Biblioteca para administración y procesos del sistema.",
url:"https://github.com/m4n14ck/process",
tags:["Rust","Systems"]
}

];

const otherProjects = [

{
name:"ADB-Exploiter",
icon:"📱",
description:"Toolkit para auditorías Android mediante ADB.",
url:"https://github.com/m4n14ck/ADB-Exploiter",
tags:["Python","Android"]
},

{
name:"Dexsploit",
icon:"⚡",
description:"Framework para ingeniería inversa y análisis de archivos DEX.",
url:"https://github.com/m4n14ck/Dexsploit",
tags:["Java","Reverse"]
},

{
name:"wifi-password-viewer",
icon:"📶",
description:"Recuperación de perfiles WiFi locales.",
url:"https://github.com/m4n14ck/wifi-password-viewer",
tags:["Python","Windows"]
}

];

function createCard(project){

return `

<a href="${project.url}"
target="_blank"
class="project-card">

<div class="card-top">

<h3>${project.icon} ${project.name}</h3>

</div>

<p>

${project.description}

</p>

<div class="tags">

${project.tags.map(tag=>`<span class="tag">${tag}</span>`).join("")}

</div>

<span class="view">

View Repository →

</span>

</a>

`;

}

document.getElementById("rust-projects").innerHTML =
rustProjects.map(createCard).join("");

document.getElementById("other-projects").innerHTML =
otherProjects.map(createCard).join("");
