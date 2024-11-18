/**
 * @fileOverview Select
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { MDropdown } from '../../components'
import Icons from '../../utils/icons'
import Utils from '../../utils/utils'

export interface ISelectProps extends ICommonProps {
  placement?: string
  menu?: Array<{ [K: string]: any }>
  items?: Array<string | number>
  onChange?: (value: string | number | { [K: string]: any }) => void
  dropdownWidth?: number
}

const Selector = (props: ISelectProps): ReactElement => {
  const [value, setValue] = useState<string | number>('')

  useEffect(() => {
    setValue(getValue(props.default || ''))
  }, [props.default])

  const getValue = (value: any = '') => {
    if (typeof value === 'number') {
      return value
    }

    if (typeof value === 'string') {
      return value || ''
    }

    return value.value || ''
  }

  const getValueText = (value: any = '') => {
    if (typeof value === 'number') {
      return value
    }

    if (typeof value === 'string') {
      return value || ''
    }

    if (!Utils.isBlank(value.label || '')) {
      return value.label || ''
    }

    if (!Utils.isBlank(value.text || '')) {
      return value.text || ''
    }

    if (!Utils.isBlank(value.name || '')) {
      return value.name || ''
    }

    return ''
  }

  const render = () => {
    return (
      <div className={`lower-engine-select flex-align-center ${props.className || ''}`}>
        <MDropdown
          className="lower-engine-select-dropdown"
          menu={props.menu || []}
          items={props.items || []}
          selectValue={value}
          width={props.dropdownWidth}
          onChange={(value: string | number | { [K: string]: any } = '') => {
            let newValue = value || ''
            if (typeof value !== 'string' && typeof value !== 'number') {
              newValue = value.value || ''
            }
            setValue(newValue as string | number)
            props.onChange?.(value)
          }}
        >
          <button className="flex-align-center">
            <span className="cursor-pointer text">{getValueText(props.default || '')}</span>
            {Icons.getArrowNode()}
          </button>
        </MDropdown>
      </div>
    )
  }

  return render()
}

export default Selector
