// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three systems
// whose parentID is zero.
const selectElement = document.querySelector('#system');
const subElement = document.querySelector('#subSystem');

getSystems(0, selectElement);

async function getSystems(parentID, elem) {
    const response = await fetch('data.json');
    const data = await response.json();
    const filteredArr = data.systems.filter(e => e.parentID == Number(parentID));
    populateDD(filteredArr, elem);
}

function populateDD(arr, elem) {
    removeOptions(elem);
    elem.appendChild(new Option('Select an Item', ""));
    arr.forEach(e => elem.appendChild(new Option(e.sysName, e.sysID)));
}

selectElement.addEventListener('change', (e) => {
    if (e.target.value != "") getSystems(e.target.selectedIndex, subElement);
});

document.querySelector('#resetBtn').addEventListener('click', (e) => {
   removeOptions(subElement);
});

function removeOptions(select) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}