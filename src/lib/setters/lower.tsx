/**
 * @fileOverview Lower
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { PropsWithChildren, ReactElement } from 'react'
import { Alignment } from '../utils/common'
import Utils from '../utils/utils'

export interface ILowerEngineProps {
  className?: string
  title?: string
  alignment?: Alignment
}
const MLowerEngine = (props: PropsWithChildren<ILowerEngineProps>): ReactElement => {
  const render = () => {
    const alignmentClassName = Utils.getComponentAlignmentClassName(props.title || '', props.alignment || '')

    return (
      <div className={`lower-engine-widget ${props.className || ''} ${alignmentClassName || ''}`}>
        {!Utils.isBlank(props.title || '') && <p>{props.title || ''}</p>}

        <div className="lower-engine-widget-content flex-1 flex-align-center">{props.children}</div>
      </div>
    )
  }

  return render()
}

export default MLowerEngine
