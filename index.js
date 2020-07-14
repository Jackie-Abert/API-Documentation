/* eslint-env jquery */
/* eslint-disable no-console */

function getRepos(name) {
  console.log('get repos');
  fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  $('.results').empty();
  for (let i = 0; i < responseJson.length; i++){
    $('.results').append(
      `<p>${responseJson[i].name}<p>
        <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`
    );
  }
   
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const name = $('#name').val();
    if (name.length === 0) {
      alert('Must fill in name');
    }
    
    getRepos(name);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});