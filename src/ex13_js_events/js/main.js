let backLogList = document.querySelector('.backlog__list')
let button = document.querySelector('.button');
let tasksItem = document.querySelector('.tasks__list');
let items = document.querySelectorAll('.tasks__item');
let backlogs = document.querySelectorAll('.backlog__list')

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
      tasksItem.querySelector('.task__input').remove()
    } else {
      createNewItem(value)
    }
  })
}

//Создаем таск со значением из инпута
function createNewItem(value) {
  let item = document.createElement('li')
  item.className = 'backlog__item';
  item.innerText = value;
  backLogList.appendChild(item);
  tasksItem.querySelector('.task__input').remove()
  createNewIssues(value);
}

//Создаем новый issue нового таска
function createNewIssues(value) {
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
function checkElementsInLocalStor() {
  let locStor = localStorage.getItem('data');
  let parseLocStor = JSON.parse(locStor);
  for (let i = 0; i < parseLocStor.length; i++) {
    if (parseLocStor[i].issues.length !== 0) {
      var item = parseLocStor[i].issues;
      createTaskInCard(item, i)
      buttonsUnlocked(i)
    }
  }
}

function createTaskInCard(items, index) {
  for (let i = 0; i < items.length; i++) {
    for (key in items[i]) {
      if (key === 'name') {
        let item = document.createElement('li')
        item.className = 'backlog__item';
        item.innerText = items[i][key];
        backlogs[index].appendChild(item)
      }
    }
  }
}

// Проверям lS на наличие данных 
function checkLocalStorageofNull() {
  let lStorage = localStorage.getItem('data');
  let lsStorageObj = JSON.parse(lStorage)
  if (lStorage === null) {
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
checkLocalStorageofNull();
checkElementsInLocalStor();