/**
 * @fileOverview Font Bold
 * @date 2023-08-28
 * @author poohlaha
 */
import React, {ReactElement, useEffect, useState} from 'react'
import { ICommonProps } from '../../utils/common'
import Icons from '../../utils/icons'
import Utils from '../../utils/utils'
import {Tooltip} from 'antd'

export interface IFontBoldProps extends ICommonProps {

}

const FontBold = (props: IFontBoldProps): ReactElement => {
  const FontBold = ['bold', 'italic', 'underline', 'line-through']
  const [value, setValue] = useState('')

  useEffect(() => {
    let defaultValue = Utils.isBlank(props.default || '') ? FontBold[0] : props.default
    setValue(defaultValue)
  }, [props.default])

  const render = () => {
    return (
        <div className={`${props.className || ''} lower-engine-font-bold flex-align-center`}>
          <div className={`lower-engine-font-bold-item lower-engine-font-bold-bold flex-center ${value === FontBold[0] ? 'active' : ''}`}>
            <Tooltip title="加租">
                {Icons.getFontBoldBoldNode()}
            </Tooltip>
          </div>

          <div className={`lower-engine-font-bold-item lower-engine-font-bold-italic flex-center ${value === FontBold[1] ? 'active' : ''}`}>
              <Tooltip title="倾斜">
                  {Icons.getFontBoldItalicNode()}
              </Tooltip>
          </div>

          <div className={`lower-engine-font-bold-item lower-engine-font-bold-underline flex-center ${value === FontBold[2] ? 'active' : ''}`}>
              <Tooltip title="下划线">
                  {Icons.getFontBoldUnderlineNode()}
              </Tooltip>
          </div>

          <div className={`lower-engine-font-bold-item lower-engine-font-bold-line-through flex-center ${value === FontBold[3] ? 'active' : ''}`}>
              <Tooltip title="删除线">
                  {Icons.getFontBoldLineThroughNode()}
              </Tooltip>
          </div>
        </div>
    )
  }

  return render()
}

export default FontBold
