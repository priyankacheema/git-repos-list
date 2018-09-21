import * as gitData from './search.js';
import * as header from './header.js';
import * as repoList from './publishRepoList.js';

const container = document.querySelector('#git-hub-container');
const gitReposForm = document.querySelector('#git-repo-form');
const gitInput = gitReposForm.querySelector('#git-search-input');
const gitHeader = gitReposForm.querySelector('#header-id');
const gitList = gitReposForm.querySelector('#git-list');

gitInput.focus();
export function gitHubReposCollection() {
  document.querySelector('#git-repo-form').addEventListener('submit', e => {
    e.preventDefault();
    const arr = gitData.getDataForGitHubRepos();
    //console.log(arr);
    repoList.displaygitReposList(arr);
  });
}
gitHubReposCollection();

gitHeader.innerHTML = header.printHeader();
