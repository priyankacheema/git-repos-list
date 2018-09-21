const gitHubContainer = document.querySelector('#git-hub-container');
const gitReposForm = document.querySelector('#git-repo-form');
const gitInput = gitReposForm.querySelector('#git-search-input');

export const fetchGitHubRepos = url => {
  return fetch(url).then(res => res.json());
};

const gitRepoList = [];
export function getDataForGitHubRepos() {
  const gitUserNameText = gitReposForm.querySelector('#git-search-input').value;
  fetchGitHubRepos(`https://api.github.com/users/${gitUserNameText}/repos`).then(data => {
    data.map(obj => {
      gitRepoList.push(obj.name);
    });
  });
  return gitRepoList;
}
