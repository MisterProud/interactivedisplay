function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let weightUnit = document.getElementById("weightUnit").value;
    let heightUnit = document.getElementById("heightUnit").value;

    if (weightUnit === "lbs") {
        weight *= 0.453592;
    }
    if (heightUnit === "in") {
        height *= 2.54;
    }

    height /= 100;
    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal Weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").innerHTML = `BMI: ${bmi.toFixed(2)} - ${category}`;
}
