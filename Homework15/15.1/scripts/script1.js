var chessTableBody = document.getElementById('table-body');
var tableCreateButton = document.getElementById('create-button');
var x = document.getElementById('x');
var y = document.getElementById('y');
var buttonStateChange = function () {
    tableCreateButton.disabled = y.value == 0 || x.value == 0;
}
var colorToggle = function () {
    tdList = document.getElementsByTagName('TD');
    for (var i in tdList) {
        tdList[i].classList.toggle('black-cell');
    }
}


x.addEventListener('keyup', buttonStateChange, false);
y.addEventListener('keyup', buttonStateChange, false);
chessTableBody.addEventListener('click', colorToggle, false);

tableCreateButton.onclick = function () {
    if (x.value > 0 && x.value <= 10 && y.value > 0 && y.value <= 10) {
        chessTableBody.innerHTML = null;
        var tableRow;
        for (var w = 0; w < y.value; w++) {
            tableRow = document.createElement('tr');
            for (var h = 0; h < x.value; h++) {
                tableRow.append(document.createElement('td'));
                if (h % 2 == 0 && w % 2 == 0 || h % 2 == 1 && w % 2 == 1) {
                    tableRow.lastElementChild.classList.add('black-cell');
                }
            }
            chessTableBody.append(tableRow);
        }
    } else {
        alert('An error occurred!\rIncorrect value is entered. (0 to 10 expected)');
    }
}