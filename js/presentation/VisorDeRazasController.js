import { GetRacesListUseCase } from "../domain/GetRacesListUseCase.js"
import { RemoteDataSource } from "../data/RemoteDataSource.js"

class VisorDeRazasController {

    constructor() {
        // esto pasa en 2o paso
        this.items = [];
        var remoteDT = new RemoteDataSource();
        this.getRacesListUseCase = new GetRacesListUseCase(remoteDT)
        this.ulElement = document.getElementById("ulRacesList");
    }

    init(){
        // esto es el cuarto paso
        console.log("hola VisorDeRazasController")
        this.getRacesListUseCase.execute((newItems)=>{
            // esto se va a equecutar hasta que la carga del api termine
            this.items = newItems
            console.log("this.list = "+this.items)    
        })
        console.log("this.list = "+this.items)
       
    }

    renderList() {
        // este sería el quinto paso
        console.log(this.ulElement);
        console.log(this.items);

        // esta está usando notación de flecha
        this.items.forEach((elementoDeItems)=>{
            // esta está usando notación de flecha
            this.createLi(elementoDeItems)
        });

        // esta es otra forma de escribirlo
        // this.items.forEach(function(){});
    }

    createLi(content) {
        // esto se llama  de forma iterativa como el sexto paso
        console.log(content)
        var currentLi = document.createElement("li");
        currentLi.innerText = content;
        console.log(currentLi)
        this.ulElement.appendChild(currentLi)
    }

}


var controller = new VisorDeRazasController()
controller.init()
