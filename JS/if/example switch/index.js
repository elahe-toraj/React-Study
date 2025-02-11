let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "monday";
        break;
    case 2:
        dayName = "tuesday";
        break;
    case 3:
        dayName = "tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "invalid day"
}
alert("today is " + dayName)