import { useMemo } from "react";

/**
 * A custom React hook that provides a function to sanitize user input by removing non-alphanumeric characters (except for spaces).
 *
 * @returns {(input: string) => string} A function that takes a string input and returns a sanitized version of the input.
 */
export const useSanitizeInput = (): (input: string) => string => {
    const sanitizeInput = useMemo(() => {
        return (input: string) => {
            return input.replace(/[^a-zA-Zа-яА-Я0-9 ]/g, '');
        };
    }, []);

    return sanitizeInput;
};
