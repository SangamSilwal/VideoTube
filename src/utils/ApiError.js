// Create a custom error class 'ApiError' that extends the built-in 'Error' class
class ApiError extends Error {
    // Constructor that takes parameters with default values
    constructor(
        statusCode,                // HTTP status code (e.g., 400, 404, 500)
        message = "Something went wrong",  // Default error message
        errors = [],               // Array for additional error details (e.g., validation errors)
        stack = ""                 // Optional: Manually pass stack trace for debugging
    ) {
        // Call the parent class (Error) constructor with the error message
        super(message);

        // Assign HTTP status code to the error object
        this.statusCode = statusCode;

        // 'data' field (initially null) - can be used to attach additional error data
        this.data = null;

        // Explicitly set the error message (redundant here since 'super(message)' already sets it)
        this.message = message;

        // 'success' flag (false for errors) - helps API consumers distinguish success/error responses
        this.success = false;

        // Store additional errors (useful for validation errors or multiple error messages)
        this.errors = errors;

        // Handle stack trace (important for debugging)
        if (stack) {
            // If a stack trace was provided manually, use it
            this.stack = stack;
        } else {
            // Otherwise, capture the stack trace from where the error was thrown
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the ApiError class to be used in other files
export { ApiError };