import React from 'react'

const  Button = ({ bgColor, color, size, text, borderRadius, ...props }) => {
  console.log('props',bgColor, color, size, text, borderRadius);
  return (
    <button
      { ...props }
      type='button'
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius
      }}
      className={`text-${size} p-3
      hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button