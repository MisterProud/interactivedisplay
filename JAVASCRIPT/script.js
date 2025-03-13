document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();


  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const unit = document.querySelector('input[name="unit"]:checked').value;


  let bmi;
  if (unit === 'metric') {
    bmi = (weight / ((height / 100) ** 2)).toFixed(2); // Metric: kg and cm
  } else {
    bmi = ((weight / (height ** 2)) * 703).toFixed(2); // Imperial: lbs and inches
  }

  document.getElementById('bmiValue').textContent = bmi;

 
  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  document.getElementById('bmiCategory').textContent = `Category: ${category}`;
});