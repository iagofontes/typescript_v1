var NegociacaoController = (function () {
    function NegociacaoController() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    NegociacaoController.prototype.adiciona = function (event) {
        event.preventDefault();
        var neg = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), 
        // new Date(this._inputData.value), 
        parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(neg);
    };
    return NegociacaoController;
}());
