// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-flapping-wing-aerodynamics",
          title: 'Flapping-Wing Aerodynamics',
          description: "Designed and built multi-articulate flapping-wing robot for aerodynamic assessment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FlappingWing/";
            },},{id: "projects-ncku-uav-design-team",
          title: 'NCKU UAV Design Team',
          description: "A student organization dedicated to designing and prototyping fixed-wing UAVs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NCKUUAV/";
            },},{id: "projects-rotary-balance",
          title: 'Rotary Balance',
          description: "Development of a rotary balance for aircraft stall-spin investigation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RotaryBalance/";
            },},{id: "projects-ship-airwake-rotor-aerodynamic-interactions",
          title: 'Ship-Airwake-Rotor Aerodynamic Interactions',
          description: "Subscale wind tunnel investigation of helicopter shipboard operations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ShipRotor/";
            },},{id: "projects-solar-powered-uav",
          title: 'Solar-Powered UAV',
          description: "Electric fixed-wing UAVs of different aerodynamic configurations with wing-integrated high-efficiency solar cells.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SolarUAV/";
            },},{id: "projects-soteria",
          title: 'Soteria',
          description: "A tiltrotor designed by Georgia Tech that won 2nd place in the 40th VFS graduate student design competition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Soteria/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%63%68%65%6E%36%36%39@%67%61%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/whchen919", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Wei-Han-Chen-7/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=agMKFL4AAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://sites.gatech.edu/cereal/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
