import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../view/images/logo.png'
import ip14 from '../../view/images/ip14.webp'
const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="ip14" src={ip14}/>}
        >
            <img src={logo} style={{ width: '68px'
                , height: '14px',
                 position: 'absolute', 
                 top: -1, left: -1,
                 borderTopLeftRadius:'3px'}} />
            <StyleNameProduct>
                Apple
            </StyleNameProduct>
            <span>
            iPhone 15 Pro
            </span>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span >4.96
                        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    </span>
                </span>
                <span>| Đã bán 1000+ </span>


            </WrapperReporText>
            <WrapperPriceText>24.290.000 VND
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>

        </WrapperCardStyle>
    )

}

export default CardComponent
