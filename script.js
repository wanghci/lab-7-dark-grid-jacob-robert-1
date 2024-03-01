function handleEvent(event) {
    var element = document.body;
    element.classList.toggle("dark");   
}

document.getElementById("default").addEventListener(handleEvent);