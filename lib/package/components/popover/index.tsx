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
  trigger?: string | string[]
  arrow?: boolean
  placement?: string
  content?: React.ReactNode
  items?: Array<string | Record<string, any>>
  width?: number
  maxWidth?: number
  selectValue?:string | Array<string>
  open?: boolean
  mode?: 'multiple' | ''
  onChange?: (value: string | Record<string, any>) => void
  onOpenChange?: (open: boolean) => void
}

const MPopover = (props: PropsWithChildren<IPopoverProps>): ReactElement => {

  const getIcon = (icon: any = '') => {
    if (!icon) return null

    if (typeof icon === 'string') {
      return <i className={`lower-engine-content-item-icon ${icon}`} />
    }

    return <div className="lower-engine-content-item-icon">{icon}</div>
  }

  const getContentNode = () => {
    let content = props.content
    if (content) return content

    return (
      <div className="lower-engine-content">
        {(props.items || []).map((item: string | Record<string, any>, index: number) => {
          let suffix: string = ''
          let text = item || ''
          let value = item || ''
          let desc = typeof item === 'object' ? item.desc || '' : ''
          let extra = typeof item === 'object' ? item.extra || '' : ''
          let icon = null
          const disabled = typeof item === 'object' ? item.disabled ?? false : false
          if (typeof item !== 'string') {
            let newItem: any = item || {}
            icon = newItem.icon || ''
            suffix = newItem.suffix || ''
            text = newItem.label || newItem.text || newItem.name || ''
            value = newItem.value || ''
          }

          let hasActive = false
          const mode = props.mode
          if (mode === 'multiple') {
            hasActive = (props.selectValue || []).indexOf(value as string) !== -1
          } else {
            const selectValue = props.selectValue
            if (Array.isArray(selectValue)) {
              if (selectValue.length > 0) {
                hasActive = selectValue[0] === value
              }
            } else {
              hasActive = props.selectValue === value
            }
          }

          return (
              <div
                  className={`lower-engine-content-item w100 flex-direction-column cursor-pointer ${disabled ? 'disabled' : ''} ${hasActive ? 'active' : ''}`}
                  key={index}
                  onClick={() => {
                    if (disabled) return
                    props.onChange?.(item)
                  }}
              >
                <div className="flex-align-center flex-jsc-between">
                  <div className="flex-align-center">
                    {Icons.getSuccessNode()}
                    {getIcon(icon)}
                    <p className="lower-engine-content-item-text flex-1">{`${text || ''}`}</p>
                    {!Utils.isBlank(suffix) && <div className="lower-engine-content-item-suffix">{suffix || ''}</div>}
                  </div>

                  {/* extra */}
                  {!Utils.isBlank(desc || '') && <p className="over-two-ellipsis lower-engine-content-item-extra">{extra || ''}</p>}
                </div>

                {/* 描述 */}
                {!Utils.isBlank(desc || '') && <div className="over-two-ellipsis lower-engine-content-item-desc" dangerouslySetInnerHTML={{ __html: desc || '' }} />}
              </div>
          )
        })}
      </div>
    )
  }

  const render = () => {
    let trigger: any = Utils.isBlank(props.trigger || '') ? 'click' : props.trigger || 'click'
    let placement: any = Utils.isBlank(props.placement || '') ? 'bottom' : props.placement || ''
    let arrow = props.arrow ?? false
    let width = props.width ?? 176
    let maxWidth = props.maxWidth ?? width

    return (
      <Popover
        overlayClassName={`lower-engine-popover lower-engine-dropdown ${props.className || ''}`}
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
