import React from 'react'

export default function Envariables() {
    const GREET=process.env.REACT_APP_GREET
    const LOCATION=process.env.REACT_APP_LOCATION
    const TIME=process.env.REACT_APP_TIME
  return (
    <div>{GREET},{LOCATION},{TIME}</div>
  )
}
