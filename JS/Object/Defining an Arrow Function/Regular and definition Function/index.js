//regular 
function regularfunction() {
    alert(this);
}
const obj = { method: regularfunction};
obj.method();

//arrow
const ArrowFuction = () => {
    alert(this);
    const arrowObj = {method: ArrowFuction};
    arrowObj.method();
}