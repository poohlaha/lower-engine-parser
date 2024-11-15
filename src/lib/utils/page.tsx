/**
 * @fileOverview Page Node
 * @date 2023-08-28
 * @author poohlaha
 */
import React from 'react'
import Icons from './icons'

const Page = {
  // 自定义下拉框
  getSelectOptions: (items: Array<{ [K: string]: any } | string | number> = [], isLine: boolean = false, checked: string | number = '') => {
    if (items.length === 0) return null

    let options: Array<any> = []
    items.forEach((item: { [K: string]: any } | string | number = {}) => {
      let value: string | number
      if (typeof item === 'string' || typeof item === 'number') {
        value = `${item || ''}`
      } else {
        // @ts-ignore
        value = item.value || ''
      }

      if (isLine) {
        options.push({
          label: (
            <div className={`lower-engine-option stroke-${value} flex-align-center ${checked === value ? 'active' : ''}`}>
              {checked === value && Icons.getSuccessNode()}
              <div className={`stroke-${value}-line`}></div>
            </div>
          ),
          value,
          key: `${value || ''}`,
        })
      } else {
        options.push({
          label: (
            <div className={`lower-engine-option flex-align-center ${checked === value ? 'active' : ''}`}>
              {Icons.getSuccessNode()}
              <p className="lower-engine-option-text">{value}</p>
            </div>
          ),
          value,
          key: `${value || ''}`,
        })
      }
    })

    return options
  },

  getSelectLabel: (p: { [K: string]: any } = {}, isLine: boolean = false) => {
    if (isLine) {
      return (
        <div className={`stroke-${p.value || 'solid'} flex-align-center`}>
          <div className={`stroke-${p.value || 'solid'}-line`}></div>
        </div>
      )
    } else {
      return (
        <div className={`lower-engine-select-option flex-align-center`}>
          <p className="text">{p.value || ''}</p>
        </div>
      )
    }
  },
}

export default Page
