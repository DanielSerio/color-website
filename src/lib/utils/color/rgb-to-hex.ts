/**
 * Convert RGB color values to hexadecimal
 * @param {number} r - red value (0-255)
 * @param {number} g - green value (0-255)
 * @param {number} b - blue value (0-255)
 * @returns {string} hex
 */
export function RGBToHex (r: number, g: number, b: number): string {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}
