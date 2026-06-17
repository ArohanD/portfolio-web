import { createClient } from "@sanity/client"

export const sanityClient = createClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID as string,
  dataset: process.env.GATSBY_SANITY_DATASET || "production",
  apiVersion: "2024-12-08",
  useCdn: true,
  // token: process.env.GATSBY_SANITY_TOKEN, // only if dataset becomes private
})
