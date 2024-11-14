/**
 * @fileOverview Parser
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import Utils from '../utils/utils'
import { Opacity as OpacitySetter } from '../setters'

export interface IParserProps {
  componentName: string
  title: string
  screenshot?: React.ReactNode // 图标
  panel: Array<{ [K: string]: any }>
  schema: IParserSchemaProps
}

export interface IParserSchemaProps {
  name: string
  props: IParserSchemaParamsProps
}

export interface IParserSchemaParamsProps {
  label: string
  type: string
}

const componentNameList: Array<string> = ['OpacitySetter']

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

const getComponentMap = () => {
  const map = new Map()
  map.set(componentNameList[0], OpacitySetter)

  return map
}

const Parser = (props: IParserProps): ReactElement | null => {
  let panel = props.panel || []
  if (panel.length === 0) {
    return null
  }

  const map = getComponentMap()
  return (
    <div className="lower-engine-parser-box">
      {panel.map((item: { [K: string]: any } = {}, index: number) => {
        let componentNameList = getComponentNameList(item || {}) || []
        if (componentNameList.length === 0) {
          return null
        }

        return (
          <div className="lower-engine-parser-setter" key={index}>
            {componentNameList.map((componentName: string = '', i: number) => {
              const Component = map.get(componentName) || null
              if (!Component) {
                return null
              }

              return <Component key={`${index}_${i}`} {...item} />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Parser
