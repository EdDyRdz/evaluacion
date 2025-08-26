import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_AUTH_API_URL}/login`, values);
      localStorage.setItem('token', response.data.token);
      message.success('Login exitoso!');
      onLoginSuccess(); // Call the success handler from App.js
      navigate('/home');
    } catch (error) {
      message.error('Error al iniciar sesión: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <Card title="Iniciar Sesión" style={{ width: 300, margin: '50px auto' }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Por favor ingresa tu nombre de usuario!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Iniciar Sesión
          </Button>
        </Form.Item>
        <div style={{ textAlign: 'center' }}>
          ¿No tienes una cuenta? <Link to="/register">Regístrate ahora</Link>
        </div>
      </Form>
    </Card>
  );
};

export default Login;