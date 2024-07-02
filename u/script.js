setTimeout(() => {
    if (window.location == window.parent.location) {
        if (location.search != "?dev") {
            location = "/";
        }
    }
}, 1);

fetch("config.json").then(function (r) {
    r.text().then(function (config) {
        JSON.parse(config).gmaes.forEach(gmae => {
            card = document.createElement("a")
            card.innerHTML = gmae.name;
            card.href = gmae.path;
            card.style.backgroundImage = `url()`;
            card.style.backgroundImage = (`linear-gradient(to bottom, transparent, black), url('${gmae.img}')`);
            card.classList.add("card")
            ripple = document.createElement("md-ripple")
            card.appendChild(ripple)
            document.getElementById("gmaes").appendChild(card);
        });
    })
})