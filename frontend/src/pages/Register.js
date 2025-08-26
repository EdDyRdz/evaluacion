import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ onRegisterSuccess }) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_AUTH_API_URL}/register`, values);
      message.success('Registro exitoso!');
      onRegisterSuccess(); // Call the success handler from App.js
      navigate('/login'); // Or navigate to home if you want to auto-login after registration
    } catch (error) {
      message.error('Error al registrar usuario: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <Card title="Registrarse" style={{ width: 300, margin: '50px auto', textAlign: 'center' }}>
      <Form
        name="register"
        onFinish={onFinish}
        autoComplete="off"
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

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Por favor confirma tu contraseña!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Las dos contraseñas que ingresaste no coinciden!'));
              },
            }),
          ]}
        >
           <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirma tu Contraseña"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Registrarse
          </Button>
        </Form.Item>
         <div style={{ textAlign: 'center' }}>
          <Link to="/login">Regresar</Link>
        </div>
      </Form>
    </Card>
  );
};

export default Register;