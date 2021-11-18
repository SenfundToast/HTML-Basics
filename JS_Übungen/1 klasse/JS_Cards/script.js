var people = [(
    "firstname": "Böle",
    "lastname": "Klöle",
    "height": 176,
    "img": "hettps://fjsdfhawef"
), (
    "firstname": "Nidle",
    "lastname": "Blyad",
    "height": 159,
    "img": "hettps://fjsdfhawef"
)];

var html = "";

for (i = 0; i < people.length; i++)(
    html += "< div class = 'card'>"; html += "< div class = 'main' > < ul > < li > " + people[i].firstname + " < /li><li>" + pec html += "<div class='image'>image</div>"; html += "<div class='sideinfo'>" + people[i].height + "<div>"; html += "</div>";
)
document.getElementById("container").innerHTML = html;