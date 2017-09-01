import React, {Component} from 'react'
import {Link} from 'react-router'

class NewsContainer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/detail/:1">查看新闻1</Link></li>
          <li><Link to="/detail/:1">查看新闻2</Link></li>
          <br/>

        </ul>
      </div>
    )
  }
}

export default NewsContainer