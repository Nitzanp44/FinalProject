export const editLine = (event) => {
    let lineId = event.target.dataset.lineId;
    let line = document.getElementById(lineId);
    editLineById(lineId, line);
}

const saveRecord = () => {
    alert('saveRecord');
};

const deleteRecord = () => {
    alert('deleteRecord');
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
        <td>${index}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${name}</td>
        <td><button data-line-id=${email} class="btn btn-outline-success" onClick={editLine}>עריכה</button></td>
    `;
    line.innerHTML = '';
    line.innerHTML = recordHtml;

    let td = document.createElement('td');
    let buttonEditRecord = document.createElement('button');
    buttonEditRecord.classList.add('btn', 'btn-outline-success');
    buttonEditRecord.addEventListener('click', editLine);
    buttonEditRecord.innerHTML =  `<i class='fas fa-sm me-3 fa-fw fa-edit' data-line-id="${lineId}"></i>`;

    td.appendChild(buttonEditRecord);
    line.appendChild(td);
}

const editLineById = (lineId, line) => {
    let allTd = `
        <td><input id=${lineId + 'email'} data-line-id="${lineId}" class="form-control" value="${line.dataset.email}"/></td>
        <td><input id=${lineId + 'phone'} data-line-id="${lineId}" class="form-control" value="${line.dataset.phone}"/></td>
        <td><input id=${lineId + 'name'} data-line-id="${lineId}" class="form-control" value="${line.dataset.name}"/></td>
        <td>${line.dataset.index}</td>
    `;
    line.innerHTML = '';
    let tdButtonContainer = getTdButtonContainer(lineId);
    line.appendChild(tdButtonContainer);
    line.innerHTML += allTd;
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