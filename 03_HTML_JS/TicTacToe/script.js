document.addEventListener(
    'Content',
    function() {
        var a = 'Hallo Welt!';
    }
);


document.querySelector('#container').addEventListener('click', markField);
var current = 0,
    players = ['x', 'o'];

function markField(e) {
    var field = e.target;
    field.setAttribute('aria-label', players[current]);
    field.setAttribute('disabled', 'disabled');
    current = 1 - current;
}