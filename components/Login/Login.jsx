
import {
    Form, Icon, Input, Button, Card,
  } from 'antd';
import stylesheet from 'antd/dist/antd.min.css'


const Login = () => {

    const  handleSubmit = (e) => {
        // e.preventDefault();
        // props.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //   }
        // });
    }
    // const { getFieldDecorator } = props.form;
    
    return (
        <Card style={{ width: 450 }} title="BandSquare Admin">
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <Form onSubmit={handleSubmit} className="login-form">

                <Form.Item>
                   
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    
                </Form.Item>

                <Form.Item>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    
                </Form.Item>

                <Form.Item>
                
                    <Button type="primary"  className="login-form-button">
                        Log in
                    </Button>
               
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login;