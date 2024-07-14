import React from 'react'
import { Badge, Col, } from 'antd';
import { WrapperHeader, WrapperHomeHeader, WrapperMainHeader, WrapperSubHeader, WrapperTextHeader,StyledHomeOutlined, StyledSmileOutlined, StyledShoppingCart  } from './style';
import Search from 'antd/es/transfer/search';
import {
  HomeOutlined, SmileOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4} >
          <WrapperTextHeader>
            <WrapperMainHeader>TAKA</WrapperMainHeader>
            <WrapperSubHeader>Tốt & Nhanh</WrapperSubHeader>
          </WrapperTextHeader>
        </Col>
        <Col span={14} style={{ opacity: '1.5' }}>
          <ButtonInputSearch display='flex'
            size="large" textButton="Tìm Kiếm"
            placeholder="Bạn tìm gì hôm nay " />
        
        </Col>
        <Col span={6} >
          <WrapperHomeHeader>
            <span style={{ margin: '12px', gap: '20px' }}>
              <StyledHomeOutlined />
              Trang Chủ
            </span>
            <span style={{ margin: '12px', gap: '20px' }}>
              <StyledSmileOutlined /> Tài Khoản
            </span>   |

            <span style={{ margin: '16px' }}>
              <Badge count={4} size="small">
              <StyledShoppingCart/>
              </Badge>
            </span>

          </WrapperHomeHeader>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
