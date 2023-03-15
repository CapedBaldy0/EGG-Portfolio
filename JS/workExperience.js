var nameId3 = 'workExperience';

var popup3 = document.getElementById(nameId3);

popup3.querySelector('button').onclick = closeWindow2;

var icon3 =  document.getElementById(nameId3 + 'Icon');
var task3 = document.getElementById(nameId3 + 'Task');

icon3.onclick = selectDiselectIcon2;
icon3.ondblclick = showWindow2;

function selectDiselectIcon2(){
    if (icon3.style.mixBlendMode != 'multiply') {
        resetSelected();
        icon3.style.mixBlendMode = 'multiply';
        icon3.style.color = 'black';
    }
    else {
        resetSelected();
        icon3.style.mixBlendMode = 'normal';
        icon3.style.color = 'white';
    }
}

function closeWindow2() {
    popup3.style.display = 'none';
    task3.style.display = 'none';
}

function showWindow2() {
    resetWindow();
    popup3.style.display = 'flex';
    task3.style.display = 'flex';
    reportWindowSize();
}

// Make the DIV element draggable:
dragElement3(popup3);

function dragElement3(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector(".bar") != null) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector(".bar").onmousedown = dragMouseDown3;
    }

    function dragMouseDown3(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement3;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag3;
    }

    function elementDrag3(e) {

        //putPaintOnTop();

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement3() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// function putPaintOnTop() {
//     document.getElementById("confirm").style.zIndex = "1";
//     document.getElementById("w3").style.zIndex = "1";
//     document.getElementById("w2").style.zIndex = "1";
//     document.getElementById("paint").style.zIndex = "2";
// }