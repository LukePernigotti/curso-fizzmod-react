let a = document.body.children[0];
let f = document.createDocumentFragment();
let flag = false;

a.addEventListener("click", e => {
    e.preventDefault();

    if (!flag) {
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
    }

    flag = true;
})

document.body.addEventListener("click", e => {
    if (e.target.id == "aceptar") {
        location = a.href;
    } else if (e.target.id == "cancelar") {
        document.body.removeChild(cancelar.parentNode);
        flag = false;
    }
})