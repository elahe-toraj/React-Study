function createPasswordChecker() {
    let failedAttempts = 0;
    let accountBlocked = false;
    
    function checkPassword(password) {
    if (accountBlocked) {
        return "your account has been blocked!";
    }
    if (!password) {
        return "password cannot be empty"
    }
    if (password ==="QueraCollegeFront" || password === "CollegeFront" || password === "QueraCollege") {
        return "Welcome";
    }
    if (password === "QueraCollegeGolang"){
        accountBlocked = true;
        return "your account has been blocked!";
    }
    failedAttempts++;

    if (failedAttempts >= 3) {
        accountBlocked = true;
        return "your accont has been blocked!"
    }
    return checkPassword;
}
function testPasswordChecker() {
    let checkPassword = createPasswordChecker();
    console.log(checkPassword("QueraCollegeFront")); // Welcome
    console.log(checkPassword("incorrectPassword")); // "Your password => incorrectPassword is wrong!"
    console.log(checkPassword("QueraCollegeGolang")); // "Your account has been blocked!" 
    console.log(checkPassword("wrong1"));
    console.log(checkPassword("wrong2"));
    console.log(checkPassword("wrong3")); // "Your account has been blocked!" 
    console.log(checkPassword()); // "Password cannot be empty" 
}
testPasswordChecker();

module.exports = createPasswordChecker();