/**
 * It checks if the string is a valid hex color.
 * @param {string} hex - the hex value to be validated
 * @returns {boolean} A boolean value.
 */
export function isValidHex (hex: string): boolean {
  const re: RegExp = /^(#?)([A-F0-9]{2}){3}$/i
  return re.test(hex)
}
