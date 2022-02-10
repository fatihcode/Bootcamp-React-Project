import React from 'react';
import MyPoem from './MyPoem';
import "../index.css"
import { styleSheet } from "../styles"

export default function App() {

    const divStyle = {
        color: styleSheet.color,
   
        background: styleSheet.background,
        height: "100vh",
        margin: 0,
        padding: 0
    }
    const footerStyle = {
        color: styleSheet.color,
        fontSize: styleSheet.fontSize
    }

    const h1Style = {
        paddingTop: "60px",
        color: styleSheet.color,
        fontSize: styleSheet.fontSize
    }

    return <div style={divStyle}>

        <h1 style={h1Style}>Welcome To My Page</h1>

        <MyPoem />

        <footer style={footerStyle}>Thank You Visiting My Page!</footer>

    </div>;
}
