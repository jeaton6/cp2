

document.getElementById("go").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://pokeapi.co/api/v2/pokemon/" +
    document.getElementById("poke-search").value;
  fetch(url)
      .then(function(response) {
          return response.json();
      }).then(function(json) {
          console.log(json);
          let name = json.name;
          let pic = "<img class='pokemon-pic' src=" + json.sprites.front_default + " alt=" + name + "/>";
          console.log(name);
          let stats = "<ul>";
          for(let i = 0; i < json.stats.length; i++) {
            stats += "<li>" + json.stats[i].stat.name + ": " + json.stats[i].base_stat + "</li>";
          }
          stats += "</ul>";
          console.log(json);
          document.getElementById("poke-name").innerHTML = name;
          document.getElementById("poke-data").innerHTML = stats;
          document.getElementById("poke-img").innerHTML = pic;
      });
});
