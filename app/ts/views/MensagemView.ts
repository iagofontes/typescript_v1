class MensagemView extends View<string> {

    template(message:string){
        return `<p class="alert alert-info">${message}</p>`;
    }
}