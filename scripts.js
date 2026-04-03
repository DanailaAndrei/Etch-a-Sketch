const mainDiv = document.querySelector(".mainDiv");
const btn = document.querySelector("button");

function createGrid(l) {
    for (let i = 1; i <= l * l; i++){
        const childDiv = document.createElement("div");
        childDiv.classList = "childDiv";
        childDiv.style.height = `${90/l}vh`;
        childDiv.style.width = `${90/l}vh`;
        childDiv.addEventListener("mouseover", () => {childDiv.style.backgroundColor = "gray";});
        mainDiv.appendChild(childDiv);
    }
}

createGrid(16);

btn.addEventListener("click", () =>{
    const nr = Number(window.prompt("Choose the number of squares per side", ""));

    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }

    createGrid(nr);
});