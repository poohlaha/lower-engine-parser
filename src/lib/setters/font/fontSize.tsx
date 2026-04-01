/**
 * @fileOverview Font Size
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { InputNumber } from 'antd'
import Utils from '../../utils/utils'
import Icons from '../../utils/icons'
import { MDropdown } from '../../components'
import Color, { IColorProps } from '../color'

export interface IFontSizeProps extends ICommonProps, IColorProps {
  items?: Array<string>
  selected?: string
  onChange?: (value: string, color: string, opacity: number) => void
}

const FontSize = (props: IFontSizeProps): ReactElement => {
  const DEFAULT_ITEMS: Array<string> = ['12', '13', '14', '16', '18', '20', '28', '36', '48', '72']
  const inputBoxRef = useRef(null)

  const [value, setValue] = useState<string>(DEFAULT_ITEMS[2]) // 值
  const [items, setItems] = useState<Array<string>>(DEFAULT_ITEMS)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    let items = props.items || []
    if (items.length > 0) {
      setItems(items)
    }
  }, [props.items])

  useEffect(() => {
    setValue(props.default ?? 14)
  }, [props.default])

  const getLeftPoint = () => {
    if (!inputBoxRef.current) return undefined
    let rect = (inputBoxRef.current as HTMLElement).getBoundingClientRect()
    return rect.left
  }

  const render = () => {
    return (
      <div className={`${props.className || ''} lower-engine-font-size flex-align-center`}>
        <div className={`lower-engine-input-box flex-align-center ${open ? 'visible' : ''}`} ref={inputBoxRef}>
          <InputNumber
            min={DEFAULT_ITEMS[0]}
            value={value}
            onChange={(value: number | string | null) => {
              setValue(`${value || 0}`)
              props.onChange?.(`${value || 0}`, props.color || '', props.opacity || 100)
            }}
          />

          <MDropdown
            className="lower-engine-font-size-dropdown"
            items={items}
            selectValue={value}
            onChange={value => {
              setValue(value as string)
              props.onChange?.(value as string, props.color || '', props.opacity || 100)
            }}
            onOpenChange={(o: boolean) => {
              setOpen(o)
            }}
            left={getLeftPoint()}
          >
            <div className="lower-engine-input-action">{Icons.getArrowNode()}</div>
          </MDropdown>
        </div>

        <Color
          name="color"
          title=""
          setter="ColorSetter"
          color={props.color}
          opacity={props.opacity}
          colorSelect={props.colorSelect}
          recentlyUsedList={props.recentlyUsedList}
          onColorChange={props.onColorChange}
          onOpacityChange={props.onOpacityChange}
        />
      </div>
    )
  }

  return render()
}

export default FontSize
