function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  var expression = document.getElementById("display").value;
  var result;

  try {
    result = eval(expression);
  } catch (error) {
    result = "Error";
  }

  document.getElementById("display").value = result;
}

function squareRoot() {
  var number = document.getElementById("display").value;
  var result = Math.sqrt(parseFloat(number));
  document.getElementById("display").value = result;
}

function power() {
  var base = document.getElementById("display").value;
  var exponent = prompt("Enter the exponent:");
  var result = Math.pow(parseFloat(base), parseFloat(exponent));
  document.getElementById("display").value = result;
}

function decimal() {
  var number = document.getElementById("display").value;
  var result = parseFloat(number) / 100;
  document.getElementById("display").value = result;
}

function logarithm() {
  var number = document.getElementById("display").value;
  var result = Math.log10(parseFloat(number));
  document.getElementById("display").value = result;
}

function percentage() {
  var number = document.getElementById("display").value;
  var result = parseFloat(number) * 0.01;
  document.getElementById("display").value = result;
}

function naturalLogarithm() {
  var number = document.getElementById("display").value;
  var result = Math.log(parseFloat(number));
  document.getElementById("display").value = result;
}

function cubeRoot() {
  var number = document.getElementById("display").value;
  var result = Math.cbrt(parseFloat(number));
  document.getElementById("display").value = result;
}

function sine() {
  var number = document.getElementById("display").value;
  var result = Math.sin(parseFloat(number));
  document.getElementById("display").value = result;
}

function cosine() {
  var number = document.getElementById("display").value;
  var result = Math.cos(parseFloat(number));
  document.getElementById("display").value = result;
}

function tangent() {
  var number = document.getElementById("display").value;
  var result = Math.tan(parseFloat(number));
  document.getElementById("display").value = result;
}
