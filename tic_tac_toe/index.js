class TicTacToe {
    constructor() {
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

    // Initialize the game
    initGame() {
        this.kubiks.forEach(kubiki => kubiki.addEventListener("click", (e) => this.handleClick(e)));
        this.restartbutton.addEventListener("click", () => this.resetGame());
        this.statustext.textContent = `${this.motamashe}-is jeria`;
        this.tamashismimdinareoba = true;
    }

    // Handle cell click
    handleClick(event) {
        const kubikis_indeqsi = event.target.getAttribute("attribute");
        if (this.options[kubikis_indeqsi] !== "" || !this.tamashismimdinareoba) {
            return;
        }
        this.updateKubiki(event.target, kubikis_indeqsi);
        this.checkWinner();
    }

    // Update board with current player's symbol
    updateKubiki(kubiki, index) {
        this.options[index] = this.motamashe;
        kubiki.textContent = this.motamashe;
    }

    // Switch player turn
    switchPlayer() {
        this.motamashe = this.motamashe === "X" ? "O" : "X";
        this.statustext.textContent = `${this.motamashe}-is jeria`;
    }

    // Check for a winner
    checkWinner() {
        let mogeba = false;
        for (let [a, b, c] of this.mogebisvariangtebi) {
            if (this.options[a] && this.options[a] === this.options[b] && this.options[a] === this.options[c]) {
                mogeba = true;
                break;
            }
        }

        if (mogeba) {
            this.statustext.textContent = `${this.motamashe}-m moigo!`;
            this.tamashismimdinareoba = false;
        } else if (!this.options.includes("")) {
            this.statustext.textContent = "nichia";
            this.tamashismimdinareoba = false;
        } else {
            this.switchPlayer();
        }
    }

    // Reset game
    resetGame() {
        this.motamashe = "X";
        this.options.fill("");
        this.statustext.textContent = `${this.motamashe}-is jeria`;
        this.kubiks.forEach(kubiki => kubiki.textContent = "");
        this.tamashismimdinareoba = true;
    }
}

// Start the game
const ticTacToe = new TicTacToe();
