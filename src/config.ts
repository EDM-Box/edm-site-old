export default {
  title: "EDM-Box",
  menuRouts: [
    {
      name: "home",
      rout: "/",
    },
    {
      name: "events",
      rout: "/events",
    },
    {
      name: "projects",
      rout: "/projects",
      subMenu: [
        {
          name: "festivals",
          rout: "/festivals",
        },
        {
          name: "raves",
          rout: "/raves",
        },
        {
          name: "parties",
          rout: "/parties",
        },
        {
          name: "clubs-parties",
          rout: "/clubs-parties",
        },
      ],
    },
    {
      name: "places",
      rout: "/places",
      subMenu: [
        {
          name: "clubs",
          rout: "/clubs",
        },
        {
          name: "dance bars",
          rout: "/dance-bars",
        },
        {
          name: "locations",
          rout: "/locations",
        },
      ],
    },
    {
      name: "peoples",
      rout: "/edm-box",
    },
    {
      name: "blog",
      rout: "/blog",
      subMenu: [
        {
          name: "news",
          rout: "/news",
        },
        {
          name: "styles",
          rout: "/styles",
        },
        {
          name: "interview",
          rout: "/interview",
        },
        {
          name: "podcasts",
          rout: "/podcasts",
        },
        {
          name: "streams",
          rout: "/streams",
        },
      ],
    },
    {
      name: "edm-box",
      rout: "/edm-box",
    },
  ],
};
