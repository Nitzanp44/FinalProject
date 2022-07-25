export const editLine = (event) => {
    let lineId = event.target.dataset.lineId;
    let line = document.getElementById(lineId);
    editLineById(lineId, line);
}

const deleteRecord = () => {
    alert('deleteRecord');
};

const editLineById = (lineId, line) => {
    let allTd = `
            <td>${line.dataset.index}</td>
            <td><input id=${lineId + 'email'} data-line-id="${lineId}" class="form-control" value="${line.dataset.email}"/></td>
            <td><input id=${lineId + 'phone'} data-line-id="${lineId}" class="form-control" value="${line.dataset.phone}"/></td>
            <td><input id=${lineId + 'name'} data-line-id="${lineId}" class="form-control" value="${line.dataset.name}"/></td>
            <td>
                <button class="btn btn-outline-primary" data-line-id="${lineId}" onClick="saveRecord()">
                    <i class="glyphicon glyphicon-upload" style="font-size:15px;" data-line-id="${lineId}"></i>
                </button>
                <button class="btn btn-outline-danger" data-line-id="${lineId}" onClick="deleteRecord()">
                    <i class="glyphicon glyphicon-trash" style="font-size:15px;" data-line-id="${lineId}"></i>
                </button>
                <button class="btn btn-outline-warning" data-line-id="${lineId}" onClick="cencelEditRecord()">X</button>
            </td>
    `;
    line.innerHTML = allTd;
}