import React, {Component,PropTypes} from 'react'
import axios from 'axios'
import {Card} from 'antd'
import {Link} from 'react-router'
export default class MobileNewsBlock extends Component{
  static propTypes ={
    type:PropTypes.string.isRequired,
    count:PropTypes.number.isRequired
  }
  state = {
    news:[]
  }

  componentDidMount (){
    const {type,count} = this.props
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`
		axios.get(url)
			.then(response => {
				const news = response.data
				this.setState({news})
			})
  }
  render (){

  	const {news} = this.state
		const newlist = !news
		?'没有加载到新闻' :news.map((newsItem,index) =>(
			<Card key={index} className="m_article list-item special_section clearfix">
			<Link to={`/news_detail/${newsItem.uniquekey}`}/>
				<div className="m_article_img">
					<img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
				</div>
				<div className="m_article_info">
					<div className="m_article_title">
						<span>{newsItem.title}</span>
					</div>
					<div className="m_article_desc clearfix">
						<div className="m_article_desc_l">
							<span className="m_article_channel">{newsItem.realtype}</span>
							<span className="m_article_time">{newsItem.date}</span>
						</div>
					</div>
				</div>
			</Card>
		))



  	return (
			<div>
				{newlist}
			</div>


		)

	}

}
