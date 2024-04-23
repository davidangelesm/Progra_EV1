function calcular(){
    const temp = document.getElementById("temp");
    let celcius = (temp - 32) * (5/9)
    alert("La temperatura calculada es: " + celcius + "°C");
}