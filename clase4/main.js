let links = document.getElementsByClassName("links");
let main = document.getElementsByTagName("main")[0];

const ajaxMain = e => {
    e.preventDefault();

    let xhr = new XMLHttpRequest;
    xhr.open("get", `${e.target.href}`);
    xhr.addEventListener("load", () => xhr.status == 200 && (main.innerHTML = xhr.response));
    xhr.send();
}

[...links].forEach(link => { link.onclick = ajaxMain; });