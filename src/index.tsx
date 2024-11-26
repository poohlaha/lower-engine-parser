/**
 * @fileOverview export
 * @date 2024-11-14
 * @author poohlaha
 */
import './assets/reset.less'
import './assets/common.less'
import './assets/component.less'
import { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, RoundProps, FillProps, StrokeProps, ShadowProps, ColorProps, FontBoldProps } from './lib/utils/common'

import {
  Opacity as OpacitySetter,
  Round as RoundSetter,
  Fill as FillSetter,
  Color as ColorSetter,
  Stroke as StrokeSetter,
  FontSize as FontSizeSetter,
  FontBold as FontBoldSetter,
  Alignment as AlignmentSetter,
  Margin as MarginSetter,
  Selector as SelectorSetter,
  Shadow as ShadowSetter,
  Input as InputSetter,
  InputNumber as InputNumberSetter,
  IconDialog as IconDialogSetter,
  IOpacityProps as IOpacitySetterProps,
  IRoundProps as IRoundSetterProps,
  IFillProps as IFillSetterProps,
  IColorProps as IColorSetterProps,
  IStrokeProps as IStrokeSetterProps,
  IFontSizeProps as IFontSizeSetterProps,
  IFontBoldProps as IFontBoldSetterProps,
  IAlignmentProps as IAlignmentSetterProps,
  IMarginProps as IMarginSetterProps,
  ISelectorProps as ISelectSetterProps,
  IShadowProps as IShadowSetterProps,
  IInputProps as IInputSetterProps,
  IInputTextAreaProps as IInputTextAreaSetterProps,
  IInputNumberProps as IInputNumberSetterProps,
  IIconDialogProps as IIconDialogSetterProps,
  IIconDialogTabProps as IIconDialogTabSetterProps,
  IInputTextAreaProps,
} from './lib/setters'

import Parser from './lib/parser'
import { IParserProps, IParserSchemaProps, IParserSchemaParamsProps } from './lib/parser'

export { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, RoundProps, FillProps, StrokeProps, ShadowProps, ColorProps, FontBoldProps }

export { Parser as LowerEngineParser }

export type { IParserProps, IParserSchemaProps, IParserSchemaParamsProps }

export {
  OpacitySetter,
  RoundSetter,
  FillSetter,
  ColorSetter,
  StrokeSetter,
  FontSizeSetter,
  FontBoldSetter,
  AlignmentSetter,
  MarginSetter,
  SelectorSetter,
  ShadowSetter,
  InputSetter,
  InputNumberSetter,
  IconDialogSetter,
}

export type {
  IOpacitySetterProps,
  IRoundSetterProps,
  IFillSetterProps,
  IColorSetterProps,
  IStrokeSetterProps,
  IFontSizeSetterProps,
  IFontBoldSetterProps,
  IAlignmentSetterProps,
  IMarginSetterProps,
  ISelectSetterProps,
  IShadowSetterProps,
  IInputSetterProps,
  IInputTextAreaSetterProps,
  IInputNumberSetterProps,
  IIconDialogSetterProps,
  IIconDialogTabSetterProps,
}
