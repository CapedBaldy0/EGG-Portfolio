var nameId2 = 'skills';

var popup2 = document.getElementById(nameId2);

popup2.querySelector('button').onclick = closeWindow2;

var icon2 =  document.getElementById(nameId2 + 'Icon');
var task2 = document.getElementById(nameId2 + 'Task');

icon2.onclick = selectDiselectIcon2;
icon2.ondblclick = showWindow2;

function selectDiselectIcon2(){
    if (icon2.style.mixBlendMode != 'multiply') {
        resetSelected();
        icon2.style.mixBlendMode = 'multiply';
        icon2.style.color = 'black';
    }
    else {
        resetSelected();
        icon2.style.mixBlendMode = 'normal';
        icon2.style.color = 'white';
    }
}

function closeWindow2() {
    popup2.style.display = 'none';
    task2.style.display = 'none';
}

function showWindow2() {
    resetWindow();
    popup2.style.display = 'flex';
    task2.style.display = 'flex';
    reportWindowSize();
}

// Make the DIV element draggable:
dragElement2(popup2);

function dragElement2(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector(".bar") != null) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector(".bar").onmousedown = dragMouseDown2;
    }

    function dragMouseDown2(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement2;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag2;
    }

    function elementDrag2(e) {

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

    function closeDragElement2() {
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