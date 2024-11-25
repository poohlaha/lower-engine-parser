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
  onChange?: (value: string) => void
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
    }

    setValue(defaultValue)
  }, [props.default])

  const render = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')
    return (
      <div className={`${props.className || ''} lower-engine-input ${alignmentClassName || ''}`}>
        <div className={`${alignmentClassName || ''}`}>
          {!Utils.isBlank(props.text || '') && <MText text={props.text || ''} tooltip={props.tooltip || ''} textClassName="over-ellipsis" />}
          <AntdInput
            placeholder={props.placeholder || '请输入'}
            allowClear={props.allowClear ?? true}
            disabled={props.disabled ?? false}
            maxLength={props.maxLength}
            prefix={props.prefix}
            showCount={props.showCount}
            suffix={props.suffix}
            type={props.type}
            value={value}
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
        </div>
      </div>
    )
  }

  return render()
}

export default Input
