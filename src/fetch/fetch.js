import { USER_PROFILE_GITHUB, settings } from "../user";


const GLOBAL_USERNAME = "samyabrata-maji";
const GLOBAL_USER_URL = `https://api.github.com/users/${GLOBAL_USERNAME}/repos`;


const errorMessage = (code) => {
  switch(code) {
    case '403':
      console.error(`${code}: FORBIDDEN ACCESS: your API fetching limit has exceeded please wait for 1 min and try again`)
      break
    default:
      console.error(`${code}: UNKNOWN ERROR`)
  }
}

export const fetchData = () =>
  fetch(USER_PROFILE_GITHUB.repo_url)
    .then((response) => {
      // console.log("FETCHING..."); // TODO: remove this
      if (response.ok) return response.json();
      else throw new Error(response.status);
    })
    .then((data) => {
      data = data
        .filter((repo) => {
          if (settings.showForkedRepos) return true
          else return !repo.fork
        })
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
            forks: repo.forks_count,
            stars: repo.stargazers_count
          };
        });
      return data;
    })
    .catch((error) => {
      errorMessage(error.message)
    });

const fetchLanguages = (repo_name) => {
  
  const lang_url = `https://api.github.com/repos/${GLOBAL_USERNAME}/${repo_name}/languages`;
  // window.open(lang_url)
  fetch(lang_url).then(response => {
    if (response.ok) return response.json()
    else throw new Error(response.status)
  })
  .then(data => {
    let data_keys = [...Object.keys(data)]
    console.log(data_keys)
    if (data_keys !== undefined) return data_keys
    else return []
  }).catch(error => {
    console.log(error.message);
  })
};

export { fetchLanguages, GLOBAL_USERNAME};
