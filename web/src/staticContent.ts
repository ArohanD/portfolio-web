import { Dev_SVG, Maps_SVG, Photo_SVG, Resume_SVG, Write_SVG } from './components/svgLogos'

export interface HomeLink {
  title: string
  path: string
  backgroundImageSlug: string
  textColor: string
  imagePath: any
  component?: () => any
}

export let homeLinks: Array<HomeLink> = [
  {
    title: "Dev",
    path: "/dev/applications",
    backgroundImageSlug: `dev`,
    textColor: "#68281B",
    imagePath: "",
    component: Dev_SVG
  },
  {
    title: "Photo",
    path: "/photography",
    backgroundImageSlug: `photo`,
    textColor: "#EFFFB1",
    imagePath: "",
    component: Photo_SVG
  },
  {
    title: "Maps",
    path: "/maps",
    backgroundImageSlug: `maps`,
    textColor: "#68281B",
    imagePath: "",
    component: Maps_SVG
  },
  {
    title: "Writing",
    path: "/writing",
    backgroundImageSlug: `writing`,
    textColor: "#c44637",
    imagePath: "",
    component: Write_SVG
  },
  {
    title: "Resume",
    path: "/resume",
    backgroundImageSlug: `resume`,
    textColor: "#edb879",
    imagePath: "",
    component: Resume_SVG
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
    path: "/dev/applications",
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
    title: "Maps",
    path: "/maps",
    backgroundImageSlug: `maps`,
    textColor: "#68281B",
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

// Slugs (matching `backgroundImageSlug`) currently hidden from the home-page
// nav and the global sidebar. Remove entries from this set to bring the
// links back into both navs at once. The arrays themselves are intentionally
// left intact so other parts of the codebase can still resolve paths/titles
// by slug if needed.
export const HIDDEN_LINKS = new Set<string>(["writing", "resume"])

export const homeContent: Array<String> = [
  `Hi, I’m Arohan,`,

  `I'm a full-stack software engineer focused on building apps and businesses that solve real problems. Inspired by mission-driven projects, and drawn to initiatives that help make the world more green, equitable, and collaborative - I've utilized a strong background in user-driven design to create impactful web & mobile experiences.`,

  `Through the lens, I'm an avid learner. Every time shutter clicks, I'm hoping to tell a story a little better than the last. I'm inspired by travel, people and storytelling through photography. Here, my drive comes from a desire to learn how to capture the right moments, use the right tools, and share amazing experiences with the world.`,
]