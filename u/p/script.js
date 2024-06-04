
function reload() {
    document.querySelector('iframe').contentWindow.location.reload();
}

function fullscreen() {
    document.querySelector('iframe').requestFullscreen();
}

function opennewtab() {
    // open window and then write iframe with url for game
    var win = window.open("", "_blank");
    setTimeout(() => {
        win.document.write(`
            <style>
                * {
                    padding 0;
                    border: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                }
            </style>
            <iframe src="' + urlParams.get('url') + '"></iframe>
    `);
    }, 10);
}

function opennewwindow() {
    // open window and then write iframe with url for game
    var win = window.open("", "_blank", "width=800,height=600");
    setTimeout(() => {
        win.document.write(`
            <style>
                * {
                    padding 0;
                    border: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                }
            </style>
            <iframe src="' + urlParams.get('url') + '"></iframe>
    `);
    }, 10);
}

function share() {
    try {
        navigator.share({
            title: document.title,
            url: window.location.href,
        })
    } catch (e) {
        alert("Sharing is not supported on your device. Try copy.")
        console.error("Sharing error message: " + e)
    }
}

function copy() {
    navigator.clipboard.writeText(window.location.href);
}


fetch("../config.yaml").then(function (response) {
    response.text().then(function (text) {
        document.config = jsyaml.load(text)
        document.querySelector(".loader").classList.add("hide");
        var urlParams = new URLSearchParams(window.location.search);
        document.currentgame = (document.config.games.find(item => item.id === urlParams.get("id")))
        document.querySelector("h1").innerHTML = document.currentgame.name
        document.querySelector("h2").innerHTML = document.currentgame.description
        document.querySelector("iframe").src = "/" + document.currentgame.repo + "/" + document.currentgame.path
    })
})

function menu(menuName) {
    document.querySelector(".menucontainer").classList.remove("hide");
    document.querySelector(".menucontainer > .menu").innerHTML = "";
    if (menuName == "gmae") {
        header = document.createElement("h1");
        header.innerHTML = "Gmaes";
        document.querySelector(".menucontainer > .menu").appendChild(header);
        document.config.games.forEach(game => {
            menuitm = document.createElement("a");
            menuitm.classList.add("menuitm");
            menuitm.href = `?id=${game.id}`;
            menuitm.innerHTML = game.name;
            document.querySelector(".menucontainer > .menu").appendChild(menuitm);
        });
    }
    if (menuName == "app") {
        header = document.createElement("h1");
        header.innerHTML = "Apps";
        document.querySelector(".menucontainer > .menu").appendChild(header);
    }
    if (menuName == "tool") {
        header = document.createElement("h1");
        header.innerHTML = "Tools";
        document.querySelector(".menucontainer > .menu").appendChild(header);
    }
    if (menuName == "more") {
        header = document.createElement("h1");
        header.innerHTML = "More";
        document.querySelector(".menucontainer > .menu").appendChild(header);
    }
    //   document.querySelector(".menu").innerHTML = menu[menuName];
}

function closeMenu() {
    document.querySelector(".menucontainer").classList.add("hide");
}
