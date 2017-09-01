import React, { Component } from 'react'
import NewsHeader from './news_header'
import '../componentsCss/pc.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <NewsHeader/>
        {this.props.children}
        <div>底部部分</div>
      </div>
    )
  }
}