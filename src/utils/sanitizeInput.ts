/**
 * Sanitizes the input string by replacing special characters with their HTML entity equivalents.
 *
 * @param input - The input string to be sanitized.
 * @returns The sanitized string.
 */
export function sanitizeInput(input: string): string {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}
