const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 80;
app.use(cors());
var fs = require("fs");
var sitename = "weather-app https://github.com/TeoRam23/weather-app";

const headerOptions = {
    method: 'GET',
    headers: {
        'User-Agent': sitename
    }
}

var data = "{type: 'Feature',geometry: { type: 'Point', coordinates: [ 6, 7, 155 ] },properties: {meta: { updated_at: '2024-04-10T11:31:13Z', units: [Object] },timeseries: [[Object], [Object], [Object], [Object], [Object], [Object],[Object], [Object], [Object], [Object], [Object], [Object],[Object], [Object], [Object], [Object], [Object], [Object],[Object], [Object], [Object], [Object], [Object], [Object],[Object], [Object], [Object]]}}"




app.get('/test', async function (req, res){
    
    try {
        const response = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=7&lon=6', headerOptions);
        const data = await response.json();
        console.log(data)

        fs.writeFile("savedWeather.json", JSON.stringify(data), (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        })

        res.json({svar: data})
    } catch (error) {
          console.error('Å nei, noe skjedde', error);
      };
})





app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
  ); 