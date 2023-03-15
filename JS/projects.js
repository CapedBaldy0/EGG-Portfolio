var nameId4 = 'projects';

var popup4 = document.getElementById(nameId4);

popup4.querySelector('button').onclick = closeWindow4;

var icon4 =  document.getElementById(nameId4 + 'Icon');
var task4 = document.getElementById(nameId4 + 'Task');

icon4.onclick = selectDiselectIcon4;
icon4.ondblclick = showWindow4;

function selectDiselectIcon4(){
    if (icon4.style.mixBlendMode != 'multiply') {
        resetSelected();
        icon4.style.mixBlendMode = 'multiply';
        icon4.style.color = 'black';
    }
    else {
        resetSelected();
        icon4.style.mixBlendMode = 'normal';
        icon4.style.color = 'white';
    }
}

function closeWindow4() {
    popup4.style.display = 'none';
    task4.style.display = 'none';
}

function showWindow4() {
    resetWindow();
    popup4.style.display = 'flex';
    task4.style.display = 'flex';
    reportWindowSize();
}

// Make the DIV element draggable:
dragElement4(popup4);

function dragElement4(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector(".bar") != null) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector(".bar").onmousedown = dragMouseDown4;
    }

    function dragMouseDown4(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement4;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag4;
    }

    function elementDrag4(e) {

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

    function closeDragElement4() {
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