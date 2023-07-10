function table() {
    const html = parseInt(prompt("Enter HTML Number", 0));
    const css = parseInt(prompt("Enter CSS Number", 0));
    const javaScript = parseInt(prompt("Enter JavaScript Number", 0));
    const react = parseInt(prompt("Enter REACT Number", 0));
    // console.log(html, css, javaScript, react);
    document.getElementById("html-marks").innerHTML = html;
    document.getElementById("css-marks").innerHTML = css;
    document.getElementById("javaScript-marks").innerHTML = javaScript;
    document.getElementById("react-marks").innerHTML = react;
    
    document.getElementById("html-percentage").innerHTML = html + "%";
    document.getElementById("css-percentage").innerHTML = css + "%";
    document.getElementById("javascript-percentage").innerHTML = javaScript + "%";
    document.getElementById("react-percentage").innerHTML = react + "%";
    
    if (html >= 100 || css >= 100 || javaScript >= 100 || react >= 100) {
        alert("Please Correct Value");
    }   else {
        let totalNumber = html + css + javaScript + react;
        document.getElementById("obtained-marks").innerHTML = totalNumber;
        let percentage = totalNumber / 400 * 100;
        let randomNumber = Math.floor(percentage);
        // console.log(randomNumber + "%");
        document.getElementById("percentage").innerHTML = randomNumber + "%";
    };   
};