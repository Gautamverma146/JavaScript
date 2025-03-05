let number = Number(process.argv[2]);

 if( number ===1) { console.log("sunday")}
else if( number === 2) {console.log("moday")}
else if ( number === 3) {console.log("tuesday")}
else if (number ===4) { console.log("wednessday")}
else if (number === 5) console.log("thursday");
else if (number === 6) console.log("friday");
else if (number === 7) console.log("saturday");
else{
    console.log("Provide valid no. between 1-7");
}