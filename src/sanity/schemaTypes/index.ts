import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'
import catagory from './catagory'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars, catagory, product],
}
