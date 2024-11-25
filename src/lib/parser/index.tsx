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
  Selector as SelectorSetter,
  Shadow as ShadowSetter,
  Input as InputSetter,
} from '../setters'
import { ICommonProps } from '../utils/common'
import MLowerEngine from '../setters/lower'

export interface IParserProps extends ICommonProps {
  className?: string
  title?: string
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

const componentNameList: Array<string> = [
  'OpacitySetter',
  'RoundSetter',
  'FillSetter',
  'ColorSetter',
  'StrokeSetter',
  'FontSizeSetter',
  'FontBoldSetter',
  'AlignmentSetter',
  'MarginSetter',
  'SelectorSetter',
  'ShadowSetter',
  'InputSetter',
]

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
  map.set(componentNameList[9], SelectorSetter)
  map.set(componentNameList[10], ShadowSetter)
  map.set(componentNameList[11], InputSetter)

  return map
}

const getComponentNameList = (items: Array<{ [K: string]: any }> = []) => {
  if (items.length === 0) return []

  let componentNames: Array<{ [K: string]: any }> = []
  for (const item of items) {
    let setter: Array<string> | string = item.setter || ''
    let setters: Array<string> = []
    if (typeof setter === 'string') {
      if (Utils.isBlank(setter || '')) {
        setters.push('InputSetter')
      } else {
        setters.push(setter)
      }
    } else if (Array.isArray(setter)) {
      setters = setters.concat(setter || [])
    }

    let newSetters: Array<string> = []
    for (const set of setters) {
      let hasFound = componentNameList.findIndex(name => (set || '').trim().toLowerCase() === (name || '').trim().toLowerCase()) >= 0
      if (hasFound) {
        newSetters.push(set)
      }
    }

    componentNames.push({
      prop: {
        ...item,
      },
      componentNames: newSetters || [],
    })
  }

  return componentNames
}

const Parser = (props: IParserProps, events: { [K: string]: any } = {}): ReactElement | null => {
  const map = getComponentMap()
  const childProps = props.props
  if (!childProps) {
    return null
  }

  let parserProps: Array<{ [K: string]: any }> = []
  if (!Array.isArray(childProps)) {
    parserProps.push(childProps)
  } else {
    parserProps = childProps
  }

  const componentNameList = getComponentNameList(parserProps) || []

  return (
    <MLowerEngine className={`${props.className || ''} lower-engine-parser-box`} title={props.title || ''} alignment={props.alignment}>
      <div className="lower-engine-parser-paragraph flex-align-center">
        {componentNameList.map((component: { [K: string]: any } = {}, index: number) => {
          let names = component.componentNames || []
          if (names.length === 0) return null

          return names.map((item: string = '', i: number) => {
            const Component = map.get(item) || null
            if (!Component) return null
            return <Component key={i} {...component.prop} {...events} />
          })
        })}
      </div>
    </MLowerEngine>
  )
}

export default Parser
