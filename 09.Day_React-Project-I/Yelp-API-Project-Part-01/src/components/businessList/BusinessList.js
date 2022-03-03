import React, { Component } from 'react'
import Business from '../business/Business'
import './BusinessList.css'

export default class BusinessList extends Component {
  render() {
    return (

      <div className="BusinessList">

          <Business/>

      </div>
    )
  }
}