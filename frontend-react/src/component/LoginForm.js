import React, { useState} from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

function LoginForm({Login, error}) {  
  
  const [details, SetDetails] = useState({username:"",email:"", password:""});
  const onFinish = (values) => {
    
    Login(details);     
  };

    return (
      
      <div>
        
        <br></br>
        
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}      
     >
       {(error !== "") ? (<div className='App'>{error}<br></br><br></br></div>) : ""}
        <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
          name="username"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un usuario válido!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario"
           onChange={e => SetDetails({...details, username: e.target.value})} value={details.username}/>
        </Form.Item>
        
        <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un correo válido!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} 
            type="email"
           placeholder="Correo"
           onChange={e => SetDetails({...details, email: e.target.value})} value={details.email}/>
        </Form.Item>
        
        <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca una contraseña válida!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
            onChange={e => SetDetails({...details, password: e.target.value})} value={details.password}
          />
        </Form.Item>   
      
        <Form.Item shouldUpdate
        wrapperCol={{
          offset: 4,
          span: 16,
        }}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"              
            >
              Ingresar
            </Button>
          )}
        </Form.Item>
      </Form>
      </div>
        
       
    );
  };
export default LoginForm;