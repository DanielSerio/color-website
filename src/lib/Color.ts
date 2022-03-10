import { HSL, RGB } from './types'
import { getComplimentHue, hexToRGB, HSLToHex, RGBToHSL, RGBToHex } from './utils/color/index'

export class Color {
  public hex: string
  public RGB: RGB
  public HSL: HSL
  public compliment?: Color
  public contrastColor!: string

  constructor (hex: string, isRoot: boolean = true) {
    this.hex = this.strippedHex(hex)
    this.RGB = hexToRGB(hex)
    this.HSL = RGBToHSL(...this.RGB)
    this.setContrastColor()
    const [h, s, l] = this.HSL
    const complimentHue: number = getComplimentHue(h)
    if (isRoot) {
      this.compliment = new Color(HSLToHex(complimentHue, s, l), false)
    }
  }

  private setContrastColor = (): void => {
    this.contrastColor = this.HSL[2] <= 50 ? 'white' : 'black'
  }

  private strippedHex = (hex: string) => hex.replace(/#/g, '')

  public static randomHex (): string {
    const { floor, random } = Math
    const getValue = (): number => floor(random() * 256)

    return RGBToHex(getValue(), getValue(), getValue())
  }
}
