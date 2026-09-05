import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import competition from './competition'
import workshop from './workshop'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, competition, workshop],
}

