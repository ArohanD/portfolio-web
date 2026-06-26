// Content for the Applications page, ported verbatim from the per-project MDX
// fragments that previously lived under pages/dev/applications/. Kept as a flat
// data array so the brutalist layout can alternate rows by index and render the
// header/footer chrome around them.

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }

export type Media =
  | { type: "youtube"; id: string; label: string }
  | { type: "image"; src: string; label: string }

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  blurb: Block[]
  stack: string[]
  links: ProjectLink[]
  media: Media
}

export const INTRO = {
  title: "Applications",
  lede: "Here are the digital stories and experiences I’ve brought to life.",
}

export const PROJECTS: Project[] = [
  {
    id: "face-browser",
    title: "Face-Browser Chrome Extension",
    blurb: [
      {
        type: "p",
        text: "A chrome extension that allows users to navigate the web using only face movements as an accessibility feature. The app uses a face-landmark ai model in a TensorFlow backend to achieve the pointer movement.",
      },
    ],
    stack: ["Chrome Extension", "TensorFlow", "Augmented Reality", "Accessibility", "WebGL", "WASM"],
    links: [{ label: "git repo", href: "https://github.com/ArohanD/face-browser-extension" }],
    media: { type: "youtube", id: "Hvl9UqmbOEM", label: "Face-Browser demo" },
  },
  {
    id: "impostor",
    title: "Was Not The Impostor",
    blurb: [
      {
        type: "p",
        text: 'Based on the popular game Among Us, I used DNS wildcarding along with other network configurations to create a site where users could generate their own "eject screens". Simply head to [name].wasnottheimpostor.com to generate a new site.',
      },
      {
        type: "p",
        text: "This project statyed on the front page of the webdev subreddit for about a day, and has been one of my highest trafficked sites.",
      },
    ],
    stack: ["React", "Vercel", "SCSS"],
    links: [],
    media: { type: "youtube", id: "7rhAApBO2oY", label: "Was Not The Impostor demo" },
  },
  {
    id: "vocal-codes",
    title: "Vocal Codes",
    blurb: [
      {
        type: "p",
        text: "An app that allows immobile persons to communicate with morse code using a single input button. This app is Inspired by my uncle, who is now immobile due to an injury. Its features are as follows:",
      },
      {
        type: "ul",
        items: [
          "Users are able to have input with short and long presses, either as yes/no or in morse code, and have their input translated and spoken to others.",
          "A predictive text engine allows for easier sentence construction.",
          "The app has adjustable sensitivities so they can be tailored to users with different needs.",
          "A high-contrast color scheme is utilized for facilitated reading.",
        ],
      },
    ],
    stack: ["React", "Node", "Javascript", "SpeechSynthesis", "AWS", "EC2", "PM2", "Express", "ARIA", "Material UI"],
    links: [
      { label: "git repo", href: "https://github.com/ArohanD/morse-code-translator" },
      { label: "live demo", href: "https://morse-code-translator.vercel.app/" },
    ],
    media: { type: "image", src: "/media/vocal-codes.png", label: "Vocal Codes — iPhone screenshot" },
  },
  {
    id: "chickpeach",
    title: "Chickpeach",
    blurb: [
      {
        type: "p",
        text: "Chickpeach is your one stop meal planning, recipe discovery and grocery-management app. Users are able to:",
      },
      {
        type: "ul",
        items: [
          "Search for recipes and save them to a menu or favorites",
          "Input custom allergens and dislikes and have those ingredients never show up in search or the menu",
          "Generate custom shopping lists based on selected menu items",
          "Adjust meal prepping to accommodate multiple persons, dietary restrictions and popular diets",
        ],
      },
      {
        type: "p",
        text: "The app features a clean UI that is WAI-ARIA compliant. Chickpeach is fully responsive and can be taken on the go or browsed as a rich desktop experience.",
      },
    ],
    stack: ["React", "React Router", "Node", "Javascript", "AWS", "EC2", "PM2", "Firebase", "MySQL", "Express", "ARIA", "Grommet", "Docker"],
    links: [
      { label: "git repo", href: "https://github.com/hratx-blue-ocean/chickpeach" },
    ],
    media: { type: "youtube", id: "1Q_Wb6s6fA8", label: "Chickpeach demo" },
  },
  {
    id: "color-generator",
    title: "Web Color Generator",
    blurb: [
      {
        type: "p",
        text: "After building a few visual apps, I ran into a consistent issue when generating random colors. There was no quick way to render a list of colors within a certain range. Instead, I often implemented naive solutions that randomly generated web colors, leading to common contrast/visibility issues.",
      },
      {
        type: "p",
        text: "I built this app to generate a list of web friendly colors in either RGB, hex, or HSL based on a line users can draw on a color-wall to ensure color consistency.",
      },
    ],
    stack: ["React", "Firebase", "Javascript"],
    links: [
      { label: "git repo", href: "https://github.com/ArohanD/colorPicker" },
      { label: "live site", href: "https://web-color-generator-3f213.web.app/" },
    ],
    media: { type: "image", src: "/media/web-color-generator.png", label: "Web Color Generator — screenshot" },
  },
  {
    id: "shazamazon",
    title: "Shazamazon",
    blurb: [
      {
        type: "p",
        text: "Shazamazon is a full stack item description page modeled after Amazon. It is composed of nine individually deployed micro-services that are stitched together in order to architect scalable components with separation of concerns. My major contributions to this project are as follows:",
      },
      {
        type: "ul",
        items: [
          "Creating the reviews component - a component that has its own front-end, back-end and database to handle review display, review submission, and helpful demarcations. The component also features a profanity filter, is WAI-ARIA compliant for voice-reader access and communicates to other components as reviews are submitted.",
          "Scaled the Carousel to handle 10 million items and 1000 RPS by implementing load balancing across multiple server instances.",
          "Created a proxy to stitch all nine components together.",
        ],
      },
    ],
    stack: ["React", "Node", "Javascript", "AWS", "EC2", "PM2", "MongoDB", "Express", "ARIA", "Postgres"],
    links: [
      { label: "review component repo", href: "https://github.com/shazamazon/module-reviews" },
      { label: "microservice proxy repo", href: "https://github.com/shazamazon/proxy-reviews" },
    ],
    media: { type: "youtube", id: "jEG-kVc52FE", label: "Shazamazon demo" },
  },
]
