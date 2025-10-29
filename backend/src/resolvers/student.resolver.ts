import { StudentsRepo } from "../repositories/students.repo";
import { Student } from "../types";

export const studentResolvers = {
  Query: {
    students(): Student[] {
      return StudentsRepo.findAll();
    }
  }
};
