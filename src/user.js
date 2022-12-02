const USERNAME = {
  github: "samyabrata-maji",
  twitter: "sammaji15",
  linkedin: "samyabrata-maji"
};

const USER_PROFILE_GITHUB = {
  username: USERNAME,
  profile_url: `https://github.com/${USERNAME.github}`,
  repo_url: `https://api.github.com/users/${USERNAME.github}/repos`,
};

const settings = {
  showStarsCount: true,
  showForksCount: true,
  showForkedRepos: false
}

export { USER_PROFILE_GITHUB , settings };
