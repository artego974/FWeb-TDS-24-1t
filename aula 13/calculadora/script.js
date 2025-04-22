let textValue = "";
let input = document.querySelector("#text");

function update() {
    input.value = textValue;
}

function addNumber(num) {
    textValue += num;
    update();
}

function addOperator(oper) {
    if (textValue !== "" && !isNaN(textValue[textValue.length - 1])) {
        textValue += oper;
        update();
    }
}

function addDecimal(decimal) {
    const lastNumber = textValue.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
        textValue += decimal;
        update();
    }
}

function clearInput() {
    textValue = "";
    update();
}

function calculate() {
    try {
        textValue = eval(textValue).toString();
    } catch (e) {
        textValue = "Erro";
    }
    update();
}
