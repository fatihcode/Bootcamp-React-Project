import React from 'react'
import "./App.css"

export default function App() {
  
  const style={
    color: "red",
    colorImportant: true
   
  }

  return (
    <div className="parent">

      <h1 style={style} id="parap" className="title">Hello Wolrd!</h1>
      <h2 className="child">How Are You?</h2>
      
      <p>I am Fine</p>

    </div>
  )
}
