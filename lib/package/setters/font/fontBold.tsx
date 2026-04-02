/**
 * @fileOverview Font Bold
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { ICommonProps } from '../../utils/common'
import Icons from '../../utils/icons'
import { Tooltip } from 'antd'

interface IFontBoldExportProps {
  checkedFontWeight: boolean
  checkedItalic: boolean
  checkedUnderline: boolean
  checkedLineThrough: boolean
}
export interface IFontBoldProps extends ICommonProps {
  onChange?: (values: IFontBoldExportProps) => void
  checkedFontWeight?: boolean
  checkedItalic?: boolean
  checkedUnderline?: boolean
  checkedLineThrough?: boolean
}

const FontBold = (props: IFontBoldProps): ReactElement => {
  const FontBold = ['bold', 'italic', 'underline', 'line-through']
  const [checkedFontWeight, setCheckedFontWeight] = useState(false)
  const [checkedItalic, setCheckedItalic] = useState(false)
  const [checkedUnderline, setCheckedUnderline] = useState(false)
  const [checkedLineThrough, setCheckedLineThrough] = useState(false)

  useEffect(() => {
    setCheckedFontWeight(props.checkedFontWeight ?? false)
    setCheckedItalic(props.checkedItalic ?? false)
    setCheckedUnderline(props.checkedUnderline ?? false)
    setCheckedLineThrough(props.checkedLineThrough ?? false)
  }, [props.checkedFontWeight, props.checkedItalic, props.checkedUnderline, props.checkedLineThrough])

  const render = () => {
    return (
      <div className={`${props.className || ''} lower-engine-font-bold flex-align-center`}>
        <div
          className={`lower-engine-font-bold-item lower-engine-font-bold-bold flex-center ${checkedFontWeight ? 'active' : ''}`}
          onClick={() => {
            setCheckedFontWeight(!checkedFontWeight)
            props.onChange?.({
              checkedFontWeight: !checkedFontWeight,
              checkedItalic,
              checkedUnderline,
              checkedLineThrough,
            })
          }}
        >
          <Tooltip title="加租">{Icons.getFontBoldBoldNode()}</Tooltip>
        </div>

        <div
          className={`lower-engine-font-bold-item lower-engine-font-bold-italic flex-center ${checkedItalic ? 'active' : ''}`}
          onClick={() => {
            setCheckedItalic(!checkedItalic)
            props.onChange?.({
              checkedFontWeight,
              checkedItalic: !checkedItalic,
              checkedUnderline,
              checkedLineThrough,
            })
          }}
        >
          <Tooltip title="倾斜">{Icons.getFontBoldItalicNode()}</Tooltip>
        </div>

        <div
          className={`lower-engine-font-bold-item lower-engine-font-bold-underline flex-center ${checkedUnderline ? 'active' : ''}`}
          onClick={() => {
            setCheckedUnderline(!checkedUnderline)
            props.onChange?.({
              checkedFontWeight,
              checkedItalic,
              checkedUnderline: !checkedUnderline,
              checkedLineThrough,
            })
          }}
        >
          <Tooltip title="下划线">{Icons.getFontBoldUnderlineNode()}</Tooltip>
        </div>

        <div
          className={`lower-engine-font-bold-item lower-engine-font-bold-line-through flex-center ${checkedLineThrough ? 'active' : ''}`}
          onClick={() => {
            setCheckedLineThrough(!checkedLineThrough)
            props.onChange?.({
              checkedFontWeight,
              checkedItalic,
              checkedUnderline,
              checkedLineThrough: !checkedLineThrough,
            })
          }}
        >
          <Tooltip title="删除线">{Icons.getFontBoldLineThroughNode()}</Tooltip>
        </div>
      </div>
    )
  }

  return render()
}

export default FontBold
