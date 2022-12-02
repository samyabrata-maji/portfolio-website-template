import { render } from "@testing-library/react";

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
    color: "white",
    classNames: [],
  },
  {
    title: "Repo",
    pageTo: "/repo",
    ionicon: "git-branch-outline",
    color: "white",
    classNames: [],
  },
  {
    title: "Tech",
    pageTo: "/tech",
    ionicon: "build-outline",
    color: "white",
    classNames: [],
  },
  {
    title: "Contact",
    pageTo: "/contact",
    ionicon: "help-outline",
    color: "white",
    classNames: [],
  },
  {
    title: "Themes",
    ionicon: "sunny-outline",
    color: "white",
    classNames: [],
    id: 'btn-toggle-theme'
  }
];

export { USER_PROFILE_GITHUB, MENU_DATA, settings };
