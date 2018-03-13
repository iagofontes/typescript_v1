var Negociacao = (function () {
    function Negociacao(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    Object.defineProperty(Negociacao.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this._quantidade * this._valor;
        },
        enumerable: true,
        configurable: true
    });
    return Negociacao;
}());
