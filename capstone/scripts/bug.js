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
        div.setAttribute('class', 'divStyle');
      
        let flexContainer = document.createElement('div');
        let check = document.createElement('div');
        check.innerHTML += '&#10004;';
        check.setAttribute('class', 'checkbox');
        check.addEventListener('click', this.resolveBug);

        let delBtn = document.createElement('div');
        delBtn.innerHTML += '&#10006;';
        delBtn.setAttribute('class', 'delBtn');
        delBtn.addEventListener('click', this.deleteBug);
        
        flexContainer.append(check, delBtn);
        flexContainer.setAttribute('class', 'flexContainer');
        
        div.append(report, system, desc, flexContainer);
        listWrapper.appendChild(div);
    }

    deleteBug() { 
        listWrapper.removeChild(this.parentNode.parentNode);
    }

    resolveBug() {
        this.parentNode.parentNode.setAttribute('class', 'resolveBug');
    }
}

function reportBug(e) {
    const select = selectElem.options[selectElem.selectedIndex].text;
    const sub = subElem.options[subElem.selectedIndex].text;
    const bug = new Bug(reportedBy.value, select, sub, bugDesc.value); 
    bug.addBug();
}


