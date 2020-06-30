export interface HomeLink {
  title: string
  path: string
  backgroundImageSlug: string
  textColor: string
  imagePath: any
}

export let homeLinks: Array<HomeLink> = [
  {
    title: "Dev",
    path: "/dev",
    backgroundImageSlug: `dev`,
    textColor: "#68281B",
    imagePath: "",
  },
  {
    title: "Photo",
    path: "/gallery/latest",
    backgroundImageSlug: `photo`,
    textColor: "#EFFFB1",
    imagePath: "",
  },
  {
    title: "Writing",
    path: "/writing",
    backgroundImageSlug: `writing`,
    textColor: "#c44637",
    imagePath: "",
  },
  {
    title: "Resume",
    path: "/resume",
    backgroundImageSlug: `resume`,
    textColor: "#edb879",
    imagePath: "",
  },
]

export const blankHomeLink = {
  title: "",
  path: "",
  backgroundImageSlug: ``,
  textColor: "",
  imagePath: "",
}

export let navLinks: Array<HomeLink> = [
  {
    title: "Home",
    path: "/",
    backgroundImageSlug: `home`,
    textColor: "#68281B",
    imagePath: "",
  },
  {
    title: "Dev",
    path: "/dev",
    backgroundImageSlug: `dev`,
    textColor: "#68281B",
    imagePath: "",
  },
  {
    title: "Photo",
    path: "/photography",
    backgroundImageSlug: `photo`,
    textColor: "#EFFFB1",
    imagePath: "",
  },
  {
    title: "Writing",
    path: "/writing",
    backgroundImageSlug: `writing`,
    textColor: "#c44637",
    imagePath: "",
  },
  {
    title: "Resume",
    path: "/resume",
    backgroundImageSlug: `resume`,
    textColor: "#edb879",
    imagePath: "",
  },
]

export const homeContent: Array<String> = [
  `Hi, I’m Arohan,`,

  `I wake up in the morning to build things that matter. From brands to products to businesses, I operate on the notion that it takes the right amount of grit to turn inspiration into execution. I've spent my whole life learning all over the world, pairing those experiences with a relentless drive to do meaningful work and launch ambitious ideas.`,

  `Through the lens, I'm an avid learner. Every time shutter clicks, I'm hoping to tell a story a little better than the last. I'm inspired by travel, people and by the idea that a powerful photograph could change the world. Here, my drive comes from a desire to learn how to capture the right moments, use the right tools, and share amazing experiences with the world.`,
]