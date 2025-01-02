import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.NEXT_PUBLIC_SANITY_TOKAN,
  dataset: "production",
  apiVersion:"v2024-12-27",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
