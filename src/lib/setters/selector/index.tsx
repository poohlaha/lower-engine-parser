/**
 * @fileOverview Select
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { MDropdown, MText } from '../../components'
import Icons from '../../utils/icons'
import Utils from '../../utils/utils'

export interface ISelectorProps extends ICommonProps {
  text?: string
  placement?: string
  menu?: Array<{ [K: string]: any }>
  items?: Array<string | number | { [K: string]: any }>
  onChange?: (value: string | number | { [K: string]: any }) => void
  dropdownWidth?: number
  showBorder?: boolean
}

const Selector = (props: ISelectorProps): ReactElement => {
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
      return { text: value, icon: null }
    }

    if (typeof value === 'string') {
      return { text: value || '', icon: null }
    }

    if (!Utils.isBlank(value.label || '')) {
      return { text: value.label || '', icon: value.icon || null }
    }

    if (!Utils.isBlank(value.text || '')) {
      return { text: value.text || '', icon: value.icon || null }
    }

    if (!Utils.isBlank(value.name || '')) {
      return { text: value.name || '', icon: value.icon || null }
    }

    return { text: '', icon: null }
  }

  const getIcon = (icon: any = '') => {
    if (!icon) return null

    if (typeof icon === 'string') {
      return <i className={`lower-engine-selector-icon ${icon}`} />
    }

    return <div className="lower-engine-selector-icon">{icon}</div>
  }

  const render = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')
    const showBorder = props.showBorder ?? false
    const { text, icon } = getValueText(props.default || '')
    return (
      <div className={`${props.className || ''} lower-engine-selector ${alignmentClassName || ''} ${showBorder ? 'show-border' : ''}`}>
        <div className={`${alignmentClassName || ''}`}>
          {!Utils.isBlank(props.text || '') && <MText text={props.text || ''} tooltip={props.tooltip || ''} textClassName="over-ellipsis" />}
          <MDropdown
            className="lower-engine-select-dropdown"
            menu={props.menu || []}
            items={props.items || []}
            selectValue={value}
            width={props.dropdownWidth}
            placement={props.placement}
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
              {getIcon(icon)}
              <span className="cursor-pointer text flex-1">{text || ''}</span>
              {Icons.getArrowNode()}
            </button>
          </MDropdown>
        </div>
      </div>
    )
  }

  return render()
}

export default Selector
