const input = document.querySelector('.input')
const items = document.querySelectorAll('.list__item')
const wrap = document.querySelector('.list')
const wrapper = document.querySelector('.content')
const list = document.querySelector('.list-person')
const listPerson = document.querySelector('.list-person')

let dataMock = [{
    id: 1,
    name: 'Jocab Polowski',
  },
  {
    id: 2,
    name: 'Mark Hammock',
  },
  {
    id: 3,
    name: 'Richcl Cross',
  },
  {
    id: 4,
    name: "Flinn's Shack",
  },
  {
    id: 5,
    name: 'Filip Justic',
  },
  {
    id: 6,
    name: 'Summer Evans',
  },
  {
    id: 7,
    name: 'Marco S.Diaz',
  },
  {
    id: 8,
    name: 'Ricky Stwerat',
  }
]
// Создание лишек
function createList(data) {
  listPerson.innerHTML = "";
  for(let i = 0; i < data.length; i++) {
    const item = document.createElement('li');
    item.className = "list-person__item";
    item.innerText = data[i].name
    listPerson.appendChild(item)
  }
}
createList(dataMock)

input.oninput = debounce(function(){
  let value = input.value;
  let newData = dataMock.filter(function(i){
       return i.name.includes(value);
     })
  createList(newData)
  console.log('1');
  
}, 1000)

function debounce(func, time) {
  return function () {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= time)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(function(){
      func();
    }, time);
  }
}
