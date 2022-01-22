import { sideBarLink } from "./src/components/sideBar"

//Get rid of hyphens for auto-generated page titles.
const sanitizeTitle = (rawString: string): string =>
  rawString.split("-").join(" ")

const allocateArray = (orig: Array<any>, numKids: number) => {}

const copy = (orig: any) => JSON.parse(JSON.stringify(orig))

const isNotNavDupe = (target: sideBarLink, array: Array<sideBarLink>) => {
  const titleArray = array.map(link => link.title)
  return !titleArray.includes(target.title)
}

const convertToSlug = (string: String) => {
  return string.split(" ").join("-").toLowerCase()
}

export { sanitizeTitle, allocateArray, copy, isNotNavDupe, convertToSlug }
