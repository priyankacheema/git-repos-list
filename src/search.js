const gitHubContainer = document.querySelector('#git-hub-container');
const gitReposForm = document.querySelector('#git-repo-form');
const gitInput = gitReposForm.querySelector('#git-search-input');

export const fetchGitHubRepos = url => {
  return fetch(url).then(res => res.json());
};

const GIT_API = 'c21833ac403f9c45e47e4a472de9335a3eda7426';

const gitRepoList = [];
export function getDataForGitHubRepos() {
  const gitUserNameText = gitReposForm.querySelector('#git-search-input').value;
  fetchGitHubRepos(
    `https://api.github.com/users/${gitUserNameText}/repos?access_token=${GIT_API}`
  ).then(data => {
    data.map(obj => {
      gitRepoList.push(obj.name);
    });
  });
  return gitRepoList;
}
