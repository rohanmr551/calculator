function a() {
    let expression = document.getElementById("in1").value;
    let result = eval(expression);
    document.getElementById("Result").innerHTML = result
}