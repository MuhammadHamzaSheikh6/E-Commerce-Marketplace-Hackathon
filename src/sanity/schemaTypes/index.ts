import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { banner } from './banner'
import { categories} from './category'
import blog from './blog/blogPost'
import category from './blog/category'
import blogContent from './blog/blogContent'
import contactForm from './contactForm'
import order from './order/order'
import customer from './order/customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, categories, blog, blogContent, category, contactForm, order, customer],
}
