var info = [
  { id: 1, name: `ali`, family: `mohamadi` },
  { id: 2, name: `amir`, family: `baktash` },
  { id: 3, name: `hosein`, family: `meshkat` },
  { id: 4, name: `zahra`, family: `bahrami` },
  { id: 5, name: `fatemeh`, family: `mohsemi` },

  { id: 6, name: `masoomeh`, family: `babaei` },
  { id: 7, name: `pooya`, family: `alavi` },
  { id: 8, name: `morteza`, family: `qomi` },
  { id: 9, name: `farzaneh`, family: `abdolkarimi` },
  { id: 10, name: `parvaneh`, family: `abdoahi` },

  { id: 11, name: `yavar`, family: `farahmand` },
  { id: 12, name: `kaveh`, family: `seiede` },
  { id: 13, name: `mahdi`, family: `qasemi` },
  { id: 14, name: `gholam`, family: `salari` },
  { id: 15, name: `abas`, family: `saeidi` },

  { id: 16, name: `akbar`, family: `sadi` },
  { id: 17, name: `asqar`, family: `hafez` },
  { id: 18, name: `mansoor`, family: `ferdosi` },
  { id: 19, name: `amin`, family: `nezami` },
  { id: 20, name: `sohrab`, family: `mohamadi` },

  { id: 21, name: `jafar`, family: `rostami` },
  { id: 22, name: `ziba`, family: `rezaei` },
  { id: 23, name: `zara`, family: `abasi` },
];
var nameList = document.querySelector(`.nameList`);
var pageNumbers = document.querySelector(`.pageNumbers`);
var rowes = 5;
var pageNumberCount = Math.floor(info.length / rowes) + 1;

// make page numbers
for (i = 0; i < pageNumberCount; i++) {
  var pageNumber = document.createElement(`span`);
  pageNumber.innerHTML = i + 1;
  pageNumber.className = `pageNumberElement w-10 h-10 bg-blue-400 flex justify-center items-center rounded`;
  pageNumbers.append(pageNumber);
  pageNumber.addEventListener(`click`, () => {});
}

// page numbers working onLoad & making rowes
window.addEventListener(`load`, () => {
  var pageNumberElement = document.querySelector(`.pageNumberElement`);
  var writeArray = info.slice(
    rowes * pageNumberElement.innerHTML - rowes,
    rowes * pageNumberElement.innerHTML
  );
  nameList.innerHTML = ``;
  writeArray.forEach((item) => {
    var row = document.createElement(`div`);
    row.innerHTML =
      `<span class="w-1/3 flex justify-center items-center">${item.id}</span>` +
      `<span class="w-1/3 flex justify-center items-center">${item.name}</span>` +
      `<span class="w-1/3 flex justify-center items-center">${item.family}</span>`;
    row.className = `row border-b border-blue-400 w-full py-2 flex justify-around items-center`;
    nameList.append(row);
  });
});

// page numbers working onClick & making rowes
var pageNumberElement = document.querySelectorAll(`.pageNumberElement`);
pageNumberElement.forEach((item) => {
  item.addEventListener(`click`, () => {
    var writeArray = info.slice(
      rowes * item.innerHTML - rowes,
      rowes * item.innerHTML
    );
    nameList.innerHTML = ``;
    writeArray.forEach((item) => {
      var row = document.createElement(`div`);
      row.innerHTML =
        `<div class="w-1/3 flex justify-center items-center">${item.id}</div>` +
        `<div class="w-1/3 flex justify-center items-center">${item.name}</div>` +
        `<div class="w-1/3 flex justify-center items-center">${item.family}</div>`;
      row.className = `row border-b border-blue-400 w-full py-2 flex justify-around items-center`;
      nameList.append(row);
    });
  });
});
