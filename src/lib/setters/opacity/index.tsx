/**
 * @fileOverview Opacity 不透明度
 * @date 2024-11-14
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'
import { Slider, InputNumber } from 'antd'

export interface IOpacityProps extends ICommonProps {
  min?: number
  max?: number
  reverse?: boolean
  onChange?: (value: number) => void
}

const Opacity = (props: IOpacityProps): ReactElement => {
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    const { defaultValue } = getDefaultValue()
    setValue(defaultValue)
  }, [props.default])

  const getDefaultValue = () => {
    const min = props.min ?? 0
    const max = props.max ?? 100

    let defaultValue: any
    if (Array.isArray(props.default)) {
      defaultValue = props.default.length > 0 ? props.default[0] : min
    } else {
      defaultValue = Utils.getIntervalNumbers(props.default, 100, min, max)
    }

    return { min, max, defaultValue }
  }

  const getProps = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.text || '', props.alignment || '')
    const { min, max, defaultValue } = getDefaultValue()
    const reverse = props.reverse ?? false
    return { alignmentClassName, min, max, defaultValue, reverse }
  }

  const onChange = (value: number | string | null, min: number) => {
    let newValue: number = Utils.getInputNumberValue(value, min)
    setValue(newValue)
    props.onChange?.(newValue)
  }

  const render = () => {
    const { alignmentClassName, min, max, defaultValue, reverse } = getProps()

    let inputProps: { [K: string]: any } = {
      min,
      max,
      defaultValue,
      onChange: (value: number | string | null) => onChange(value, min),
    }

    return (
      <div className={`lower-engine-opacity flex-align-center ${props.className || ''}`}>
        {!Utils.isBlank(props.text || '') && <p className="lower-engine-opacity-header">{props.text || ''}</p>}
        <div className="lower-engine-opacity-slider flex-1 flex-jsc-end">
          <Slider
            tooltip={{
              open: false,
            }}
            disabled={props.disabled}
            defaultValue={defaultValue}
            min={min}
            max={max}
            reverse={reverse}
            value={value}
            onChange={(value: number | string | null) => onChange(value, min)}
          />
        </div>

        <div className="lower-engine-opacity-input">
          <InputNumber value={value} {...inputProps} />
        </div>
      </div>
    )
  }

  return render()
}

export default Opacity
