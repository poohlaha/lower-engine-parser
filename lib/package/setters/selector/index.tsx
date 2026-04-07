/**
 * @fileOverview Select
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import {IPopoverProps, MPopover, MText} from '../../components'
import Icons from '../../utils/icons'
import Utils from '../../utils/utils'

export interface ISelectorProps extends ICommonProps {
  text?: string
  textInner?: boolean
  menu?: Array<{ [K: string]: any }>
  items?: Array<string | { [K: string]: any }>
  onChange?: (value: string | number | { [K: string]: any }, mode: string, values: Array<{ [K: string]: any }>) => void
  dropDownProps?: IPopoverProps
  showBorder?: boolean
  readOnly?: boolean
  disabled?: boolean
}

const Selector = (props: ISelectorProps): ReactElement => {
  const [value, setValue] = useState<Array<{ [K: string]: any }>>([])
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)

  useEffect(() => {
    setValue(getValue(props.default || ''))
  }, [props.default])

  const getValue = (value: any = '') => {
    if (typeof value === 'string') {
      return [{ value, label: value, icon: null }]
    }

    if (Array.isArray(value)) {
      return value || []
    }

    return [{ value: value.value, label: value.label || value.text || value.name || '', icon: value.icon || null }]
  }

  const getValueText = (value: any = '') => {
    if (typeof value === 'number') {
      return { text: value, icon: null }
    }

    if (typeof value === 'string') {
      return { text: value || '', icon: null }
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return { text: '', icon: null }
      }

      const mode = props.dropDownProps?.mode || ''
      if (mode === 'multiple') {
        let text = []
        for (let v of value) {
          text.push(v.label || '')
        }

        return { text: text.join(','), icon: value[0].icon || null }
      }

      return { text: value[0].label, icon: value[0].icon || null }
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

  const getButtonNode = (text: string = '', icon: any = null, readOnly: boolean = false, disabled: boolean = false) => {
    return (
      <button className={`flex-align-center wh100 ${readOnly ? 'readonly' : ''} ${disabled ? 'disabled' : ''}`}>
        {getIcon(icon)}
        <span className="cursor-pointer text flex-1">{text || ''}</span>
        {Icons.getArrowNode()}
      </button>
    )
  }

  const getSelectValue = (values: Array<{ [K: string]: any }> = []) => {
    if (values.length === 0) {
      return []
    }

    let selectValue = []
    for (let v of values) {
      selectValue.push(v.value)
    }

    return selectValue
  }

  const render = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')
    const showBorder = props.showBorder ?? false
    const { text, icon } = getValueText(value)
    const readOnly = props.readOnly ?? false
    const disabled = props.disabled ?? false
    const textInner = props.textInner ?? false
    const selectValue = getSelectValue(value)
    return (
      <div className={`${props.className || ''} ${textInner ? 'lower-engine-text-inner-selector' : ''} lower-engine-selector ${alignmentClassName || ''} ${showBorder ? 'show-border' : ''}`}>
        <div className={`${alignmentClassName || ''} wh100`}>
          {!Utils.isBlank(props.text || '') && <MText text={props.text || ''} tooltip={props.tooltip || ''} textClassName="over-ellipsis" />}

          {readOnly || disabled ? (
            getButtonNode(text, icon, readOnly, disabled)
          ) : (
            <MPopover
              className="lower-engine-select-dropdown"
              items={props.items || []}
              selectValue={selectValue}
              {...(props.dropDownProps || {})}
              onOpenChange={(open) => {
                setOpenDropdown(open)
                props.dropDownProps?.onOpenChange?.(open)
              }}
              open={openDropdown}
              onChange={(v: string | { [K: string]: any } = '') => {
                const mode = props.dropDownProps?.mode || ''
                let values = value || []
                let newValue: string = ''

                if (typeof v !== 'string') {
                  newValue = v.value || ''
                } else {
                  newValue = v || ''
                }

                if (Utils.isBlank(newValue || '')) {
                  return
                }

                if (mode === 'multiple') {
                  const index = values.findIndex(v => v.value === newValue)
                  if (index !== -1) {
                    values.splice(index, 1)
                  } else {
                    if (typeof v === 'string') {
                      values.push({ value: v, label: v || '', icon: null })
                    } else {
                      values.push({ value: newValue, label: v.label || v.text || v.name || '', icon: v.icon || null })
                    }
                  }
                } else {
                  if (typeof v === 'string') {
                    values = [{ value: v, label: v || '', icon: null }]
                  } else {
                    values = [{ value: newValue, label: v.label || v.text || v.name || '', icon: v.icon || null }]
                  }

                  setOpenDropdown(false)
                }

                setValue(values)
                props.onChange?.(v, mode, values)
              }}
            >
              {getButtonNode(text, icon, readOnly, disabled)}
            </MPopover>
          )}
        </div>
      </div>
    )
  }

  return render()
}

export default Selector
