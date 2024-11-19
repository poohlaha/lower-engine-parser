/**
 * @fileOverview Shadow 阴影
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'
import Fill from '../fill'
import { InputNumber } from 'antd'
import { IColorProps } from '../color'

export interface IShadowProps extends ICommonProps, IColorProps {
  checked?: boolean
  text?: string
  defaultValues?: Array<number>
  onChecked?: (checked: boolean, color: string, opacity: number, values: Array<number>) => void
  onChange?: (checked: boolean, color: string, opacity: number, values: Array<number>) => void
}

const Shadow = (props: IShadowProps): ReactElement => {
  const [checked, setChecked] = useState(false)
  const [values, setValues] = useState<Array<number>>([])

  useEffect(() => {
    setChecked(props.checked ?? false)
  }, [props.checked])

  useEffect(() => {
    let defaultValues = props.defaultValues || []
    if (defaultValues.length === 0) {
      setValues([0, 0, 0, 0])
      return
    }

    if (defaultValues.length === 1) {
      setValues([defaultValues[0], 0, 0, 0])
      return
    }

    if (defaultValues.length === 2) {
      setValues([defaultValues[0], defaultValues[1], 0, 0])
      return
    }

    if (defaultValues.length === 3) {
      setValues([defaultValues[0], defaultValues[1], defaultValues[2], 0])
      return
    }

    setValues([defaultValues[0], defaultValues[1], defaultValues[2], defaultValues[3]])
  }, [props.defaultValues])

  const render = () => {
    const text = Utils.isBlank(props.text || '') ? '阴影' : props.text || ''
    return (
      <div className={`${props.className || ''} lower-engine-shadow flex-direction-column`}>
        <Fill
          className="lower-engine-shadow-fill"
          checked={checked}
          text={text}
          color={props.color}
          opacity={props.opacity}
          name="Fill"
          setter="FillSetter"
          title=""
          colorSelect={props.colorSelect}
          recentlyUsedList={props.recentlyUsedList}
          onColorChange={props.onColorChange}
          onOpacityChange={props.onOpacityChange}
          onChecked={(checked: boolean) => {
            setChecked(checked)
            props.onChecked?.(checked, props.color || '', props.opacity || 100, values)
          }}
        />

        {checked && (
          <div className="input-group">
            <InputNumber
              value={values[0]}
              onChange={(value: number | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                let newValues = Utils.deepCopy(values || [])
                newValues[0] = newValue
                setValues(newValues)
                props.onChange?.(checked, props.color || '', props.opacity || 100, newValues)
              }}
            />
            <InputNumber
              value={values[1]}
              onChange={(value: number | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                let newValues = Utils.deepCopy(values || [])
                newValues[1] = newValue
                setValues(newValues)
                props.onChange?.(checked, props.color || '', props.opacity || 100, newValues)
              }}
            />
            <InputNumber
              value={values[2]}
              onChange={(value: number | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                let newValues = Utils.deepCopy(values || [])
                newValues[2] = newValue
                setValues(newValues)
                props.onChange?.(checked, props.color || '', props.opacity || 100, newValues)
              }}
            />
            <InputNumber
              value={values[3]}
              onChange={(value: number | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                let newValues = Utils.deepCopy(values || [])
                newValues[3] = newValue
                setValues(newValues)
                props.onChange?.(checked, props.color || '', props.opacity || 100, newValues)
              }}
            />
          </div>
        )}
      </div>
    )
  }

  return render()
}

export default Shadow
