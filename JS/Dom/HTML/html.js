let texts = document.getElementsByClassName("text");
console.log(texts);

Array.from(texts).forEach(text => {

    text.style.color = "red";
    
});