// "use strict"
let username = "samyabrata-maji";
const repo_url = `https://api.github.com/users/${username}/repos`;

// TODO: use async await
export const fetchData = () =>
  fetch(repo_url)
    .then((response) => {
      // console.log("FETCHING..."); // TODO: remove this
      if (response.ok) return response.json();
      else throw new Error(response.status);
    })
    .then((data) => {
      data = data
        .filter((repo) => !repo.fork)
        .map((repo) => {
          return {
            id: repo.id,
            name: repo.name,
            url: repo.svn_url,
            description: repo.description,
            language: repo.language,
            contributers: repo.contributers,
            license: repo.license,
            topics: repo.topics,
          };
        });
      return data;
    })
    .catch((error) => {
      console.log(`Unable to fetch: ${error.message}`);
    });

const fetchLanguages = (repo_name) => {
  const lang_url = `https://api.github.com/repos/${username}/${repo_name.trim()}/languages`;
  fetch(lang_url).then(response => {
    if (response && response.ok) return response.json()
    else throw new Error(response.status)
  }).then(data => {
    if (data !== undefined) return data.keys()
    else return ["error-alt"]
  })
};

export { fetchLanguages };
