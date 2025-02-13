function Title() {
    return "React College";
}
document .addEventListener("DOMContentLoaded" , () => {
    const titleElement = document.createElement('h1');
    titleElement.innerText = Title();
    document.querySelector("#root").appendChild(titleElement);
});