'use strict';

function getRepos(name) {
  console.log('get repos')
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
    console.log(responseJson);
    $('#results').empty();
    for (let i = 0; i < responseJson.length; i++){
      console.log(responseJson[i].html_url)
      console.log(responseJson[i].name)
        $('.results').append(
        `<p>${responseJson[i].name}<p>
        <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`
      )};
   
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