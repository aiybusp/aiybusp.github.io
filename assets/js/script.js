(()=> {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)");
    if (prefersDarkMode.matches) {
        document.body.dataset.bsTheme = "dark";
    } else {
        document.body.dataset.bsTheme = "light";
    }

    prefersDarkMode.onchange = (e) => {
        if (e.matches) {
            document.body.dataset.bsTheme = "dark";
        } else {
            document.body.dataset.bsTheme = "light";
        }
    }
})();
