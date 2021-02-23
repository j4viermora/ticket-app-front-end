import React, { useState } from 'react'
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography;


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
export const IngresarPage = () => {

    const history = useHistory();
    const [ user ] = useState( getUsuarioStorage() )
    const { escritorio, agente } = user;
    // console.log(history)

    const onFinish = ({ agente, escritorio }) => {
        
        console.log('Success:', agente, escritorio); 
        localStorage.setItem( "agente", agente )
        localStorage.setItem( "escritorio", escritorio )
        
        history.push( '/escritorio' )

      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };


    useHideMenu( false )

    if ( escritorio && agente ){

      return   <Redirect to='/escritorio' />


   }

    return (
        <>
            <Title level={ 2 }>Ingresar</Title>
            <Text>Ingrese su numero de escritorio</Text>
            <Divider></Divider>


               <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={ onFinish } 
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agenter"
          name="agente"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su nombre',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Escritorio"
          name="escritorio"
          htmlType="submit"
          rules={[
            {
              required: true,
              message: 'Contraseña es requerida',
            },
          ]}
        >
          <InputNumber 
          min={ 1 }
          max={ 99 }
          />
        </Form.Item>  
        <Form.Item {...tailLayout}>
          <Button 
          type="primary"
          htmlType="submit"
          shape={ 'round' }        
          >
            Submit
            <SaveOutlined />
          </Button>
        </Form.Item>
      </Form>
        
        </>
     
    )
}
