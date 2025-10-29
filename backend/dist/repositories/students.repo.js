"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsRepo = void 0;
// src/repositories/students.repo.ts
const firebase_1 = require("../config/firebase");
const COL = "students";
exports.StudentsRepo = {
    async findAll() {
        const db = (0, firebase_1.getDb)();
        const snap = await db.collection(COL).get();
        return snap.docs.map((d) => {
            const data = d.data(); // 👈 cast tipado
            return { ...data, id: data.id ?? d.id };
        });
    },
    async upsert(student) {
        const db = (0, firebase_1.getDb)();
        const id = student.id;
        if (!id)
            throw new Error("Student.id es requerido para upsert");
        await db.collection(COL).doc(id).set(student, { merge: true });
    },
    async remove(id) {
        const db = (0, firebase_1.getDb)();
        await db.collection(COL).doc(id).delete();
    },
};
