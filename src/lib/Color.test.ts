import { Color } from './Color'

describe('Color', () => {
  it('should have a contrast color', () => {
    const black = new Color('#000000')
    const white = new Color('#ffffff')

    expect(black.contrastColor).toBe('white')
    expect(white.contrastColor).toBe('black')
  })

  it('should have a compliment color', () => {
    const red = new Color('#ff0000')

    expect((red.compliment as Color).HSL[0]).toBe(180)
  })

  it('should throw if invalid hex', () => {
    expect(() => new Color('sbcsbc')).toThrow()
  })

  it('should be able to generate random hex colors', () => {
    const randHex: string = Color.randomHex()
    expect(randHex).toBeTruthy()
    expect(randHex.length).toBe(6)
  })

  it('should have a compliment color that does not, itself, have a compliment color. (prevent endless loop)', () => {
    const randHex: string = Color.randomHex()
    const color: Color = new Color(randHex)
    console.log(color)
    expect(color.compliment).toBeTruthy()
    expect((color.compliment as Color).compliment).toBeFalsy()
  })
})
