/**
 * @fileOverview Upload
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import { Upload as AntUpload, UploadFile } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import Utils from '../../utils/utils'
import { MText } from '../../components'
import ImgCrop from 'antd-img-crop'

export interface IUploadProps extends ICommonProps {
  uploadFileName: string
  type?: 'text' | 'picture' | 'picture-card' | 'picture-circle'
  action?: string
  className?: string
  uploadClassName?: string
  url?: string
  accept?: string
  maxUploadSize?: number
  showUploadList?: boolean
  needPreview?: boolean
  needCut?: boolean
  headers?: Record<string, any>
  beforeUpload?: (file: any) => boolean
  onChange?: (response: Record<string, any>, size: Record<string, any>) => void
  onDelete?: (url: string) => void
}

const Upload = (props: IUploadProps): ReactElement => {
  const [uploadLoading, setUploadLoading] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(props.url || '')
  }, [props.url])

  const getUploadButton = () => {
    if (!Utils.isBlank(props.url || '')) {
      return (
        <div className="position-relative upload-container wh100">
          <img className="rounded-md" src={props.url || ''} alt="avatar" style={{ width: '100%', height: '100%' }} />
          <div className="upload-actions rounded-md position-absolute wh100 flex-center">
            <a
              className="upload-preview-box"
              href={props.url || ''}
              target="_blank"
              rel="noopener noreferrer"
              title="预览文件"
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <div className="action-eye wh100">
                <svg className="wh100" viewBox="64 64 896 896" fill="currentColor" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  ></path>
                </svg>
              </div>
            </a>

            <div
              className="action-del-box"
              onClick={e => {
                e.stopPropagation()
                props.onDelete?.(props.url || '')
              }}
            >
              <svg className="wh100" viewBox="64 64 896 896" fill="currentColor" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )
    }

    if (uploadLoading) {
      return <LoadingOutlined />
    }

    return <PlusOutlined />
  }

  const getImageSize = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith('image/')) {
        reject(new Error('不是图片文件'))
        return
      }

      const img = new Image()
      img.onload = () => {
        resolve({ width: img.width, height: img.height })
        URL.revokeObjectURL(img.src) // 释放内存
      }
      img.onerror = reject

      img.src = URL.createObjectURL(file)
    })
  }

  const getNode = (needPreview: boolean = true) => {
    const listType = props.listType ?? 'picture-card'
    return (
      <AntUpload
        name={props.uploadFileName || ''}
        listType={listType}
        action={props.action || ''}
        className={props.uploadClassName || ''}
        accept={props.accept || '*'}
        disabled={uploadLoading}
        headers={props.headers || {}}
        showUploadList={props.showUploadList ?? false}
        onPreview={async (file: UploadFile) => {
          if (!needPreview) return
          await onPreview(file)
        }}
        beforeUpload={(file: any) => {
          const maxUploadSize = props.maxUploadSize ?? 0
          if (maxUploadSize === 0) {
            return true
          }

          return props.beforeUpload?.(file) || true
        }}
        onChange={async (info: Record<string, any> = {}) => {
          let file = info.file || {}

          const maxUploadSize = props.maxUploadSize ?? 0
          if (maxUploadSize > 0) {
            if (file.size > maxUploadSize * 1024) {
              return
            }
          }

          if (file.status === 'uploading') {
            setUploadLoading(true)
            return
          }

          if (file.status === 'done') {
            setUploadLoading(false)
            const response = file.response || {}

            setUrl(response.code !== '0' ? '' : response.url || '')
            const imageSize: Record<string, any> = (await getImageSize(file.originFileObj)) || {}
            props.onChange?.(response, imageSize)
          }
        }}
      >
        {getUploadButton()}
      </AntUpload>
    )
  }

  // 预览
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as any)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  const render = () => {
    const needPreview = props.needPreview ?? true
    const needCut = props.needCut ?? false
    return (
      <div className={`${props.className || ''} lower-engine-upload`}>
        {!Utils.isBlank(props.text || '') && <MText text={props.text || ''} tooltip={props.tooltip || ''} textClassName="over-ellipsis" />}

        {needCut ? <ImgCrop rotationSlider>{getNode(needPreview)}</ImgCrop> : getNode(needPreview)}
      </div>
    )
  }

  return render()
}

export default Upload
