class ValidationError extends Error {
    status:number;
    constructor(message:string, status:number) {
      super(message);
      this.name = 'ValidationError';
      this.status = status; 
    }
  }
  
  class DatabaseError extends Error {
    status:number;
    constructor(message:string) {
      super(message);
      this.name = 'DatabaseError';
      this.status = 500; // HTTP status code for Internal Server Error
    }
  }
  
  class AuthorizationError extends Error {
    status:number;
    constructor(message:string) {
      super(message);
      this.name = 'AuthorizationError';
      this.status = 403; // HTTP status code for Forbidden
    }
  }
  
  export {
    ValidationError,
    DatabaseError,
    AuthorizationError,
  };
  