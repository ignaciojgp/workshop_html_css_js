export class RemoteDataSource {

    constructor(){
        this.httpClient = new XMLHttpRequest();
    }

    getRacesList(callBackFn) {
        callBackFn(["raza1","raza2"])
    }
}