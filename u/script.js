fetch("config.json").then(function (r) {
    r.text().then(function (config) {
        JSON.parse(config).gmaes.forEach(gmae => {
            console.log(gmae)
        });
    })
})