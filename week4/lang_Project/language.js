const lang = 'JavaScript';

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.querySelector('#submit').addEventListener('click', () => {
    const combinedArr = [...document.querySelectorAll(input)].map(input => input.value);
    chkLang(combinedArr);
});


function chkLang(langs) {
    let result = langs.some(x => x.toLowerCase() == lang.toLowerCase());
    
    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}