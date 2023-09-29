document.getElementById("convertBtn").addEventListener("click",
 function () {
    const lengthInMeters = parseFloat(document.getElementById("length").value);
    const selectedUnit = document.getElementById("unit").value;

    let convertedLength;
    if (selectedUnit === "cm") {
        convertedLength = lengthInMeters * 100;
    } else if (selectedUnit === "km") {
        convertedLength = lengthInMeters / 1000;
    } else if (selectedUnit === "mm") {
        convertedLength = lengthInMeters * 1000;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted Length: ${convertedLength.toFixed(2)} ${selectedUnit}`;
});