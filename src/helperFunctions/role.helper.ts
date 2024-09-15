import Principal from "../entities/principal/principal.model.js";
import Student from "../entities/student/student.model.js";
import Teacher from "../entities/teacher/teacher.model.js";
import Parent from "../entities/parent/parent.model.js";

/**
 * Function to check the user type and return specific values based on the type.
 * @param {string} type - The type of the user (e.g., 'teacher', 'parent', 'student', 'principal').
 * @returns {any} - A specific value based on the user type or an error message if the type is invalid.
 */
export const createUserAndRole = (
  type: string,
  userID: object,
  schoolID: string,
  staffID: object | null
): any => {
  const userTypeActions: { [key: string]: () => any } = {
    teacher: async () => {
      const teacher =   new Teacher({
        userId: userID,
        schoolId: schoolID,
        staffId: staffID,
      });

      return teacher;
    },
    parent: async () => {
      const parent = new Parent({
        userId: userID,
        schoolId: schoolID,
        staffId: staffID,
      });

      return parent;
    },
    student: async () => {
      const student = new Student({
        userId: userID,
        schoolId: schoolID,
        staffId: staffID,
      });

      return student;
    },
    principal: async () => {
      const principal = new Principal({
        userId: userID,
        schoolId: schoolID,
        staffId: staffID,
      });
      console.log("🚀 ~ principal:", principal);

      return principal;
    },
    default: async () => ({
      error: `Invalid user type: ${type}. Must be one of: teacher, parent, student, principal`,
    }),
  };

  return (userTypeActions[type.toLowerCase()] || userTypeActions.default)();
};
