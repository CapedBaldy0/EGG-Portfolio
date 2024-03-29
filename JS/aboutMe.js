var nameId1 = 'aboutMe';

var popup1 = document.getElementById(nameId1);

popup1.querySelector('button').onclick = closeWindow1;

var icon1 =  document.getElementById(nameId1 + 'Icon');
var task1 = document.getElementById(nameId1 + 'Task');

icon1.onclick = selectDiselectIcon1;
icon1.ondblclick = showWindow1;

function selectDiselectIcon1(){
    if (icon1.style.mixBlendMode != 'multiply') {
        resetSelected();
        icon1.style.mixBlendMode = 'multiply';
        icon1.style.color = 'black';
    }
    else {
        resetSelected();
        icon1.style.mixBlendMode = 'normal';
        icon1.style.color = 'white';
    }
}

function closeWindow1() {
    popup1.style.display = 'none';
    task1.style.display = 'none';
}

function showWindow1() {
    resetWindow();
    popup1.style.display = 'flex';
    task1.style.display = 'flex';
    reportWindowSize();
}

// Make the DIV element draggable:
dragElement1(popup1);

function dragElement1(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector(".bar") != null) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector(".bar").onmousedown = dragMouseDown1;
    }

    function dragMouseDown1(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement1;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag1;
    }

    function elementDrag1(e) {

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

    function closeDragElement1() {
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