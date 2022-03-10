import { NextFunction, Request, Response, Router } from 'express'
import app from './app'
import { Color } from './lib'

const router: Router = Router()

router.get('/random', (_, res: Response) => {
  const hex: string = Color.randomHex()

  return res.redirect(`/color/${hex}`)
})

router.get('/:color', (req: Request, res: Response, next: NextFunction) => {
  try {
    const color = new Color(req.params.color)

    const data = {
      title: `#${color.hex}`,
      color: color.hex,
      colorRGB: color.RGB,
      colorHSL: color.HSL,
      contrastColor: color.hex,
      compliment: (color.compliment as Color).hex,
      complimentRGB: (color.compliment as Color).RGB,
      complimentHSL: (color.compliment as Color).HSL,
      complimentContrastColor: (color.compliment as Color).contrastColor
    }

    return res.render('pages/color.pug', data)
  } catch (e) {
    if ((e as Error).message) return next((e as Error).message)
    next('Invalid color')
  }
})

app.use('/color', router)

export default app
