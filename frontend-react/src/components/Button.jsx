import React from 'react'

export const Button = (props) => {
  return (
    <>
     <a className={`btn ${props.class}`} href='#'>{props.text}</a>
    
    </>
  )
}
