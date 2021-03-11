import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ isGoogleAuth, children, ...otherProps }) => (
  <button 
    className={`${isGoogleAuth ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton;