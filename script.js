const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        const expression = display.value;
        const result = eval(expression);

        const li = document.createElement("li");
        li.textContent = `${expression} = ${result}`;

        li.addEventListener("click" , () => {
            display.value=expression;
        });
        historyList.prepend(li);

        display.value = result;

    } catch {

        display.value = "Error";

    }

}

document.addEventListener("keydown", (e) => {
  const allowed = "0123456789+-*/.";

  if (allowed.includes(e.key)) {
    appendValue(e.key);
  }

  if (e.key === "Enter") {
    calculate();
  }

  if (e.key === "Backspace") {
    deleteLast();
  }

  if (e.key === "Escape") {
    clearDisplay();
  }
});
