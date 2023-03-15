var nameId5 = 'contactMe';

var popup5 = document.getElementById(nameId5);

popup5.querySelector('button').onclick = closeWindow5;

var icon5 =  document.getElementById(nameId5 + 'Icon');
var task5 = document.getElementById(nameId5 + 'Task');

icon5.onclick = selectDiselectIcon5;
icon5.ondblclick = showWindow5;

function selectDiselectIcon5(){
    if (icon5.style.mixBlendMode != 'multiply') {
        resetSelected();
        icon5.style.mixBlendMode = 'multiply';
        icon5.style.color = 'black';
    }
    else {
        resetSelected();
        icon5.style.mixBlendMode = 'normal';
        icon5.style.color = 'white';
    }
}

function closeWindow5() {
    popup5.style.display = 'none';
    task5.style.display = 'none';
}

function showWindow5() {
    resetWindow();
    popup5.style.display = 'flex';
    task5.style.display = 'flex';
    reportWindowSize();
}

// Make the DIV element draggable:
dragElement5(popup5);

function dragElement5(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector(".bar") != null) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector(".bar").onmousedown = dragMouseDown5;
    }

    function dragMouseDown5(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement5;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag5;
    }

    function elementDrag5(e) {

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

    function closeDragElement5() {
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