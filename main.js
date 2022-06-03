/* global data */

var $addEntryButton = document.querySelector('.add-entry-button');
var $modalContainer = document.querySelector('.overlay-modal-container');
// var $submitButton = document.querySelector('.submit-button');
var $form = document.querySelector('form');
var $selectDay = document.getElementById('day');
var $selectTime = document.getElementById('time');
var $description = document.getElementById('text-area');
var $dayButtons = document.querySelectorAll('.style-day-button');
var $daySpan = document.querySelector('span');

$form.addEventListener('submit', formSubmitEvent);

$addEntryButton.addEventListener('click', openModal);
// $submitButton.addEventListener('click', formSubmitEvent);

function openModal(event) {
  $modalContainer.classList.remove('hidden');
}

function formSubmitEvent(event) {
  $modalContainer.classList.add('hidden');
  var newObj = {
    time: $selectTime.value,
    day: $selectDay.value,
    description: $description.value
  };
  data.entries.push(newObj);
}

var $buttonsContainer = document.querySelector('.day-button-container');
$buttonsContainer.addEventListener('click', changeButtonFunc);
function changeButtonFunc(event) {

  for (var i = 0; i < $dayButtons.length; i++) {
    var dayIndex = $dayButtons[i];
    if (event.target.getAttribute('id') === dayIndex.getAttribute('id')) {
      $daySpan.textContent = dayIndex.textContent;
      loadEntries();
    }

  }

}

// - objective: retrieve time and description values from data.entries.
//    - retrieve newObj and get the values.
//    - BOOM!

console.log('hello');
/* populating tr's */

/* need to loop through data.entries */

function createDomTree(object) {

  var trOne = document.createElement('tr');
  var tdOne = document.createElement('td');
  tdOne.textContent =
  trOne.appendChild(tdOne);
  var tdTwo = document.createElement('td');
  td;
  trOne.appendChild(tdTwo);
  return trOne;
}

var tBodyAppend = document.querySelector('.tbody');
function loadEntries() {
  for (var i = 0; i < data.entries.length; i++) {
    var dataEntries = createDomTree(data.entries[i]);
    tBodyAppend.appendChild(dataEntries);
  }
}
