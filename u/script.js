fetch("config.json").then(function (r) {
    r.text().then(function (config) {
        JSON.parse(config).gmaes.forEach(gmae => {
            card = document.createElement("a")
            card.innerHTML = gmae.name;
            card.href = gmae.path;
            card.style.backgroundImage = `url()`;
            card.style.backgroundImage = (`url('${gmae.img}')`)
            document.getElementById("gmaes").appendChild(card);
        });
    })
})