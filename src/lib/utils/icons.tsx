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
      <span className="svg-box-small no-hover flex-center success-svg-box">
        <svg xmlns="http://www.w3.org/2000/svg" className="success-svg svg-icon" viewBox="0 0 8 6" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.4 2.883a.64.64 0 00.194.471l1.949 1.903c.129.129.29.193.48.193a.643.643 0 00.473-.193l4.01-3.93A.627.627 0 007.709.86a.614.614 0 00-.201-.465A.667.667 0 007.028.2a.667.667 0 00-.479.194l-3.526 3.46-1.472-1.441a.667.667 0 00-.479-.194.667.667 0 00-.478.194.64.64 0 00-.194.47z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    )
  },
}

export default Icons
