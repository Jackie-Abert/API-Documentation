'use strict';

function getRepos(name) {
  console.log('get repos')
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(data) {
    console.log(data);
    $('#results').empty();
    for (let i = 0; i < data.items.length; i++){

      $('#results').append(
        `<li>
            <h3>data.items[i].name</h3>
            <a href=data.items[i].url>data.items[i].url</a>
        </li>`
      )};
   
    $('#results').removeClass('hidden');
  };

  function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const name = $('#name').val();
    getRepos(name);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});