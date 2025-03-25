import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
import { Modal } from 'bootstrap'

XLSX.set_fs(fs);

window.dataLoadVerifOpen = function(){
  moduleOpen('./src/html/dataLoadVerification.html')
    .then( () => {

    });
}
