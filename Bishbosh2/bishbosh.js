

let execButton = document.getElementById("execButton");

execButton.onclick = function() {
    
    let inputLoopNumber = document.querySelector("#loopNumber");
    let inputFirstDivider = document.querySelector("#firstDivider");
    let inputSecondDivider = document.querySelector("#secondDivider");

    let loopNumber = parseInt(inputLoopNumber.value);
    let firstDivider = parseInt(inputFirstDivider.value);
    let secondDivider = parseInt(inputSecondDivider.value);
    
    let outputArea = document.getElementById("outputArea");

    outputArea.innerHTML = `<b>Resultat:</b><br>`;
    outputArea.innerHTML += `Iterera loop mellan 1 och ${loopNumber} <br/>`;

    for (let i = 1; i <= loopNumber; i++)
    {
        if (i % firstDivider === 0 && i % secondDivider === 0)
            outputArea.innerHTML += `Bish-Bosh <br />`;
        else if (i % firstDivider === 0)
            outputArea.innerHTML += `Bish <br />`;
        else if (i % secondDivider === 0)
            outputArea.innerHTML += `Bosh <br />`;
        else
            outputArea.innerHTML += i + `<br />`;
    }

};