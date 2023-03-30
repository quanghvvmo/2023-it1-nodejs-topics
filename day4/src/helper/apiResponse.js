import status from "http-status";
const {
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    CONFLICT,
    UNPROCESSABLE_ENTITY,
} = status;

class ExtendableResponse {
    constructor(message, code, data) {
        this.message = message;
        this.code = code;
        if (data) {
            this.data = data;
        }
    }
}

class Common extends ExtendableResponse {
    constructor(message, code, data) {
        super(message || "", code || OK, data);
    }
}

class Success extends ExtendableResponse {
    constructor(message, data) {
        super(message || "Success.", OK, data);
    }
}

class CreatedSuccess extends ExtendableResponse {
    constructor(message, data) {
        super(message || "Data saved successfully.", CREATED, data);
    }
}

class DeletedSuccess extends ExtendableResponse {
    constructor(message) {
        super(message || "Data deleted successfully.", OK);
    }
}

class BadRequest extends ExtendableResponse {
    constructor(message, data) {
        super(message || "Bad request.", BAD_REQUEST, data);
    }
}

class Unauthorized extends ExtendableResponse {
    constructor(message, data) {
        super(message || "Unauthorized.", UNAUTHORIZED, data);
    }
}

class Forbidden extends ExtendableResponse {
    constructor(message) {
        super(message || `Don't have permissions.`, FORBIDDEN);
    }
}

class NotFound extends ExtendableResponse {
    constructor(message, data) {
        super(message || "Data not found.", NOT_FOUND, data);
    }
}

class Conflict extends ExtendableResponse {
    constructor(message, data) {
        super(message || "Data conflict.", CONFLICT, data);
    }
}

class ValidateFailed extends ExtendableResponse {
    constructor(message, data) {
        super(message || "Data validate failed.", UNPROCESSABLE_ENTITY);
        this.errors = data;
    }
}

export {
    Common,
    Success,
    CreatedSuccess,
    DeletedSuccess,
    BadRequest,
    Unauthorized,
    Forbidden,
    NotFound,
    Conflict,
    ValidateFailed,
};
