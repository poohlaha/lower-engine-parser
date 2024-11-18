/**
 * @fileOverview export
 * @date 2024-11-14
 * @author poohlaha
 */
import './assets/reset.less'
import './assets/common.less'
import { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, PaddingProps, RoundProps, FillProps, StrokeProps, ShadowProps, ColorProps, FontBoldProps } from './lib/utils/common'

import {
  Opacity as OpacitySetter,
  Round as RoundSetter,
  Fill as FillSetter,
  Color as ColorSetter,
  Stroke as StrokeSetter,
  FontSize as FontSizeSetter,
  FontBold as FontBoldSetter,
  IOpacityProps as IOpacitySetterProps,
  IRoundProps as IRoundSetterProps,
  IFillProps as IFillSetterProps,
  IColorProps as IColorSetterProps,
  IStrokeProps as IStrokeSetterProps,
  IFontSizeProps as IFontSizeSetterProps,
  IFontBoldProps as IFontBoldSetterProps,
} from './lib/setters'

import Parser from './lib/parser'
import { IParserProps, IParserSchemaProps, IParserSchemaParamsProps } from './lib/parser'

export { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, PaddingProps, RoundProps, FillProps, StrokeProps, ShadowProps, ColorProps, FontBoldProps }

export { Parser as LowerEngineParser }

export type { IParserProps, IParserSchemaProps, IParserSchemaParamsProps }

export { OpacitySetter, RoundSetter, FillSetter, ColorSetter, StrokeSetter, FontSizeSetter, FontBoldSetter }

export type { IOpacitySetterProps, IRoundSetterProps, IFillSetterProps, IColorSetterProps, IStrokeSetterProps, IFontSizeSetterProps, IFontBoldSetterProps }
