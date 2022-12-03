const USERNAME = {
  name: "Samyabrata Maji",
  github: "samyabrata-maji",
  twitter: "sammaji15",
  linkedin: "samyabrata-maji",
};

const USER_PROFILE_GITHUB = {
  name: USERNAME.name,
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
    id: "btn-toggle-theme",
  },
];

// oldest to newest
const JOURNEY_DATA = [
  {
    title: "Studied at St Patricks School",
    description: "Did my high schooling from St. Patricks School, Asansol",
    from: "June, 2007",
    to: "June, 2022",
    sub_item: {
      title: "Std at St Patricks School",
      description: "Did my high schooling from St. Patricks School, Asansol",
      from: "June, 2007",
      to: "June, 2022",
    },
  },
  {
    title: "Studied at St Patricks School",
    description: "Did my high schooling from St. Patricks School, Asansol",
    from: "June, 2007",
    to: "June, 2022",
  },
  {
    title: "Studied at St Patricks School",
    description: "Did my high schooling from St. Patricks School, Asansol",
    from: "June, 2007",
    to: "June, 2022",
  },
  {
    title: "Studied at St Patricks School",
    description: "Did my high schooling from St. Patricks School, Asansol",
    from: "June, 2007",
    to: "June, 2022",
  },
];

const TECH_STACK_DATA = [
  { title: "java" },
  { title: "react" },
  { title: "javascript" },
  { title: "typescript" },
  { title: "python" },
  { title: "kotlin" },
  { title: "android studio" },
  { title: "opencv" },
  { title: "blender" },
  { title: "c#" },
  { title: "css3" },
  { title: "html5" },
];

export {
  USERNAME,
  USER_PROFILE_GITHUB,
  MENU_DATA,
  JOURNEY_DATA,
  TECH_STACK_DATA,
  settings,
};
