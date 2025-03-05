const args = process.argv.slice(2).map(Number);
const year = parseInt(args[0]);
function isLeapYear(year){
    if( year >= 1000 && year<= 9999 ){
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
            console.log("The year"+ year+ " is Leap year");
        }
        else{
            console.log("The year" + year+ " is not Leap year");
        }
        
    }
    else{
        console.log("Please provide valid year");
    }
}
//Check if input is valid
if (!isNaN(year)) {
    isLeapYear(year);
} else {
    console.log("Invalid input! Please enter a valid year.");
}

console.log("Script finished executing.");