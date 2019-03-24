


import Login from '../components/Login/Login'
import { Layout } from 'antd';
const { Footer, Content } = Layout;


export default () => ( 
   <Layout style={{height:"100vh" , padding: '25vh 0'}}>
      <Content>
          <center>
            <Login/>
         </center>
      </Content>
   </Layout>
)

