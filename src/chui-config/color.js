const ANSIColorPlate = {
  black: 'rgb(0, 0, 0)',
  gray: 'rgb(85, 85, 85)',
  red: 'rgb(187, 0, 0)',
  brightRed: 'rgb(255, 0, 0)',
  green: 'rgb(0, 187, 0)',
  brightGreen: 'rgb(0, 255, 0)',
  yellow: 'rgb(187, 187, 0)',
  brightYellow: 'rgb(255, 255, 0)',
  blue: 'rgb(0, 0, 187)',
  brightBlue: 'rgb(0, 0, 255)',
  magenta: 'rgb(187, 0, 187)',
  brightMagenta: 'rgb(255, 0, 255)',
  cyan: 'rgb(0, 187, 187)',
  brightCyan: 'rgb(0, 255, 255)',
  white: 'rgb(255, 255, 255)'
}

export const ColorPlates = {
  ansi: ANSIColorPlate
}

const globalColor = {
  colorPlate: ColorPlates.ansi,
  defaultFore: 'black',
  defaultBack: 'white'
}

export const getGlobalColor = () => globalColor

export const setGlobalPlate = plate => {
  globalColor.colorPlate = plate
}

export const setDefaultForeground = fore => {
  globalColor.defaultFore = fore
}

export const setDefaultBackground = back => {
  globalColor.defaultBack = back
}
