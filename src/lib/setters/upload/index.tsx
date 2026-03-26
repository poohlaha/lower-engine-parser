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
}

const Upload = (props: IUploadProps): ReactElement => {
  const [uploadLoading, setUploadLoading] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(props.url || '')
  }, [props.url])

  const getUploadButton = () => {
    if (!Utils.isBlank(props.url || '')) {
      return <img className="rounded-md" src={props.url || ''} alt="avatar" style={{ width: '100%', height: '100%' }} />
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
