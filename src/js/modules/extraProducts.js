import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
import { Modal } from 'bootstrap'

XLSX.set_fs(fs);
const MAX_POSITION_CODE_ROWS = 9
let rowCounter = 1;

window.extraProdsOpen = function(){
  moduleOpen('./src/html/extraProducts.html')
    .then( () => {

    });
}

window.extraProdsDownload = (e) => {
  e.preventDefault();
  const format = e.target.querySelector('[name="format"]:checked').value;
  console.log(format)
  var result = document.getElementById("extraProdsResult");
  var workbook = XLSX.utils.table_to_book(result);
  XLSX.writeFile(workbook, `Report.${format}`)
}

window.extraProdsFilter = (e) => {
  e.preventDefault();
  console.log(e.target)
}

window.extraProdsUpdate = (e) => {
  e.preventDefault();
  console.log(e.target)
  Modal.getInstance('#extraProdsUpdateModal').hide()
}

window.addPositionCodeField = () => {
    if(rowCounter > MAX_POSITION_CODE_ROWS) {
        return;
    }

    const container = document.getElementById('positionCodesContainer');
    const newRow = document.createElement('tr');
    newRow.className = 'position-code-group';
    newRow.innerHTML = `
        <td>
            <input class="form-control" list="positionCodeDatalist" name="positionCode[]" placeholder="Код позиции">
        </td>
        <td class="align-middle">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="mainProduct" value="${rowCounter}">
                <label class="form-check-label">Основной</label>
            </div>
        </td>
        <td class="align-middle">
            <button type="button" class="btn btn-sm btn-danger me-1" onclick="this.closest('tr').remove()">×</button>
        </td>
    `;
    container.appendChild(newRow);
    rowCounter++;
}