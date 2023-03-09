export class GetRacesListUseCase {

    constructor(dataSource){
        this.dataSource = dataSource
    }

    execute(callBackFn) {
        return this.dataSource.getRacesList(callBackFn);
    }    
}