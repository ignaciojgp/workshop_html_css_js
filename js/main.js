function onClickMenu(idDiv) {
    console.log(idDiv);
    var realDivID;
    switch (idDiv) {
        case "divContenido1":
            realDivID = "div1";
            break
        case "divContenido2":
            realDivID = "div2";
            break
        case "divContenido3":
            realDivID = "div3";
            break
        default:
            console.log("parametro idDiv erroneo");
    }

    console.log("el div a mostrar es: " + realDivID);
    var miDiv = document.getElementById(realDivID);
    console.log(miDiv);
    miDiv.style.display = "block";
}