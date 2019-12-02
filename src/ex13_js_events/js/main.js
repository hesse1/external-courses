let backLogList = document.querySelector('.backlog__list')
let button = document.querySelector('.button');
let tasks = document.querySelector('.tasks__list');
let items = document.querySelectorAll('.tasks__item');
let lists = document.querySelectorAll('.backlog__list')

button.addEventListener('click', createInput)

// Создаем input 
function createInput() {
  let input = document.createElement('input')
  input.className = "task__input"
  backLogList.after(input)

  //Вешаем событие на инпут при потере фокуса
  input.addEventListener('focusout', function (e) {
    let value = e.target.value.trim();
    if (value === '') {
      tasks.querySelector('.task__input').remove()
    } else {
      createItem(value)
    }
  })
}

//Создаем таск со значением из инпута
function createItem(value) {
  let item = document.createElement('li')
  item.className = 'backlog__item';
  item.innerText = value;
  backLogList.appendChild(item);
  tasks.querySelector('.task__input').remove()
  createIssue(value);
}

//Создаем новый issue нового таска
function createIssue(value) {
  let data = localStorage.getItem('data');
  let dataMock = JSON.parse(data);
  let dataMockStr;
  const issue = {
    id: Math.random(),
    name: value
  }
  dataMock[0].issues.push(issue);
  dataMockStr = JSON.stringify(dataMock);
  localStorage.setItem('data', dataMockStr);
}

//Создаем таск, если он если в localStorage 
function checkElement() {
  let locStor = localStorage.getItem('data');
  let parseLocStor = JSON.parse(locStor);
  for (let i = 0; i < parseLocStor.length; i++) {
    if (parseLocStor[i].issues.length !== 0) {
      var item = parseLocStor[i].issues;
      createTask(item, i)
      // buttonsUnlocked(i)
    }
  }
}

function createTask(items, index) {
  for (let i = 0; i < items.length; i++) {
    for (key in items[i]) {
      if (key === 'name') {
        let item = document.createElement('li')
        item.className = 'backlog__item';
        item.innerText = items[i][key];
        lists[index].appendChild(item)
      }
    }
  }
}

// Проверям lS на наличие данных 
function checkEmpty() {
  let storage = localStorage.getItem('data');
  let lsStorageObj = JSON.parse(storage)
  if (!storage) {
    let emptyData = [{
        title: 'Backlog',
        issues: []
      },
      {
        title: 'Ready',
        issues: []
      },
      {
        title: 'In Progress',
        issues: []
      },
      {
        title: 'Finished',
        issues: []
      }
    ]
    localStorage.setItem('data', JSON.stringify(emptyData))
  }
}
checkEmpty();
checkElement();