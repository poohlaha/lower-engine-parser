/**
 * @fileOverview Popover
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { PropsWithChildren, ReactElement } from 'react'
import { Popover } from 'antd'
import Utils from '../../utils/utils'
import Icons from '../../utils/icons'

export interface IPopoverProps {
  className?: string
  trigger?: string
  arrow?: boolean
  placement?: string
  content?: React.ReactNode
  items?: Array<string | number>
  width?: number
  maxWidth?: number
  selectValue?: string | number
  open?: boolean
  onChange?: (value: string | number) => void
  onOpenChange?: (open: boolean) => void
}

const MPopover = (props: PropsWithChildren<IPopoverProps>): ReactElement => {
  const getContentNode = () => {
    let content = props.content
    if (content) return content

    return (
      <div className="lower-engine-content">
        {(props.items || []).map((item: string | number, index: number) => {
          return (
            <div className={`lower-engine-content-item w100 flex-align-center cursor-pointer ${props.selectValue === item ? 'active' : ''}`} key={index} onClick={() => props.onChange?.(item)}>
              {Icons.getSuccessNode()}
              <p className="lower-engine-content-item-text">{`${item || ''}`}</p>
            </div>
          )
        })}
      </div>
    )
  }

  const render = () => {
    let trigger: any = Utils.isBlank(props.trigger || '') ? 'click' : props.trigger || 'click'
    let placement: any = Utils.isBlank(props.placement || '') ? '' : props.placement || ''
    let arrow = props.arrow ?? false
    let width = props.width ?? 176
    let maxWidth = props.maxWidth ?? width

    return (
      <Popover
        overlayClassName={`lower-engine-popover ${props.className || ''}`}
        overlayStyle={{
          width,
          maxWidth,
        }}
        trigger={trigger}
        content={getContentNode()}
        arrow={arrow}
        placement={placement}
        open={props.open}
        onOpenChange={(newOpen: boolean) => {
          props.onOpenChange?.(newOpen)
        }}
      >
        {props.children}
      </Popover>
    )
  }

  return render()
}

export default MPopover
