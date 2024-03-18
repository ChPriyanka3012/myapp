import React from 'react'

export default function App19child(props) {
  return (
    <div style={{backgroundColor:"gray",
            color:"green",
            fontStyle:"italic"}}>
        {props.children}
    </div>
  )
}
