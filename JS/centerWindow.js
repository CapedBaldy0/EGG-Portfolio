function reportWindowSize () {

    popup1.style.left = (window.innerWidth - popup1.clientWidth) / 2 + 'px';
    popup1.style.top = ((window.innerHeight - popup1.clientHeight) / 2) + 30 + 'px';

    popup2.style.left = (window.innerWidth - popup2.clientWidth) / 2 + 'px';
    popup2.style.top = ((window.innerHeight - popup2.clientHeight) / 2) + 30 + 'px';

    popup3.style.left = (window.innerWidth - popup3.clientWidth) / 2 + 'px';
    popup3.style.top = ((window.innerHeight - popup3.clientHeight) / 2) + 30 + 'px';

    popup4.style.left = (window.innerWidth - popup4.clientWidth) / 2 + 'px';
    popup4.style.top = ((window.innerHeight - popup4.clientHeight) / 2) + 30 + 'px';

    popup5.style.left = (window.innerWidth - popup5.clientWidth) / 2 + 'px';
    popup5.style.top = ((window.innerHeight - popup5.clientHeight) / 2) + 30 + 'px';
}

reportWindowSize();

showWindow1();

window.onresize = reportWindowSize;

function resetSelected() {
    icon1.style.mixBlendMode = 'normal';
    icon1.style.color = 'white';
    icon2.style.mixBlendMode = 'normal';
    icon2.style.color = 'white';
    icon3.style.mixBlendMode = 'normal';
    icon3.style.color = 'white';
    icon4.style.mixBlendMode = 'normal';
    icon4.style.color = 'white';
    icon5.style.mixBlendMode = 'normal';
    icon5.style.color = 'white';
}

function resetWindow() {
    popup1.style.display = 'none';
    task1.style.display = 'none';
    popup2.style.display = 'none';
    task2.style.display = 'none';
    popup3.style.display = 'none';
    task3.style.display = 'none';
    popup4.style.display = 'none';
    task4.style.display = 'none';
    popup5.style.display = 'none';
    task5.style.display = 'none';
}