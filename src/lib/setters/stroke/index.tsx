/**
 * @fileOverview Stroke 描边
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'
import { Select, InputNumber, Popover } from 'antd'
import Fill from '../fill'

export interface IStrokeProps extends ICommonProps {
  className?: string
  checked?: boolean
  text?: string
  color?: string
  opacity?: number
  selectedItemValue?: string
  items: Array<{ [K: string]: any }> // 下拉框线条
  onLineChange?: (line: string) => void
  onNumberChange?: (value: number) => void
  onBorderChange?: (borderList: Array<string>) => void
}

const Stroke = (props: IStrokeProps): ReactElement => {
  const BORDERS = ['top', 'right', 'bottom', 'left']
  const [line, setLine] = useState<string>('solid') // 线条
  const [value, setValue] = useState<number>(1) // 值
  const [borderList, setBorderList] = useState<Array<string>>(BORDERS) // 位置

  useEffect(() => {
    setValue(props.default ?? 1)
  }, [props.default])

  useEffect(() => {
    setLine(props.selectedItemValue ?? 'solid')
  }, [props.selectedItemValue])

  const getSelectItems = () => {
    let items = props.items || []
    if (items.length > 0) return items

    const getActiveNode = () => {
      return (
        <span className="svg-box-small no-hover flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 8 6" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.4 2.883a.64.64 0 00.194.471l1.949 1.903c.129.129.29.193.48.193a.643.643 0 00.473-.193l4.01-3.93A.627.627 0 007.709.86a.614.614 0 00-.201-.465A.667.667 0 007.028.2a.667.667 0 00-.479.194l-3.526 3.46-1.472-1.441a.667.667 0 00-.479-.194.667.667 0 00-.478.194.64.64 0 00-.194.47z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      )
    }

    return [
      {
        label: (
          <div className={`stroke-solid flex-align-center ${line === 'solid' ? 'active' : ''}`}>
            {line === 'solid' && getActiveNode()}
            <div className="stroke-solid-line"></div>
          </div>
        ),
        value: 'solid',
      },
      {
        label: (
          <div className={`stroke-dotted flex-align-center ${line === 'dotted' ? 'active' : ''}`}>
            {line === 'dotted' && getActiveNode()}
            <div className="stroke-dotted-line"></div>
          </div>
        ),
        value: 'dotted',
      },
      {
        label: (
          <div className={`stroke-dashed flex-align-center ${line === 'dashed' ? 'active' : ''}`}>
            {line === 'dashed' && getActiveNode()}
            <div className="stroke-dashed-line"></div>
          </div>
        ),
        value: 'dashed',
      },
    ]
  }

  const getBorderNode = () => {
    return (
      <div className="border-popover-content">
        <div className="border-wrapper">
          <span
            data-border-side="T"
            className={`border-top-width ${borderList.indexOf('top') !== -1 ? 'border-line' : ''}`}
            onClick={() => {
              let borders = Utils.deepCopy(borderList)
              if (borders.indexOf('top') !== -1) {
                borders = borders.filter((border: string) => border !== 'top')
              } else {
                borders.push('top')
              }

              setBorderList(borders)
              props.onBorderChange?.(borders)
            }}
          />
          <div className="center-wrapper">
            <span
              data-border-side="L"
              className={`border-left-width ${borderList.indexOf('left') !== -1 ? 'border-line' : ''}`}
              onClick={() => {
                let borders = Utils.deepCopy(borderList)
                if (borders.indexOf('left') !== -1) {
                  borders = borders.filter((border: string) => border !== 'left')
                } else {
                  borders.push('left')
                }

                setBorderList(borders)
                props.onBorderChange?.(borders)
              }}
            />
            <span
              data-border-side="R"
              className={`border-right-width ${borderList.indexOf('right') !== -1 ? 'border-line' : ''}`}
              onClick={() => {
                let borders = Utils.deepCopy(borderList)
                if (borders.indexOf('right') !== -1) {
                  borders = borders.filter((border: string) => border !== 'right')
                } else {
                  borders.push('right')
                }

                setBorderList(borders)
                props.onBorderChange?.(borders)
              }}
            />
          </div>
          <span
            data-border-side="B"
            className={`border-bottom-width ${borderList.indexOf('bottom') !== -1 ? 'border-line' : ''}`}
            onClick={() => {
              let borders = Utils.deepCopy(borderList)
              if (borders.indexOf('bottom') !== -1) {
                borders = borders.filter((border: string) => border !== 'bottom')
              } else {
                borders.push('bottom')
              }

              setBorderList(borders)
              props.onBorderChange?.(borders)
            }}
          />
        </div>
      </div>
    )
  }

  const render = () => {
    const checked = props.checked ?? false
    const text = Utils.isBlank(props.text || '') ? '填充' : props.text
    return (
      <div className={`${props.className || ''} lower-engine-stroke flex-direction-column`}>
        <Fill className="lower-engine-stroke-fill" checked={checked} text={text} color={props.color} opacity={props.opacity} name="Fill" setter="FillSetter" title="" />

        <div className="lower-engine-stroke-line flex-align-center">
          <Select
            popupClassName="lower-engine-stroke-dropdown"
            style={{ width: 83, height: 28 }}
            value={line}
            options={getSelectItems()}
            onChange={(value: string = '') => {
              setLine(value)
              props.onLineChange?.(value)
            }}
            labelRender={(p: { [K: string]: any } = {}) => {
              return (
                <div className={`stroke-${p.value || 'solid'} flex-align-center`}>
                  <div className={`stroke-${p.value || 'solid'}-line`}></div>
                </div>
              )
            }}
          />

          <InputNumber
            min={0}
            value={value}
            onChange={(value: number | string | null) => {
              let newValue: number = Utils.getInputNumberValue(value, 0)
              setValue(newValue)
              props.onNumberChange?.(newValue)
            }}
          />

          <Popover overlayClassName="lower-engine-stroke-border-popover" trigger="click" placement="topRight" content={getBorderNode()} arrow={false}>
            <div className="stroke-menu">
              <div className="svg-box-small no-hover border-svg-box">
                <svg className="border-svg svg-icon" viewBox="0 0 24 24">
                  <path d="M5 5h2v1H5V5zM8 5h2v1H8V5zM11 5h2v1h-2V5zM14 5h2v1h-2V5zM17 5h2v1h-2V5zM5 18h2v1H5v-1zM8 18h2v1H8v-1zM11 18h2v1h-2v-1zM14 18h2v1h-2v-1zM17 18h2v1h-2v-1z" fill="#999"></path>
                  <path d="M19 5v2h-1V5h1zM19 8v2h-1V8h1zM19 11v2h-1v-2h1zM19 14v2h-1v-2h1zM19 17v2h-1v-2h1zM6 5v2H5V5h1zM6 8v2H5V8h1zM6 11v2H5v-2h1zM6 14v2H5v-2h1zM6 17v2H5v-2h1z" fill="#999"></path>
                  <path fill="#333" d="M5 19v-1h14v1z"></path>
                </svg>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    )
  }

  return render()
}

export default Stroke
