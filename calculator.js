function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        display.value = result;

        // Добавление результата в историю
        addToHistory(display.value);
    } catch (error) {
        display.value = "Ошибка";
    }
}

function addToHistory(result) {
    const historyDiv = document.getElementById("history");
    const historyItem = document.createElement("div");
    historyItem.textContent = result; // Добавляем текст результата
    historyDiv.appendChild(historyItem); // Добавляем элемент в блок истории
}
