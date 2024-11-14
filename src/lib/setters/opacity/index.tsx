/**
 * @fileOverview Opacity 不透明度
 * @date 2024-11-14
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'
import { Slider, InputNumber } from 'antd'

export interface IOpacityProps extends ICommonProps {
  className?: string
  min?: number
  max?: number
  reverse?: boolean
  onInputChange?: (value: number) => void
}

const Opacity = (props: IOpacityProps): ReactElement => {
  const getProps = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')
    const min = props.min ?? 0
    const max = props.max ?? 100
    let defaultValue: any
    let isDefaultValueArray = false
    if (Array.isArray(props.default)) {
      defaultValue = props.default ?? [min, max]
      isDefaultValueArray = true
    } else {
      defaultValue = Utils.getIntervalNumbers(props.default, 100, min, max)
    }
    const reverse = props.reverse ?? false

    return { alignmentClassName, min, max, defaultValue, reverse, isDefaultValueArray }
  }

  const render = () => {
    const { alignmentClassName, min, max, defaultValue, reverse, isDefaultValueArray } = getProps()

    let inputProps: { [K: string]: any } = {
      min,
      max,
      defaultValue,
      onChange: (value: number | string | null) => {
        let newValue: number = min
        if (typeof value === 'string') {
          if (!Utils.isBlank(value || '')) {
            newValue = parseInt(value)
          }
        } else {
          newValue = newValue ?? min
        }

        props.onInputChange?.(newValue)
      },
    }

    return (
      <div className={`lower-opacity ${props.className || ''} ${alignmentClassName || ''}`}>
        {!Utils.isBlank(props.title || '') && <p>{props.title || ''}</p>}

        <div className="lower-opacity-slider">
          <Slider disabled={props.disabled} defaultValue={defaultValue} min={min} max={max} reverse={reverse} />
        </div>

        <div className="lower-opacity-input">
          <InputNumber {...inputProps} />
        </div>
      </div>
    )
  }

  return render()
}

export default Opacity
