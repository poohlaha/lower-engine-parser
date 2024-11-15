/**
 * @fileOverview 公共
 * @date 2024-11-14
 * @author poohlaha
 */
const Utils = {
  //  检验字符串是否为空
  isBlank: (value: any = '') => {
    if (typeof value !== 'string') return false
    return value === undefined || value == null || /^[ ]+$/.test(value) || value.length === 0 || value.trim().length === 0
  },

  // 检验字符串是否为空
  isObjectNull: (target: { [K: string]: any } = {}) => {
    return !target || (JSON.stringify(target) === '{}' && (Object.keys(target) || []).length === 0)
  },

  /**
   * 深拷贝
   */
  deepCopy: (o: any) => {
    if (o instanceof Array) {
      let n: Array<any> = []
      for (let i = 0; i < o.length; ++i) {
        n[i] = Utils.deepCopy(o[i])
      }
      return n
    } else if (o instanceof Object) {
      let n: any = {}
      for (let i in o) {
        n[i] = Utils.deepCopy(o[i])
      }
      return n
    } else {
      return o
    }
  },

  // 获取区间数字
  getIntervalNumbers: (value?: number, defaultValue: number = 0, min: number = 0, max: number = 100) => {
    let num: number = value ?? max // null || undefined 为 defaultValue 的值

    // 是否大于 max
    num = Math.min(max, num)

    // 是否小于 min
    num = Math.max(min, num)
    return num
  },

  // 获取组件对齐方式
  getComponentAlignmentClassName: (title: string = '', alignment: string = 'justify') => {
    let className = 'flex-align-center'

    if (Utils.isBlank(title || '')) {
      return `${className} flex-jsc-start`
    }

    if (alignment === 'left') {
      return `${className} flex-jsc-start`
    }

    if (alignment === 'right') {
      return `${className} flex-jsc-end`
    }

    if (alignment === 'center') {
      return `${className} flex-jsc-center`
    }

    if (alignment === 'upDown') {
      return `flex-jsc-center flex-direction-column`
    }

    return `${className} flex-jsc-between`
  },

  // 获取输入框数字
  getInputNumberValue: (value: number | string | null, min: number) => {
    let newValue: number = min
    if (typeof value === 'string') {
      if (!Utils.isBlank(value || '')) {
        newValue = parseInt(value)
      }
    } else {
      newValue = value ?? min
    }

    return newValue
  },
}

export default Utils
