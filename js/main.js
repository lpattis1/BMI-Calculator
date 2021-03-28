let convertBtn = document.querySelector(".btn-convert");
let resetBtn = document.querySelector(".btn-convert");

function calc() {
    const weight = document.querySelector(".weight").value;
    const height = document.querySelector(".height").value;
    const conversion = ((weight) / Math.pow(height, 2)) * 703;
    console.log(conversion);
    event.preventDefault();
    const result = document.querySelector(".result").value = conversion.toFixed(1);

    
    let underweight = "underweight";
    let healthy = "healthy";
    let overweight = "overweight";
    let obese = "obese";


    if(result < 18.5){
        document.querySelector(".result").style.color = "purple";
        document.querySelector(".bmi-value").style.color = "purple";
        document.querySelector(".bmi-value").style.fontWeight = "600";
        document.querySelector(".bmi-value").innerHTML = `${result}`;
        document.querySelector(".bmi-range").style.fontWeight = "600";
        document.querySelector(".bmi-range").innerHTML = `${underweight}`;

    } else if(result >= 18.5 && result < 24.9) {
        document.querySelector(".result").style.color = "green";
        document.querySelector(".bmi-value").style.color = "green";
        document.querySelector(".bmi-value").style.fontWeight = "600";
        document.querySelector(".bmi-value").innerHTML = `${result}`;
        document.querySelector(".bmi-range").style.fontWeight = "600";
        document.querySelector(".bmi-range").innerHTML = `${healthy}`;

    } else if(result >= 25 && result < 29.9) {
        document.querySelector(".result").style.color = "#f5cc15";
        document.querySelector(".bmi-value").style.color = "#f5cc15";
        document.querySelector(".bmi-value").style.fontWeight = "600";
        document.querySelector(".bmi-value").innerHTML = `${result}`;
        document.querySelector(".bmi-range").style.fontWeight = "600";
        document.querySelector(".bmi-range").innerHTML = `${overweight}`;
    } else if(result >= 30){
        document.querySelector(".result").style.color = "red";
        document.querySelector(".bmi-value").style.color = "red";
        document.querySelector(".bmi-value").style.fontWeight = "600";
        document.querySelector(".bmi-value").innerHTML = `${result}`;
        document.querySelector(".bmi-range").style.fontWeight = "600";
        document.querySelector(".bmi-range").innerHTML = `${obese}`;
    }

    console.log(conversion);

}

convertBtn.addEventListener("click", calc, function(event){
    event.preventDefault();
})



