/**
 * @fileOverview Parser
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import Utils from '../utils/utils'
import { Opacity as OpacitySetter, Round as RoundSetter } from '../setters'
import { ICommonProps } from '../utils/common'

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

const componentNameList: Array<string> = ['OpacitySetter', 'RoundSetter']

const getComponentMap = () => {
  const map = new Map()
  map.set(componentNameList[0], OpacitySetter)
  map.set(componentNameList[1], RoundSetter)

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
    <div className="lower-engine-parser-box">
      <div className="lower-engine-parser-paragraph">
        {componentNameList.map((componentName: string = '', i: number) => {
          const Component = map.get(componentName) || null
          if (!Component) {
            return null
          }

          return <Component key={i} {...props} />
        })}
      </div>
    </div>
  )
}

export default Parser
