function changeRGB() {
    var red, green, blue;
    red = document.getElementById('slideRed').value;
    green = document.getElementById('slideGreen').value;
    blue = document.getElementById('slideBlue').value;
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    var elements = document.getElementsByClassName('css-output');

    // Update text content and style of rgbresulttext element
    document.getElementById('rgbresulttext').innerHTML = "rgb(" + red + ", " + green + ", " + blue + ")";

    // Calculate luminance of background color
    var luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

    // Set text color based on luminance
    var textColor = luminance > 0.5 ? "black" : "white";
    document.getElementById('rgbresulttext').style.color = textColor;

    // Set individual color values for display
    document.getElementById('valRed2').innerHTML = red;
    document.getElementById('valGreen2').innerHTML = green;
    document.getElementById('valBlue2').innerHTML = blue;

    // Loop through each element and set backgroundColor
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
}