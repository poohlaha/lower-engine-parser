/**
 * @fileOverview export
 * @date 2024-11-14
 * @author poohlaha
 */
import './assets/reset.less'
import './assets/common.less'
import { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, PaddingProps, RoundProps, FillProps, StrokeProps, ShadowProps } from './lib/utils/common'

import { Opacity as OpacitySetter, Round as RoundSetter, IOpacityProps as IOpacitySetterProps, IRoundProps as IRoundSetterProps } from './lib/setters'

import Parser from './lib/parser'
import { IParserProps, IParserSchemaProps, IParserSchemaParamsProps } from './lib/parser'

export { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, PaddingProps, RoundProps, FillProps, StrokeProps, ShadowProps }

export { Parser as LowerEngineParser }

export type { IParserProps, IParserSchemaProps, IParserSchemaParamsProps }

export { OpacitySetter, RoundSetter }

export type { IOpacitySetterProps, IRoundSetterProps }
