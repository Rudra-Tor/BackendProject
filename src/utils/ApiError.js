class ApiError extends Error {
    constructor(
        statusCode,
        message="Somthing wnet wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        // if (stack) {
        //     this.stack = stack
        // }
        // else{
        //     Error.captureStackTrace(this, this.constructor)
        // }

        stack ? this.stack = stack : Error.captureStackTrace(this, this.constructor)
    }
}


export {ApiError}