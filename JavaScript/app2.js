function city() {
    const city = prompt("Enter City Name");
    document.getElementById("city").innerHTML = city;
    // console.log(city);
    if (city === toLowerCase(karachi)) {
        console.log("WelCome Karaci")
    } else {
        console.log("corect city")
    }
};