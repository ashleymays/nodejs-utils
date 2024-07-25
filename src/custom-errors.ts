export interface CustomError extends Error {
  statusCode: number;
}

/**
 * Indicates that a resource was not found.
 * 
 * The status code is `404`.
 *
 * @class
 * @example
 * new NotFoundError(); // message is 'The resource you requested was not found.'
 * new NotFoundError('User was not found.'); // message is 'User was not found.'
 */
export class NotFoundError extends Error {
  statusCode: number;

  constructor(message = "The resource you requested was not found.") {
    super();
    this.message = message;
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}
/**
 * Indicates that any provided input was invalid.
 * 
 * The status code is `400`.
 *
 * @class
 * @example
 * new InvalidInputError(); // message is 'Invalid or missing input provided.'
 * new InvalidInputError('Email cannot be null.'); // message is 'Email cannot be null.'
 */
export class InvalidInputError extends Error {
  statusCode: number;

  constructor(message = "Invalid or missing input provided.") {
    super(message);
    this.name = "InvalidInputError";
    this.statusCode = 400;
  }
}

/**
 * Indicates that a user is unauthorized.
 * 
 * The status code is `401`.
 *
 * @class
 * @example
 * new UnauthorizedError(); // message is 'You are not authorized to access this resource.'
 * new UnauthorizedError('Please log in.'); // message is 'Please log in.'
 */
export class UnauthorizedError extends Error {
  statusCode: number;

  constructor(message = "You are not authorized to access this resource.") {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

/**
 * Indicates that there was an unspecified issue server-side.
 *
 * Should be used sparingly. Prefer a more specific type of error in most cases.
 * 
 * The status code is `500`.
 *
 * @class
 * @example
 * new GeneralError(); // message is 'Something went wrong.'
 * new GeneralError('There was a problem.'); // message is 'There was a problem.'
 */
export class GeneralError extends Error {
  statusCode: number;

  constructor(message = "Something went wrong.") {
    super(message);
    this.name = "GeneralError";
    this.statusCode = 500;
  }
}
