const fs = require('fs');

const myHeaders = new Headers();
myHeaders.append("Content-Type" , "application/json");

const body = JSON.stringify({
    "limit" : 10 ,
    "offset" : 0 ,
});

const requestOptions = {
    method : "POST" , 
    headers : myHeaders , body
};

fetch("https://api.weekday.technology/adhoc/getSampleJdJSON" , requestOptions)
    .then((response) => response.text())
    .then((result) => fs.writeFile('apiResult.json' , result , (err) => {
        if(err) {
            console.log("failed to write file");
        } else {
            console.log("succeeded to write file");
        }
    }))
    .then((error) => console.error(error)); 


