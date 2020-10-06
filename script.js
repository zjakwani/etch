const container = document.querySelector("#container");

// Creates grid
function makeGrid(rows) {
    for (let i = 0; i < rows * rows; i++) {
        const unit = document.createElement("div");
        unit.className = "units";
        container.appendChild(unit);
    }
}
makeGrid(20);

// Adds or removes units' etched status on mouseenter event
let eraser = false;
function etchStatus() {
    let units = document.querySelectorAll(".units");
    if (eraser == true) {
        units.forEach(unit =>
        unit.addEventListener("mouseenter", () => unit.classList.remove("etched"))
        );
    }
    else {
        units.forEach(unit =>
            unit.addEventListener("mouseenter", () => unit.classList.add("etched"))
        );
    }
    units.forEach(unit =>
        unit.classList.add("bordered"));
}
etchStatus();

// Removes all grid divs
function resetGrid() {
    let units = document.querySelectorAll(".units");
    units.forEach(unit =>
        unit.classList.remove("etched"));
}

// Creates new grid with input amount of rows
function newGrid(input) {
    while (document.getElementsByClassName("units").length > 0) {
        container.removeChild(container.lastChild);
    }
    makeGrid(input);
    etchStatus();
    document.documentElement.style.setProperty("--numrows", input);
}

// Toggles eraser status and change button text
function toggleEraser() {
    let erasebutton = document.querySelector("#erasebutton");
    if (eraser == false) {
        eraser = true;
        erasebutton.innerHTML = "Draw";
    }
    else {
        eraser = false;
        erasebutton.innerHTML = "Eraser";
    }
    etchStatus();
}

// Adds or remove border lines
function toggleLines() {
    let units = document.querySelectorAll(".units");
    units.forEach(unit =>
        unit.classList.toggle("bordered"));
}

// Picks one of my chosen color themes
let tertiaries = ["#DEF3F6", "#F1E0D6", "#132226", "#270101", "#A79C83", "#52591F", "#585A56", "#777CA8", "#55D9C0", "#182657", "#9499A6", "#582A20", "#8C7547"];
let secondaries = ["#1DA2D8", "#595775", "#BE9063", "#D8D583", "#C1403D", "#A3765D", "#B9C406", "#EE6C81", "#02231C", "#BD3E85", "#F1DED1", "#F1DED1", "#EFA747"];
let primaries = ["#F4DCB5", "#ABA6BF", "#525B56", "#720017", "#03353E", "#F4D993", "#F4F3F4", "#AFBADC", "#E7F5DE", "#D59B2D", "#383140", "#BE7052", "#DAC6AC"];
function changeColor() {
    let x = Math.floor((Math.random() * tertiaries.length));
    document.documentElement.style.setProperty("--tertiary", tertiaries[x]);
    document.documentElement.style.setProperty("--secondary", secondaries[x]);
    document.documentElement.style.setProperty("--primary", primaries[x]);
}
changeColor();