let a = document.body.children[0];
let f = document.createDocumentFragment();

a.addEventListener("click", e => {
    e.preventDefault();

    let aceptar = document.createElement("button");
    aceptar.innerText = "Aceptar";
    aceptar.id = "aceptar";
    f.appendChild(aceptar);

    let cancelar = document.createElement("button");
    cancelar.innerText = "Cancelar";
    cancelar.id = "cancelar";
    f.appendChild(cancelar);

    let p = document.createElement("p");
    p.innerText = "Esta seguro que quiere abandonar la página";
    f.appendChild(p);

    let div = document.createElement("div");
    div.appendChild(f);
    document.body.appendChild(div);
})

document.body.addEventListener("click", e => {
    if (e.target.id == "aceptar") {
        location = "https://google.com";
    } else if (e.target.id == "cancelar") {
        document.body.removeChild(cancelar.parentNode);
    }
})