import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router'
import {Icon,Modal,Form,Input,Tabs,Button,message} from 'antd'
import logo from '../images/logo.png'
const TabPane = Tabs.TabPane
const FormItem = Form.Item
 class MobileHeader extends Component{

state = {
  username : null,
  showmodal : false
}

    Modalshow = (isshow) =>(
      this.setState({showmodal:isshow})
    )
   componentDidMount (){
     const username = localStorage.getItem('username')
     if(username){
       this.setState({username})
     }
   }
   handleSubmit = (flag,event) =>{
      event.preventDefault()
     const {username, password, r_userName, r_password, r_confirmPassword} = this.props.form.getFieldsValue()

     // 准备url
     let url = 'http://newsapi.gugujiankong.com/Handler.ashx?'
     if(flag) {
       url += `action=login&username=${username}&password=${password}`
     } else {
       url += `action=register&r_userName=${r_userName}&r_password=${r_password}&r_confirmPassword=${r_confirmPassword}`
     }
     axios.get(url)
       .then(response =>{
         /*this.props.form.resetFields()*/
         const result = response.data
         console.log(result);
         if(flag){
           if(!result){
             message.error('登录失败，请重新登录')
           }else{
             message.success('登录成功')
             const username = result.NickUserName
             const userId = result.UserId
             this.setState({username})
             localStorage.setItem('username',username)
             localStorage.setItem('userId',userId)
           }
         }else{
           message.success('注册成功')
         }
       })
     this.setState({showmodal: false})
   }




  render (){
  const {username,showmodal} = this.state
  const {getFieldDecorator} = this.props.form
  const usershow = username
    ?<Link to="/user_center"> <Icon type="inbox"/></Link>
    : <Icon type="setting" onClick = {this.Modalshow.bind(this,true)} />
	  return (
      <div id="mobileheader">
        <header>
          <div>
            <Link to="/">
              <img src={logo}/>
              <span>ReactNews</span>
            </Link>
            {usershow}
          </div>
        </header>
        <Modal
          title="用户中心"
          visible={showmodal}
          onOk={this.Modalshow.bind(this,false)}
          onCancel={()=>this.Modalshow(false)}
          okText = '关闭'
        >
          {/*onchange 切换页签时清空数据*/}
          <Tabs type="card" onChange = {()=>this.props.form.resetFields()}>
            <TabPane tab="登录" key="1">
              <Form onSubmit={this.handleSubmit.bind(this,true)}>
                <FormItem label="用户名">
                  {
                    getFieldDecorator('username')(
                      <Input type="text" placeholder="请输入用户名"></Input>
                    )
                  }
                </FormItem>
                <FormItem label="密码">
                  {
                    getFieldDecorator('password')(
                      <Input type="password" placeholder="请输入密码"></Input>
                    )
                  }
                </FormItem>
                <Button type='primary' htmlType="submit">登陆</Button>
              </Form>
            </TabPane>
            <TabPane tab="注册" key="2">
              <Form onSubmit={this.handleSubmit.bind(this,false)}>
                <FormItem label="用户名">
                  {
                    getFieldDecorator('r_userName')(
                      <Input type="text" placeholder="请输入用户名"></Input>
                    )
                  }
                </FormItem>
                <FormItem label="密码">
                  {
                    getFieldDecorator('r_password')(
                      <Input type="password" placeholder="请输入密码"></Input>
                    )
                  }
                </FormItem>
                <FormItem label="确认密码">
                  {
                    getFieldDecorator('r_confirmPassword')(
                      <Input type="password" placeholder="确认密码"></Input>
                    )
                  }
                </FormItem>
                <Button type='primary' htmlType="submit">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>

      </div>


		)

	}

}
export default Form.create()(MobileHeader)