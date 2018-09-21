import * as gitData from './search.js';
import * as header from './header.js';
//import * as repoList from './publishRepoList.js';

const gitReposForm = document.querySelector('#git-repo-form');
const gitInput = gitReposForm.querySelector('#git-search-input');
const gitHeader = gitReposForm.querySelector('#header-id');

gitInput.focus();
var reposArray = [];
export function gitHubReposCollection() {
  document.querySelector('#git-repo-form').addEventListener('submit', e => {
    e.preventDefault();
    //reposArray = gitData.getDataForGitHubRepos();
    console.log(gitData.getDataForGitHubRepos());
    //console.log(reposArray);
  });
  return reposArray;
}
gitHubReposCollection();

gitHeader.innerHTML = header.printHeader();

//console.log(repoList.displaygitReposList());
