/**
 * Given a hue, return the hue of the color that is 180 degrees away on the color wheel
 * @param {number} hue - the hue of the color you want to find the compliment of.
 * @returns {number} The compliment of the hue.
 */
export function getComplimentHue (hue: number): number {
  const compliment: number = hue + 180

  if (compliment >= 360) return compliment % 360
  return compliment
}
