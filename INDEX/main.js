function test() {
    var x = document.getElementById("test");
    if (x.className.includes("bg-primary")) {
        x.className = x.className.replace("bg-primary", " bg-secondary ");
    }
    else {
        x.className = x.className.replace("bg-secondary", " bg-primary ");
    }
}