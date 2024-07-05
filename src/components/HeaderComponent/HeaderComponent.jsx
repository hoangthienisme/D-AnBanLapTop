import React from 'react'
import { Col, } from 'antd';
import { WrapperHeader, WrapperHomeHeader, WrapperMainHeader, WrapperSubHeader, WrapperTextHeader } from './style';
import Search from 'antd/es/transfer/search';
import {
  HomeOutlined, SmileOutlined,ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4} >
          <WrapperTextHeader>
            <WrapperMainHeader>TIKI</WrapperMainHeader>
            <WrapperSubHeader>Tốt & Nhanh</WrapperSubHeader>
          </WrapperTextHeader>
        </Col>
        <Col span={14} style={{ opacity: '1.5' }}>
        <ButtonInputSearch display='flex'
        size="large" textButton="Tìm Kiếm"
        placeholder="Bạn tìm gì hôm nay " />
          <span style={{ marginLeft: '10px' }}>
            <a href="#">Điện gia dụng </a>
            <a href="#"> xe cộ </a>
            <a href="#"> mẹ & bé </a>
            <a href="#"> khỏe đẹp </a>
            <a href="#"> nhà cửa </a>
            <a href="#"> sách </a>
            <a href="#"> thể thao </a>
            <a href="#"> máy lọc nước </a>
            <a href="#"> máy vắt cam </a>
          </span>
        </Col>
        <Col span={6} >
          <WrapperHomeHeader>
            <HomeOutlined />
            Trang Chủ
            <span style={{ margin: '12px' }}>
              <SmileOutlined /> Tài Khoản      |
              <span style={{ margin: '12px' }}>
              <ShoppingCartOutlined />
              </span>
              
            </span>
            
            </WrapperHomeHeader>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
