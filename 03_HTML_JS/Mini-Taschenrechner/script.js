function buttonClicked() {


    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);

    console.log(result)

    document.getElementById("#calc output"),
        overwrite = true;


}

function clear() {
    out.textContent = 0;
    overwrite = true;
}