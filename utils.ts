//Get rid of hyphens for auto-generated page titles.
const sanitizeTitle = (rawString: string): string =>
  rawString.split("-").join(" ")

const allocateArray = (orig: Array<any>, numKids: number) => {
  
}

export { sanitizeTitle, allocateArray }