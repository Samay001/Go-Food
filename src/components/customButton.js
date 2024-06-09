import React from 'react'
import './style/customButton.css'

const customButton = ({btnName,onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {btnName}
    </button>
  )
}

export default customButton