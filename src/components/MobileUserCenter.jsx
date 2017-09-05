import React, {Component} from 'react'
import {Tabs,Card} from 'antd'
import {Link} from 'react-router'
import axios from 'axios'
const TabsPane = Tabs.TabPane

export default class MobileUserCenter extends Component{
  state = {
    collections: null,
    comments: null
  }
  componentDidMount(){
    const userId = localStorage.getItem('userId')
    let url = "http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + userId
    axios.get(url)
      .then(response=>{
        const collections = response.data
        this.setState({collections})
      })

    url = "http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + userId
    axios.get(url)
      .then(response => {
        const comments = response.data
        this.setState({comments})
      })
  }

	render (){
    const {collection,comments} = this.state
    const  collectionslist = collection
      ? collection.map((collection, index) => (
        <Card key={index} title={collection.uniquekey}
              extra={<Link to={`/news_detail/${collection.uniquekey}`}>查看</Link>}>
          <p>{collection.Title}</p>
        </Card>
      ))
      : '暂无收藏'

    const commentsList = comments
      ? comments.map((comment,index)=>(
        <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`}
              extra={<Link to={`/news_detail/${comment.uniquekey}`}>查看</Link>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      : '暂无评论。'






    return (

		<div>
			<Tabs>
				<TabsPane tab="我的评论列表" key="1" style={{padding:'10px'}}>
          {commentsList}
				</TabsPane>
				<TabsPane tab="我的收藏列表" key="2" style={{padding:'10px'}}>
          { collectionslist }
				</TabsPane>
				<TabsPane tab="头像设置" key="3">

				</TabsPane>
			</Tabs>
		</div>

		)

	}

}
