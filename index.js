'use strict';

function displayResults(responseJson) {
    console.log('displayResults ran');
    $(responseJson).ready(function () {
        $('.loading').addClass('hidden')
    })
    console.log(responseJson)
    console.log(responseJson.length)
    console.log(responseJson[0].owner.login)
    let user = responseJson[0].owner.login
    let userinfo = `
        <h4>User: <span class="user">${user}</span></h4>
        <h4><span class="user">Repos: ${responseJson.length}</span></h4>
        <ul class="results-list"></ul>
    `
    $('.js-results').append(userinfo)
    for (let i = 0; i < responseJson.length; i++) {
        $('.js-results').append(`
        <div class="result-item"><li><h4>${responseJson[i].name}</h4>
        <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>
        </li></div>
        `)
    }
    $('.js-results').removeClass('hidden')

}

function getRepos(username) {
    console.log('getRepos ran');
    const url = `https://api.github.com/users/${username}/repos`
    console.log(url);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch(err => {
            displayError(err.message);
        });
}
function watchForm() {
    $('#js-form').submit(event => {
        event.preventDefault();
        console.log('watchForm ran');
    });
}
$(watchForm);