/**
 * @fileOverview Font Size
 * @date 2023-08-28
 * @author poohlaha
 */
import React, {ReactElement, useEffect, useRef, useState} from 'react'
import { ICommonProps } from '../../utils/common'
import {InputNumber} from 'antd'
import Utils from '../../utils/utils'
import Icons from '../../utils/icons'
import {MDropdown} from '../../components'

export interface IFontSizeProps extends ICommonProps {
  className?: string
  items?: Array<number>
  selected?: number
  onChange?: (value: number) => void
}

const FontSize = (props: IFontSizeProps): ReactElement => {
  const DEFAULT_ITEMS: Array<number> = [12, 13, 14, 16, 18, 20, 28, 36, 48, 72]
    const inputBoxRef = useRef(null)

  const [value, setValue] = useState<number>(14) // 值
  const [items, setItems] = useState<Array<number>>(DEFAULT_ITEMS)
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
      <div className={`${props.className || ''} lower-engine-font-size`}>
        <div className={`lower-engine-input-box flex-align-center ${open ? 'visible' : ''}`} ref={inputBoxRef}>
          <InputNumber
              min={DEFAULT_ITEMS[0]}
              value={value}
              onChange={(value: number | string | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                setValue(newValue)
                props.onChange?.(newValue)
              }}
          />

          <MDropdown
              className="lower-engine-font-size-dropdown"
              items={DEFAULT_ITEMS}
              selectValue={value}
              onChange={(value) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                setValue(newValue)
                props.onChange?.(newValue)
              }}
              onOpenChange={(o: boolean) => {
                  setOpen(o)
              }}
              left={getLeftPoint()}
          >
            <div className="lower-engine-input-action">
              {Icons.getArrowNode()}
            </div>
          </MDropdown>

        </div>
      </div>
    )
  }

  return render()
}

export default FontSize
