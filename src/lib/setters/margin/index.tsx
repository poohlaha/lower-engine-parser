/**
 * @fileOverview Margin
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { Tooltip, InputNumber } from 'antd'
import Icons from '../../utils/icons'
import { ICommonProps } from '../../utils/common'
import MPopover from '../../components/popover'
import Utils from '../../utils/utils'

export interface IMarginProps extends ICommonProps {
  spaceLetter?: number
  lineHeight?: number
  margins?: Array<number>
  paddings?: Array<number>
  textArrangement?: number // 1: 横排, 2: 竖排
  listOrder?: number // 1: 无序列表, 2: 有序列表
  onSpaceLetterChange?: (spaceLetter: number, lineHeight: number, textArrangement: string, listOrder: string, margins: Array<number>, paddings: Array<number>) => void
  onLineHeightChange?: (spaceLetter: number, lineHeight: number, textArrangement: string, listOrder: string, margins: Array<number>, paddings: Array<number>) => void
  onTextArrangementChange?: (spaceLetter: number, lineHeight: number, textArrangement: string, listOrder: string, margins: Array<number>, paddings: Array<number>) => void
  onListOrderChange?: (spaceLetter: number, lineHeight: number, textArrangement: string, listOrder: string, margins: Array<number>, paddings: Array<number>) => void
  onMarginChange?: (spaceLetter: number, lineHeight: number, textArrangement: string, listOrder: string, margins: Array<number>, paddings: Array<number>) => void
  onPaddingChange?: (spaceLetter: number, lineHeight: number, textArrangement: string, listOrder: string, margins: Array<number>, paddings: Array<number>) => void
}

const Margin = (props: IMarginProps): ReactElement => {
  const [spaceLetter, setSpaceLetter] = useState<number>(0)
  const [lineHeight, setLineHeight] = useState<number>(0)
  const [textArrangement, setTextArrangement] = useState<number>(1)
  const [listOrder, setListOrder] = useState<number>(0)
  const [margins, setMargins] = useState<Array<number>>([0, 0, 0, 0])
  const [paddings, setPaddings] = useState<Array<number>>([0, 0, 0, 0])
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setSpaceLetter(props.spaceLetter ?? 0)
  }, [props.spaceLetter])

  useEffect(() => {
    setLineHeight(props.lineHeight ?? 0)
  }, [props.lineHeight])

  useEffect(() => {
    setTextArrangement(props.textArrangement ?? 1)
  }, [props.textArrangement])

  useEffect(() => {
    setListOrder(props.listOrder ?? 0)
  }, [props.listOrder])

  const getMarginOrPaddingValues = (values: Array<number> = []) => {
    if (values.length === 0) {
      return [0, 0, 0, 0]
    }

    if (values.length === 1) {
      return [values[0], values[0], values[0], values[0]]
    }

    if (values.length === 2) {
      return [values[0], values[1], values[0], values[1]]
    }

    if (values.length === 3) {
      return [values[0], values[1], values[2], 0]
    }

    return [values[0], values[1], values[2], values[3]]
  }

  useEffect(() => {
    setMargins(getMarginOrPaddingValues(props.margins || []))
  }, [props.margins])

  useEffect(() => {
    setPaddings(getMarginOrPaddingValues(props.paddings || []))
  }, [props.paddings])

  const getPopoverContent = () => {
    return (
      <div className="lower-engine-margin-popover-content">
        <header className="text-l flex-jsc-between flex-align-center font-bold">
          <p className="flex-1">文本设置</p>
          <div className="close-btn" onClick={() => setOpen(false)}>
            {Icons.getCloseNode()}
          </div>
        </header>
        <div className="lower-engine-margin-popover-content-inner">
          {/* 文本排列 */}
          <div className="lower-engine-margin-popover-content-inner-item flex-jsc-between flex-align-center w100">
            <p>文本排列</p>
            <div className="flex-align-center">
              <Tooltip title="横排">
                <div
                  className={`text-arrangement ${textArrangement === 1 ? 'active' : ''}`}
                  onClick={() => {
                    setTextArrangement(1)
                    props.onTextArrangementChange?.(spaceLetter, lineHeight, 'horizontal-tb', '', margins, paddings)
                  }}
                >
                  {Icons.getArrangementHorizontalNode()}
                </div>
              </Tooltip>
              <Tooltip title="竖排">
                <div
                  className={`text-arrangement ${textArrangement === 2 ? 'active' : ''}`}
                  onClick={() => {
                    setTextArrangement(2)
                    props.onTextArrangementChange?.(spaceLetter, lineHeight, 'vertical-lr', '', margins, paddings)
                  }}
                >
                  {Icons.getArrangementVerticalNode()}
                </div>
              </Tooltip>
            </div>
          </div>

          {/* 列表样式
          <div className="lower-engine-margin-popover-content-inner-item flex-jsc-between flex-align-center w100">
            <p>列表样式</p>
            <div className="flex-align-center">
              <Tooltip title="无序列表">
                  <div
                      className={`list-order ${listOrder === 1 ? 'active' : ''}`}
                      onClick={() => {
                          setListOrder(1)
                          props.onListOrderChange?.(1)
                      }}
                  >
                      {Icons.getListUnorderNode()}
                  </div>
              </Tooltip>
              <Tooltip title="有序列表">
                  <div
                      className={`list-order ${listOrder === 2 ? 'active' : ''}`}
                      onClick={() => {
                          setListOrder(2)
                          props.onListOrderChange?.(2)
                      }}
                  >
                      {Icons.getListOrderNode()}
                  </div>
              </Tooltip>
            </div>
          </div>
          */}

          {/* 外边距 */}
          <div className="lower-engine-margin-popover-content-inner-item lower-engine-margin-popover-content-inner-item-margin flex-jsc-between flex-align-start w100">
            <p>外边距</p>
            <div className="flex-align-center input-group">
              <div className="inner-item-margin inner-item-margin-top flex-direction-column">
                <InputNumber
                  value={margins[0]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(margins || [])
                    newValues[0] = newValue
                    setMargins(newValues)
                    props.onMarginChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', newValues, paddings)
                  }}
                />

                <p className="text-c">上</p>
              </div>

              <div className="inner-item-margin inner-item-margin-bottom flex-direction-column">
                <InputNumber
                  value={margins[2]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(margins || [])
                    newValues[2] = newValue
                    setMargins(newValues)
                    props.onMarginChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', newValues, paddings)
                  }}
                />

                <p className="text-c">下</p>
              </div>

              <div className="inner-item-margin inner-item-margin-left flex-direction-column">
                <InputNumber
                  value={margins[3]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(margins || [])
                    newValues[3] = newValue
                    setMargins(newValues)
                    props.onMarginChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', newValues, paddings)
                  }}
                />

                <p className="text-c">左</p>
              </div>

              <div className="inner-item-margin inner-item-margin-right flex-direction-column">
                <InputNumber
                  value={margins[1]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(margins || [])
                    newValues[1] = newValue
                    setMargins(newValues)
                    props.onMarginChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', newValues, paddings)
                  }}
                />

                <p className="text-c">右</p>
              </div>
            </div>
          </div>

          {/* 内边距 */}
          <div className="lower-engine-margin-popover-content-inner-item lower-engine-margin-popover-content-inner-item-padding flex-jsc-between flex-align-start w100">
            <p>内边距</p>
            <div className="flex-align-center input-group">
              <div className="inner-item-margin inner-item-margin-top flex-direction-column">
                <InputNumber
                  value={paddings[0]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(paddings || [])
                    newValues[0] = newValue
                    setPaddings(newValues)
                    props.onPaddingChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', margins, newValues)
                  }}
                />

                <p className="text-c">上</p>
              </div>

              <div className="inner-item-margin inner-item-margin-bottom flex-direction-column">
                <InputNumber
                  value={paddings[2]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(paddings || [])
                    newValues[2] = newValue
                    setPaddings(newValues)
                    props.onPaddingChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', margins, newValues)
                  }}
                />

                <p className="text-c">下</p>
              </div>

              <div className="inner-item-margin inner-item-margin-left flex-direction-column">
                <InputNumber
                  value={paddings[3]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(paddings || [])
                    newValues[3] = newValue
                    setPaddings(newValues)
                    props.onPaddingChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', margins, newValues)
                  }}
                />

                <p className="text-c">左</p>
              </div>

              <div className="inner-item-margin inner-item-margin-right flex-direction-column">
                <InputNumber
                  value={paddings[1]}
                  style={{ width: '100%' }}
                  min={0}
                  onChange={(value: number | null) => {
                    let newValue: number = Utils.getInputNumberValue(value, 0)
                    let newValues = Utils.deepCopy(paddings || [])
                    newValues[1] = newValue
                    setPaddings(newValues)
                    props.onPaddingChange?.(spaceLetter, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', margins, newValues)
                  }}
                />

                <p className="text-c">右</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const render = () => {
    return (
      <div className={`${props.className || ''} lower-engine-margin flex-align-center`}>
        {/* spacing-line */}
        <Tooltip title="字间距">
          <div className="lower-engine-margin-spacing-line flex-align-center">
            {Icons.getMarginSpaceLetterNode()}
            <InputNumber
              min={0}
              value={spaceLetter}
              style={{ width: 50 }}
              step={0.1}
              onChange={(value: number | string | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                setSpaceLetter(newValue)
                props.onSpaceLetterChange?.(newValue, lineHeight, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', margins, paddings)
              }}
            />
          </div>
        </Tooltip>

        {/* line-height */}
        <Tooltip title="行高">
          <div className="lower-engine-margin-line-height flex-align-center">
            {Icons.getMarginLineHeightNode()}
            <InputNumber
              min={0}
              value={lineHeight}
              style={{ width: 50 }}
              onChange={(value: number | string | null) => {
                let newValue: number = Utils.getInputNumberValue(value, 0)
                setLineHeight(newValue)
                props.onLineHeightChange?.(spaceLetter, newValue, textArrangement === 2 ? 'vertical-lr' : 'horizontal-tb', '', margins, paddings)
              }}
            />
          </div>
        </Tooltip>

        <Tooltip title="文本设置">
          <MPopover
            className="lower-engine-margin-popover"
            placement="topRight"
            width={240}
            content={getPopoverContent()}
            open={open}
            onOpenChange={(newOpen: boolean) => {
              setOpen(newOpen)
            }}
          >
            <div className="more">{Icons.getMoreNode()}</div>
          </MPopover>
        </Tooltip>
      </div>
    )
  }

  return render()
}

export default Margin
