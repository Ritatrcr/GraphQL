import { BreedField } from '../config/breedFields'
import { StudentField } from '../config/studentFields'

export function buildBreedQuery(fields: BreedField[]) {
  if (!fields.length) throw new Error('Selecciona al menos un campo para Breed')
  const selection = fields.join('\n      ')
  return /* GraphQL */`
    query Breed($id: ID!) {
      breed(id: $id) {
        ${selection}
      }
    }
  `
}

export function buildStudentsQuery(fields: StudentField[]) {
  if (!fields.length) throw new Error('Selecciona al menos un campo para Student')
  const selection = fields.join('\n      ')
  return /* GraphQL */`
    query Students {
      students {
        ${selection}
      }
    }
  `
}
