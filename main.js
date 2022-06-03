var $addEntryButton = document.querySelector('.add-entry-button');
var $modalContainer = document.querySelector('.overlay-modal-container');
var $submitButton = document.querySelector('.submit-button');
var $form = document.querySelectorAll('form');
var $selectDay = document.getElementById('day');
var $selectTime = document.getElementById('time');
var $textArea = document.getElementById('text-area');

$form.addEventListener('submit', formSubmitEvent);

$addEntryButton.addEventListener('click', openModal);
$submitButton.addEventListener('click', closeModal);

function openModal(event) {
  $modalContainer.classList.remove('hidden');
}

function formSubmitEvent(event) {
  $modalContainer.classList.add('hidden');
  var newObj = {
    time: $selectTime.value,
    day: $selectDay.value
  };

}
