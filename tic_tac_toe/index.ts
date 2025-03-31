class TicTacToe {
    private statustext: HTMLElement;
    private kubiks: NodeListOf<Element>;
    private restartbutton: HTMLElement;
    private mogebisvariangtebi: number[][];
    private options: string[];
    private motamashe: string;
    private tamashismimdinareoba: boolean;

    constructor() {
        this.statustext = document.querySelector(".mogebatuwageba") as HTMLElement;
        this.kubiks = document.querySelectorAll(".kubiki");
        this.restartbutton = document.querySelector(".restart") as HTMLElement;
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

    private initGame(): void {
        this.kubiks.forEach(kubiki => kubiki.addEventListener("click", (e) => this.handleClick(e)));
        this.restartbutton.addEventListener("click", () => this.resetGame());
        this.statustext.textContent = `${this.motamashe}-is jeria`;
        this.tamashismimdinareoba = true;
    }

    private handleClick(event: Event): void {
        const target = event.target as HTMLElement;
        const kubikis_indeqsi = Number(target.getAttribute("attribute"));
        if (this.options[kubikis_indeqsi] !== "" || !this.tamashismimdinareoba) {
            return;
        }
        this.updateKubiki(target, kubikis_indeqsi);
        this.checkWinner();
    }

    private updateKubiki(kubiki: HTMLElement, index: number): void {
        this.options[index] = this.motamashe;
        kubiki.textContent = this.motamashe;
    }

    private switchPlayer(): void {
        this.motamashe = this.motamashe === "X" ? "O" : "X";
        this.statustext.textContent = `${this.motamashe}-is jeria`;
    }

    private checkWinner(): void {
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

    private resetGame(): void {
        this.motamashe = "X";
        this.options.fill("");
        this.statustext.textContent = `${this.motamashe}-is jeria`;
        this.kubiks.forEach(kubiki => (kubiki.textContent = ""));
        this.tamashismimdinareoba = true;
    }
}

const ticTacToe = new TicTacToe();
