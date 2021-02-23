import React, { useState } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { CloseCircleOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { Redirect, useHistory } from 'react-router-dom';

const { Title, Text } = Typography; 
 

export const DesktopPage = () => {
    
    useHideMenu( false )
    const history = useHistory()
    const [ user ] = useState( getUsuarioStorage() )
    const { escritorio, agente } = user;


   const leave = () => {
        
        localStorage.removeItem( "agente" );
        localStorage.removeItem( "escritorio" );

        history.push( "/ingresar" )

    
   }
   const nextTicket = () => {
       console.log('nextTicket')
   }

   if ( !escritorio || !agente ){

    return   <Redirect to='/' />
    
    }

   
   return (
        <>
            <Row>
                <Col span={ 20 }>
                    <Title level={ 2 }>{ agente }</Title>
                    <Text> Usted esta trabajando en el escritorio</Text>
                    <Text 
                    style={{ marginLeft: '5px' }}
                    type="success"
                    >
                        { escritorio }
                        </Text>

                </Col>    
                <Col span={ 4 }>
                        <Button
                        shape="round"
                        type="danger"
                        onClick={ leave }
                        >
                        Salir
                         <CloseCircleOutlined />
                        </Button>
                </Col> 
            </Row>

            <Row>
                <Col>
                        <Text>Se esta atendiendo el ticket numero:</Text>
                        <Text
                        style={{ fontSize: "3rem" }}
                        type="danger"
                        >
                        55</Text>
                </Col>
            </Row>

            <Row>
                <Col
                offset={ 17 }
                span={ 6 }
                align="right"
                >
                
                    <Button
                    onClick={ nextTicket }
                    shape="round"
                    type="primary"
                    >
                        <DoubleRightOutlined />
                        Siguiente ticket
                    </Button>
                
                </Col>
            </Row>


        </>
    )
}
