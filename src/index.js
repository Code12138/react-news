import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory, IndexRoute, Route} from 'react-router'
import App from './components/app'
import NewsContainer from './components/news_container'
import NewsDetail from './components/news_detail'
import UserCenter from './components/user_center'

ReactDOM.render(
  (
  <Router history={hashHistory}>
  <Route path='/' component={App}>
  <IndexRoute component={NewsContainer}/>
  <Route path='/detail/:uniquekey' component={NewsDetail}></Route>
  <Route path='/usercenter' component={UserCenter}></Route>
  </Route>
  </Router>
),
document.getElementById('root')
)