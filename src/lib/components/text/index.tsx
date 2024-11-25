/**
 * @fileOverview Text
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { IPopoverProps, MPopover } from '../index'
import Utils from '../../utils/utils'

export interface ITextProps extends IPopoverProps {
  className?: string
  textClassName?: string
  tooltipClassName?: string
  text: React.ReactNode
  tooltip?: React.ReactNode | string
}

const MText = (props: ITextProps): ReactElement => {
  const getNeedTooltip = () => {
    const tooltip = props.tooltip
    if (typeof tooltip === 'string') {
      if (!Utils.isBlank(tooltip || '')) {
        return true
      }

      return false
    }

    return !!tooltip
  }

  const render = () => {
    const needTooltip = getNeedTooltip()
    return (
      <div className={`${props.className || ''} flex-align-center m-text`}>
        <div className="flex-align-center">
          <p className={`m-text-text ${props.textClassName || ''}`}>{props.text || ''}</p>

          {needTooltip && (
            <MPopover
              className={`lower-engine-text-popover ${props.tooltipClassName || ''}`}
              placement="top"
              arrow={true}
              content={props.tooltip}
              width={255}
              open={props.open}
              trigger="hover"
              onOpenChange={(newOpen: boolean) => {
                props.onOpenChange?.(newOpen)
              }}
            >
              <div className="text-tips svg-box flex-center no-hover">
                <svg className="question-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                    fill="black"
                    fillOpacity="0.85"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 5C7.17157 5 6.5 5.67157 6.5 6.5C6.5 6.77614 6.27614 7 6 7C5.72386 7 5.5 6.77614 5.5 6.5C5.5 5.11929 6.61929 4 8 4C9.38071 4 10.5 5.11929 10.5 6.5C10.5 7.07815 10.3472 7.51571 10.0838 7.85811C9.83337 8.18368 9.50835 8.38604 9.25952 8.53714C9.24553 8.54564 9.2318 8.55396 9.21833 8.56214C8.96702 8.71457 8.80401 8.81345 8.6832 8.94692C8.58235 9.05834 8.5 9.209 8.5 9.5C8.5 9.77614 8.27614 10 8 10C7.72386 10 7.5 9.77614 7.5 9.5C7.5 8.97141 7.66765 8.57876 7.9418 8.27587C8.16636 8.02776 8.45515 7.8541 8.67487 7.72197C8.69752 7.70835 8.71944 7.69516 8.74048 7.68239C8.99165 7.52987 9.16663 7.41033 9.29119 7.2484C9.4028 7.10331 9.5 6.88779 9.5 6.5C9.5 5.67157 8.82843 5 8 5Z"
                    fill="black"
                    fillOpacity="0.85"
                  ></path>
                  <path
                    d="M8.75 11.5C8.75 11.9142 8.41421 12.25 8 12.25C7.58579 12.25 7.25 11.9142 7.25 11.5C7.25 11.0858 7.58579 10.75 8 10.75C8.41421 10.75 8.75 11.0858 8.75 11.5Z"
                    fill="black"
                    fillOpacity="0.85"
                  ></path>
                </svg>
              </div>
            </MPopover>
          )}
        </div>
      </div>
    )
  }

  return render()
}

export default MText
