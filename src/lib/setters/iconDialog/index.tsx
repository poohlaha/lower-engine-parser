/**
 * @fileOverview Dialog
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Modal, Tabs } from 'antd'
import InputSetter from '../input'
import Utils from '../../utils/utils'

export interface IIconDialogProps extends ICommonProps {
  zIndex?: number
  loading?: boolean
  dialogClassName?: string
  dialogStyle?: React.CSSProperties
  icon?: React.ReactNode
  width?: string | number
  okText?: string
  cancelText?: string
  maskClosable?: boolean
  open?: boolean
  onOk?: (selected: { [K: string]: any }) => void
  onCancel?: () => void
  afterOpenChange: (open: boolean) => void
  tabs: Array<IIconDialogTabProps>
}

export interface IIconDialogTabProps {
  label?: string
  values?: Array<{ [K: string]: any }>
}

const MIconDialog = (props: IIconDialogProps): ReactElement => {
  const [tabActiveKey, setTabActiveKey] = useState('0')
  const [searchValue, setSearchValue] = useState('')
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<{ [K: string]: any }>({})

  useEffect(() => {
    setOpen(props.open ?? false)
  }, [props.open])
  const getTabItems = () => {
    const tabs = props.tabs || []
    if (tabs.length === 0) return []

    const items: Array<any> = []
    tabs.forEach((tab, index: number) => {
      items.push({
        key: `${index}`,
        label: tab.label || '',
      })
    })

    return items
  }

  // 查找图标
  const getSearchValues = (iconObj: IIconDialogTabProps = {}) => {
    const iconValues = iconObj.values || []
    if (Utils.isBlank(searchValue)) {
      return iconValues || []
    }

    return iconValues.filter((icon: { [K: string]: any }) => (icon.text || '').indexOf(searchValue) !== -1)
  }

  const render = () => {
    const iconObj: IIconDialogTabProps = (props.tabs || []).find((tab, index: number) => `${index}` === tabActiveKey) || {}
    const iconValues = getSearchValues(iconObj || {})
    return (
      <div className={`${props.className || ''} lower-engine-icon-dialog`}>
        <button onClick={() => setOpen(true)}>{props.icon ? props.icon : props.text || ''}</button>

        <Modal
          wrapClassName={`lower-engine-icon-dialog-modal ${props.dialogClassName || ''}`}
          title=""
          maskClosable={props.maskClosable}
          width={props.width}
          style={props.dialogStyle}
          loading={props.loading ?? false}
          okText={props.okText}
          cancelText={props.cancelText}
          open={open}
          zIndex={props.zIndex ?? 999}
          onOk={() => {
            setOpen(false)
            props.onOk?.(selected)
          }}
          onCancel={() => {
            setOpen(false)
            props.onCancel?.()
          }}
          afterOpenChange={(newOpen: boolean) => {
            setOpen(newOpen)
            props.onOpenChange?.(newOpen)
            if (!newOpen) {
              setSearchValue('')
            }
          }}
        >
          <div className="lower-engine-icon-dialog-modal-content flex-direction-column">
            <div className="icon-dialog-modal-content-header flex-align-center">
              <div className="header-title">{props.title || '对话框'}</div>
              <InputSetter
                className="flex-1"
                default={setSearchValue}
                isSearch={true}
                onChange={(value: string = '') => {
                  setSearchValue(value)
                }}
              />
            </div>

            <Tabs
              items={getTabItems()}
              activeKey={tabActiveKey}
              onChange={(activeKey: string) => {
                setTabActiveKey(activeKey)
                setSelected({})
              }}
            />

            <div className="lower-engine-icon-dialog-modal-content-tab-wrapper flex-1">
              <div className="lower-engine-icon-dialog-modal-content-tab">
                {iconValues.length > 0 &&
                  iconValues.map((value: { [K: string]: any }, index: number) => {
                    let text = value.text || ''
                    let hasDanger = false
                    let content: string | React.ReactNode = value.text || ''
                    if (!Utils.isBlank(searchValue || '')) {
                      let searchIndex = text.indexOf(searchValue || '')
                      if (searchIndex !== -1) {
                        content = (
                          <div className="text-c search-text flex-align-center">
                            <p>{text.substring(0, searchIndex)}</p>
                            <p className="search-value">{searchValue}</p>
                            <p>{text.substring(searchIndex + searchValue.length, text.length)}</p>
                          </div>
                        )
                        hasDanger = true
                      }
                    }
                    return (
                      <div
                        className={`tab-icon flex-center flex-direction-column ${selected.index === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => {
                          setSelected({
                            ...value,
                            index,
                          })
                        }}
                      >
                        {value.component}

                        {!hasDanger ? <p className="text-c">{content || ''}</p> : content}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }

  return render()
}

export default MIconDialog
