import { HSLToRGB } from './hsl-to-rgb'
import { RGBToHex } from './rgb-to-hex'

/**
 * Convert a hue, saturation, and lightness to a hex color
 * @param {number} h - hue, a number between 0 and 360
 * @param {number} s - saturation, a value between 0 and 1
 * @param {number} l - lightness, a number between 0 and 1
 * @returns {string} A string of 6 characters representing a hex color.
 */
export function HSLToHex (h: number, s: number, l: number): string {
  const [r, g, b] = HSLToRGB(h, s, l)
  return RGBToHex(r, g, b)
}
