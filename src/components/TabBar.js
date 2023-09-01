import './TabBar.css'
import { Nav, Avatar } from '@douyinfe/semi-ui'
import { IconAlarm, IconHistogram, IconServer } from '@douyinfe/semi-icons'

function TabBar() {

    const navToLogIn = () => {
        window.location.href = '/login'
    }

    return (
        <div style={{ width: '100%' }}>
            <Nav
                type="primary"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <Nav.Header text="CPU Warframe" link='/'/>
                <Nav.Item key="1" text="闯关项目" icon={<IconAlarm />} link='/games'/>
                <Nav.Item key="2" text="积分排行" icon={<IconHistogram/>} link='/rank'/>
                <Nav.Item key="3" text="知识库" icon={<IconServer /> } link='/library'/>
                <Nav.Footer children={
                    <div className='user-info' onClick={navToLogIn}>
                        <Avatar size="small" color='light-blue' style={{ margin: 4 }}>U</Avatar>
                        <span>请登录</span>
                    </div>
                }/>
            </Nav>
        </div>
    );
}

export default TabBar;