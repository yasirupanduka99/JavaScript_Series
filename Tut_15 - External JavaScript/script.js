var startTime = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shapeAppear() {
    /*
        When variable declare inside of function then that variables can't be access outside in the function.
        Also when variable declare outside then functions can access inside the function and anywhere.
    */
    var top = Math.random() * 550;
    var left = Math.random() * 550;
    var widthAndHeight = Math.random() * 150;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0%";
    }

    document.getElementById("shape").style.width = widthAndHeight + "px";
    document.getElementById("shape").style.height = widthAndHeight + "px";

    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    startTime = new Date().getTime();
}

function shapeApearDelay() {
    setTimeout(shapeAppear, Math.random() * 1000);
}

shapeApearDelay();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";

    var endTime = new Date().getTime();

    var ExcutionTime = (endTime - startTime) / 1000; // devide 1000 cuz we want time in seconds. thats why we devide milisecond value from 1000 to get time in seconds.
    document.getElementById("time").innerHTML = ExcutionTime + " Seconds";

    shapeApearDelay();
}