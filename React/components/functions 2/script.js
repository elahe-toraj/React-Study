function Title() {
    return `<h1 class="text-red" onclick="alert('welcome to my page!')">React College</h1>`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#root").innerHTML = Title();
});
