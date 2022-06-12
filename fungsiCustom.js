// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let err = false;
  let data = [];
  
  //Membaca file ke 1
  fs.readFile(file1, {encoding : 'utf8'}, (error, datafile) => {
    if(error){
      err = console.log("Terjadi error pada data 1" + error);
    }

    let ArrayOfObject = JSON.parse(datafile);
    data.push(ArrayOfObject.message.split(" ")[1])
  });

  //Membaca file ke 2
  fs.readFile(file2, {encoding : 'utf8'}, (error, datafile) => {
    if(error){
      err = console.log("Terjadi error pada data 2" + error);
    }

    let ArrayOfObject = JSON.parse(datafile);
    data.push(ArrayOfObject[0].message.split(" ")[1])

  });

  //Membaca file ke 3
  fs.readFile(file3, {encoding : 'utf8'}, (error, datafile) => {
    if(err){
      err = console.log("Terjadi error pada data 3" + error);
      fnCallback(err, data);
    }

    let ArrayOfObject = JSON.parse(datafile);
    data.push(ArrayOfObject[0].data.message.split(" ")[1])
    fnCallback(err, data);
  });
};




// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
