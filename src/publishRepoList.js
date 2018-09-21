import * as gitList from './search.js';
const container = document.querySelector('#git-hub-container');
const gitReposForm = document.querySelector('#git-repo-form');
const listGit = gitReposForm.querySelector('#git-list');

export function displaygitReposList(gitReposListArray) {
  gitReposListArray.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = element;
    listGit.appendChild(li);
    gitReposForm.appendChild(listGit);
  });
  return listGit;
}
