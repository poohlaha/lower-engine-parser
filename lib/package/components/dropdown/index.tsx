/**
 * @fileOverview Dropdown
 * @date 2023-08-28
 * @author poohlaha
 */
import React, {CSSProperties, PropsWithChildren, ReactElement, useEffect, useState} from 'react'
import Utils from '../../utils/utils'
import { Dropdown } from 'antd'
import Icons from '../../utils/icons'

export interface IDropdownProps {
  className?: string
  trigger?: Array<string>
  arrow?: boolean
  placement?: string
  menu?: Array<{ [K: string]: any }>
  items?: Array<string | { [K: string]: any }>
  width?: number
  maxWidth?: number
  maxHeight?: number
  left?: number
  mode?: 'multiple' | 'tags' | ''
  selectValue?: string | Array<string>
  open?: boolean
  onChange?: (value: string | { [K: string]: any }) => void
  onOpenChange?: (open: boolean) => void
}

const MDropdown = (props: PropsWithChildren<IDropdownProps>): ReactElement => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(props.open ?? false)
  }, [props.open])

  const getIcon = (icon: any = '') => {
    if (!icon) return null

    if (typeof icon === 'string') {
      return <i className={`lower-engine-content-item-icon ${icon}`} />
    }

    return <div className="lower-engine-content-item-icon">{icon}</div>
  }

  const getMenus = () => {
    let menu = props.menu || []
    if (menu.length > 0) return menu

    let items = props.items || []
    let options: any = []
    items.forEach((item: string | { [K: string]: any }, index: number) => {
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

      options.push({
        label: (
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
        ),
        key: `${index}`,
        item,
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
    let maxHeight = props.maxHeight ?? width

    let style: CSSProperties = {
      width,
      maxWidth,
      maxHeight,
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
        open={open}
        onOpenChange={(open: boolean) => {
          setOpen(open)
          props.onOpenChange?.(open)
        }}
      >
        {props.children}
      </Dropdown>
    )
  }

  return render()
}

export default MDropdown
