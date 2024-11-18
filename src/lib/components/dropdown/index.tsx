/**
 * @fileOverview Dropdown
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { CSSProperties, PropsWithChildren, ReactElement } from 'react'
import Utils from '../../utils/utils'
import { Dropdown } from 'antd'
import Icons from '../../utils/icons'

export interface IDropdownProps {
  className?: string
  trigger?: Array<string>
  arrow?: boolean
  placement?: string
  menu?: Array<{ [K: string]: any }>
  items?: Array<string | number | { [K: string]: any }>
  width?: number
  maxWidth?: number
  left?: number
  selectValue?: string | number
  onChange?: (value: string | number | { [K: string]: any }) => void
  onOpenChange?: (open: boolean) => void
}

const MDropdown = (props: PropsWithChildren<IDropdownProps>): ReactElement => {
  const getMenus = () => {
    let menu = props.menu || []
    if (menu.length > 0) return menu

    let items = props.items || []
    let options: any = []
    items.forEach((item: string | number | { [K: string]: any }, index: number) => {
      let suffix: string = ''
      let text = item || ''
      let value = item || ''
      if (typeof item !== 'string' && typeof item !== 'number') {
        let newItem: any = item || {}
        suffix = newItem.suffix || ''
        text = newItem.label || newItem.text || newItem.name || ''
        value = newItem.value || ''
      }

      options.push({
        label: (
          <div className={`lower-engine-content-item w100 flex-align-center cursor-pointer ${props.selectValue === value ? 'active' : ''}`} key={index} onClick={() => props.onChange?.(item)}>
            {Icons.getSuccessNode()}
            <p className="lower-engine-content-item-text flex-1">{`${text || ''}`}</p>
            {!Utils.isBlank(suffix) && <div className="lower-engine-content-item-suffix">{suffix || ''}</div>}
          </div>
        ),
        key: `${index}`,
      })
    })

    return options
  }

  const render = () => {
    let trigger: any = (props.trigger || []).length > 0 ? props.trigger : ['click']
    let placement: any = Utils.isBlank(props.placement || '') ? '' : props.placement || ''
    let arrow = props.arrow ?? false
    let width = props.width ?? 176
    let maxWidth = props.maxWidth ?? width

    let style: CSSProperties = {
      width,
      maxWidth,
    }

    if (!(props.left === undefined || props.left === null)) {
      style.left = props.left
    }

    return (
      <Dropdown
        overlayClassName={`lower-engine-dropdown ${props.className || ''}`}
        overlayStyle={{ ...style }}
        menu={{ items: getMenus() }}
        trigger={trigger}
        arrow={arrow}
        placement={placement}
        onOpenChange={(open: boolean) => props.onOpenChange?.(open)}
      >
        {props.children}
      </Dropdown>
    )
  }

  return render()
}

export default MDropdown
