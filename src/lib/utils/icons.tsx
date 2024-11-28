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
          <path fill="currentColor" fillRule="evenodd" d="M9.65 11.15c.2-.2.5-.2.7 0L13 13.79l2.65-2.64a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 0-.7Z" clipRule="evenodd"></path>
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

  // AlignmentTop
  getAlignmentTopNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <g fill="#333" clipPath="url(#clip0_258_597)">
            <path d="M16.5 6c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5ZM7.5 6c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM12 14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-1 0v7c0 .28.22.5.5.5Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_258_597">
              <rect width="24" height="24" fill="#fff" rx="4"></rect>
            </clipPath>
          </defs>
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

  // 垂直居中
  getAlignmentVerticalCenterNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <g fill="#333" clipPath="url(#clip0_238_1062)">
            <path d="M16.5 9c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM7.5 9c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM12 18a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11c0 .28.22.5.5.5Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_238_1062">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
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

  // 底对齐
  getAlignmentBottomNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <g fill="#333" clipPath="url(#clip0_238_1065)">
            <path d="M7.5 18a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5ZM16.5 18a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5ZM12 10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_238_1065">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  },

  // 两端对齐 -- 垂直
  getAlignmentVerticalJustifyNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg__StyledSVGIcon-sc-12zkjmv-1 fWITWq icon setting_panel/font/text_align_justify_re svg-icon" viewBox="0 0 24 24">
          <g fill="#333" clipPath="url(#clip0_238_1069)">
            <path d="M16.5 6c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM7.5 6c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM12 18a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11c0 .28.22.5.5.5Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_238_1069">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  },

  // 两端对齐 -- 横向
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

  // AlignmentFlexStart
  getAlignmentFlexStartNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.646 9.646a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L12.5 11.207V17a.5.5 0 01-1 0v-5.793l-1.146 1.147a.5.5 0 01-.708-.708l2-2z"
            fill="#333"
          ></path>
          <path d="M7 7.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill="#333"></path>
        </svg>
      </div>
    )
  },

  // AlignmentFlexCenter
  getAlignmentFlexCenterNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.646 13.646a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L12.5 15.207V18.5a.5.5 0 01-1 0v-3.293l-1.146 1.147a.5.5 0 01-.708-.708l2-2z"
            fill="#333"
          ></path>
          <path d="M7 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill="#333"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 9.5a.5.5 0 01-.354-.146l-2-2a.5.5 0 11.708-.708L11.5 7.793V4.5a.5.5 0 011 0v3.293l1.146-1.147a.5.5 0 01.708.708l-2 2A.5.5 0 0112 9.5z"
            fill="#333"
          ></path>
        </svg>
      </div>
    )
  },

  // AlignmentFlexEnd
  getAlignmentFlexEndNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.354 14.354a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708l1.146 1.147V7a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 01.708.708l-2 2z"
            fill="#333"
          ></path>
          <path d="M17 16.5a.5.5 0 01-.5.5h-9a.5.5 0 010-1h9a.5.5 0 01.5.5z" fill="#333"></path>
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

  // 关闭
  getCloseNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8492 0.94971C10.5075 0.608001 9.95349 0.608001 9.61178 0.94971L5.89952 4.66197L2.18724 0.949699C1.84553 0.60799 1.29151 0.60799 0.949802 0.949699C0.608093 1.29141 0.608093 1.84543 0.949802 2.18714L4.66208 5.89941L0.949721 9.61176C0.608012 9.95347 0.608012 10.5075 0.949721 10.8492C1.29143 11.1909 1.84545 11.1909 2.18716 10.8492L5.89952 7.13685L9.61186 10.8492C9.95357 11.1909 10.5076 11.1909 10.8493 10.8492C11.191 10.5075 11.191 9.95346 10.8493 9.61175L7.13695 5.89941L10.8492 2.18715C11.1909 1.84544 11.1909 1.29142 10.8492 0.94971Z"
            fill="#666666"
          ></path>
        </svg>
      </div>
    )
  },

  // 色彩空间
  getColorSpaceNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#a)">
            <path
              d="M5.6 11.278c0 .111.043.219.121.298a.41.41 0 0 0 .586 0 .426.426 0 0 0 0-.597.41.41 0 0 0-.586 0 .426.426 0 0 0-.121.299zM6.24 9.145c0 .176.069.344.19.468a.644.644 0 0 0 .92 0 .668.668 0 0 0 0-.936.644.644 0 0 0-.92 0 .668.668 0 0 0-.19.468zM8.64 7.412c0 .226.089.444.246.604a.831.831 0 0 0 1.187 0 .862.862 0 0 0 0-1.208.831.831 0 0 0-1.187 0 .862.862 0 0 0-.245.604zM11.815 7.412c0 .284.11.557.308.758a1.044 1.044 0 0 0 1.49 0 1.083 1.083 0 0 0 0-1.517 1.044 1.044 0 0 0-1.49 0 1.083 1.083 0 0 0-.308.759z"
              fill="#666"
            ></path>
            <g filter="url(#b)">
              <path d="m18.207 6.365-.011-.01a.366.366 0 0 0-.523.037l-5.582 6.546-.706 1.413 1.266-.898 5.593-6.556a.382.382 0 0 0-.037-.532z" fill="#666"></path>
              <path
                d="M18.262 6.28a.466.466 0 0 0-.665.048l-5.583 6.545a.097.097 0 0 0-.013.02l-.706 1.413a.1.1 0 0 0 .148.126l1.266-.897a.1.1 0 0 0 .018-.017l5.593-6.557-.076-.064.076.064a.482.482 0 0 0-.047-.671l-.011-.01z"
                stroke="#666"
                strokeWidth=".2"
                strokeLinejoin="round"
              ></path>
            </g>
            <path
              d="M17.727 10.411a.481.481 0 0 0-.477-.505.48.48 0 0 0-.474.43l.951.075zm0 0v.019c-.008.099-.068.373-.185.743-.118.374-.297.854-.547 1.366-.5 1.022-1.289 2.185-2.46 2.892-3.863 2.334-6.431.597-6.964-.28-.155-.254-.293-.52-.415-.755l-.048-.091c-.137-.261-.247-.465-.34-.573-.02-.023-.052-.042-.11-.053a.94.94 0 0 0-.229-.005 5.95 5.95 0 0 0-.29.03l-.026.003a7.005 7.005 0 0 1-.376.038c-.532.036-1.173-.023-1.692-.615-.265-.302-.433-.816-.47-1.435-.038-.623.056-1.366.329-2.139.545-1.548 1.808-3.22 4.172-4.301 4.332-1.982 7.44.427 7.943.857a.475.475 0 0 1-.279.853.461.461 0 0 1-.303-.113c-1.131-.96-3.4-1.829-6.07-1.108-1.901.504-3.237 1.775-4.017 3.12-.39.672-.639 1.36-.75 1.976-.112.619-.083 1.155.072 1.53.073.178.214.274.412.325.204.052.456.053.733.043l.157-.005c.224-.01.458-.018.673-.002.265.02.522.08.714.242.073.062.154.166.235.286.083.123.171.27.26.425.107.188.218.392.32.58l.182.335c.117.208.37.419.736.59.364.17.83.296 1.359.343a5.577 5.577 0 0 0 3.562-.923c1.119-.74 1.81-1.805 2.22-2.69a8.117 8.117 0 0 0 .514-1.457l.02-.09.004-.022.001-.006v-.001l.953.068z"
              fill="#666"
              stroke="#666"
              strokeWidth=".2"
              strokeLinejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4z" fill="#fff"></path>
            </clipPath>
            <filter id="b" x="7.185" y="6.063" width="15.35" height="16.488" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5734_103268"></feBlend>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5734_103268" result="shape"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    )
  },

  // 色板
  getColorSwatchNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg className="svg-icon" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4.583" y="4.583" width="3.55" height="3.55" rx=".5" fill="#999"></rect>
          <rect x="4.583" y="9.133" width="3.55" height="3.55" rx=".5" fill="#999"></rect>
          <rect x="4.583" y="13.683" width="3.55" height="3.55" rx=".5" fill="#C4C4C4"></rect>
          <rect x="9.225" y="4.583" width="3.55" height="3.55" rx=".5" fill="#999"></rect>
          <rect x="9.225" y="9.133" width="3.55" height="3.55" rx=".5" fill="#666"></rect>
          <rect x="9.225" y="13.683" width="3.55" height="3.55" rx=".5" fill="#999"></rect>
          <rect x="13.867" y="4.583" width="3.55" height="3.55" rx=".5" fill="#C4C4C4"></rect>
          <rect x="13.867" y="9.133" width="3.55" height="3.55" rx=".5" fill="#999"></rect>
          <rect x="13.867" y="13.683" width="3.55" height="3.55" rx=".5" fill="#999"></rect>
        </svg>
      </div>
    )
  },

  // 取色器
  getColorPickerNode: () => {
    return (
      <div className="svg-box-small no-hover flex-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.8284 10.5858C15.2189 10.9763 15.2189 11.6095 14.8284 12L8.18155 18.6468C7.16619 19.6622 5.70991 19.8521 4.92886 19.0711C4.18331 18.3255 4.3225 16.9647 5.21979 15.9595L5.35312 15.8184L11.9999 9.17158C12.3904 8.78105 13.0236 8.78105 13.4141 9.17158L14.8284 10.5858Z"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
          <path
            d="M19.071 4.92894C19.8165 5.67448 19.768 6.94461 18.9857 7.83489L18.8689 7.9594L16.4446 10.3838C15.5519 11.2764 14.1951 11.3668 13.4141 10.5858C12.6686 9.84025 12.7171 8.57012 13.4994 7.67984L13.6161 7.55533L16.0405 5.13097C16.9331 4.23834 18.2899 4.14789 19.071 4.92894Z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
          <rect x="10.5857" y="4.92893" width="12" height="3" rx="1.5" transform="rotate(45 10.5857 4.92893)" fill="currentColor" fillRule="nonzero"></rect>
        </svg>
      </div>
    )
  },
}

export default Icons
