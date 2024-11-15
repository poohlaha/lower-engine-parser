/**
 * @fileOverview Font Size
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Select } from 'antd'
import Utils from '../../utils/utils'
import Page from '../../utils/page'

export interface IFontSizeProps extends ICommonProps {
  className?: string
  items?: Array<number>
  selected?: number
  onChange?: (value: number) => void
}

const FontSize = (props: IFontSizeProps): ReactElement => {
  const DEFAULT_ITEMS: Array<number> = [12, 13, 14, 16, 18, 20, 28, 36, 48, 72]

  const [value, setValue] = useState<number>(14) // 值
  const [items, setItems] = useState<Array<number>>(DEFAULT_ITEMS)

  useEffect(() => {
    let items = props.items || []
    if (items.length > 0) {
      setItems(items)
    }
  }, [props.items])

  useEffect(() => {
    setValue(props.default ?? 14)
  }, [props.default])

  const getSelectItems = () => {
    if (items.length === 0) return []
    return Page.getSelectOptions(items, false, `${value}`)
  }

  const render = () => {
    return (
      <div className={`${props.className || ''} lower-engine-font-size`}>
        <Select
          showSearch
          defaultActiveFirstOption={false}
          popupClassName="lower-engine-dropdown lower-engine-font-size-dropdown"
          style={{ width: 66, height: 28 }}
          value={`${value}`}
          options={getSelectItems() || []}
          onChange={(value: string | number | null) => {
            const newValue = Utils.getInputNumberValue(value, 0)
            setValue(newValue)
            props.onChange?.(newValue)
          }}
          labelRender={(p: { [K: string]: any } = {}) => Page.getSelectLabel(p)}
        />
      </div>
    )
  }

  return render()
}

export default FontSize
