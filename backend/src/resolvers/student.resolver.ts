import { StudentsRepo } from "../repositories/students.repo";
import { Student } from "../types";

export const studentResolvers = {
  Query: {
    async students(): Promise<Student[]> {
      return StudentsRepo.findAll();
    },
  },
};
