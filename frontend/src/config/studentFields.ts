// Campos fijos permitidos para Student. Asegúrate de que existan en tu schema del backend.
export const STUDENT_FIELDS = [
  'id',
  'firstName',
  'lastName',
  'email',
  'age',
  'program',
] as const

export type StudentField = typeof STUDENT_FIELDS[number]
