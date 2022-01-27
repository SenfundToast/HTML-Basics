//Wenn das Ergebnis größer ist als 0 dann schreib in das Ergebnisfeld "Positiv", wenn das Ergebnis kleiner 0 ist schreibe in das Ergebnisfelf "Negativ. Bei 0 -"Null""
//Wenn das Ergebnis 4 ist, dann gib aus: 1,2,3,4
//Wenn das Ergebnis -2 ist dann gib aus 0, -1, -2
//größe in cm 1.43 / Gewicht in kg -3.4
document.getElementById("button").addEventListener("click", function() {
    generate();
})

function generate() {
    let size = document.getElementById("Größe").value;
    let weight = document.getElementById("Gewicht").value;
    let result = (size / weight) - 3.4;
    console.log(result)
    printvalues(result)

}


function printvalues(result) {

    if (result > 0) {
        let j = "";
        for (let i = 0; i < result; i++) {
            j += i + "<br>";

            console.log(i)
        }
        document.getElementById("Ausgabewehrt").innerHTML = "Positiv" + " " +
            j + " (" + result + ") ";
    } else if (result < 0) {
        let j = "";
        for (i = 0; i > result; i--) {
            j += i - 1 + "<br>";
            document.getElementById("Ausgabewehrt").innerHTML = "Negativ" + " " +
                "0 " + j + " (" + result + ") ";
            console.log(i)
        }
    } else {
        document.getElementById("Ausgabewehrt").innerHTML = "NULL" + " " + 0;
    }




}