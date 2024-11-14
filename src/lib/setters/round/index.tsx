/**
 * @fileOverview Round
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'
import { InputNumber } from 'antd'
import MLowerEngine from '../lower'

export interface IRoundProps extends ICommonProps {
  className?: string
  type?: number // 0: 圆角, 1: 独立圆角, 默认 0
  defaultValues?: Array<number> // 默认为 0
  onChange?: (value: Array<number>) => void
}

const Round = (props: IRoundProps): ReactElement => {
  const [type, setType] = useState<number>(0)
  const [values, setValues] = useState<Array<number>>([])

  useEffect(() => {
    setType(props.type ?? 0)
  }, [props.type])

  useEffect(() => {
    let defaultValues = props.defaultValues || []
    let type = props.type ?? 0
    let defaultValue: number = props.default ?? 0
    if (type === 1) {
      defaultValues = defaultValues.length > 0 ? defaultValues : [defaultValue, defaultValue, defaultValue, defaultValue]
    } else {
      defaultValues = [defaultValue]
    }
    setValues(defaultValues)
  }, [props.defaultValues])

  const render = () => {
    return (
      <MLowerEngine className={`${props.className || ''} lower-engine-round`} title={props.title || ''} alignment={props.alignment}>
        <div
          className={`round-control flex-jsc-around flex-align-center ${type === 0 ? 'active' : ''}`}
          onClick={() => {
            const newValues = Utils.deepCopy(values || [])
            setValues([newValues[0]])
            setType(0)
          }}
        >
          <svg className="svg-icon" viewBox="0 0 12 12">
            <path d="M3 1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3zm0-1h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3C0 2.216.3 1.503.792.969A2.992 2.992 0 0 1 3 0z"></path>
          </svg>
        </div>

        <div
          className={`round-control flex-jsc-around flex-align-center ${type === 1 ? 'active' : ''}`}
          onClick={() => {
            const newValues = Utils.deepCopy(values || [])
            setValues([newValues[0], newValues[0], newValues[0], newValues[0]])
            setType(1)
          }}
        >
          <svg className="svg-icon" viewBox="0 0 12 12">
            <path d="M4 0L4 1 3 1C1.9 1 1 1.9 1 3L1 4 0 4 0 3C0 1.3 1.3 0 3 0L4 0Z"></path>
            <path d="M8 0L9 0C10.7 0 12 1.3 12 3L12 4 11 4 11 3C11 1.9 10.1 1 9 1L8 1 8 0Z"></path>
            <path d="M4 12L3 12C1.3 12 0 10.7 0 9L0 8 1 8 1 9C1 10.1 1.9 11 3 11L4 11 4 12Z"></path>
            <path d="M8 12L8 11 9 11C10.1 11 11 10.1 11 9L11 8 12 8 12 9C12 10.7 10.7 12 9 12L8 12Z"></path>
          </svg>
        </div>

        <div className={`round-input ${type === 1 ? 'flex-align-center input-group' : ''}`}>
          {type === 0 ? (
            <InputNumber
              value={values[0]}
              onChange={(value: number | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                let newValues = Utils.deepCopy(values || [])
                newValues[0] = newValue
                setValues(newValues)
                props.onChange?.(newValues)
              }}
            />
          ) : (
            <>
              <InputNumber
                value={values[0]}
                onChange={(value: number | null) => {
                  let newValue: number = Utils.getInputNumberValue(value, 0)
                  let newValues = Utils.deepCopy(values || [])
                  newValues[0] = newValue
                  setValues(newValues)
                  props.onChange?.(newValues)
                }}
              />
              <InputNumber
                value={values[1]}
                onChange={(value: number | null) => {
                  let newValue: number = Utils.getInputNumberValue(value, 0)
                  let newValues = Utils.deepCopy(values || [])
                  newValues[1] = newValue
                  setValues(newValues)
                  props.onChange?.(newValues)
                }}
              />
              <InputNumber
                value={values[2]}
                onChange={(value: number | null) => {
                  let newValue: number = Utils.getInputNumberValue(value, 0)
                  let newValues = Utils.deepCopy(values || [])
                  newValues[2] = newValue
                  setValues(newValues)
                  props.onChange?.(newValues)
                }}
              />
              <InputNumber
                value={values[3]}
                onChange={(value: number | null) => {
                  let newValue: number = Utils.getInputNumberValue(value, 0)
                  let newValues = Utils.deepCopy(values || [])
                  newValues[3] = newValue
                  setValues(newValues)
                  props.onChange?.(newValues)
                }}
              />
            </>
          )}
        </div>
      </MLowerEngine>
    )
  }

  return render()
}

export default Round
