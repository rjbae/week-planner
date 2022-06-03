/* global data */

var $addEntryButton = document.querySelector('.add-entry-button');
var $modalContainer = document.querySelector('.overlay-modal-container');
// var $submitButton = document.querySelector('.submit-button');
var $form = document.querySelector('form');
var $selectDay = document.getElementById('day');
var $selectTime = document.getElementById('time');
var $description = document.getElementById('text-area');
var $dayButtons = document.querySelectorAll('.style-day-button');

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
      console.log('match');
    }

  }

}
