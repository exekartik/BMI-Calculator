// Function to toggle between feet/inches and cm input fields
function toggleHeightInput() {
    const heightType = document.getElementById("heightType").value;
    const feetInchesInput = document.getElementById("feetInchesInput");
    const cmInput = document.getElementById("cmInput");
    
    if (heightType === "feet-inches") {
        feetInchesInput.style.display = "block";
        cmInput.style.display = "none";
    } else {
        feetInchesInput.style.display = "none";
        cmInput.style.display = "block";
    }
}

// Function to calculate BMI based on the selected height input
function calculateBMI() {
    const heightType = document.getElementById("heightType").value;
    let heightInMeters;
    
    if (heightType === "feet-inches") {
        let feet = parseFloat(document.getElementById("feet").value) || 0;
        let inches = parseFloat(document.getElementById("inches").value) || 0;
        let totalInches = (feet * 12) + inches;
        heightInMeters = totalInches * 0.0254; // Convert inches to meters
    } else {
        let cm = parseFloat(document.getElementById("cm").value) || 0;
        heightInMeters = cm / 100; // Convert cm to meters
    }
    
    let weightInKg = parseFloat(document.getElementById("weight").value) || 0;
    let bmi = weightInKg / (heightInMeters * heightInMeters);
    
    document.getElementById("bmiValue").innerText = `Your BMI is:${bmi.toFixed(2)}`; // Update BMI value

    // Show the BMI classification based on the calculated BMI
    let bmiClass = document.querySelectorAll("li");
    bmiClass.forEach((li) => {
        li.style.display = "none"; // Hide all classifications by default
    });
    
    if (bmi < 18.5) {
        bmiClass[0].style.display = "block"; // Show underweight classification
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiClass[1].style.display = "block"; // Show normal range classification
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiClass[2].style.display = "block"; // Show overweight classification
    } else if (bmi >= 30 && bmi <= 34.9) {
        bmiClass[3].style.display = "block"; // Show Class I obesity classification
    } else if (bmi >= 35 && bmi <= 39.9) {
        bmiClass[4].style.display = "block"; // Show Class II obesity classification
    } else {
        bmiClass[5].style.display = "block"; // Show Class III obesity classification
    }
}
