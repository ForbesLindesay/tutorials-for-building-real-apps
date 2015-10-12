var github = require('github-basic');
var client = github({version: 3});

var username = document.getElementById('github-name');
var form = document.getElementById('get-repos-form');
var output = document.getElementById('repos');
var loadMore = document.getElementById('load-more');

var getNext = null;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (form.querySelector('button').hasAttribute('disabled')) return;
  output.innerHTML = '';
  loadMore.style.display = 'none';
  form.querySelector('button').setAttribute('disabled', 'disabled');
  client.get('/users/:username/repos', {username: username.value}).done(function (repos) {
    form.querySelector('button').removeAttribute('disabled');
    repos.forEach(addRepo);
    getNext = repos.getNext;
    loadMore.style.display = getNext ? null : 'none';
  }, function (err) {
    form.querySelector('button').removeAttribute('disabled');
    alert('Something went wrong');
  });
});

loadMore.addEventListener('click', function () {
  if (loadMore.hasAttribute('disabled')) return;
  form.querySelector('button').setAttribute('disabled', 'disabled');
  loadMore.setAttribute('disabled', 'disabled');
  getNext().done(function (repos) {
    form.querySelector('button').removeAttribute('disabled');
    loadMore.removeAttribute('disabled');
    repos.forEach(addRepo);
    getNext = repos.getNext;
    loadMore.style.display = getNext ? null : 'none';
  }, function (err) {
    form.querySelector('button').removeAttribute('disabled');
    loadMore.removeAttribute('disabled');
    alert('Something went wrong');
  });
});

function addRepo(repo) {
  var li = document.createElement('li');
  li.textContent = repo.name;
  output.appendChild(li);
}