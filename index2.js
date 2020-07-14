
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
        <h4>User:${user}</h4>
        <h4>Repos: ${responseJson.length}</h4>
    `
    $('.js-results').append(userinfo)
    for (let i = 0; i < responseJson.length; i++) {
        $('.js-results').append(`
        <li><h4>${responseJson[i].name}</h4>
        <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>
        </li>
        `)
    }
    $('.js-results').removeClass('hidden')

}

