import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'
export const client = createClient({
  projectId,
  token,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
