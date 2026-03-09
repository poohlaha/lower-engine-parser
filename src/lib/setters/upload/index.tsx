/**
 * @fileOverview Upload
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Upload as AntUpload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import Utils from '../../utils/utils'

export interface IUploadProps extends ICommonProps {
  uploadFileName: string
  type?: 'text' | 'picture' | 'picture-card' | 'picture-circle'
  action?: string
  className?: string
  uploadClassName?: string
  url: string
  accept?: string
  headers?: Record<string, any>
  beforeUpload?: (file: any) => boolean
  onChange?: (response: any) => void
}

const Upload = (props: IUploadProps): ReactElement => {
  const [uploadLoading, setUploadLoading] = useState(false)

  const getUploadButton = () => {
    if (Utils.isBlank(props.url || '')) {
      return <img className="rounded-md" src={props.url || ''} alt="avatar" style={{ width: '100%', height: '100%' }} />
    }

    if (uploadLoading) {
      return <LoadingOutlined />
    }

    return <PlusOutlined />
  }

  const render = () => {
    const listType = props.listType ?? 'picture-card'
    return (
      <div className={`${props.className || ''} lower-engine-upload`}>
        <AntUpload
          name={props.uploadFileName || ''}
          listType={listType}
          action={props.action || ''}
          className={props.uploadClassName || ''}
          accept={props.accept || '*'}
          disabled={uploadLoading}
          headers={props.headers || {}}
          beforeUpload={(file: any) => {
            return props.beforeUpload?.(file) || true
          }}
          onChange={(info: Record<string, any> = {}) => {
            let file = info.file || {}
            if (file.status === 'uploading') {
              setUploadLoading(true)
              return
            }

            if (file.status === 'done') {
              setUploadLoading(false)
              const response = file.response || {}
              props.onChange?.(response)
            }
          }}
        >
          {getUploadButton()}
        </AntUpload>
      </div>
    )
  }

  return render()
}

export default Upload
