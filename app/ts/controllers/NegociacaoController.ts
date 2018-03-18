class NegociacaoController {

    private _inputData:HTMLInputElement;
    private _inputQuantidade:HTMLInputElement;
    private _inputValor:HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacaoView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event:Event) {
        event.preventDefault();
        var neg = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')), 
            // new Date(this._inputData.value), 
            parseInt(this._inputQuantidade.value), 
            parseFloat(this._inputValor.value)
        );
        this._negociacoes.adiciona(neg);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação atualizada com sucesso.');
        // console.log(neg);
    }

}