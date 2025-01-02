import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../product'
import { banner } from '../banner'
import { categories} from '../category'
import { trendyProductpage } from '../trandProduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, categories, trendyProductpage],
}
