/**
 * Checks if the given `error` object has a `message` property of type `string`.
 *
 * @param error - The error object to check.
 * @returns `true` if the `error` object has a `message` property of type `string`, `false` otherwise.
 */
export const isErrorWithMessage = (
    error: unknown
): error is { message: string } => {
    return typeof error === 'object' && error !== null && 'message' in error;
};
