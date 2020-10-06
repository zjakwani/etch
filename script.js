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

// Toggle to have borders initially
document.querySelectorAll(".units").forEach(unit =>
    unit.classList.add("bordered"));

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
}
etchStatus();

// Removes all grid divs
function resetGrid() {
    let units = document.querySelectorAll(".units");
    units.forEach(unit =>
        unit.classList.remove("etched"));
}

// Create new grid with input amount of rows
function newGrid(input) {
    while (document.getElementsByClassName("units").length > 0) {
        container.removeChild(container.lastChild);
    }
    makeGrid(input);
    etchStatus();
    document.documentElement.style.setProperty("--numrows", input);
}

// Toggle eraser status and change button text
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

// Add or remove border lines
function toggleLines() {
    let units = document.querySelectorAll(".units");
    units.forEach(unit =>
        unit.classList.toggle("bordered"));
}

let tertiaries = ["#DEF3F6", "#F1E0D6", "#132226"];
let secondaries = ["#1DA2D8", "#595775", "#BE9063"];
let primaries = ["#F4DCB5", "#ABA6BF", "#525B56"];
function changeColor() {
    let x = Math.floor((Math.random() * tertiaries.length));
    document.documentElement.style.setProperty("--tertiary", tertiaries[x]);
    document.documentElement.style.setProperty("--secondary", secondaries[x]);
    document.documentElement.style.setProperty("--primary", primaries[x]);
}
changeColor();
