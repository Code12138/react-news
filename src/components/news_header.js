import React, {Component} from 'react'
import {
  Row,
  Col,
  Menu,
  Modal,
  Icon,
  Button,
  Tabs,
  Form,

  Input

} from 'antd'




import {Link} from 'react-router'
import logo from '../images/logo.png'
const FormItem = Form.Item;



const MenuItem = Menu.Item
const TabPane = Tabs.TabPane;
export default class NewsHeader extends Component{

  state = {
    selectedKey: 'top',
    username: null
  }
  componentDidMount () {
    // 读取保存到local中的username
    const username = localStorage.getItem('username')
    if(username) {
      // 更新状态
      this.setState({username})
    }
  }
  clickMenu = ({key}) => {
    // 如果点击的是'登陆/注册'
    if(key==='logout') {
      // 显示modal
      this.setState({modalShow: true})
    }

    // 更新状态
    this.setState({selectedKey: key})
  }
  showModal = (isShow) => {
    this.setState({modalShow: isShow})
  }


	render (){
    const {selectedKey, username, modalShow} = this.state

    const userShow = username
      ?  (
        <MenuItem key="login" className="register">
          <Button type="primary">{username}</Button>&nbsp;&nbsp;
          <Link to="/user_center"><Button type="dashed">个人中心</Button></Link>&nbsp;&nbsp;
          <Button onClick={this.logout}>退出</Button>
        </MenuItem>
      )
      : (
        <MenuItem key="logout" className="register">
          <Icon type="appstore"/>登陆/注册
        </MenuItem>
      )


	  return (
      <header>
        <Row>
          <Col span={1}></Col>
          <Col span={3}>
            <a href="#/" className="logo">
              <img src={logo} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={19}>
            <Menu mode="horizontal" selectedKeys={[selectedKey]} onClick={this.clickMenu}>
              <MenuItem key="top">
                <Icon type="appstore"/>头条
              </MenuItem>
              <MenuItem key="shehui">
                <Icon type="appstore"/>社会
              </MenuItem>
              <MenuItem key="guonei">
                <Icon type="appstore"/>国内
              </MenuItem>
              <MenuItem key="guoji">
                <Icon type="appstore"/>国际
              </MenuItem>
              <MenuItem key="yule">
                <Icon type="appstore"/>娱乐
              </MenuItem>
              <MenuItem key="tiyu">
                <Icon type="appstore"/>体育
              </MenuItem>
              <MenuItem key="keji">
                <Icon type="appstore"/>科技
              </MenuItem>
              <MenuItem key="shishang">
                <Icon type="appstore"/>时尚
              </MenuItem>
              {userShow}
            </Menu>
            <Modal
              title=" 用户中心"
              visible={modalShow}
              onOk={this.showModal.bind(this, false)}
              onCancel={() =>this.showModal(false)}
              okText="关闭"
            >
              <Tabs   type="card">
                <TabPane tab='登录' key="1">
                  <Form>
                    <FormItem>
                      <Input type="text"/>
                    </FormItem>
                    <FormItem>
                      <Input type="password"/>
                    </FormItem>


                  </Form>



                </TabPane>
                <TabPane tab="注册" key="2">Content of Tab Pane 2</TabPane>
              </Tabs>
            </Modal>



          </Col>
          <Col span={1}></Col>





        </Row>



      </header>


		)

	}

}




