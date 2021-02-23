import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React from 'react'
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } =  Typography;


export const CreateTicketPage = () => {
    
    const newTicket = () => {
        console.log('newTicket')
    }
    
    useHideMenu( true )


    return (


        <>
           <Row>
               <Col span={ 14 } offset={ 6 } align="center" >
                    <Title level={ 3 }>
                        Presione el botón para generar un nuevo ticket
                    </Title>

                    <Button
                    type="primary"
                    shape="round"
                    icon={ <DownloadOutlined /> }
                    size={ "large" }
                    onClick={ newTicket }
                    >
                        Nuevo ticket
                    </Button>

               </Col>
           </Row>
            <Divider></Divider>
           <Row style={{ marginTop : "20vh" }} >
               <Col span={ 14 } offset={ 6 } align="center" >

                    <Text
                    level={ 2 }
                    > Su numero es: </Text>
                    <br/>
                    <Text 
                    style={{ fontSize: "3rem" }}
                    type="success"
                    > 10 </Text>
               </Col>
        
           </Row>
        </>
    )
}
