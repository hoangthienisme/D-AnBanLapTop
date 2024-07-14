import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavBar/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => { }
    return (
        <Fragment style={{ padding: "0 120px", background: "#efefef" }}>
            <Row style={{ flexWrap: "nowrap", paddingTop: "10px" }}>
                <WrapperNavbar>
                    <NavbarComponent />
                </WrapperNavbar>
                <Col span={20}>
                    <WrapperProducts span={20}>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        
                       
                        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                    </WrapperProducts>
                </Col>
            </Row>

        </Fragment>

    )
}

export default TypeProductPage
