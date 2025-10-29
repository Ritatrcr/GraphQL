"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentResolvers = void 0;
const students_repo_1 = require("../repositories/students.repo");
exports.studentResolvers = {
    Query: {
        async students() {
            return students_repo_1.StudentsRepo.findAll();
        },
    },
};
