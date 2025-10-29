// src/repositories/students.repo.ts
import { getDb } from "../config/firebase";
import { Student } from "../types";

const COL = "students";

export const StudentsRepo = {
  async findAll(): Promise<Student[]> {
    const db = getDb();
    const snap = await db.collection(COL).get();
    return snap.docs.map((d) => {
      const data = d.data() as Student; // 👈 cast tipado
      return { ...data, id: data.id ?? d.id };
    });
  },

  async upsert(student: Student): Promise<void> {
    const db = getDb();
    const id = student.id;
    if (!id) throw new Error("Student.id es requerido para upsert");
    await db.collection(COL).doc(id).set(student, { merge: true });
  },

  async remove(id: string): Promise<void> {
    const db = getDb();
    await db.collection(COL).doc(id).delete();
  },
};
