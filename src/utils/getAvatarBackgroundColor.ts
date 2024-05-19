/**
 * Generates a desaturated background color for an avatar based on the provided name.
 *
 * @param name - The name to use for generating the background color.
 * @returns A hexadecimal color string in the format `#RRGGBB`.
 */
export function getAvatarBackgroundColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const color = Math.abs(hash).toString(16).slice(-6);
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    const desaturatedR = Math.floor((r + 224) / 2);
    const desaturatedG = Math.floor((g + 224) / 2);
    const desaturatedB = Math.floor((b + 224) / 2);

    return `#${desaturatedR.toString(16).padStart(2, '0')}${desaturatedG.toString(16).padStart(2, '0')}${desaturatedB.toString(16).padStart(2, '0')}`;
}
