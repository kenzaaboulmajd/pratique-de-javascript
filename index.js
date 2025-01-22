document.getElementById("calc-btn").addEventListener("click", function () {
    let firstInput = document.getElementById("first-input").value
    let secondInput = document.getElementById("second-input").value
    let result = divide(Number(firstInput), Number(secondInput))
    if (result != "unknow") {
        document.getElementById("result").innerHTML = result
    }

})

function divide(num1, num2) {
    if (num2                                                                                                                                                                                                                 =                                                                                                                                       = 0) {
        alert("You can't divide by zero")
        return "unknown"
    }
    return num1 / num2

}
