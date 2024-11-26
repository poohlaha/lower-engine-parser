/**
 * @fileOverview TODO
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import Utils from '../../utils/utils'
import { ICommonProps } from '../../utils/common'
import { MText } from '../../components'
import { InputNumber as AntdInputNumber } from 'antd'

export interface IInputNumberProps extends ICommonProps {
  step?: number | string
  min?: number
  max?: number
  showBorder?: boolean
  onChange?: (value: number) => void
}

const InputNumber = (props: IInputNumberProps): ReactElement => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let defaultValue: number = 0
    if (props.default === null || props.default === undefined) {
      defaultValue = 0
    }

    if (typeof props.default === 'string') {
      defaultValue = parseInt(props.default)
    } else {
      defaultValue = props.default ?? 0
    }

    setValue(defaultValue)
  }, [props.default])

  const render = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')
    const showBorder = props.showBorder ?? false
    return (
      <div className={`${props.className || ''} lower-engine-input-number ${alignmentClassName || ''} ${showBorder ? 'show-border' : ''}`}>
        <div className={`${alignmentClassName || ''} lower-engine-input-number-wrapper flex-1`}>
          {!Utils.isBlank(props.text || '') && <MText text={props.text || ''} tooltip={props.tooltip || ''} textClassName="over-ellipsis" />}

          <AntdInputNumber
            value={value}
            min={props.min ?? 0}
            max={props.max}
            step={props.step}
            onChange={value => {
              const newValue = Utils.getInputNumberValue(value, props.min ?? 0)
              setValue(newValue)
              props.onChange?.(newValue)
            }}
            onPressEnter={() => {
              props.onChange?.(value)
            }}
          />
        </div>
      </div>
    )
  }

  return render()
}

export default InputNumber
