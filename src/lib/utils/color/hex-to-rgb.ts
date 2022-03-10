import { RGB } from '../../types'
import { isValidHex } from './is-valid-hex'

/**
 * Given a hex string, return an array of RGB values
 * @param {string} hex - The hexadecimal value to convert to RGB.
 * @returns {RGB} [R, G, B]
 */
export function hexToRGB (hex: string): RGB {
  if (!isValidHex(hex)) throw new Error(`Invalid hex: ${hex}`)
  const asInt = (value: string): number => parseInt(value, 16)
  const [_, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) as RegExpExecArray
  return [asInt(r), asInt(g), asInt(b)] as RGB
}
