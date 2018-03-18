var View = (function () {
    function View(id) {
        this._elemento = document.querySelector(id);
    }
    View.prototype.update = function (message) {
        this._elemento.innerHTML = this.template(message);
    };
    return View;
}());
