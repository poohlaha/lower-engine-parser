/**
 * @fileOverview Alignment 对齐方式
 * @date 2023-08-28
 * @author poohlaha
 */
import React, {ReactElement, useEffect, useState} from 'react'
import { ICommonProps } from '../../utils/common'
import {Tooltip} from'antd'
import Icons from "../../utils/icons";
import Utils from "../../utils/utils";

export interface IAlignmentProps extends ICommonProps {
  className?: string
  onChange?: (value: string) => void
}

const Alignment = (props: IAlignmentProps): ReactElement => {

  const Alignment = ['left', 'center', 'right', 'justify']
  const [value, setValue] = useState('')

  useEffect(() => {
    let defaultValue = Utils.isBlank(props.default || '') ? Alignment[0] : props.default
    setValue(defaultValue)
  }, [props.default])

  const render = () => {
    return (
        <div className={`${props.className || ''} lower-engine-alignment flex-align-center`}>
          <div
              className={`lower-engine-alignment-item lower-engine-alignment-left flex-center ${value === Alignment[0] ? 'active' : ''}`}
              onClick={() => {
                  setValue(Alignment[0])
                  props.onChange?.(Alignment[0])
              }}
          >
            <Tooltip title="左对齐">
              {Icons.getAlignmentLeftNode()}
            </Tooltip>
          </div>

          <div
              className={`lower-engine-alignment-item lower-engine-alignment-center flex-center ${value === Alignment[1] ? 'active' : ''}`}
              onClick={() => {
                  setValue(Alignment[1])
                  props.onChange?.(Alignment[1])
              }}
          >
            <Tooltip title="水平居中">
              {Icons.getAlignmentCenterNode()}
            </Tooltip>
          </div>

          <div
              className={`lower-engine-alignment-item lower-engine-alignment-right flex-center ${value === Alignment[2] ? 'active' : ''}`}
              onClick={() => {
                  setValue(Alignment[2])
                  props.onChange?.(Alignment[2])
              }}
          >
            <Tooltip title="右对齐">
              {Icons.getAlignmentRightNode()}
            </Tooltip>
          </div>

          <div
              className={`lower-engine-alignment-item lower-engine-alignment-justify flex-center ${value === Alignment[3] ? 'active' : ''}`}
              onClick={() => {
                  setValue(Alignment[3])
                  props.onChange?.(Alignment[3])
              }}
          >
            <Tooltip title="两端对齐">
              {Icons.getAlignmentJustifyNode()}
            </Tooltip>
          </div>
      </div>
    )
  }

  return render()
}

export default Alignment