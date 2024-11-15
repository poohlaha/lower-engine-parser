/**
 * @fileOverview 公共
 * @date 2024-11-14
 * @author poohlaha
 */

export type Alignment = 'justify' | 'left' | 'right' | 'center' | 'upDown'

export interface ICommonProps {
  name: string
  title: string
  setter: string | Array<string>
  default?: any // 默认值
  unit?: string // 单位, 用于字体, padding, margin 等, 默认为 px, 手机端为 rem, 可全局定义
  alignment?: Alignment // 文字和组件的对齐方式, 默认两端对齐(Justify)
  disabled?: boolean
  [K: string]: any
}

// 不透明度
export const OpacityProps: ICommonProps = {
  name: 'Opacity',
  title: '不透明度',
  setter: 'OpacitySetter',
  default: 100,
}

// 颜色
export const ColorProps: ICommonProps = {
  name: 'Color',
  title: '',
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
  title: '',
  setter: 'FontSizeSetter',
  default: 14,
}

// 对齐方式
export const AlignmentProps: ICommonProps = {
  name: 'Alignment',
  title: '对齐方式',
  setter: 'AlignmentSetter',
  default: 'left',
}

// 外边距
export const MarginProps: ICommonProps = {
  name: 'Margin',
  title: '外边距',
  setter: 'MarginSetter',
  default: [0, 0],
}

// 内边距
export const PaddingProps: ICommonProps = {
  name: 'Padding',
  title: '内边距',
  setter: 'PaddingSetter',
  default: [0, 0],
}

// 圆角
export const RoundProps: ICommonProps = {
  name: 'Round',
  title: '圆角',
  setter: 'RoundSetter',
  default: 0, // 0: 圆角 1: 独立圆角
}

// 填充
export const FillProps: ICommonProps = {
  name: 'Fill',
  title: '填充',
  setter: 'FillSetter',
}

// 描边
export const StrokeProps: ICommonProps = {
  name: 'Stroke',
  title: '描边',
  setter: 'StrokeSetter',
  default: 1,
}

// 阴影
export const ShadowProps: ICommonProps = {
  name: 'Shadow',
  title: '阴影',
  setter: 'ShadowSetter',
  default: [0, 0, 0, 0],
}
