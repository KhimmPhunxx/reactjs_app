import React from 'react'
import { useNavigate } from 'react-router-dom';
import requestFront from '../../share_front/requestFront';
import { storeCustomerData } from '../../share_front/helperFront';
import { Button, Form, Input, message } from 'antd';
import './LoginWebPage.css'

export default function LoginWebPage() {
  const navigate = useNavigate();

  const onFinish = (value) => {
    var param = {
      "username" : value.username,
      "password" : value.password
    }
    requestFront('customer_login' , 'post', param).then((res) => {
      console.log(res);
      if(!res.error){
        storeCustomerData(res);
        localStorage.setItem('isLogin',true);
        navigate('/');
      }else{
        message.error(res.message);
      }
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <main className='max-w-3xl mx-auto shadow border rounded-xl p-10 mt-20'>
    <div className='max-w-sm mx-auto shadow py-6 p-4 border rounded-md'>
        <h1 className='Manrope text-xl font-bold text-center uppercase'>Login to Dashboard <i class="fa-solid fa-right-to-bracket"></i> </h1>
        <Form
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
            className='Manrope'
            label="Telephone"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            {/* <div class="input-group">
                <input className='manrope' type="text" required />
                <label className='rounded manrope' for="">Username</label>
            </div> */}
            {/* <label htmlFor="">Username</label>
            <input type="text" /> */}
            <Input className='rounded Manrope'/>
            </Form.Item>

            <Form.Item
            className='Manrope'
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password className='Manrope' />
            </Form.Item>

            <div className='mt-3 Manrope text-center' >
            Don't have an account? 
            <a onClick={()=> navigate('/dashboard/register')} className='text-blue-400'> Register</a>
            </div>

            
            <Button size='large' type="primary" className='shadow w-full mt-3 bg-blue-400 Manrope' htmlType="submit">
            Login
            </Button>
        </Form>
    </div>
</main>
  )
}
