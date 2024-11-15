/**
 * @fileOverview ColorPicker
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { ICommonProps } from '../../utils/common'
import Utils from '../../utils/utils'

export interface IColorProps extends ICommonProps {
  color?: string
  opacity?: number
}

const Color = (props: IColorProps): ReactElement => {
  const render = () => {
    let color = Utils.isBlank(props.color || '') ? '#ffffff' : props.color || ''
    let opacity = props.opacity ?? 1

    return (
      <div className={`${props.className || ''} lower-engine-color cursor-pointer flex-center`}>
        <div className="lower-engine-color-thumbnail">
          <div
            className="thumbnail"
            style={{
              background: color,
              opacity,
            }}
          ></div>
        </div>
      </div>
    )
  }

  return render()
}

export default Color
