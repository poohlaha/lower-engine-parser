/**
 * @fileOverview ColorPicker
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'
import { MPopover } from '../../components'
import Icons from '../../utils/icons'
import { Tooltip, Slider, InputNumber } from 'antd'
import Selector from '../selector'
import { OTHER_SELECTED, NORMAL_COLOR_LIST, ANT_DESIGN_COLOR_LIST, APPLE_IOS_UL_LIST, MATERIAL_DESIGN_LIST, LINEAR_GRADIENT, RADIAL_GRADIENT, COLOR_SPACE_LIST } from './config'
import { hexToHsb, hexToRgab, hsbToHex, rgbaToHex, hexWithOpacity, rgbToHex } from './convert'

export type COLOR_SELECT = ['HEX', 'RGB', 'CSS', 'HSB']

export interface IColorProps extends ICommonProps {
  color?: string
  opacity?: number
  colorSelect?: COLOR_SELECT
  disabledColorSpace?: boolean
  disabledColorPicker?: boolean
  needLatestUse?: boolean // 是否需要展示最近使用
  recentlyUsedList?: Array<Array<string | number>>
  onColorChange?: (value: string, color: { [K: string]: any }, noSupportText?: string, cancelText?: string) => void
}

const Color = (props: PropsWithChildren<IColorProps>): ReactElement => {
  const COLOR_SELECTED = ['HEX', 'RGB', 'CSS', 'HSB']
  const [color, setColor] = useState<{ [K: string]: any }>({ r: 255, g: 255, b: 255, a: 1, rgb: 'rgb(255, 255, 255)', hex: '#ffffff' })
  const [colorSelect, setColorSelect] = useState<string>(COLOR_SELECTED[0])
  const [usedList, setUsedList] = useState<Array<Array<string | number>>>([])
  const [type, setType] = useState<number>(1) // 1: 色彩空间 2: 色板
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [colorItemActiveIndex, setColorItemActiveIndex] = useState<number>(-1)
  const [open, setOpen] = useState(false)
  const [toggleOtherColor, setToggleOtherColor] = useState(true)

  const [otherSelected, setOtherSelected] = useState(OTHER_SELECTED[0].value)

  // 点选位置
  const [pointerPosition, setPointerPosition] = useState({
    left: '0%',
    top: '0%',
  })

  const pickerPlaneRef = useRef<HTMLDivElement>(null)

  // HSV色环: 0 - 红 60 - 黄 120 - 绿 180 - 青 240 - 蓝 300 - 品红 360 - 红
  const [hue, setHue] = useState(0)
  const [hsb, setHsb] = useState({
    h: 0,
    s: 0,
    v: 100,
  })

  const updateFromPicker = useRef(false)

  useEffect(() => {
    if (updateFromPicker.current) {
      updateFromPicker.current = false
      return
    }

    let o = props.opacity ?? 100
    if (o < 0) {
      o = 0
    }

    if (o > 100) {
      o = 100
    }

    const rgba: { [K: string]: any } = hexToRgab(props.color || '', o) || {}
    const newColor = Utils.isBlank(props.color || '')
      ? { r: 255, g: 255, b: 255, a: 1, rgb: 'rgb(255, 255, 255)', hex: '#ffffff', value: '#ffffff' }
      : { r: rgba.r, g: rgba.g, b: rgba.b, a: rgba.a, rgb: rgba.rgb || '', hex: rgba.hex || '' }

    setColor(prev => {
      if (prev.hex === newColor.hex && prev.a === newColor.a) {
        return prev
      }

      return newColor
    })

    // 初始化 hue
    // 左上: (0,0), 右上: (100, 0), 左下:(0, 100), 右下:(100, 100)
    const hsb: Record<string, any> = hexToHsb(newColor.hex, newColor.a) || {}
    if (hsb && Object.keys(hsb).length > 0) {
      let h = hsb.r
      let s = hsb.g
      let v = hsb.b

      setHue(h)

      // pointer
      setPointerPosition({
        left: `${s}%`,
        top: `${100 - v}%`,
      })

      setHsb({
        h,
        s,
        v,
      })
    }
  }, [props.color, props.opacity])

  useEffect(() => {
    const disabledColorSpace = props.disabledColorSpace ?? false
    setType(disabledColorSpace ? 2 : 1)
  }, [props.disabledColorSpace])

  useEffect(() => {
    setUsedList((props.recentlyUsedList || []).length > 0 ? props.recentlyUsedList || [] : [])
  }, [props.recentlyUsedList])

  const getOtherColorList = () => {
    if (otherSelected === OTHER_SELECTED[0].value) {
      return NORMAL_COLOR_LIST || []
    }

    if (otherSelected === OTHER_SELECTED[1].value) {
      return ANT_DESIGN_COLOR_LIST || []
    }

    if (otherSelected === OTHER_SELECTED[2].value) {
      return APPLE_IOS_UL_LIST || []
    }

    if (otherSelected === OTHER_SELECTED[3].value) {
      return MATERIAL_DESIGN_LIST || []
    }

    if (otherSelected === OTHER_SELECTED[4].value) {
      return LINEAR_GRADIENT || []
    }

    if (otherSelected === OTHER_SELECTED[5].value) {
      return LINEAR_GRADIENT || []
    }

    return []
  }

  /**
   * 设置颜色
   */
  const setColorValue = (str: string = '', a: number) => {
    const rgba: { [K: string]: any } = hexToRgab(str || '', a) || {}
    setColor(rgba)
    console.log('rgba: ', rgba)
    return rgba
  }

  /**
   * 其他颜色选择
   */
  const getOtherList = () => {
    const selected = OTHER_SELECTED.find((item: { [K: string]: any } = {}) => item.value === otherSelected) || {}
    const otherColorList = getOtherColorList()
    return (
      <div className="workspace-select flex-direction-column">
        <div className="flex-align-center flex-jsc-between workspace-select-header">
          <Selector
            className="lower-engine-color-workspace-selector"
            name="Selector"
            setter="SelectorSetter"
            title=""
            items={OTHER_SELECTED}
            default={selected}
            onChange={(value: any = {}) => {
              setOtherSelected(value.value || '')
            }}
          />

          <div className="svg-box flex-center no-hover" onClick={() => setToggleOtherColor(!toggleOtherColor)}>
            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg">
              <path d="M.424 4.667a.6.6 0 0 1 0-.849L3.818.424a.6.6 0 0 1 .848 0l3.395 3.394a.6.6 0 1 1-.849.849l-2.97-2.97-2.97 2.97a.6.6 0 0 1-.848 0z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* 选择的颜色列表 */}
        {toggleOtherColor && (
          <div className="current-palette">
            {(otherColorList || []).map((c: { [K: string]: any } = {}, index: number) => {
              return (
                <div className="current-palette-color" key={index}>
                  <li
                    className={`gradient-bg ${c.value === 'transparent' ? 'transparent' : ''} ${color.rgb === c.value ? 'active' : ''}`}
                    onClick={() => {
                      const newColor = rgbToHex(c.value || '', color.a) || {}
                      setColor(newColor)
                      setColorItemActiveIndex(-1)
                      updateFromPicker.current = true
                      props.onColorChange?.(newColor.hex || '', color || {})
                    }}
                  >
                    <div className="color-box" style={{ background: c.value || '' }}></div>
                  </li>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  /**
   * 色彩空间点选
   */
  const onPositionMouseDown = (event: any = {}) => {
    const rect = pickerPlaneRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // 限制范围
    const offsetX = Math.max(0, Math.min(x, rect.width))
    const offsetY = Math.max(0, Math.min(y, rect.height))

    const left = (offsetX / rect.width) * 100
    const top = (offsetY / rect.height) * 100

    setPointerPosition({
      left: `${left}%`,
      top: `${top}%`,
    })

    // HSV, 左上: s=100, v=100 右上: s=0, v=100, 左下 s=100,v=0
    const s = 100 - left
    const v = 100 - top

    console.log('hsv:', { h: hue, s, v })
    const newHsb = { h: hue, s, v }
    setHsb(newHsb)

    const newColor = hsbToHex(newHsb.h, newHsb.s, newHsb.v, color.a)
    console.log('choose color:', newColor)

    setColor(newColor)
    updateFromPicker.current = true
    props.onColorChange?.(newColor.hex || '', newColor || {})
  }

  const getContent = () => {
    let inputColor = rgbaToHex(color.r, color.g, color.b, 100).hex || ''
    if (colorSelect === COLOR_SELECTED[2]) {
      inputColor = color.rgb || ''
    }

    // hex 不需要 #
    if (colorSelect === COLOR_SELECTED[0]) {
      inputColor = inputColor.substring(1, inputColor.length)
    }

    const needLatestUse = props.needLatestUse ?? false
    const disabledColorSpace = props.disabledColorSpace ?? false
    const disabledColorPicker = props.disabledColorPicker ?? false
    return (
      <div className="lower-engine-color-popover-content">
        {/* tab */}
        <div className="color-picker-header flex-align-center flex-jsc-between">
          <div className="flex-1 header-text">
            <div className="header-icon" data-value="0">
              <Tooltip title="纯色填充">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7.5" fill="#0077FF" stroke="#0077FF" strokeWidth="1px" fillRule="evenodd" fillOpacity=".54"></circle>
                </svg>
              </Tooltip>
            </div>
          </div>

          <div className="close-btn" onClick={() => setOpen(false)}>
            {Icons.getCloseNode()}
          </div>
        </div>

        {/* 色彩空间 | 色板 */}
        <div className="color-picker-body">
          <div className="tab-line flex-jsc-between flex-align-center">
            <span>{type === 2 ? '色板' : '色彩空间'}</span>
            <div className="selector-sc flex-align-center">
              <div
                className={`color-space flex-align-center ${disabledColorSpace ? 'disabled' : ''} ${type === 1 ? 'active' : ''}`}
                onClick={() => {
                  if (disabledColorSpace) return
                  setType(1)
                }}
              >
                {Icons.getColorSpaceNode()}
              </div>
              <div
                className={`color-swatch flex-align-center ${type === 2 ? 'active' : ''}`}
                onClick={() => {
                  setType(2)
                }}
              >
                {Icons.getColorSwatchNode()}
              </div>
            </div>
          </div>

          {/* picker */}
          <div className="color-picker">
            {type === 1 && (
              <div className="picker">
                <div className="picker-plane" ref={pickerPlaneRef} onMouseDown={onPositionMouseDown}>
                  <div
                    className="base-hub-layer"
                    style={{
                      background: `hsl(${hue},100%,50%)`,
                    }}
                  ></div>
                  <div className="s-layer"></div>
                  <div className="v-layer"></div>
                  <i
                    className="pointer"
                    style={{
                      left: pointerPosition.left,
                      top: pointerPosition.top,
                    }}
                  ></i>
                </div>
                <div className="picker-band">
                  <Slider
                    min={0}
                    max={100}
                    tooltip={{
                      open: false,
                    }}
                    vertical={true}
                    value={100 - (hue / 360) * 100}
                    onChange={(value: number = 0) => {
                      console.log('change value: ', value)
                      /**
                       * slider: 100 顶部, 0: 底部
                       * hue: 0: 顶部, 360: 底部
                       */
                      const h = ((100 - value) / 100) * 360

                      const newHsb = {
                        h,
                        s: hsb.s,
                        v: hsb.v,
                      }

                      setHue(h)
                      setHsb(newHsb)

                      const newColor = hsbToHex(newHsb.h, newHsb.s, newHsb.v, color.a)
                      setColor(newColor)

                      updateFromPicker.current = true
                      props.onColorChange?.(newColor.hex || '', newColor)
                    }}
                  />
                </div>
              </div>
            )}

            {type === 2 && (
              <div className="colors-container">
                {(COLOR_SPACE_LIST || []).map((c, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`color-item ${colorItemActiveIndex === index ? 'active' : ''}`}
                      style={{ background: c.value || '' }}
                      onClick={() => {
                        setColorItemActiveIndex(index)
                        const newColor = rgbToHex(c.value || '', color.a) || {}
                        setColor(newColor)
                        updateFromPicker.current = true
                        props.onColorChange?.(newColor.hex || '', newColor || {})
                      }}
                    />
                  )
                })}
              </div>
            )}

            <div className="opacity-box flex-jsc-between flex-align-center">
              <div className="opacity flex-align-center flex-jsc-start">
                <div
                  className={`color-picker-btn flex-center ${disabledColorPicker ? 'disabled' : ''}`}
                  onClick={async () => {
                    if (disabledColorPicker) {
                      return
                    }

                    if (!('EyeDropper' in window)) {
                      updateFromPicker.current = true
                      props.onColorChange?.('', {}, '浏览器不支持取色器')
                      return
                    }

                    const eyeDropper = new (window as any).EyeDropper()
                    try {
                      const result = await eyeDropper.open()
                      const newColor = hexToRgab(result.sRGBHex || '', color.a) || {}
                      setColor(newColor)
                      setColorItemActiveIndex(-1)
                      updateFromPicker.current = true
                      props.onColorChange?.(newColor.hex || '', newColor)
                    } catch (e) {
                      updateFromPicker.current = true
                      props.onColorChange?.('', {}, '', '取消颜色选择')
                    }
                  }}
                >
                  {Icons.getColorPickerNode()}
                </div>
                <div className="opacity-band">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      background: `linear-gradient(to right, transparent 0%, ${color.rgb || ''} 100%)`,
                    }}
                  ></div>
                  <div className="rail">
                    <Slider
                      min={0}
                      max={100}
                      value={color.a}
                      onChange={(value: number) => {
                        const hex = hexWithOpacity(color.hex, value)
                        const newColor = {
                          ...color,
                          hex,
                          a: value
                        }

                        setColor(newColor)

                        updateFromPicker.current = true
                        props.onColorChange?.(hex || '', newColor || {})
                      }}
                      tooltip={{
                        open: false,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="color-group flex-jsc-between">
            <div className="colors flex-jsc-start flex-align-center">
              <Selector
                className="lower-engine-color-selector"
                name="Selector"
                setter="SelectorSetter"
                title=""
                items={COLOR_SELECTED}
                default={colorSelect}
                onChange={value => {
                  // rgb
                  if (value === COLOR_SELECTED[1]) {
                    setColor(hexToRgab(color.hex || '', color.a))
                    console.log(hexToRgab(color.hex || '', color.a))
                  } else if (value === COLOR_SELECTED[2]) {
                    setColor(hexToRgab(color.hex || '', color.a))
                    console.log(hexToRgab(color.hex || '', color.a))
                  } else if (value === COLOR_SELECTED[3]) {
                    setColor(hexToHsb(color.hex || '', color.a))
                    console.log(hexToHsb(color.hex || '', color.a))
                  }
                  setColorSelect(`${value || ''}`)
                }}
              />

              <div className={`hex-input flex-align-center ${colorSelect.toLowerCase()}-hex-input ${inputFocus ? 'focused' : ''}`}>
                {colorSelect === COLOR_SELECTED[0] && <a className="hex-suffix">#</a>}
                {/* hex|css */}
                {(colorSelect === COLOR_SELECTED[0] || colorSelect === COLOR_SELECTED[2]) && (
                  <input
                    className="bg-color-text"
                    value={inputColor || ''}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    onChange={event => {
                      let value = (event.target.value || '').toUpperCase()
                      if (/\s/.test(value)) {
                        // 颜色补齐
                        setColorValue(value, color.a)
                      }
                    }}
                  />
                )}

                {/* rgb | hsb */}
                {(colorSelect === COLOR_SELECTED[1] || colorSelect === COLOR_SELECTED[3]) && (
                  <div className="hex-input-rgb flex-align-center">
                    <InputNumber
                      className="bg-color-text"
                      value={color.r}
                      min={0}
                      max={255}
                      onFocus={() => setInputFocus(true)}
                      onBlur={() => setInputFocus(false)}
                      onChange={value => {
                        let c
                        if (colorSelect === COLOR_SELECTED[3]) {
                          c = hsbToHex(value || 0, color.g, color.b, color.a)
                        } else {
                          c = rgbaToHex(value || 0, color.g, color.b, color.a)
                        }
                        setColor(c)
                        console.log(c)
                      }}
                    />
                    <InputNumber
                      className="bg-color-text"
                      value={color.g}
                      onFocus={() => setInputFocus(true)}
                      onBlur={() => setInputFocus(false)}
                      onChange={value => {
                        let c
                        if (colorSelect === COLOR_SELECTED[3]) {
                          c = hsbToHex(color.r, value || 0, color.b, color.a)
                        } else {
                          c = rgbaToHex(color.r, value || 0, color.b, color.a)
                        }
                        setColor(c)
                        console.log(c)
                      }}
                    />
                    <InputNumber
                      className="bg-color-text"
                      value={color.b}
                      onFocus={() => setInputFocus(true)}
                      onBlur={() => setInputFocus(false)}
                      onChange={value => {
                        let c
                        if (colorSelect === COLOR_SELECTED[3]) {
                          c = hsbToHex(color.r, color.g, value || 0, color.a)
                        } else {
                          c = rgbaToHex(color.r, color.g, value || 0, color.a)
                        }
                        setColor(c)
                        console.log(c)
                      }}
                    />
                  </div>
                )}

                <div className="hex-input-opacity flex-1 flex">
                  <InputNumber
                    className="hex-input-opacity-input"
                    min={0}
                    max={100}
                    style={{ width: 53 }}
                    value={color.a}
                    onChange={value => {
                      const hex = hexWithOpacity(color.hex, value)
                      const newColor = {
                        ...color,
                        hex,
                        a: value
                      }

                      setColor(newColor)

                      updateFromPicker.current = true
                      props.onColorChange?.(hex || '', newColor || {})
                    }}
                  />

                  <div className="suffix flex-align-center">
                    <p>%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider-setter"></div>

          {/* 最近使用 */}
          {needLatestUse && (
            <div className="panel-color-list">
              <header className="flex-jsc-between flex-align-center">
                <span>最近使用</span>
              </header>
              <div className="current-palette">
                {(usedList || []).length > 0 &&
                  usedList.map((used, index: number) => {
                    if (used.length === 0) return null
                    let usedColor = ''
                    let useOpacity = 1
                    if (used.length === 1) {
                      usedColor = (used[0] as string) || ''
                    }

                    if (used.length > 1) {
                      usedColor = (used[0] as string) || ''
                      useOpacity = (used[0] as number) || 1
                    }

                    return (
                      <div className="current-palette-color" key={index}>
                        <div
                          className="color-box"
                          style={{
                            background: usedColor || '',
                            opacity: useOpacity,
                          }}
                        />
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          {/* 其他颜色列表 */}
          {getOtherList()}
        </div>
      </div>
    )
  }

  const render = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')

    return (
      <div className={`${props.className || ''} lower-engine-color cursor-pointer ${props.alignment === 'upDown' ? 'flex' : 'flex-center'}`}>
        <MPopover
          className="lower-engine-color-popover"
          placement="left"
          content={getContent()}
          width={255}
          open={open}
          onOpenChange={(newOpen: boolean) => {
            setOpen(newOpen)
          }}
        >
          <div className="flex wh100">
            {props.children ? (
              props.children
            ) : (
              <div className={`${alignmentClassName} wh100 lower-engine-color-box`}>
                {!Utils.isBlank(props.text || '') && <div className="lower-engine-color-header">{props.text || ''}</div>}
                <div className="lower-engine-color-thumbnail">
                  <div
                    className="thumbnail"
                    style={{
                      background: `rgb(${color.r}, ${color.g}, ${color.b})`,
                      opacity: color.a,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </MPopover>
      </div>
    )
  }

  return render()
}

export default Color
