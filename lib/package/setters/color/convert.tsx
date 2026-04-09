/**
 * @fileOverview 颜色转换
 * @date 2023-08-28
 * @author poohlaha
 */
/**
 * RGB -> HEX
 * str: "rgb(...)" 或 "rgba(...)"
 * opacity: 0~100 可选，如果传了就覆盖原来的透明度
 */
const rgbToHex = (str: string = '', opacity: number) => {
  // 提取数字
  const match = str.match(/rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)/i)
  if (!match) return {} // 格式不对返回 null

  const r = parseInt(match[1], 10)
  const g = parseInt(match[2], 10)
  const b = parseInt(match[3], 10)
  let a = match[4] !== undefined ? parseFloat(match[4]) : 1

  // 如果传入 opacity，覆盖 alpha
  if (opacity !== undefined) {
    a = Math.max(0, Math.min(100, opacity)) / 100 // 转 0~1
  }

  const toHex = (x: number) => x.toString(16).padStart(2, '0').toUpperCase()
  const alphaHex = a < 1 ? toHex(Math.round(a * 255)) : ''

  return {
    r,
    g,
    b,
    a: opacity,
    rgb: str,
    hex: `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`,
  }
}

/**
 * RGBA -> HEX
 */
const rgbaToHex = (r: number, g: number, b: number, a: number = 1) => {
  const toHex = (x: number) => x.toString(16).padStart(2, '0').toUpperCase()
  const alphaHex = a < 1 ? toHex(Math.round(a * 255)) : ''
  return {
    r,
    g,
    b,
    a: a <= 1 ? a * 100 : a,
    rgb: `(${r}, ${g}, ${b})`,
    hex: `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`,
  }
}

/**
 * HEX -> RGBA
 */
const hexToRgab = (str: string = '', a: number) => {
  // 去掉 # 号
  const hex = str.replace(/^#/, '')

  let r, g, b

  if (hex.length === 6) {
    // #RRGGBB
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else if (hex.length === 8) {
    // #RRGGBBAA
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else {
    return {} // 格式不对返回 null
  }

  return {
    hex: hexWithOpacity(str, a),
    rgb: `rgb(${r}, ${g}, ${b})`,
    r,
    g,
    b,
    a: a <= 1 ? a * 100 : a,
  }
}

/**
 * Hex -> HSB
 */
const hexToHsb = (str: string = '', a: number) => {
  // 去掉 #
  const hex = str.replace(/^#/, '')

  let r, g, b

  if (hex.length === 6) {
    // #RRGGBB
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else if (hex.length === 8) {
    // #RRGGBBAA
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else {
    return {} // 格式不对
  }

  // 转 HSB (HSV)
  let rr = r / 255,
    gg = g / 255,
    bb = b / 255
  let max = Math.max(rr, gg, bb),
    min = Math.min(rr, gg, bb)
  let h = 0,
    s,
    v = max

  let d = max - min
  s = max === 0 ? 0 : d / max

  if (d === 0) {
    h = 0
  } else {
    switch (max) {
      case rr:
        h = ((gg - bb) / d) % 6
        break
      case gg:
        h = (bb - rr) / d + 2
        break
      case bb:
        h = (rr - gg) / d + 4
        break
    }
    h *= 60
    if (h < 0) h += 360
  }

  return {
    hex: str,
    rgb: `rgb(${r}, ${g}, ${b})`,
    r: Math.round(h),
    g: Math.round(s * 100),
    b: Math.round(v * 100),
    a: a <= 1 ? a * 100 : a,
  }
}

/**
 * HSB -> Hex
 */
const hsbToHex = (h: number, s: number, b: number, opacity: number = 100) => {
  // 转 HSB -> RGB
  s /= 100
  b /= 100

  const c = b * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = b - c

  let r1 = 0,
    g1 = 0,
    b1 = 0

  if (h >= 0 && h < 60) {
    r1 = c
    g1 = x
    b1 = 0
  } else if (h >= 60 && h < 120) {
    r1 = x
    g1 = c
    b1 = 0
  } else if (h >= 120 && h < 180) {
    r1 = 0
    g1 = c
    b1 = x
  } else if (h >= 180 && h < 240) {
    r1 = 0
    g1 = x
    b1 = c
  } else if (h >= 240 && h < 300) {
    r1 = x
    g1 = 0
    b1 = c
  } else if (h >= 300 && h < 360) {
    r1 = c
    g1 = 0
    b1 = x
  }

  const r = Math.round((r1 + m) * 255)
  const g = Math.round((g1 + m) * 255)
  const bVal = Math.round((b1 + m) * 255)

  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase()
  const alphaHex = opacity < 1 ? toHex(Math.round(opacity * 255)) : ''

  return {
    r,
    g,
    b: bVal,
    a: opacity < 1 ? opacity * 100 : opacity,
    rgb: `rgb(${r}, ${g}, ${bVal})`,
    hex: `#${toHex(r)}${toHex(g)}${toHex(bVal)}${alphaHex}`,
  }
}

/**
 * HEX + opacity(0~100) -> HEX(带 alpha)
 */
const hexWithOpacity = (hex: string, opacity: number = 100): string => {
  hex = hex.replace(/^#/, '')

  // 只取前6位（避免原本就带 alpha）
  const base = hex.slice(0, 6)

  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase()
  const alpha = Math.max(0, Math.min(100, opacity))
  const alphaHex = alpha < 100 ? toHex(Math.round((alpha / 100) * 255)) : ''

  return `#${base.toUpperCase()}${alphaHex}`
}

export { rgbToHex, rgbaToHex, hexToRgab, hexToHsb, hsbToHex, hexWithOpacity }
