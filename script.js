function OS() {
    var element = document.body;
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        element.classList.add("black");
    } else {
        element.classList.remove("black");
    }
}

function dark() {
    var element = document.body;
    element.classList.add("black");
}

function light() {
    var element = document.body;
    element.classList.remove("black");
}

OS();
