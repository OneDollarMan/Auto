import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
import { Modal } from 'bootstrap'

XLSX.set_fs(fs);
const MAX_POSITION_CODE_ROWS = 9
let rowCounter = 1;

window.similarProdsOpen = function(){
  moduleOpen('./src/html/similarProducts.html')
    .then( () => {

    });
}

window.similarProdsDownload = (e) => {
  e.preventDefault();
  const format = e.target.querySelector('[name="format"]:checked').value;
  console.log(format)
  var result = document.getElementById("similarProdsResult");
  var workbook = XLSX.utils.table_to_book(result);
  XLSX.writeFile(workbook, `Report.${format}`)
}

window.similarProdsFilter = (e) => {
  e.preventDefault();
  console.log(e.target)
}

window.similarProdsUpdate = (e) => {
  e.preventDefault();
  console.log(e.target)
  Modal.getInstance('#similarProdsModal').hide()
}

window.addSimilarPositionCodeField = () => {
  if(rowCounter > MAX_POSITION_CODE_ROWS) {
      return;
  }

  const container = document.getElementById('similarPositionCodesContainer');
  const newRow = document.createElement('tr');
  newRow.className = 'position-code-group';
  newRow.innerHTML = `
      <td>
          <input class="form-control" list="positionCodeDatalist" name="similarPositionCode[]" placeholder="Код позиции аналога">
      </td>
      <td class="align-middle">
          <button type="button" class="btn btn-sm btn-danger me-1" onclick="this.closest('tr').remove()">×</button>
      </td>
  `;
  container.appendChild(newRow);
  rowCounter++;
}