var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.statustext = document.querySelector(".mogebatuwageba");
        this.kubiks = document.querySelectorAll(".kubiki");
        this.restartbutton = document.querySelector(".restart");
        this.mogebisvariangtebi = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        this.options = Array(9).fill("");
        this.motamashe = "X";
        this.tamashismimdinareoba = false;
        this.initGame();
    }
    TicTacToe.prototype.initGame = function () {
        var _this = this;
        this.kubiks.forEach(function (kubiki) { return kubiki.addEventListener("click", function (e) { return _this.handleClick(e); }); });
        this.restartbutton.addEventListener("click", function () { return _this.resetGame(); });
        this.statustext.textContent = "".concat(this.motamashe, "-is jeria");
        this.tamashismimdinareoba = true;
    };
    TicTacToe.prototype.handleClick = function (event) {
        var target = event.target;
        var kubikis_indeqsi = Number(target.getAttribute("attribute"));
        if (this.options[kubikis_indeqsi] !== "" || !this.tamashismimdinareoba) {
            return;
        }
        this.updateKubiki(target, kubikis_indeqsi);
        this.checkWinner();
    };
    TicTacToe.prototype.updateKubiki = function (kubiki, index) {
        this.options[index] = this.motamashe;
        kubiki.textContent = this.motamashe;
    };
    TicTacToe.prototype.switchPlayer = function () {
        this.motamashe = this.motamashe === "X" ? "O" : "X";
        this.statustext.textContent = "".concat(this.motamashe, "-is jeria");
    };
    TicTacToe.prototype.checkWinner = function () {
        var mogeba = false;
        for (var _i = 0, _a = this.mogebisvariangtebi; _i < _a.length; _i++) {
            var _b = _a[_i], a = _b[0], b = _b[1], c = _b[2];
            if (this.options[a] && this.options[a] === this.options[b] && this.options[a] === this.options[c]) {
                mogeba = true;
                break;
            }
        }
        if (mogeba) {
            this.statustext.textContent = "".concat(this.motamashe, "-m moigo!");
            this.tamashismimdinareoba = false;
        }
        else if (!this.options.includes("")) {
            this.statustext.textContent = "nichia";
            this.tamashismimdinareoba = false;
        }
        else {
            this.switchPlayer();
        }
    };
    TicTacToe.prototype.resetGame = function () {
        this.motamashe = "X";
        this.options.fill("");
        this.statustext.textContent = "".concat(this.motamashe, "-is jeria");
        this.kubiks.forEach(function (kubiki) { return (kubiki.textContent = ""); });
        this.tamashismimdinareoba = true;
    };
    return TicTacToe;
}());
var ticTacToe = new TicTacToe();
