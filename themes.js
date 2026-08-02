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

    function applyTheme(theme) {
        const valid = themes.some(([value]) => value === theme);
        const selected = valid ? theme : "nord-classic";
        document.body.dataset.theme = selected;
        const selector = document.getElementById("globalThemeSelector");
        if (selector) selector.value = selected;
        saveTheme(selected);
    }

    function createSelector() {
        if (document.getElementById("globalThemeSelector")) return;

        const label = document.createElement("label");
        label.className = "global-theme-control";
        label.htmlFor = "globalThemeSelector";

        const icon = document.createElement("span");
        icon.className = "global-theme-icon";
        icon.setAttribute("aria-hidden", "true");

        const text = document.createElement("span");
        text.className = "global-theme-label";
        text.textContent = "TEMA";

        const selector = document.createElement("select");
        selector.id = "globalThemeSelector";
        selector.setAttribute("aria-label", "Seleccionar tema global");

        themes.forEach(([value, name]) => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = name;
            selector.append(option);
        });

        selector.addEventListener("change", event => applyTheme(event.target.value));
        label.append(icon, text, selector);
        document.body.append(label);
    }

    createSelector();
    applyTheme(readTheme() || document.body.dataset.theme || "nord-classic");
})();
