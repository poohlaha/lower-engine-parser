/**
 * @fileOverview TODO
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Input as AntdInput } from 'antd'
import Utils from '../../utils/utils'
import { MText } from '../../components'

export interface IInputProps extends ICommonProps {
  placeholder?: string
  allowClear?: boolean
  disabled?: boolean
  maxLength?: number
  prefix?: React.ReactNode
  showCount?: boolean
  suffix?: React.ReactNode
  type?: string
  readOnly?: boolean
  isSearch?: boolean
  onChange?: (value: string) => void
  textArea?: IInputTextAreaProps
}

export interface IInputTextAreaProps {
  show?: boolean
  minRows?: number
  maxRows?: number
}

const Input = (props: IInputProps): ReactElement => {
  const [value, setValue] = useState('')

  useEffect(() => {
    let defaultValue = ''
    if (props.default === null || props.default === undefined) {
      defaultValue = ''
    }

    if (typeof props.default === 'number') {
      defaultValue = `${props.default}`
    } else {
      defaultValue = props.default || ''
    }

    setValue(defaultValue)
  }, [props.default])

  const getSearchSvg = () => {
    const isSearch = props.isSearch ?? false
    if (!isSearch) return props.prefix || null
    return (
      <svg viewBox="64 64 896 896" focusable="false" data-icon="search" fill="currentColor" aria-hidden="true">
        <path
          fill="currentColor"
          d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
        ></path>
      </svg>
    )
  }

  const render = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')
    const textArea: IInputTextAreaProps = props.textArea || {}
    return (
      <div className={`${props.className || ''} lower-engine-input ${alignmentClassName || ''}`}>
        <div className={`${alignmentClassName || ''} lower-engine-input-wrapper flex-1`}>
          {!Utils.isBlank(props.text || '') && <MText text={props.text || ''} tooltip={props.tooltip || ''} textClassName="over-ellipsis" />}

          {textArea.show ? (
            <AntdInput.TextArea
              onChange={e => {
                const newValue = e.target.value || ''
                setValue(newValue)
                props.onChange?.(newValue)
              }}
              placeholder={props.placeholder || '请输入'}
              allowClear={props.allowClear ?? true}
              disabled={props.disabled ?? false}
              maxLength={props.maxLength}
              showCount={props.showCount}
              value={value}
              readOnly={props.readOnly ?? false}
              autoSize={{ minRows: textArea.minRows ?? 3, maxRows: textArea.maxRows ?? 3 }}
            />
          ) : (
            <AntdInput
              placeholder={props.placeholder || '请输入'}
              allowClear={props.allowClear ?? true}
              disabled={props.disabled ?? false}
              maxLength={props.maxLength}
              prefix={getSearchSvg()}
              showCount={props.showCount}
              suffix={props.suffix}
              type={props.type}
              value={value}
              readOnly={props.readOnly ?? false}
              onChange={e => {
                const newValue = e.target.value || ''
                setValue(newValue)
                props.onChange?.(newValue)
              }}
              onPressEnter={() => {
                props.onChange?.(value)
              }}
              onClear={() => {
                setValue('')
                props.onChange?.('')
              }}
            />
          )}
        </div>
      </div>
    )
  }

  return render()
}

export default Input
