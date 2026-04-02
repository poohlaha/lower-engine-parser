/**
 * @fileOverview 公共
 * @date 2024-11-14
 * @author poohlaha
 */
import React from 'react'
export type Alignment = 'justify' | 'left' | 'right' | 'center' | 'upDown'

export interface ICommonProps {
  name?: string
  title?: string
  text?: string
  setter?: string | Array<string>
  default?: any // 默认值
  unit?: string // 单位, 用于字体, padding, margin 等, 默认为 px, 手机端为 rem, 可全局定义
  alignment?: Alignment // 文字和组件的对齐方式, 默认两端对齐(Justify)
  disabled?: boolean
  className?: string
  tooltip?: string | React.ReactNode
  [K: string]: any
}

// 不透明度
export const OpacityProps: ICommonProps = {
  name: 'Opacity',
  text: '不透明度',
  setter: 'OpacitySetter',
  default: 100,
}

// 颜色
export const ColorProps: ICommonProps = {
  name: 'Color',
  text: '',
  setter: 'ColorSetter',
  color: '#ffffff',
  opacity: 1,
}

// 背景
export const BackgroundProps: ICommonProps = {
  name: 'Background',
  title: '背景颜色',
  setter: ['ColorSetter', 'OpacitySetter'],
  default: 100,
  alignment: 'upDown',
}

// 字体
export const FontSizeProps: ICommonProps = {
  name: 'FontSize',
  text: '',
  setter: 'FontSizeSetter',
  default: 14,
}

// 字重
export const FontBoldProps: ICommonProps = {
  name: 'FontBold',
  text: '',
  setter: 'FontBoldSetter',
  default: 'bold',
}

// 对齐方式
export const AlignmentProps: ICommonProps = {
  name: 'Alignment',
  text: '',
  setter: 'AlignmentSetter',
  className: 'flex-jsc-between',
  default: 'left',
  alignmentFlex: 'center',
}

// 边距(内边距, 外边距, 行高, 字间距)
export const MarginProps: ICommonProps = {
  name: 'Margin',
  text: '',
  setter: 'MarginSetter',
  className: 'flex-jsc-between',
}

// 圆角
export const RoundProps: ICommonProps = {
  name: 'Round',
  text: '',
  setter: 'RoundSetter',
  default: 0, // 0: 圆角 1: 独立圆角
}

// 填充
export const FillProps: ICommonProps = {
  name: 'Fill',
  text: '填充',
  setter: 'FillSetter',
}

// 描边
export const StrokeProps: ICommonProps = {
  name: 'Stroke',
  text: '描边',
  setter: 'StrokeSetter',
  default: 1,
}

// 阴影
export const ShadowProps: ICommonProps = {
  name: 'Shadow',
  text: '阴影',
  setter: 'ShadowSetter',
}
