console.log("Objetos y estructa");

var menu = [
    "Inicio",
    "Acerca de nosotros",
    "Articulos",
    "Legales",
    "Login",
    "Política de privacidad"
];

var objetoCompuesto = {
    "label":"inicio",
    "src":"http://www.google.com"
}

console.log(objetoCompuesto);

console.log(menu);
var menuUL = document.getElementById("menuPlaceHolder")
console.log(menuUL);
for(var i = 0; i < menu.length; i++){
    var elementoMenu = menu[i];
    console.log(elementoMenu);
    var newLi = document.createElement("li");
    newLi.innerText=elementoMenu;
    console.log(newLi);
    menuUL.appendChild(newLi);
}
