import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>头部部分</div>
        {this.props.children}
        <div>底部部分</div>
      </div>
    )
  }
}