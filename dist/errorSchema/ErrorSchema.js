class ValidationError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.name = 'ValidationError';
        this.status = status;
    }
}
class DatabaseError extends Error {
    status;
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
        this.status = 500; // HTTP status code for Internal Server Error
    }
}
class AuthorizationError extends Error {
    status;
    constructor(message) {
        super(message);
        this.name = 'AuthorizationError';
        this.status = 403; // HTTP status code for Forbidden
    }
}
export { ValidationError, DatabaseError, AuthorizationError, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JTY2hlbWEvRXJyb3JTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxlQUFnQixTQUFRLEtBQUs7SUFDL0IsTUFBTSxDQUFRO0lBQ2QsWUFBWSxPQUFjLEVBQUUsTUFBYTtRQUN2QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQUVELE1BQU0sYUFBYyxTQUFRLEtBQUs7SUFDL0IsTUFBTSxDQUFRO0lBQ2QsWUFBWSxPQUFjO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsNkNBQTZDO0lBQ2xFLENBQUM7Q0FDRjtBQUVELE1BQU0sa0JBQW1CLFNBQVEsS0FBSztJQUNwQyxNQUFNLENBQVE7SUFDZCxZQUFZLE9BQWM7UUFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQztJQUN0RCxDQUFDO0NBQ0Y7QUFFRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGFBQWEsRUFDYixrQkFBa0IsR0FDbkIsQ0FBQyJ9