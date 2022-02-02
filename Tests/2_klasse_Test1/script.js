document.getElementById("button").addEventListener("click", function() {
    generate();
})

function giveResult() {
    let number = document.getElementById("textfield").value;

    let rounded = Math.round(number);
    console.log(rounded);
}