const container = document.querySelector(".container");
const gridSize = document.getElementById("quantity");
const resetBtn = document.querySelector(".reset");
const maxBoxes = 256;

makeRows = () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
        const boxIndex = i * 16 + j;
            if (boxIndex < maxBoxes) {
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
            }
        }
    }
};

addRows = () => {
    container.innerHTML = "";
    container.style.setProperty("grid-template-columns",`repeat(${gridSize.value}, 1fr)`);
    container.style.setProperty("grid-template-rows",`repeat(${gridSize.value}, 1fr)`);
    for (let i = 0; i < gridSize.value * gridSize.value; i++) {
        const div = document.createElement("div")
        div.classList.add("box");
        container.appendChild(div);
    }
    console.log(gridSize.value);
};

function handleMouseOver(event) {
    event.target.classList.replace("box", "color");
}
const divs = document.querySelectorAll("div");
divs.forEach(div => {
div.addEventListener("mouseover", handleMouseOver);
});

gridSize.addEventListener("change", addRows);

resetBtn.addEventListener("click", function() {
    container.innerHTML = "";
    gridSize.value = "";
    container.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    makeRows();
});

makeRows();