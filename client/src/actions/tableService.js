import { axiosPost } from './serverHelper';

export const editLine = (event) => {
    let lineId = event.target.dataset.lineId;
    let line = document.getElementById(lineId);
    editLineById(lineId, line);
}

const saveRecord = (event) => {
    let lineId = event.target.dataset.lineId;
    updateRecord(lineId);
};

const updateRecord = async (lineId) => {
    let record = createNewRecord(lineId);
    if (validateEmail(record.Email) && validatePhone(record.Phone) && validateName(record.Name)) {
        let line = document.getElementById(lineId);
        let index = line.dataset.index;
        line.dataset.email = record.Email;
        line.dataset.phone = record.Phone;
        line.dataset.name = record.Name;
        renderRecord(line, lineId, index, record.Email, record.Phone, record.Name);
        if(line.dataset.type == "patient"){
            await axiosPost([{Email: lineId}, record], 'updatePatient');
        }
    
        if(line.dataset.type == "therapist"){
            await axiosPost([{Email: lineId}, record], 'updateUser');
        }
    }
};

const createNewRecord = (lineId) => {
    let emailInput = document.getElementById(lineId + 'email');
    let phoneInput = document.getElementById(lineId + 'phone');
    let nameInput = document.getElementById(lineId + 'name');
    let newRecord = { "Email": emailInput.value, "Phone": phoneInput.value, "Name": nameInput.value };
    return newRecord;
}

const validateEmail = (email) => {
    let isValid = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if(!isValid){
        alert(`Email "${email}" invalid, you must insert valid email`);
    }
    return isValid;
}

const validatePhone = (phone) => {
    let isValid = phone.match(/\d/g).length===10;
    if(!isValid){
        alert(`Phone "${phone}" invalid, you must insert 10 digits`);
    }
    return isValid;
}

const validateName = (name) => {
    let isValid = name.length > 1;
    if(!isValid){
        alert(`Name "${name}" invalid, you must insert name 2 or more characters `);
    }
    return isValid;
}

const deleteRecord = async (event) => {
    let lineId = event.target.dataset.lineId;
    let line = document.getElementById(lineId);
    line.innerHTML = '';
    if(line.dataset.type == "patient"){
        await axiosPost({Email: lineId}, 'deletePatient');
    }

    if(line.dataset.type == "therapist"){
        await axiosPost({Email: lineId}, 'deleteUser');
    }
};

const cencelEditRecord = (event) => {
    let lineId = event.target.dataset.lineId;
    let line = document.getElementById(lineId);
    let index = line.dataset.index;
    let email = line.dataset.email;
    let phone = line.dataset.phone;
    let name = line.dataset.name;
    renderRecord(line, lineId, index, email, phone, name);
};

const renderRecord = (line, lineId, index, email, phone, name) => {
    let recordHtml = `
        <td>${email}</td>
        <td>${phone}</td>
        <td>${name}</td>
        <td>${index}</td>
    `;
    line.innerHTML = '';
    line.innerHTML = recordHtml;

    let td = document.createElement('td');
    let buttonEditRecord = document.createElement('button');
    buttonEditRecord.classList.add('btn', 'btn-outline-success');
    buttonEditRecord.addEventListener('click', editLine);
    buttonEditRecord.dataset.lineId = lineId;
    buttonEditRecord.innerHTML =  `<i class='fas fa-sm me-3 fa-fw fa-edit' data-line-id="${lineId}"></i>`;

    td.appendChild(buttonEditRecord);
    line.appendChild(td);
}

const editLineById = (lineId, line) => {
    let allTd = `
        <td><input id=${lineId + 'email'} class="form-control" value="${line.dataset.email}"/></td>
        <td><input id=${lineId + 'phone'} class="form-control" value="${line.dataset.phone}"/></td>
        <td><input id=${lineId + 'name'} class="form-control" value="${line.dataset.name}"/></td>
        <td>${line.dataset.index}</td>
    `;
    line.innerHTML = '';
    let tdButtonContainer = getTdButtonContainer(lineId);
    line.innerHTML += allTd;
    line.appendChild(tdButtonContainer);
}

const getTdButtonContainer = (lineId) => {
    let tdButtonContainer = document.createElement('td');

    let buttonSaveRecord = document.createElement('button');
    buttonSaveRecord.classList.add('btn', 'btn-outline-primary');
    buttonSaveRecord.addEventListener('click', saveRecord);
    buttonSaveRecord.dataset.lineId = lineId;
    buttonSaveRecord.innerHTML =  `<i class='fas fa-sm me-3 fa-fw fa-upload' data-line-id="${lineId}"></i>`;

    let buttonDeleteRecord = document.createElement('button');
    buttonDeleteRecord.classList.add('btn', 'btn-outline-primary');
    buttonDeleteRecord.addEventListener('click', deleteRecord);
    buttonDeleteRecord.dataset.lineId = lineId;
    buttonDeleteRecord.innerHTML =  `<i class='fas fa-sm me-3 fa-fw fa-trash' data-line-id="${lineId}"></i>`;

    let buttonCencelEditRecord = document.createElement('button');
    buttonCencelEditRecord.classList.add('btn', 'btn-outline-primary');
    buttonCencelEditRecord.addEventListener('click', cencelEditRecord);
    buttonCencelEditRecord.dataset.lineId = lineId;
    buttonCencelEditRecord.innerHTML =  `X`;

    tdButtonContainer.appendChild(buttonSaveRecord);
    tdButtonContainer.appendChild(buttonDeleteRecord);
    tdButtonContainer.appendChild(buttonCencelEditRecord);

    return tdButtonContainer;
}