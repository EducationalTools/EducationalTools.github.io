fetch("config.yaml").then(function (response) {
  response.text().then(function (text) {
    document.config = jsyaml.load(text)
    document.querySelector(".loader").classList.add("hide");
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
      menuitm.href = `p?id=${game.id}`;
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
