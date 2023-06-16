// syntax 
// fetch(url,option)
    // .then()
    // .catch()
    // .finally 

const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&include=days%2Chours&key=XMFG54QG8JRUPD9BHM6YC5EAS&contentType=json"

const options = {
    "methods" : "GET",
    "headers" : {}
}

fetch(url,options)
    .then( (response) => {
        console.log(response.json())
        console.log("Api Fetching DOne! ")
    })
    .catch((err) => {
        console.log(err)
    })
    .finally ( () => {
        console.log("Finally DOne! ")
    } )