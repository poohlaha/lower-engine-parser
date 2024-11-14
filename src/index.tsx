/**
 * @fileOverview export
 * @date 2024-11-14
 * @author poohlaha
 */
import './assets/common.less'
import { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, PaddingProps, RoundProps, FillProps, Stroke, Shadow } from './lib/utils/common'

import { Opacity as OpacitySetter, IOpacityProps as IOpacitySetterProps } from './lib/setters'

import Parser from './lib/parser'
import { IParserProps, IParserSchemaProps, IParserSchemaParamsProps } from './lib/parser'

export { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, PaddingProps, RoundProps, FillProps, Stroke, Shadow }

export { Parser }

export type { IParserProps, IParserSchemaProps, IParserSchemaParamsProps }

export { OpacitySetter }

export type { IOpacitySetterProps }
