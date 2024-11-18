import React from 'react'

/**
 * @fileOverview Icons
 * @date 2023-08-28
 * @author poohlaha
 */
const Icons = {
  // 对勾
  getSuccessNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center success-svg-box">
        <svg xmlns="http://www.w3.org/2000/svg" className="success-svg svg-icon" viewBox="0 0 8 6" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.4 2.883a.64.64 0 00.194.471l1.949 1.903c.129.129.29.193.48.193a.643.643 0 00.473-.193l4.01-3.93A.627.627 0 007.709.86a.614.614 0 00-.201-.465A.667.667 0 007.028.2a.667.667 0 00-.479.194l-3.526 3.46-1.472-1.441a.667.667 0 00-.479-.194.667.667 0 00-.478.194.64.64 0 00-.194.47z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    )
  },

    // 向下箭头
    getArrowNode: () => {
      return (
          <div className="svg-box-small no-hover flex-center arrow-svg-box">
              <svg className="arrow-svg svg-icon"
                   viewBox="0 0 26 26">
                  <path fill="#000" fillRule="evenodd"
                        d="M9.65 11.15c.2-.2.5-.2.7 0L13 13.79l2.65-2.64a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 0-.7Z"
                        clipRule="evenodd"></path>
              </svg>
          </div>
      )
    },

    // FontBoldBold
    getFontBoldBoldNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg className="svg-icon"
                     viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M8 8a1 1 0 011-1h3a3 3 0 012.051 5.19A3.001 3.001 0 0113 18H9a1 1 0 01-1-1V8zm1 0h3a2 2 0 110 4H9V8zm0 5v4h4a2 2 0 100-4H9z"
                          fill="#333"></path>
                </svg>
            </div>
        )
    },

    // FontBoldItalic
    getFontBoldItalicNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg className="svg-icon"
                     viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12.5 7.5H11a.5.5 0 010-1h4a.5.5 0 010 1h-1.5l-2 9H13a.5.5 0 010 1H9a.5.5 0 010-1h1.5l2-9z"
                          fill="#333"></path>
                </svg>
            </div>
        )
    },

    // FontBoldUnderline
    getFontBoldUnderlineNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg className="svg-icon"
                     viewBox="0 0 24 24">
                    <path
                        d="M9.5 7.5a.5.5 0 00-1 0v4.375C8.5 13.662 10.132 15 12 15s3.5-1.338 3.5-3.125V7.5a.5.5 0 00-1 0v4.375C14.5 12.988 13.445 14 12 14s-2.5-1.012-2.5-2.125V7.5zM7.5 16.5a.5.5 0 000 1h9a.5.5 0 000-1h-9z"
                        fill="#333"></path>
                </svg>
            </div>
        )
    },

    // FontBoldLineThrough
    getFontBoldLineThroughNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg
                    className="svg-icon"
                    viewBox="0 0 24 24">
                    <path
                        d="M12.12 18c1.214 0 2.17-.267 2.884-.786.714-.533 1.07-1.275 1.07-2.194 0-.593-.162-1.103-.484-1.531H13.82c.032.017.06.033.086.049.67.37 1.013.89 1.013 1.556 0 .564-.257 1.008-.77 1.335-.514.326-1.2.489-2.027.489-.914 0-1.6-.208-2.07-.593-.514-.43-.828-1.112-.928-2.031H7.967c.085 1.304.528 2.268 1.327 2.905.685.534 1.627.801 2.826.801zM16.545 12.96a.464.464 0 00.455-.474.464.464 0 00-.455-.473h-9.09a.464.464 0 00-.455.473c0 .262.204.473.455.473h9.09zM10.28 11.092c.17.098.503.229.995.392H8.866c-.42-.43-.628-.97-.628-1.623 0-.919.371-1.645 1.128-2.15.67-.474 1.541-.711 2.598-.711 1.141 0 2.055.267 2.712.815.685.564 1.07 1.409 1.17 2.52H14.69c-.128-.77-.414-1.334-.856-1.704-.457-.386-1.1-.564-1.928-.564-.756 0-1.341.119-1.77.386-.485.296-.728.741-.728 1.349 0 .534.286.963.871 1.29z"
                        fill="#333"></path>
                </svg>
            </div>
        )
    },

    // AlignmentLeft
    getAlignmentLeftNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg
                    className="svg-icon"
                    viewBox="0 0 24 24">
                    <path
                        d="M6 15.5a.5.5 0 00.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zM6 7.5a.5.5 0 00.5.5h11a.5.5 0 000-1h-11a.5.5 0 00-.5.5zM14 11.5a.5.5 0 01-.5.5h-7a.5.5 0 010-1h7a.5.5 0 01.5.5z"
                        fill="#333"></path>
                </svg>
            </div>
        )
    },

    // 水平居中
    getAlignmentCenterNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg
                    className="svg-icon"
                    viewBox="0 0 24 24">
                    <path
                        d="M9 7.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM9 15.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM18 11.5a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5z"
                        fill="#333"></path>
                </svg>
            </div>
        )
    },

    // 右对齐
    getAlignmentRightNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg
                    className="svg-icon"
                    viewBox="0 0 24 24">
                    <path
                        d="M13 15.5a.5.5 0 00.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zM6 7.5a.5.5 0 00.5.5h11a.5.5 0 000-1h-11a.5.5 0 00-.5.5zM18 11.5a.5.5 0 01-.5.5h-7a.5.5 0 010-1h7a.5.5 0 01.5.5z"
                        fill="#333"></path>
                </svg>
            </div>
        )
    },

    // 两端对齐
    getAlignmentJustifyNode: () => {
        return (
            <div className="svg-box-small no-hover flex-center">
                <svg
                    className="svg-icon"
                    viewBox="0 0 24 24">
                    <path
                        d="M6 7.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zM6 15.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zM18 11.5a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5z"
                        fill="#333"></path>
                </svg>
            </div>
        )
    },
}

export default Icons
