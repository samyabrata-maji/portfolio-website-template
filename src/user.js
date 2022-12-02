const USERNAME = {
  github: "samyabrata-maji",
  twitter: "sammaji15",
  linkedin: "samyabrata-maji",
};

const USER_PROFILE_GITHUB = {
  username: USERNAME,
  profile_url: `https://github.com/${USERNAME.github}`,
  repo_url: `https://api.github.com/users/${USERNAME.github}/repos`,
};

const settings = {
  showStarsCount: true,
  showForksCount: true,
  showForkedRepos: false,
};

const MENU_DATA = [
  {
    title: "Home",
    pageTo: "/",
    ionicon: "home-outline",
    boxicon: "",
    color: "white",
    classNames: [],
  },
  {
    title: "Repo",
    pageTo: "/repo",
    ionicon: "git-branch-outline",
    boxicon: "",
    color: "white",
    classNames: [],
  },
  {
    title: "Tech",
    pageTo: "/tech",
    ionicon: "build-outline",
    boxicon: "",
    color: "white",
    classNames: [],
  },
  {
    title: "Contact",
    pageTo: "/contact",
    ionicon: "help-outline",
    boxicon: "",
    color: "white",
    classNames: [],
  },
];

export { USER_PROFILE_GITHUB, MENU_DATA, settings };
