import './SignIn.css'
import TabBar from '../../components/TabBar';
import { Form, Button, InputGroup } from '@douyinfe/semi-ui'

function SignIn() {
    
    const notifyText = "长度为8-14个字符, 不允许有空格、中文"

    const handleSubmit = (e) => {
        console.log('sign in')
        console.log(e)
        // 将数据转换为json格式
        const data = JSON.stringify(e)
        console.log(data)
        e.preventDefault()
    }

    return (
        // 注册表单
        <div style={{width: '100%'}}>
            <TabBar/>
            <Form className='login-form' onSubmit={(e) => {handleSubmit(e)}}>
                <h1>CPU Warframe</h1>
                <Form.Input noLabel={true} field='username' placeholder="用户名" style={{width: '400px', height: '40px'}}/>
                <Form.Input noLabel={true} field='email' placeholder="邮箱" style={{width: '400px', height: '40px'}}/>
                <Form.Input noLabel={true} field='password' placeholder="密码" extraText={notifyText} style={{width: '400px', height: '40px'}}/>
                <InputGroup style={{width: '400px', height: '40px'}}>
                    <Form.Input noLabel={true} field='captcha' placeholder="验证码" style={{width: '280px', height: '40px'}}/>
                    <Button type="primary" theme='solid' style={{width: '110px', marginLeft: '10px'}}>获取验证码</Button>
                </InputGroup>
                <Button type="primary" theme='solid' htmlType='submit' style={{width: '200px', margin: '20px auto'}}>注册</Button>
            </Form>
        </div>
    );
}

export default SignIn;