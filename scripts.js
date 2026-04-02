const mainDiv = document.querySelector(".mainDiv");

for (let i = 1; i <= 16 * 16; i++){
    const childDiv = document.createElement("div");
    childDiv.classList = "childDiv";
    childDiv.addEventListener("mouseover", () => {childDiv.setAttribute("style", "background: gray;")});
    mainDiv.appendChild(childDiv);
}