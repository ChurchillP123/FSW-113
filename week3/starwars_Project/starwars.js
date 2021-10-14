// declare any necessary variables
let queryType;
let itemID;
// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

queryType = document.querySelector('#queryType');
queryType.addEventListener('change', (e) => {
    if (e.target.value == 'starships'){
        itemID = document.querySelector('#itemID');
        itemID.value = '2';
        itemID.addEventListener('input', (e) => {
            if(e.target.value == '4') {
                alert('There is no 4th Starship in the database.');
            }
        });
    }
});

function fetchData() {
    queryType = document.querySelector('#queryType').value;
    itemID = document.querySelector('#itemID').value;
    getFromSWAPI();
}

function getFromSWAPI() {
    // assign values to any necessary variable
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function updateInfo(data) {
    const keys = Object.keys(data);
    document.querySelector('#dataLabel1').innerText = keys[0];
    document.querySelector('#dataValue1').innerText = data[keys[0]];
    document.querySelector('#dataLabel2').innerText = keys[1];
    document.querySelector('#dataValue2').innerText = data[keys[1]];
}