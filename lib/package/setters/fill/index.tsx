/**
 * @fileOverview Fill 填充
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Checkbox } from 'antd'
import Utils from '../../utils/utils'
import Color, { IColorProps } from '../color'

export interface IFillProps extends ICommonProps, IColorProps {
  checked?: boolean
  text?: string
  onChecked?: (checked: boolean, color: string) => void
}

const Fill = (props: IFillProps): ReactElement => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(props.checked ?? false)
  }, [props.checked])

  const render = () => {
    let text = Utils.isBlank(props.text || '') ? '填充' : props.text

    return (
      <div className={`${props.className || ''} lower-engine-fill flex-align-center`}>
        <div className="lower-engine-fill-checkbox flex-align-center">
          <Checkbox
            checked={checked}
            onChange={() => {
              setChecked(!checked)
              props.onChecked?.(!checked, props.color || '')
            }}
          />
        </div>

        <div className="lower-engine-fill-color flex-align-center">
          <Color
            name="color"
            title=""
            setter="ColorSetter"
            color={props.color}
            opacity={props.opacity}
            colorSelect={props.colorSelect}
            recentlyUsedList={props.recentlyUsedList}
            onColorChange={props.onColorChange}
            onOpacityChange={props.onOpacityChange}
          />

          <p className="text">{text || ''}</p>
        </div>
      </div>
    )
  }

  return render()
}

export default Fill
