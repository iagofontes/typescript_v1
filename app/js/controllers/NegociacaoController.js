var NegociacaoController = (function () {
    function NegociacaoController() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    NegociacaoController.prototype.adiciona = function (event) {
        event.preventDefault();
        var neg = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        console.log(neg);
    };
    return NegociacaoController;
}());
