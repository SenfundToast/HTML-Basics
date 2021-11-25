document.addEventListener(
    'Content',
    function() {
        var a = 'Hallo Welt!';
    }
);


document.querySelector('#container').addEventListener('click', markField);
var current = 0,
    players = ['x', 'o'],
    finished;

function markField(e) {
    var field = e.target;
    field.setAttribute('aria-label', players[current]);
    field.setAttribute('disabled', 'disabled');
    current = 1 - current;
    document.querySelector('#up').innerText = 'Spieler ' + players[current] + ' ist am Zug.';
}

function checkIfCompleted() {
    var fields = document.querySelectorAll('#container button'),
        full = true;

    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].hasAttribute('disabled')) {
            full = false;
        }
    }

    if (full) {}
}



// Gewinner ermitteln
for (i = 0; i < 3; i++) {

    // 3 senkrecht
    if (fields[0 + i].getAttribute('aria-label') != "" &&
        fields[0 + i].getAttribute('aria-label') == fields[3 + i].getAttribute('aria-label') &&
        fields[3 + i].getAttribute('aria-label') == fields[6 + i].getAttribute('aria-label')
    ) {

        winner = fields[0 + i].getAttribute('aria-label');
    }

    // 3 waagrecht
    if (fields[i * 3].getAttribute('aria-label') != "" &&
        fields[i * 3].getAttribute('aria-label') == fields[i * 3 + 1].getAttribute('aria-label') &&
        fields[i * 3 + 1].getAttribute('aria-label') == fields[i * 3 + 2].getAttribute('aria-label')
    ) {

        winner = fields[i * 3].getAttribute('aria-label');
    }
}

// diagonal links oben nach rechts unten
if (fields[0].getAttribute('aria-label') != "" &&
    fields[0].getAttribute('aria-label') == fields[4].getAttribute('aria-label') &&
    fields[4].getAttribute('aria-label') == fields[8].getAttribute('aria-label')
) {
    winner = fields[0].getAttribute('aria-label');
}

// diagonal rechts oben nach links unten
if (fields[2].getAttribute('aria-label') != "" &&
    fields[2].getAttribute('aria-label') == fields[4].getAttribute('aria-label') &&
    fields[4].getAttribute('aria-label') == fields[6].getAttribute('aria-label')
) {
    winner = fields[2].getAttribute('aria-label');
}