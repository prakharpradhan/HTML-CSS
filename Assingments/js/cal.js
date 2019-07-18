function oprt(operation) {
    var number1 = Number(document.cal.fNo.value);
    var number2 = Number(document.cal.sNo.value);
    switch (operation) {
        case 'add':
            addFun(number1, number2);
            break;
        case 'sub':
            subFun(number1, number2);
            break;
        case 'mul':
            mulFun(number1, number2);
            break;
        case 'divide':
            divideFun(number1, number2);
            break;
    }
}
function addFun(num1, num2) {

    document.cal.rslt.value = num1 + num2;
}
function subFun(num1, num2) {

    document.cal.rslt.value = num1 - num2;

} function mulFun(num1, num2) {

    document.cal.rslt.value= num1 * num2;

} function divideFun(num1, num2) {

    document.cal.rslt.value = num1 / num2;

}


function buttoncheck() {

    if (document.getElementById('t1').value.length > 0 && document.getElementById('t2').value.length > 0) {
        document.getElementById("add").disabled = false;
        document.getElementById("mul").disabled = false;
        document.getElementById("sub").disabled = false;
        document.getElementById("divide").disabled = false;

    }
    else {
        document.getElementById("add").disabled = true;
        document.getElementById("mul").disabled = true;
        document.getElementById("sub").disabled = true;
        document.getElementById("divide").disabled = true;
        document.getElementById("t3").value = "";

    }
}