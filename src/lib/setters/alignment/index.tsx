/**
 * @fileOverview Alignment 对齐方式
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Tooltip } from 'antd'
import Icons from '../../utils/icons'
import Utils from '../../utils/utils'

export interface IAlignmentProps extends ICommonProps {
  className?: string
  alignmentFlex?: string
  onChange?: (value: string) => void
  onFlexChange?: (value: string) => void
}

const Alignment = (props: IAlignmentProps): ReactElement => {
  const Alignment = ['left', 'center', 'right', 'justify']
  const Alignment_FLEX = ['flex-start', 'center', 'flex-end']
  const [value, setValue] = useState(Alignment[0])
  const [flexValue, setFlexValue] = useState(Alignment_FLEX[1])

  useEffect(() => {
    let defaultValue = Utils.isBlank(props.default || '') ? Alignment[0] : props.default || ''
    setValue(defaultValue)
  }, [props.default])

  useEffect(() => {
    let defaultValue = Utils.isBlank(props.alignmentFlex || '') ? Alignment_FLEX[1] : props.alignmentFlex || ''
    setFlexValue(defaultValue)
  }, [props.alignmentFlex])

  const render = () => {
    return (
      <div className={`${props.className || ''} lower-engine-alignment flex-align-center`}>
        <div className="flex-align-center alignment">
          <div
            className={`lower-engine-alignment-item lower-engine-alignment-left flex-center ${value === Alignment[0] ? 'active' : ''}`}
            onClick={() => {
              setValue(Alignment[0])
              props.onChange?.(Alignment[0])
            }}
          >
            <Tooltip title="左对齐">{Icons.getAlignmentLeftNode()}</Tooltip>
          </div>

          <div
            className={`lower-engine-alignment-item lower-engine-alignment-center flex-center ${value === Alignment[1] ? 'active' : ''}`}
            onClick={() => {
              setValue(Alignment[1])
              props.onChange?.(Alignment[1])
            }}
          >
            <Tooltip title="水平居中">{Icons.getAlignmentCenterNode()}</Tooltip>
          </div>

          <div
            className={`lower-engine-alignment-item lower-engine-alignment-right flex-center ${value === Alignment[2] ? 'active' : ''}`}
            onClick={() => {
              setValue(Alignment[2])
              props.onChange?.(Alignment[2])
            }}
          >
            <Tooltip title="右对齐">{Icons.getAlignmentRightNode()}</Tooltip>
          </div>

          <div
            className={`lower-engine-alignment-item lower-engine-alignment-justify flex-center ${value === Alignment[3] ? 'active' : ''}`}
            onClick={() => {
              setValue(Alignment[3])
              props.onChange?.(Alignment[3])
            }}
          >
            <Tooltip title="两端对齐">{Icons.getAlignmentJustifyNode()}</Tooltip>
          </div>
        </div>

        <div className="flex-align-center alignment-flex">
          <div
            className={`lower-engine-alignment-item lower-engine-alignment-flex-start flex-center ${flexValue === Alignment_FLEX[0] ? 'active' : ''}`}
            onClick={() => {
              setFlexValue(Alignment_FLEX[0])
              props.onFlexChange?.(Alignment_FLEX[0])
            }}
          >
            <Tooltip title="顶对齐">{Icons.getAlignmentFlexStartNode()}</Tooltip>
          </div>

          <div
            className={`lower-engine-alignment-item lower-engine-alignment-flex-center flex-center ${flexValue === Alignment_FLEX[1] ? 'active' : ''}`}
            onClick={() => {
              setFlexValue(Alignment_FLEX[1])
              props.onFlexChange?.(Alignment_FLEX[1])
            }}
          >
            <Tooltip title="垂直居中">{Icons.getAlignmentFlexCenterNode()}</Tooltip>
          </div>

          <div
            className={`lower-engine-alignment-item lower-engine-alignment-flex-end flex-center ${flexValue === Alignment_FLEX[2] ? 'active' : ''}`}
            onClick={() => {
              setFlexValue(Alignment_FLEX[2])
              props.onFlexChange?.(Alignment_FLEX[2])
            }}
          >
            <Tooltip title="底对齐">{Icons.getAlignmentFlexEndNode()}</Tooltip>
          </div>
        </div>
      </div>
    )
  }

  return render()
}

export default Alignment
