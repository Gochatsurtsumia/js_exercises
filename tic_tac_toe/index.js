const statustext = document.querySelector(".mogebatuwageba");
const kubiks = document.querySelectorAll(".kubiki");
const restartbutton = document.querySelector(".restart");

const mogebisvariangtebi = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
z
let options = ["", "", "", "", "", "", "", "", ""];
let motamashe = "X";
let tamashismimdinareoba = false;

tamashischartva();

function tamashischartva() {
    kubiks.forEach(kubiki => kubiki.addEventListener("click", daklikebakubikze));
    restartbutton.addEventListener("click", darestarteba);
    statustext.textContent = `${motamashe}-is jeria`;
    tamashismimdinareoba = true;
}

function daklikebakubikze() {
    const kubikis_indeqsi = this.getAttribute("attribute");
    if (options[kubikis_indeqsi] !== "" || !tamashismimdinareoba) {
        return;
    }
    kubikisupdate(this, kubikis_indeqsi);
    mogebisshemowmeba();
}

function kubikisupdate(kubiki, index) {
    options[index] = motamashe;
    kubiki.textContent = motamashe;
}

function shecvla() {
    motamashe = motamashe === "X" ? "O" : "X"; // Fixed switching logic
    statustext.textContent = `${motamashe}-is jeria`;
}

function darestarteba() {
    motamashe = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statustext.textContent = `${motamashe}-is jeria`;
    kubiks.forEach(kubiki => kubiki.textContent = "");
    tamashismimdinareoba = true;
}

function mogebisshemowmeba() {
    let mogeba = false;
    for (let i = 0; i < mogebisvariangtebi.length; i++) {
        const [a, b, c] = mogebisvariangtebi[i];
            if (options[a] && options[a] === options[b] && options[a] === options[c]) {
            mogeba = true;
            break;
        }
    }

    if (mogeba) {
        statustext.textContent = `${motamashe}-m moigo`;
        tamashismimdinareoba = false;
    } else if (!options.includes("")) {
        statustext.textContent = "nichia";
        tamashismimdinareoba = false;
    } else {
        shecvla();
    }
}
