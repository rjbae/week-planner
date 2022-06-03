/* global data */

var $addEntryButton = document.querySelector('.add-entry-button');
var $modalContainer = document.querySelector('.overlay-modal-container');
// var $submitButton = document.querySelector('.submit-button');
var $form = document.querySelector('form');
var $selectDay = document.getElementById('day');
var $selectTime = document.getElementById('time');
var $description = document.getElementById('text-area');

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

var $buttons = document.querySelector('.day-button-container');
$buttons.addEventListener('click', changeButtonFunc);
function changeButtonFunc(event) {
  console.log('change this!');
}
