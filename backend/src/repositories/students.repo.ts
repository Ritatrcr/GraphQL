import { Student } from "../types";

// ⚠️ Temporal: luego lo cambiamos a base de datos (Prisma, Postgres, etc.)
const STUDENTS: Student[] = [
  { id: "s1", firstName: "Ana", lastName: "García", email: "ana@example.com", age: 21 },
  { id: "s2", firstName: "Luis", lastName: "Pérez", email: "luis@example.com", age: 23 },
  { id: "s3", firstName: "Rita", lastName: "Cruz", email: "rita@example.com", age: 22 }
];

export const StudentsRepo = {
  findAll(): Student[] {
    return STUDENTS;
  }
};
