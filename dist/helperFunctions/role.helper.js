import Principal from "../entities/principal/principal.model.js";
import Student from "../entities/student/student.model.js";
import Teacher from "../entities/teacher/teacher.model.js";
import Parent from "../entities/parent/parent.model.js";
/**
 * Function to check the user type and return specific values based on the type.
 * @param {string} type - The type of the user (e.g., 'teacher', 'parent', 'student', 'principal').
 * @returns {any} - A specific value based on the user type or an error message if the type is invalid.
 */
export const createUserAndRole = (type, userID, schoolID, staffID) => {
    const userTypeActions = {
        teacher: async () => {
            const teacher = new Teacher({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVyRnVuY3Rpb25zL3JvbGUuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pFLE9BQU8sT0FBTyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNELE9BQU8sT0FBTyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNELE9BQU8sTUFBTSxNQUFNLG9DQUFvQyxDQUFDO0FBRXhEOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUMvQixJQUFZLEVBQ1osTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLE9BQXNCLEVBQ2pCLEVBQUU7SUFDUCxNQUFNLGVBQWUsR0FBaUM7UUFDcEQsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2xCLE1BQU0sT0FBTyxHQUFLLElBQUksT0FBTyxDQUFDO2dCQUM1QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1lBR0gsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUNELE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNqQixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDeEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7Z0JBQzFCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7WUFFSCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0QsU0FBUyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDO2dCQUM5QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUUxQyxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsc0JBQXNCLElBQUksdURBQXVEO1NBQ3pGLENBQUM7S0FDSCxDQUFDO0lBRUYsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUM1RSxDQUFDLENBQUMifQ==