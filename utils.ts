//Get rid of hyphens for auto-generated page titles.
const sanitizeTitle = (rawString: string): string =>
  rawString.split("-").join(" ")

const allocateArray = (orig: Array<any>, numKids: number) => {
  
}

const copy = (orig: any) => JSON.parse(JSON.stringify(orig))

export { sanitizeTitle, allocateArray, copy }