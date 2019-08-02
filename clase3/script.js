let a = document.body.children[0];
let f = document.createDocumentFragment();
let flag = false;

a.addEventListener("click", e => {
    e.preventDefault();

    if (!flag) {
        let aceptar = document.createElement("button");
        aceptar.innerText = "Aceptar";
        f.appendChild(aceptar);
        aceptar.onclick = () => location = a.href;

        let cancelar = document.createElement("button");
        cancelar.innerText = "Cancelar";
        f.appendChild(cancelar);
        cancelar.onclick = () => {
            document.body.removeChild(div);
            flag = false;
        }

        let p = document.createElement("p");
        p.innerText = "Esta seguro que quiere abandonar la página";
        f.appendChild(p);

        let div = document.createElement("div");
        div.appendChild(f);
        document.body.appendChild(div);
    }

    flag = true;
})