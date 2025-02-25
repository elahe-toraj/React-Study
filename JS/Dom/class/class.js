function changeText() {
    let elements = document.getElementsByClassName("myClass");

    console.log(elements);


    if (elements.length > 0) {
        elements[0].textContent = "متن جدید برای اولین پاراگراف"
    }

    if (elements.length > 1) {
        elements[1].style.color = "red"; 
    }
}