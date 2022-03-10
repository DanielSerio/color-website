import { HSL } from '../../types'

/**
 * Convert RGB to HSL
 * @param {number} r - red value (0-255)
 * @param {number} g - green value (0-255)
 * @param {number} b - blue value (0-255)
 * @returns {HSL} [H, S, L]
 */
export function RGBToHSL (r: number, g: number, b: number): HSL {
  const { max, min, floor } = Math
  r /= 255
  g /= 255
  b /= 255

  const MAX = max(r, g, b)
  const MIN = min(r, g, b)

  let h: number = 0
  let s: number = 0
  const l: number = (MAX + MIN) / 2

  if (MAX === MIN) h = s = 0
  else {
    const d: number = MAX - MIN

    s = l > 0.5 ? d / (2 - MAX - MIN) : d / (MAX + MIN)

    switch (MAX) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0)
      break
    case g:
      h = (b - r) / d + 2
      break
    case b:
      h = (r - g) / d + 4
      break
    }
    h /= 6
  }

  return [floor(h * 360), floor(s * 100), floor(l * 100)]
}
