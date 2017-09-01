import React, {Component} from 'react'
import {Link} from 'react-router'

class NewsContainer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/detail/:11">查看新闻1</Link></li>
          <li><Link to="/detail/:12">查看新闻2</Link></li>
          <br/>
          <li><Link to="/usercenter">个人中心</Link></li>
        </ul>
      </div>
    )
  }
}

export default NewsContainer