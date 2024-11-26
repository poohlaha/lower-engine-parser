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
  needIcon?: boolean
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
        <div className={`flex-center icon-dialog-text ${props.needIcon ? 'has-icon' : ''}`} onClick={() => setOpen(true)}>
          {props.needIcon ? (
            <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M272.270222 372.224l224.426667-125.724444a39.822222 39.822222 0 0 1 39.651555 0.398222l213.902223 125.724444a39.822222 39.822222 0 0 1-2.104889 69.859556l-213.902222 108.544a39.822222 39.822222 0 0 1-35.384889 0.341333L274.375111 442.823111a39.822222 39.822222 0 0 1-2.104889-70.599111zM515.982222 496.469333l178.631111-90.567111L515.982222 300.942222 328.647111 405.845333 515.982222 496.469333z m-236.544 2.048l236.771556 113.891556 224.768-113.664a28.444444 28.444444 0 1 1 25.713778 50.744889l-237.340445 120.035555a28.444444 28.444444 0 0 1-25.201778 0.227556l-249.400889-120.035556a28.444444 28.444444 0 1 1 24.689778-51.2z m0 113.777778l236.771556 113.891556 224.768-113.664a28.444444 28.444444 0 1 1 25.713778 50.744889l-237.340445 120.035555a28.444444 28.444444 0 0 1-25.201778 0.227556l-249.400889-120.035556a28.444444 28.444444 0 1 1 24.689778-51.2z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            props.text || ''
          )}
        </div>

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
                default={searchValue}
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
                        {value.component()}

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
