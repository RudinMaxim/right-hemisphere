/**
 * Generates a string of initials from a given name.
 *
 * @param name - The full name to generate initials from.
 * @returns A string of initials, where each initial is the first character of each word in the name.
 */
export function initialsUser(name: string) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('');
}
