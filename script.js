const knapp = document.getElementById ("fakta-knapp")
const fakta = document.getElementById ("fakta-text")

const faktaLista   = [
    "Högdalens centrum invigdes 1957",
    "Artisten Joakim Thåström är uppväxt i Högdalen",
    "I Högdalen bor det ungefär 11 000 personer"
];

let nummer = 0;

knapp.addEventListener ("click",  function () {
    fakta.textContent = faktaLista [nummer];
    fakta.style.display = "block" ;
    fakta.style.backgroundColor = "lightblue" ;

    nummer++;

    if (nummer >= faktaLista.length) {
        nummer = 0;
    }

});