/**
 * @fileOverview Dialog
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Modal, Tabs } from 'antd'

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

  const render = () => {
    const iconObj: IIconDialogTabProps = (props.tabs || []).find((tab, index: number) => `${index}` === tabActiveKey) || {}
    const iconValues = iconObj.values || []
    return (
      <div className={`${props.className || ''} lower-engine-icon-dialog`}>
        <button onClick={() => setOpen(true)}>{props.icon ? props.icon : props.text || ''}</button>

        <Modal
          wrapClassName={`lower-engine-icon-dialog-modal ${props.dialogClassName || ''}`}
          title={props.title || '对话框'}
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
          }}
        >
          <div className="lower-engine-icon-dialog-modal-content flex-direction-column">
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
                        <p className="text-c">{value.text || ''}</p>
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
