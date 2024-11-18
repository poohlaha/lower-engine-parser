/**
 * @fileOverview ColorPicker
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'
import { MPopover } from '../../components'
import Icons from '../../utils/icons'
import { Tooltip, Slider, InputNumber } from 'antd'
import Selector from '../selector'

export type COLOR_SELECT = ['HEX', 'RGBA', 'CSS', 'HSB']

export interface IColorProps extends ICommonProps {
  color?: string
  opacity?: number
  colorSelect?: COLOR_SELECT
  recentlyUsedList: Array<Array<string | number>>
  onColorChange?: (color: string) => void
  onOpacityChange?: (opacity: number) => void
}

const Color = (props: IColorProps): ReactElement => {
  const COLOR_SELECTED = ['HEX', 'RGBA', 'CSS', 'HSB']
  const [color, setColor] = useState<string>('#FFFFFF')
  const [opacity, setOpacity] = useState<number>(1)
  const [colorSelect, setColorSelect] = useState<string>(COLOR_SELECTED[0])
  const [usedList, setUsedList] = useState<Array<Array<string | number>>>([])
  const [type, setType] = useState<number>(1) // 1: 色彩空间 2: 色板
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [colorItemActiveIndex, setColorItemActiveIndex] = useState<number>(0)

  useEffect(() => {
    setColor(Utils.isBlank(props.color || '') ? '#FFFFFF' : (props.color || '').toUpperCase())
  }, [props.color])

  useEffect(() => {
    let o = props.opacity ?? 100
    if (o < 0) {
      o = 0
    }

    if (o > 100) {
      o = 100
    }
    setOpacity(o)
  }, [props.opacity])

  useEffect(() => {
    setUsedList((props.recentlyUsedList || []).length > 0 ? props.recentlyUsedList || [] : [])
  }, [props.recentlyUsedList])

  const getContent = () => {
    let inputColor = (color || '').replace('#', '').toUpperCase()
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

          <div className="close-btn">{Icons.getCloseNode()}</div>
        </div>

        {/* 色彩空间 | 色板 */}
        <div className="color-picker-body">
          <div className="tab-line flex-jsc-between flex-align-center">
            <span>色彩空间</span>
            <div className="selector-sc flex-align-center">
              <div
                className={`color-space flex-align-center ${type === 1 ? 'active' : ''}`}
                onClick={() => {
                  setType(1)
                }}
              >
                {Icons.getColorSpaceNode()}
              </div>
              <div
                className={`color-swatch flex-align-center ${type === 2 ? 'active' : ''}`}
                onClick={() => {
                  setType(2)
                  setColorItemActiveIndex(0)
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
                <div className="picker-plane">
                  <div className="base-hub-layer"></div>
                  <div className="s-layer"></div>
                  <div className="v-layer"></div>
                  <i className="pointer"></i>
                </div>
                <div className="picker-band">
                  <div className="rail">
                    <Slider
                      min={0}
                      max={100}
                      tooltip={{
                        open: false,
                      }}
                      vertical={true}
                      onChange={(value: number | string | null) => {}}
                    />
                  </div>
                </div>
              </div>
            )}

            {type === 2 && (
              <div className="colors-container">
                <div
                  className={`color-item ${colorItemActiveIndex === 1 ? 'active' : ''}`}
                  style={{ background: '#000000' }}
                  onClick={() => {
                    setColorItemActiveIndex(1)
                    setColor('#000000')
                    props.onColorChange?.('#000000')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 2 ? 'active' : ''}`}
                  style={{ background: '#333333' }}
                  onClick={() => {
                    setColorItemActiveIndex(2)
                    setColor('#333333')
                    props.onColorChange?.('#333333')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 3 ? 'active' : ''}`}
                  style={{ background: '#4F4F4F' }}
                  onClick={() => {
                    setColorItemActiveIndex(3)
                    setColor('#4F4F4F')
                    props.onColorChange?.('#4F4F4F')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 4 ? 'active' : ''}`}
                  style={{ background: '#6c6c6c' }}
                  onClick={() => {
                    setColorItemActiveIndex(4)
                    setColor('#6c6c6c')
                    props.onColorChange?.('#6c6c6c')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 5 ? 'active' : ''}`}
                  style={{ background: '#9a9a9a' }}
                  onClick={() => {
                    setColorItemActiveIndex(5)
                    setColor('#9a9a9a')
                    props.onColorChange?.('#9a9a9a')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 6 ? 'active' : ''}`}
                  style={{ background: '#bebebe' }}
                  onClick={() => {
                    setColorItemActiveIndex(6)
                    setColor('#bebebe')
                    props.onColorChange?.('#bebebe')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 7 ? 'active' : ''}`}
                  style={{ background: '#cecece' }}
                  onClick={() => {
                    setColorItemActiveIndex(7)
                    setColor('#cecece')
                    props.onColorChange?.('#cecece')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 8 ? 'active' : ''}`}
                  style={{ background: '#efefef' }}
                  onClick={() => {
                    setColorItemActiveIndex(8)
                    setColor('#efefef')
                    props.onColorChange?.('#efefef')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 9 ? 'active' : ''}`}
                  style={{ background: '#ffffff' }}
                  onClick={() => {
                    setColorItemActiveIndex(9)
                    setColor('#ffffff')
                    props.onColorChange?.('#ffffff')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 10 ? 'active' : ''}`}
                  style={{ background: '#de868f' }}
                  onClick={() => {
                    setColorItemActiveIndex(10)
                    setColor('#de868f')
                    props.onColorChange?.('#de868f')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 11 ? 'active' : ''}`}
                  style={{ background: '#fcca00' }}
                  onClick={() => {
                    setColorItemActiveIndex(11)
                    setColor('#fcca00')
                    props.onColorChange?.('#fcca00')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 12 ? 'active' : ''}`}
                  style={{ background: '#f4ce98' }}
                  onClick={() => {
                    setColorItemActiveIndex(12)
                    setColor('#f4ce98')
                    props.onColorChange?.('#f4ce98')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 13 ? 'active' : ''}`}
                  style={{ background: '#fefa83' }}
                  onClick={() => {
                    setColorItemActiveIndex(13)
                    setColor('#fefa83')
                    props.onColorChange?.('#fefa83')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 14 ? 'active' : ''}`}
                  style={{ background: '#ccf783' }}
                  onClick={() => {
                    setColorItemActiveIndex(14)
                    setColor('#ccf783')
                    props.onColorChange?.('#ccf783')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 15 ? 'active' : ''}`}
                  style={{ background: '#B4FDFF' }}
                  onClick={() => {
                    setColorItemActiveIndex(15)
                    setColor('#B4FDFF')
                    props.onColorChange?.('#B4FDFF')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 16 ? 'active' : ''}`}
                  style={{ background: '#93D2F3' }}
                  onClick={() => {
                    setColorItemActiveIndex(16)
                    setColor('#93D2F3')
                    props.onColorChange?.('#93D2F3')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 17 ? 'active' : ''}`}
                  style={{ background: '#7F83F7' }}
                  onClick={() => {
                    setColorItemActiveIndex(17)
                    setColor('#7F83F7')
                    props.onColorChange?.('#7F83F7')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 18 ? 'active' : ''}`}
                  style={{ background: '#B886F8' }}
                  onClick={() => {
                    setColorItemActiveIndex(18)
                    setColor('#B886F8')
                    props.onColorChange?.('#B886F8')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 19 ? 'active' : ''}`}
                  style={{ background: '#BD3124' }}
                  onClick={() => {
                    setColorItemActiveIndex(19)
                    setColor('#BD3124')
                    props.onColorChange?.('#BD3124')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 20 ? 'active' : ''}`}
                  style={{ background: '#E99D42' }}
                  onClick={() => {
                    setColorItemActiveIndex(20)
                    setColor('#E99D42')
                    props.onColorChange?.('#E99D42')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 21 ? 'active' : ''}`}
                  style={{ background: '#FFBF6B' }}
                  onClick={() => {
                    setColorItemActiveIndex(21)
                    setColor('#FFBF6B')
                    props.onColorChange?.('#FFBF6B')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 22 ? 'active' : ''}`}
                  style={{ background: '#FFF81D' }}
                  onClick={() => {
                    setColorItemActiveIndex(22)
                    setColor('#FFF81D')
                    props.onColorChange?.('#FFF81D')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 23 ? 'active' : ''}`}
                  style={{ background: '#A2EF4D' }}
                  onClick={() => {
                    setColorItemActiveIndex(23)
                    setColor('#A2EF4D')
                    props.onColorChange?.('#A2EF4D')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 24 ? 'active' : ''}`}
                  style={{ background: '#75F9FD' }}
                  onClick={() => {
                    setColorItemActiveIndex(24)
                    setColor('#75F9FD')
                    props.onColorChange?.('#75F9FD')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 25 ? 'active' : ''}`}
                  style={{ background: '#4095E5' }}
                  onClick={() => {
                    setColorItemActiveIndex(25)
                    setColor('#4095E5')
                    props.onColorChange?.('#4095E5')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 26 ? 'active' : ''}`}
                  style={{ background: '#0F40F5' }}
                  onClick={() => {
                    setColorItemActiveIndex(26)
                    setColor('#0F40F5')
                    props.onColorChange?.('#0F40F5')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 27 ? 'active' : ''}`}
                  style={{ background: '#7728F5' }}
                  onClick={() => {
                    setColorItemActiveIndex(27)
                    setColor('#7728F5')
                    props.onColorChange?.('#7728F5')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 28 ? 'active' : ''}`}
                  style={{ background: '#951D1D' }}
                  onClick={() => {
                    setColorItemActiveIndex(28)
                    setColor('#951D1D')
                    props.onColorChange?.('#951D1D')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 29 ? 'active' : ''}`}
                  style={{ background: '#A16222' }}
                  onClick={() => {
                    setColorItemActiveIndex(29)
                    setColor('#A16222')
                    props.onColorChange?.('#A16222')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 30 ? 'active' : ''}`}
                  style={{ background: '#CBA43F' }}
                  onClick={() => {
                    setColorItemActiveIndex(30)
                    setColor('#CBA43F')
                    props.onColorChange?.('#CBA43F')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 31 ? 'active' : ''}`}
                  style={{ background: '#BFBF3D' }}
                  onClick={() => {
                    setColorItemActiveIndex(31)
                    setColor('#BFBF3D')
                    props.onColorChange?.('#BFBF3D')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 32 ? 'active' : ''}`}
                  style={{ background: '#81B337' }}
                  onClick={() => {
                    setColorItemActiveIndex(32)
                    setColor('#81B337')
                    props.onColorChange?.('#81B337')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 33 ? 'active' : ''}`}
                  style={{ background: '#54BCBD' }}
                  onClick={() => {
                    setColorItemActiveIndex(33)
                    setColor('#54BCBD')
                    props.onColorChange?.('#54BCBD')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 34 ? 'active' : ''}`}
                  style={{ background: '#347CAF' }}
                  onClick={() => {
                    setColorItemActiveIndex(34)
                    setColor('#347CAF')
                    props.onColorChange?.('#347CAF')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 35 ? 'active' : ''}`}
                  style={{ background: '#0014B7' }}
                  onClick={() => {
                    setColorItemActiveIndex(35)
                    setColor('#0014B7')
                    props.onColorChange?.('#0014B7')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 36 ? 'active' : ''}`}
                  style={{ background: '#591BB7' }}
                  onClick={() => {
                    setColorItemActiveIndex(36)
                    setColor('#591BB7')
                    props.onColorChange?.('#591BB7')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 37 ? 'active' : ''}`}
                  style={{ background: '#641013' }}
                  onClick={() => {
                    setColorItemActiveIndex(37)
                    setColor('#641013')
                    props.onColorChange?.('#641013')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 38 ? 'active' : ''}`}
                  style={{ background: '#744E20' }}
                  onClick={() => {
                    setColorItemActiveIndex(38)
                    setColor('#744E20')
                    props.onColorChange?.('#744E20')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 39 ? 'active' : ''}`}
                  style={{ background: '#9B7D31' }}
                  onClick={() => {
                    setColorItemActiveIndex(39)
                    setColor('#9B7D31')
                    props.onColorChange?.('#9B7D31')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 40 ? 'active' : ''}`}
                  style={{ background: '#817F26' }}
                  onClick={() => {
                    setColorItemActiveIndex(40)
                    setColor('#817F26')
                    props.onColorChange?.('#817F26')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 41 ? 'active' : ''}`}
                  style={{ background: '#567722' }}
                  onClick={() => {
                    setColorItemActiveIndex(41)
                    setColor('#567722')
                    props.onColorChange?.('#567722')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 42 ? 'active' : ''}`}
                  style={{ background: '#377F7F' }}
                  onClick={() => {
                    setColorItemActiveIndex(42)
                    setColor('#377F7F')
                    props.onColorChange?.('#377F7F')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 43 ? 'active' : ''}`}
                  style={{ background: '#215476' }}
                  onClick={() => {
                    setColorItemActiveIndex(43)
                    setColor('#215476')
                    props.onColorChange?.('#215476')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 44 ? 'active' : ''}`}
                  style={{ background: '#000A7B' }}
                  onClick={() => {
                    setColorItemActiveIndex(44)
                    setColor('#000A7B')
                    props.onColorChange?.('#000A7B')
                  }}
                />
                <div
                  className={`color-item ${colorItemActiveIndex === 45 ? 'active' : ''}`}
                  style={{ background: '#3B0E7B' }}
                  onClick={() => {
                    setColorItemActiveIndex(45)
                    setColor('#3B0E7B')
                    props.onColorChange?.('#3B0E7B')
                  }}
                />
              </div>
            )}

            <div className="opacity-box flex-jsc-between flex-align-center">
              <div className="opacity flex-align-center flex-jsc-start">
                <div className="color-picker-btn flex-center">{Icons.getColorPickerNode()}</div>
                <div className="opacity-band">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      background: `linear-gradient(to right, transparent 0%, rgb(251, 244, 244) 100%)`,
                    }}
                  ></div>
                  <div className="rail">
                    <Slider
                      min={0}
                      max={100}
                      onChange={(value: number) => {
                        setOpacity(value)
                        props.onOpacityChange?.(value)
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
                  setColorSelect(`${value || ''}`)
                }}
              />

              <div className={`hex-input flex-align-center ${inputFocus ? 'focused' : ''}`}>
                <a className="hex-suffix">#</a>
                <input
                  className="bg-color-text"
                  value={inputColor || ''}
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                  onChange={event => {
                    let value = (event.target.value || '').toUpperCase()
                    if (/\s/.test(value)) {
                      // 颜色补齐
                      setColor(value)
                    }
                  }}
                />
                <div className="hex-input-opacity flex-1 flex">
                  <InputNumber
                    min={0}
                    max={100}
                    style={{ width: 53 }}
                    value={opacity}
                    onChange={value => {
                      setOpacity(value ?? 0)
                      props.onOpacityChange?.(value ?? 0)
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
        </div>
      </div>
    )
  }

  const render = () => {
    return (
      <div className={`${props.className || ''} lower-engine-color cursor-pointer flex-center`}>
        <MPopover className="lower-engine-color-popover" placement="left" content={getContent()} width={255}>
          <div className="lower-engine-color-thumbnail">
            <div
              className="thumbnail"
              style={{
                background: color,
                opacity,
              }}
            ></div>
          </div>
        </MPopover>
      </div>
    )
  }

  return render()
}

export default Color
