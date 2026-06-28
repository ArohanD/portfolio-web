import { Dev_SVG, Maps_SVG, Photo_SVG, Resume_SVG, Write_SVG } from './components/svgLogos'

export interface HomeLink {
  title: string
  path: string
  backgroundImageSlug: string
  textColor: string
  component?: () => any
}

export let homeLinks: Array<HomeLink> = [
  {
    title: "Dev",
    path: "/dev/applications",
    backgroundImageSlug: `dev`,
    textColor: "#68281B",
    component: Dev_SVG
  },
  {
    title: "Photo",
    path: "/photography",
    backgroundImageSlug: `photo`,
    textColor: "#EFFFB1",
    component: Photo_SVG
  },
  {
    title: "Maps",
    path: "/maps",
    backgroundImageSlug: `maps`,
    textColor: "#68281B",
    component: Maps_SVG
  },
  {
    title: "Writing",
    path: "/writing",
    backgroundImageSlug: `writing`,
    textColor: "#c44637",
    component: Write_SVG
  },
  {
    title: "Resume",
    path: "/resume",
    backgroundImageSlug: `resume`,
    textColor: "#edb879",
    component: Resume_SVG
  },
]

export const blankHomeLink = {
  title: "",
  path: "",
  backgroundImageSlug: ``,
  textColor: "",
}

// Slugs currently hidden from the home-page nav and the global sidebar.
// Remove an entry to bring its link back into both navs at once.
export const HIDDEN_LINKS = new Set<string>(["writing", "resume"])

// Canonical site-nav list shared by the desktop SideBar and the mobile nav:
// Home first, then the home sections not hidden by HIDDEN_LINKS.
export const getVisibleNavLinks = (): Array<{ title: string; path: string }> => [
  { title: "Home", path: "/" },
  ...homeLinks
    .filter(l => !HIDDEN_LINKS.has(l.backgroundImageSlug))
    .map(({ title, path }) => ({ title, path })),
]

export const homeContent: string[] = [
  `Hi, I’m Arohan,`,

  `I'm a full-stack software engineer focused on building apps and businesses that solve real problems. Inspired by mission-driven projects, and drawn to initiatives that help make the world more green, equitable, and collaborative - I've utilized a strong background in user-driven design to create impactful web & mobile experiences.`,

  `Through the lens, I'm an avid learner. Every time shutter clicks, I'm hoping to tell a story a little better than the last. I'm inspired by travel, people and storytelling through photography. Here, my drive comes from a desire to learn how to capture the right moments, use the right tools, and share amazing experiences with the world.`,
]
