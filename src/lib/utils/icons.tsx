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
        <svg className="arrow-svg svg-icon" viewBox="0 0 26 26">
          <path fill="#000" fillRule="evenodd" d="M9.65 11.15c.2-.2.5-.2.7 0L13 13.79l2.65-2.64a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 0-.7Z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  },

  // FontBoldBold
  getFontBoldBoldNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8a1 1 0 011-1h3a3 3 0 012.051 5.19A3.001 3.001 0 0113 18H9a1 1 0 01-1-1V8zm1 0h3a2 2 0 110 4H9V8zm0 5v4h4a2 2 0 100-4H9z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // FontBoldItalic
  getFontBoldItalicNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.5 7.5H11a.5.5 0 010-1h4a.5.5 0 010 1h-1.5l-2 9H13a.5.5 0 010 1H9a.5.5 0 010-1h1.5l2-9z" fill="#333"></path>
        </svg>
      </div>
    )
  },

  // FontBoldUnderline
  getFontBoldUnderlineNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            d="M9.5 7.5a.5.5 0 00-1 0v4.375C8.5 13.662 10.132 15 12 15s3.5-1.338 3.5-3.125V7.5a.5.5 0 00-1 0v4.375C14.5 12.988 13.445 14 12 14s-2.5-1.012-2.5-2.125V7.5zM7.5 16.5a.5.5 0 000 1h9a.5.5 0 000-1h-9z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // FontBoldLineThrough
  getFontBoldLineThroughNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            d="M12.12 18c1.214 0 2.17-.267 2.884-.786.714-.533 1.07-1.275 1.07-2.194 0-.593-.162-1.103-.484-1.531H13.82c.032.017.06.033.086.049.67.37 1.013.89 1.013 1.556 0 .564-.257 1.008-.77 1.335-.514.326-1.2.489-2.027.489-.914 0-1.6-.208-2.07-.593-.514-.43-.828-1.112-.928-2.031H7.967c.085 1.304.528 2.268 1.327 2.905.685.534 1.627.801 2.826.801zM16.545 12.96a.464.464 0 00.455-.474.464.464 0 00-.455-.473h-9.09a.464.464 0 00-.455.473c0 .262.204.473.455.473h9.09zM10.28 11.092c.17.098.503.229.995.392H8.866c-.42-.43-.628-.97-.628-1.623 0-.919.371-1.645 1.128-2.15.67-.474 1.541-.711 2.598-.711 1.141 0 2.055.267 2.712.815.685.564 1.07 1.409 1.17 2.52H14.69c-.128-.77-.414-1.334-.856-1.704-.457-.386-1.1-.564-1.928-.564-.756 0-1.341.119-1.77.386-.485.296-.728.741-.728 1.349 0 .534.286.963.871 1.29z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // AlignmentLeft
  getAlignmentLeftNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            d="M6 15.5a.5.5 0 00.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zM6 7.5a.5.5 0 00.5.5h11a.5.5 0 000-1h-11a.5.5 0 00-.5.5zM14 11.5a.5.5 0 01-.5.5h-7a.5.5 0 010-1h7a.5.5 0 01.5.5z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // 水平居中
  getAlignmentCenterNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            d="M9 7.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM9 15.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM18 11.5a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // 右对齐
  getAlignmentRightNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            d="M13 15.5a.5.5 0 00.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zM6 7.5a.5.5 0 00.5.5h11a.5.5 0 000-1h-11a.5.5 0 00-.5.5zM18 11.5a.5.5 0 01-.5.5h-7a.5.5 0 010-1h7a.5.5 0 01.5.5z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // 两端对齐
  getAlignmentJustifyNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            d="M6 7.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zM6 15.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zM18 11.5a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // 字间距
  getMarginSpaceLetterNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path fill="#999" d="M4.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5Z"></path>
          <path fill="#999" fillRule="evenodd" d="M11.34 6h1.26l3.4 8h-1.26L14 12h-4l-.84 2H8l3.34-8Zm-.98 5.04h3.28l-1.68-4h-.02l-1.58 4Z" clipRule="evenodd"></path>
          <path fill="#999" d="M19 4.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0v-15ZM9 17v-1l-2 1.5L9 19v-1h6v-1H9ZM17 17.5 15 16v3l2-1.5Z"></path>
        </svg>
      </div>
    )
  },

  // 行高
  getMarginLineHeightNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 4a.5.5 0 000 1h15a.5.5 0 000-1h-15zm4.836 4h1.26L14 16h-1.26L12 14H8l-.836 2H6l3.336-8zm-.976 5.04h3.28L9.96 9.032h-.024L8.36 13.04zM4 19.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm12.5-3l1.5-2h-1v-6h-1v6h-1l1.5 2zm0-10l-1.5 2h3l-1.5-2z"
            fill="#999"
          ></path>
        </svg>
      </div>
    )
  },

  // 更多
  getMoreNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path d="M8 12a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0zM17 13a1 1 0 100-2 1 1 0 000 2z" fill="#333"></path>
        </svg>
      </div>
    )
  },

  // 排列: 横排
  getArrangementHorizontalNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.596 6h-1.26L8 14h1.164L10 12h4l.74 2H16l-3.404-8zm1.044 5.04h-3.28l1.576-4.008h.024l1.68 4.008zM19.854 16.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L18.293 17H4.5a.5.5 0 0 1 0-1h13.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // 排列: 竖排
  getArrangementVerticalNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.854 19.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L15 18.293V4.5a.5.5 0 0 1 1 0v13.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2zM8.404 7h1.26L13 15h-1.164L11 13H7l-.74 2H5l3.404-8zM7.36 12.04h3.28L9.064 8.032H9.04L7.36 12.04z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // 列表样式: 无序
  getListUnorderNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg__StyledSVGIcon-sc-12zkjmv-1 fWITWq icon setting_panel/font/unorder_list svg-icon" viewBox="0 0 24 24">
          <path
            fill="#333"
            fillRule="evenodd"
            d="M7.38 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.63 7.5c0-.28.2-.5.44-.5h7.11c.25 0 .45.22.45.5s-.2.5-.45.5h-7.11c-.25 0-.45-.22-.45-.5Zm.44 4c-.25 0-.45.22-.45.5s.2.5.45.5h7.11c.25 0 .45-.22.45-.5s-.2-.5-.45-.5h-7.11Zm-.45 5c0-.28.2-.5.45-.5h7.11c.25 0 .45.22.45.5s-.2.5-.45.5h-7.11c-.25 0-.45-.22-.45-.5Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    )
  },

  // 列表样式: 有序
  getListOrderNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fill="#333"
            fillRule="evenodd"
            d="M8.02 10.41V6.5h-.08l-1.66.58v.65l.9-.27v2.95h.84Zm.76 6.35v.65h-2.7v-.55l1.26-1.34a3.82 3.82 0 0 0 .44-.64.7.7 0 0 0 0-.53.4.4 0 0 0-.17-.19.48.48 0 0 0-.25-.06c-.1 0-.2.03-.28.08a.53.53 0 0 0-.17.23c-.05.1-.07.21-.07.33H6a1.26 1.26 0 0 1 .65-1.12c.2-.11.45-.17.72-.17.29 0 .53.04.72.13.19.09.33.22.43.38.1.17.15.37.15.6 0 .14-.02.27-.07.39-.04.12-.1.25-.17.37a9.13 9.13 0 0 1-.66.77l-.6.67h1.61Zm1.66-9.26c-.24 0-.44.22-.44.5s.2.5.44.5h7.12c.24 0 .44-.22.44-.5s-.2-.5-.44-.5h-7.12Zm-.44 5c0-.28.2-.5.44-.5h7.12c.24 0 .44.22.44.5s-.2.5-.44.5h-7.12c-.24 0-.44-.22-.44-.5Zm.44 4c-.24 0-.44.22-.44.5s.2.5.44.5h7.12c.24 0 .44-.22.44-.5s-.2-.5-.44-.5h-7.12Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    )
  },
}

export default Icons
