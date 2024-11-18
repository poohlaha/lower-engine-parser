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
  items?: Array<string | number>
  width?: number
  left?: number
  selectValue?: string | number
  onChange?: (value: string | number) => void
  onOpenChange?: (open: boolean) => void
}

const MDropdown = (props: PropsWithChildren<IDropdownProps>): ReactElement => {
  const getMenus = () => {
    let menu = props.menu || []
    if (menu.length > 0) return menu

    let items = props.items || []
    let options: any = []
    items.forEach((item: string | number, index: number) => {
      options.push({
        label: (
          <div className={`lower-engine-content-item w100 flex-align-center cursor-pointer ${props.selectValue === item ? 'active' : ''}`} key={index} onClick={() => props.onChange?.(item)}>
            {Icons.getSuccessNode()}
            <p className="lower-engine-content-item-text">{`${item || ''}`}</p>
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

    let style: CSSProperties = {
      width,
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
