var et = document.getElementById("entry")
et.addEventListener("click", displayDetails)

var row = 1;

function displayDetails() {
    var name = document.getElementById("input").value;
    if(name == "")
    {
        window.alert("Please fill the task first");
        return;
    }
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell = newRow.insertCell(0);
    cell.innerHTML = name;
    row++;
}