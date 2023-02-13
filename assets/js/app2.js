let bouton = document.getElementById("bouton");
let affichage = document.getElementById("affichage");
let input = document.getElementById("input")

bouton.addEventListener("click", function () {
    var client = new XMLHttpRequest();
    client.onload = function () {
        if (client.status == 200) {
            var data = JSON.parse(client.responseText);
            console.log(data);

            for (var i = 0; i < data.Search.length; i++) {

                var div = document.createElement("div");
                var spanTitre = document.createElement("span");
                var img = document.createElement("img");

                var date = document.createElement("article")
                var title = document.createTextNode(data.Search[i].Title);
                var year = document.createTextNode(data.Search[i].Year);

                img.setAttribute("src", data.Search[i].Poster)
                div.appendChild(img);
                div.appendChild(spanTitre);
                div.appendChild(date);
                spanTitre.appendChild(title)
                date.appendChild(year)
                div.setAttribute("class", "card")
                img.setAttribute("class", "card-img-top")
                spanTitre.setAttribute("class", "card-text text-center")

                affichage.appendChild(div);
                affichage.setAttribute("class", "text-center")
            }
        }
    }
    
    client.open("GET", "http://www.omdbapi.com/?s=" + input.value + "&apikey=3956bb23", true);
    client.send();
});