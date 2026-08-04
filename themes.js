(function () {
    "use strict";

    const storageKey = "rustQuestNordThemeV1";
    const themes = [
        ["nord-classic", "Nord Clásico"],
        ["polar-night", "Noche Polar"],
        ["frost-blue", "Azul Escarcha"],
        ["aurora-violet", "Aurora Violeta"],
        ["snow-storm", "Tormenta de Nieve"],
        ["arctic-cyan", "Cian Ártico"],
        ["northern-lights", "Luces del Norte"],
        ["deep-ocean", "Océano Profundo"],
        ["ice-violet", "Hielo Violeta"],
        ["ember-frost", "Brasa Helada"]
    ];

    function saveTheme(theme) {
        try { localStorage.setItem(storageKey, theme); } catch {}
    }

    function readTheme() {
        try { return localStorage.getItem(storageKey); } catch { return null; }
    }

    function themeName(value) {
        return themes.find(([theme]) => theme === value)?.[1] || "Nord Clásico";
    }

    function applyTheme(theme) {
        const valid = themes.some(([value]) => value === theme);
        const selected = valid ? theme : "nord-classic";
        document.body.dataset.theme = selected;

        const currentName = document.getElementById("currentThemeName");
        if (currentName) currentName.textContent = themeName(selected);
        const themeToggle = document.getElementById("globalThemeToggle");
        if (themeToggle) themeToggle.title = `Cambiar tema · ${themeName(selected)}`;

        document.querySelectorAll(".theme-option").forEach(option => {
            const active = option.dataset.themeOption === selected;
            option.classList.toggle("active", active);
            option.setAttribute("aria-pressed", String(active));
        });
        saveTheme(selected);
    }

    function closePanel() {
        const panel = document.getElementById("globalThemePanel");
        const toggle = document.getElementById("globalThemeToggle");
        if (!panel || !toggle) return;
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
    }

    function createThemeOption(value, name) {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "theme-option";
        option.dataset.themeOption = value;
        option.setAttribute("aria-pressed", "false");

        const palette = document.createElement("span");
        palette.className = "theme-option-palette";
        palette.setAttribute("aria-hidden", "true");
        for (let index = 0; index < 3; index++) palette.append(document.createElement("i"));

        const label = document.createElement("span");
        label.textContent = name;
        const check = document.createElement("b");
        check.className = "ui-icon";
        check.textContent = "\uE9CA";
        check.setAttribute("aria-hidden", "true");
        option.append(palette, label, check);

        option.addEventListener("click", () => {
            applyTheme(value);
            closePanel();
        });
        return option;
    }

    function createThemeWidget() {
        if (document.getElementById("globalThemeWidget")) return;

        const widget = document.createElement("div");
        widget.id = "globalThemeWidget";
        widget.className = "global-theme-widget";

        const panel = document.createElement("section");
        panel.id = "globalThemePanel";
        panel.className = "global-theme-panel";
        panel.hidden = true;
        panel.setAttribute("aria-label", "Temas visuales disponibles");

        const heading = document.createElement("div");
        heading.className = "theme-panel-heading";
        const headingText = document.createElement("div");
        const title = document.createElement("strong");
        title.textContent = "TEMAS NORD";
        const description = document.createElement("span");
        description.textContent = "Selecciona una apariencia global";
        headingText.append(title, description);
        const close = document.createElement("button");
        close.type = "button";
        close.className = "theme-panel-close ui-icon";
        close.textContent = "\uE970";
        close.setAttribute("aria-label", "Cerrar selector de temas");
        close.addEventListener("click", closePanel);
        heading.append(headingText, close);

        const list = document.createElement("div");
        list.className = "theme-options";
        themes.forEach(([value, name]) => list.append(createThemeOption(value, name)));
        panel.append(heading, list);

        const toggle = document.createElement("button");
        toggle.id = "globalThemeToggle";
        toggle.className = "global-theme-toggle";
        toggle.type = "button";
        toggle.title = "Cambiar tema · Nord Clásico";
        toggle.setAttribute("aria-label", "Abrir selector de temas");
        toggle.setAttribute("aria-controls", "globalThemePanel");
        toggle.setAttribute("aria-expanded", "false");

        const icon = document.createElement("span");
        icon.className = "global-theme-icon ui-icon";
        icon.textContent = "\uE957";
        icon.setAttribute("aria-hidden", "true");
        const copy = document.createElement("span");
        copy.className = "global-theme-copy";
        const label = document.createElement("b");
        label.textContent = "CAMBIAR TEMA";
        const current = document.createElement("small");
        current.id = "currentThemeName";
        current.textContent = "Nord Clásico";
        copy.append(label, current);
        const arrow = document.createElement("span");
        arrow.className = "global-theme-arrow ui-icon";
        arrow.textContent = "\uE913";
        arrow.setAttribute("aria-hidden", "true");
        toggle.append(icon, copy, arrow);

        toggle.addEventListener("click", () => {
            const opening = panel.hidden;
            panel.hidden = !opening;
            toggle.setAttribute("aria-expanded", String(opening));
            if (opening) panel.querySelector(".theme-option.active")?.focus();
        });

        widget.append(panel, toggle);
        document.body.append(widget);

        document.addEventListener("click", event => {
            if (!widget.contains(event.target)) closePanel();
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") closePanel();
        });
    }

    createThemeWidget();
    applyTheme(readTheme() || document.body.dataset.theme || "nord-classic");
})();
