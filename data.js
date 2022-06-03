/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null
};

var previousEntryDataJSON = window.localStorage.getItem('javascript-local-storage');
if (previousEntryDataJSON !== null) {
  data = JSON.parse(previousEntryDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataEntryJSON = JSON.stringify(data);
  window.localStorage.setItem('javascript-local-storage', dataEntryJSON);
});
