let links = document.getElementsByClassName("links");
let main = document.getElementsByTagName("main")[0];

const ajaxMain = e => {
    e.preventDefault();
    fetch(e.target.href).then(response => response.text()).then(response => main.innerHTML = response);
}

[...links].forEach(link => link.onclick = ajaxMain);

