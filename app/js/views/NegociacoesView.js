var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NegociacoesView = (function (_super) {
    __extends(NegociacoesView, _super);
    function NegociacoesView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NegociacoesView.prototype.template = function (modelo) {
        return "\n            <table class=\"table table-hover table-bordered\">\n                <thead>\n                    <tr>\n                        <th>DATA</th>\n                        <th>QUANTIDADE</th>\n                        <th>VALOR</th>\n                        <th>VOLUME</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    " + modelo.paraArray().map(function (negociacao) {
            return "\n                            <tr>\n                                <td>" + negociacao.data.getDate() + "/" + (negociacao.data.getMonth() + 1) + "/" + negociacao.data.getFullYear() + "</td>\n                                <td>" + negociacao.quantidade + "</td>\n                                <td>" + negociacao.valor + "</td>\n                                <td>" + negociacao.volume + "</td>\n                            </tr>\n                        ";
        }).join('') + "\n                </tbody>\n                <tfoot>\n                </tfoot>\n            </table>\n        ";
    };
    return NegociacoesView;
}(View));