/**
 * @fileOverview 导出
 * @date 2024-11-14
 * @author poohlaha
 */
import './lib/assets/reset.css'
import './lib/assets/common.css'
import './lib/assets/component.css'
import { OpacityProps, BackgroundProps, FontSizeProps, AlignmentProps, MarginProps, RoundProps, FillProps, StrokeProps, ShadowProps, ColorProps, FontBoldProps } from './lib/package/utils/common'

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
    Upload as UploadSetter,
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
    IUploadProps as IUploadSetterProps,
} from './lib/package/setters'

import Parser from './lib/package/parser'
import { IParserProps, IParserSchemaProps, IParserSchemaParamsProps } from './lib/package/parser'

export {
    ColorProps,
    OpacityProps,
    BackgroundProps,
    FontSizeProps,
    AlignmentProps,
    MarginProps,
    RoundProps,
    FillProps,
    StrokeProps,
    ShadowProps,
    FontBoldProps,
}

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
    UploadSetter
}

export {
    Parser as LowerEngineParser,
}

export type {
    IParserProps,
    IParserSchemaProps,
    IParserSchemaParamsProps,
    IOpacitySetterProps,
    IFillSetterProps,
    IColorSetterProps,
    IRoundSetterProps,
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
    IUploadSetterProps
}
