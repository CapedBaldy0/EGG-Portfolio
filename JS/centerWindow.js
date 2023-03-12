var popup = document.querySelector(".win98popup");

popup.style.left = (window.innerWidth - popup.clientWidth) / 2 + 'px';
popup.style.top = (window.innerHeight - popup.clientHeight) / 2 + 'px';

function reportWindowSize () {

    popup.style.left = (window.innerWidth - popup.clientWidth) / 2 + 'px';
    popup.style.top = (window.innerHeight - popup.clientHeight) / 2 + 'px';
}

window.onresize = reportWindowSize;

popup.querySelector('button').onclick = closeWin;

function closeWin(){
    popup.style.display = 'none';
}

function showAboutMe(){
    var about = document.getElementById('aboutMe');

    about.style.display = 'flex';
}