const selectElem = document.querySelector('#system');
const subElem = document.querySelector('#subSystem');
const reportedBy = document.querySelector('#reportedBy');
const bugDesc = document.querySelector('#bugDesc');
const listWrapper = document.querySelector('#listWrapper');

class Bug {
    static counter = 0;

    constructor(reportedBy, system, subSystem, bugDesc) {
        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc;
        this.bugID = ++this.constructor.counter;
    }

    addBug() {

        let div = document.createElement('div');
        let report = document.createElement('p');
        report.textContent = 'Reported by: ' + this.reportedBy;
        let system = document.createElement('p');
        system.textContent = 'System: ' + this.system + ' / ' + this.subSystem;
        let desc = document.createElement('p');
        desc.textContent = this.bugDesc;
        div.style.backgroundImage = 'none';
        div.style.backgroundColor = 'lightgrey';
        div.style.height = '200px';
        div.style.overflowWrap = 'break-word';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';

        let flexContainer = document.createElement('div');
        let check = document.createElement('div');
        check.innerHTML += '&#10004;';
        check.style.width = '20px';
        check.style.backgroundColor = 'red';
        check.style.borderRadius = '25px';
        check.style.textAlign = 'center';
        check.addEventListener('click', this.resolveBug);
        let delBtn = document.createElement('div');
        delBtn.innerHTML += '&#10006;';
        delBtn.style.width = '20px';
        delBtn.style.backgroundColor = 'red';
        delBtn.style.borderRadius = '25px';
        delBtn.style.textAlign = 'center';
        delBtn.addEventListener('click', this.deleteBug);
        flexContainer.append(check, delBtn);

        flexContainer.style.justifySelf = 'baseline';
        flexContainer.style.display = 'flex';
        flexContainer.style.justifyContent = 'flex-end';
        
        div.append(report, system, desc, flexContainer);
        listWrapper.appendChild(div);
        listWrapper.style.border = '2px solid white';
    }

    deleteBug() { 
        listWrapper.removeChild(this.parentNode.parentNode);
    }

    resolveBug() {
        this.parentNode.parentNode.style.color = 'white';
        this.parentNode.parentNode.style.backgroundImage = 'url(images/wallpaper.jpg)';
    }
}

function reportBug(e) {
    const select = selectElem.options[selectElem.selectedIndex].text;
    const sub = subElem.options[subElem.selectedIndex].text;
    const bug = new Bug(reportedBy.value, select, sub, bugDesc.value); 
    bug.addBug();
}


