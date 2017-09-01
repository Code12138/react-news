import React, {Component} from 'react'

class NewsDetail extends Component {
  render() {
    return (
      <div>
        新闻详情.....{this.props.params.uniquekey}
      </div>
    )
  }
}

export default NewsDetail