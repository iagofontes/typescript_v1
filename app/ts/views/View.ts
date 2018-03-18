abstract class View<T> {
    
    protected _elemento: Element;

    constructor(id:string){
        this._elemento = document.querySelector(id);
    }

    update(message:T): void{
        this._elemento.innerHTML = this.template(message);
    }

    abstract template(message:T):string;
}