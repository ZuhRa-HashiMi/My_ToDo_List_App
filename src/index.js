const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementsByClassName('btn')[0];

addTaskBtn.addEventListener('click', () => {
  let taskList = [];
  if (inputVal.value.trim() != 0) {
    const localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem('localItem', JSON.stringify(taskList));
  }

  showItem();
});

function showItem() {
  const localItems = JSON.parse(localStorage.getItem('localItem'));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = '';
  const itemShow = document.querySelector('.todoLists');
  taskList.forEach((data, index) => {
    html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})">x</button>
   </div>
   `;
  });
  itemShow.innerHTML = html;
}
showItem();

function deleteItem(index) {
  // eslint-disable-next-line prefer-const
  let localItems = JSON.parse(localStorage.getItem('localItem'));
  taskList.splice(index, 1);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  showItem();
}

function clearTask() {
  localStorage.clear();
  showItem();
}