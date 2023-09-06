const object = JSON.parse(localStorage.getItem('object')) || [];

const inputElem = document.querySelector('.inputBox-js');
const outputElem = document.querySelector('.output');
const dateElem = document.querySelector('.dueDate-js');
const delElem = document.querySelector('.deleteOutput');
const checkElem = document.querySelector('.checkbox-js');



outputElem.innerHTML = '';
updateOutputHTML();

function buttonTrigger() {
  const name = inputElem.value;
  const date = dateElem.value;
  inputElem.value = '';
  dateElem.value = '';
  object.push({ name: name, date: date, completed: false }); // Add a completed property
  console.log(object);
  updateOutputHTML();
  localStorage.setItem('object', JSON.stringify(object));
}

function deleteOutput(index) {
  object.splice(index, 1);
  updateOutputHTML();
  localStorage.setItem('object', JSON.stringify(object));
}

function toggleCompleted(index) {
  object[index].completed = !object[index].completed;
  updateOutputHTML();
  localStorage.setItem('object', JSON.stringify(object));
}

function updateOutputHTML() {
  outputElem.innerHTML = '';
  object.forEach(function (value, i) {
      const name = value.name;
      const date = value.date;
      const completed = value.completed;
      const checkedAttribute = completed ? 'checked' : ''; // Check the completed state
      outputElem.innerHTML += `
          <p class="check">
              <input class="form-check-input checkbox-js" type="checkbox" id="flexCheckDefault${i}" ${checkedAttribute} onclick="toggleCompleted(${i})">
          </p>
          <p class="todoText1">${name}</p>
          <p class="todoText">${date}</p>
          <p><button class="btn btn-danger deleteOutput" onclick="deleteOutput(${i})"> Delete </button></p>
      `;
  });
  localStorage.setItem('object', JSON.stringify(object));
}


/*
function updateOutputHTML() {
  outputElem.innerHTML = '';
  for (let i = 0; i < object.length; i++) {
    const name = object[i].name;
    const date = object[i].date;
    outputElem.innerHTML += `
      <p class="todoText1">${name}</p> <p class="todoText">${date}</p>
        <p><button class="btn btn-danger deleteOutput" onclick="deleteOutput(${i}); localStorage.setItem('object', JSON.stringify(object))"> Delete </button></p>
      `;
  }
  localStorage.setItem('object', JSON.stringify(object))
}
*/