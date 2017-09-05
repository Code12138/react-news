import React, {Component} from 'react'
import {BackTop} from 'antd'
import axios from 'axios'
import NewsComments from './news_comments'
export default class MobileDetail extends Component{

	state = {
		news:''
	}

	componentDidMount (){
		const {uniquekey} = this.props.params
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`
		axios.get(url)
			.then(response =>{
				const news = response.data
				this.setState({news})
			})
	}



	render (){
	  return (

		<div style={{padding:'10px'}}>
			<div className="mobileDetailsContainer" dangerouslySetInnerHTML={{__html:this.state.news.pagecontent}}></div>
			<hr/>
			<NewsComments uniquekey={this.props.params.uniquekey}/>
			<BackTop/>

		</div>

		)

	}

}
