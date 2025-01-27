import { createClient } from 'next-sanity'
import { apiVersion} from '../env'
export const client = createClient({
  projectId: "u04odjdo",
  token: process.env.NEXT_PUBLIC_SANITY_TOKAN,
  dataset: "production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
