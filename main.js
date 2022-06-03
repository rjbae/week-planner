var $addEntryButton = document.querySelector('.add-entry-button');
var $modalContainer = document.querySelector('.overlay-modal-container');
var $submitButton = document.querySelector('.submit-button');

$addEntryButton.addEventListener('click', openModal);
$submitButton.addEventListener('click', closeModal);

function openModal(event) {
  $modalContainer.classList.remove('hidden');
}

function closeModal(event) {
  $modalContainer.classList.add('hidden');
}
