/**
 * @fileOverview Parser
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import Utils from '../utils/utils'
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
} from '../setters'
import { ICommonProps } from '../utils/common'
import MLowerEngine from '../setters/lower'

export interface IParserProps extends ICommonProps {
  [K: string]: any
}

export interface IParserSchemaProps {
  name: string
  props: IParserSchemaParamsProps
}

export interface IParserSchemaParamsProps {
  label: string
  type: string
}

const componentNameList: Array<string> = ['OpacitySetter', 'RoundSetter', 'FillSetter', 'ColorSetter', 'StrokeSetter', 'FontSizeSetter', 'FontBoldSetter', 'AlignmentSetter', 'MarginSetter']

const getComponentMap = () => {
  const map = new Map()
  map.set(componentNameList[0], OpacitySetter)
  map.set(componentNameList[1], RoundSetter)
  map.set(componentNameList[2], FillSetter)
  map.set(componentNameList[3], ColorSetter)
  map.set(componentNameList[4], StrokeSetter)
  map.set(componentNameList[5], FontSizeSetter)
  map.set(componentNameList[6], FontBoldSetter)
  map.set(componentNameList[7], AlignmentSetter)
  map.set(componentNameList[8], MarginSetter)

  return map
}

const getComponentNameList = (item: { [K: string]: any } = {}) => {
  let setter: string | Array<string> = item.setter || ''

  let componentNames: Array<string> = []
  if (typeof setter === 'string') {
    if (Utils.isBlank(setter || '')) {
      componentNames = ['InputSetter']
    } else {
      componentNames = [setter]
    }
  } else if (Array.isArray(setter)) {
    componentNames = setter || []
  }

  // 过滤掉不存在的组件
  let newComponentNames: Array<string> = []
  for (let componentName of componentNames) {
    let hasFound = componentNameList.findIndex(name => (componentName || '').trim().toLowerCase() === (name || '').trim().toLowerCase()) >= 0
    if (hasFound) {
      newComponentNames.push(componentName)
    }
  }

  return newComponentNames
}

const Parser = (props: IParserProps): ReactElement | null => {
  const map = getComponentMap()
  let componentNameList = getComponentNameList(props || {}) || []
  if (componentNameList.length === 0) {
    return null
  }

  return (
    <MLowerEngine className={`${props.className || ''} lower-engine-parser-box`} title={props.title || ''} alignment={props.alignment}>
      <div className="lower-engine-parser-paragraph flex-align-center">
        {componentNameList.map((componentName: string = '', i: number) => {
          const Component = map.get(componentName) || null
          if (!Component) {
            return null
          }

          return <Component key={i} {...props} />
        })}
      </div>
    </MLowerEngine>
  )
}

export default Parser
