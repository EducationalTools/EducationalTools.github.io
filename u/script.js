fetch("config.json").then(function (r) {
    r.text().then(function (config) {
        JSON.parse(config).gmaes.forEach(gmae => {
            card = document.createElement("a")
            card.innerHTML = gmae.name;
            card.href = gmae.path;
            card.style.backgroundImage = `url()`;
            card.style.backgroundImage = (`linear-gradient(to bottom, transparent, var(--md-sys-color-primary-container)), url('${gmae.img}')`);
            card.classList.add("card")
            document.getElementById("gmaes").appendChild(card);
        });
    })
})