/**
 * @fileOverview Font Bold
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { ICommonProps } from '../../utils/common'

export interface IFontBoldProps extends ICommonProps {}

const FontBold = (): ReactElement => {
  const render = () => {
    return <div className="ontBold-page wh100"></div>
  }

  return render()
}

export default FontBold
