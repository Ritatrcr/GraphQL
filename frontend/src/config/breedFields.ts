// Campos fijos permitidos para Breed. Asegúrate de que existan en tu schema del backend.
export const BREED_FIELDS = [
  'id',
  'name',
  'origin',
  'temperament',
  'life_span',
  'description',
] as const

export type BreedField = typeof BREED_FIELDS[number]
