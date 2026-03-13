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
  IconDialog as IconDialogSetter,
  InputNumber as InputNumberSetter,
  Upload as UploadSetter,
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
  'InputNumberSetter',
  'IconDialogSetter',
  'UploadSetter',
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
  map.set(componentNameList[12], InputNumberSetter)
  map.set(componentNameList[13], IconDialogSetter)
  map.set(componentNameList[14], UploadSetter)
  // map.set('CustomerSetter', '<null>')

  return map
}

const getComponentNameList = (items: Array<{ [K: string]: any }> = []) => {
  if (items.length === 0) return []

  let componentNames: Array<{ [K: string]: any }> = []
  for (const item of items) {
    let setter: Array<string> | string | Record<string, any> = item.setter || ''
    let setters: Array<string> = []
    if (typeof setter === 'string') {
      // string
      if (Utils.isBlank(setter || '')) {
        setters.push('InputSetter')
      } else {
        setters.push(setter)
      }
    } else if (Array.isArray(setter)) {
      // array
      setters = setters.concat(setter || [])
    } else if (typeof setter === 'object') {
      // object
      setters.push(setter.name)
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

const Parser = (propName: string = '', props: IParserProps, events: { [K: string]: any } = {}, event?: Function): ReactElement | null => {
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
  const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')

  const componentClass = props.alignment === 'upDown' ? 'page-margin-paragraph-top w100' : ''
  const parentName = props.name || ''
  return (
    <MLowerEngine className={`${props.className || ''} lower-engine-parser-box`} title={props.title || ''} alignment={props.alignment}>
      <div className={`lower-engine-parser-paragraph flex-align-center w100 ${alignmentClassName || ''}`}>
        {componentNameList.map((component: { [K: string]: any } = {}, index: number) => {
          let names = component.componentNames || []
          let prop = component.prop || {}
          const show = prop.show ?? true
          if (names.length === 0 || !show) return null

          return names.map((item: string = '', i: number) => {
            const Component = map.get(item) || null
            if (!Component) return null

            let newEvent: { [K: string]: any } = {}
            if (event) {
              let name = item.replace('Setter', '')
              name = Utils.capitalizeFirstChar(name, false)
              const eventList = events[name] || {}
              for (let eventName in eventList) {
                newEvent[eventName] = (...args: any[]) => {
                  let cName = props.name || ''
                  let parent = parentName
                  if (!Utils.isBlank(cName || '') && parentName === cName) {
                    parent = ''
                  }

                  event?.(propName, Utils.isBlank(parent || '') ? cName : { name: cName, parent }, eventName, args) // 动态传递参数
                }
              }
            }

            const props = {
              ...prop,
              ...newEvent,
            }

            return <Component key={i} {...props} className={`${component.className || ''} ${componentClass || ''}`} />
          })
        })}
      </div>
    </MLowerEngine>
  )
}

export default Parser
