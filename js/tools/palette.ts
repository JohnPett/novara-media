import Vibrant from 'node-vibrant'

export async function palette(img: string): Promise<string | undefined> {
  const palette = await Vibrant.from(img).getPalette()
  if (palette.Vibrant) {
    return `rgb(${palette.Vibrant.r}, ${palette.Vibrant.g}, ${palette.Vibrant.b})`
  }
  if (palette.LightVibrant) {
    return `rgb(${palette.LightVibrant.r}, ${palette.LightVibrant.g}, ${palette.LightVibrant.b})`
  }
  if (palette.DarkVibrant) {
    return `rgb(${palette.DarkVibrant.r}, ${palette.DarkVibrant.g}, ${palette.DarkVibrant.b})`
  }
  if (palette.LightMuted) {
    return `rgb(${palette.LightMuted.r}, ${palette.LightMuted.g}, ${palette.LightMuted.b})`
  }
  if (palette.Muted) {
    return `rgb(${palette.Muted.r}, ${palette.Muted.g}, ${palette.Muted.b})`
  }
  if (palette.DarkMuted) {
    return `rgb(${palette.DarkMuted.r}, ${palette.DarkMuted.g}, ${palette.DarkMuted.b})`
  }
  return undefined
}
