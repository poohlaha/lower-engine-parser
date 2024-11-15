/**
 * @fileOverview Fill 填充
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import {ICommonProps} from "../../utils/common";
import { Checkbox } from 'antd'
import Utils from '../../utils/utils'
import Color from '../color'

export interface IFillProps extends ICommonProps {
  className?: string
  checked?: boolean
  text?: string
    color?: string
    opacity?: number
}

const Fill = (props: IFillProps): ReactElement => {

  const render = () => {
    let checked = props.checked ?? false
    let text = Utils.isBlank(props.text || '') ? '填充' : props.text

    return (
      <div className={`${props.className || ''} lower-engine-fill flex-align-center`}>
         <div className="lower-engine-fill-checkbox flex-align-center">
           <Checkbox
               checked={checked}
               onChange={() => {}}
           />
         </div>

        <div className="lower-engine-fill-color flex-align-center">
          <Color name="" title="" setter="ColorSetter" color={props.color} opacity={props.opacity} />

          <p className="text">{text || ''}</p>
        </div>
      </div>
    )
  }

  return render()
}

export default Fill