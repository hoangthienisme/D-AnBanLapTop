import { Col, Row, InputNumber } from 'antd';
import React from 'react';
import imageroduct from '../../view/images/ip14.webp';
import imagesmala from '../../view/images/ip14a.webp';
import imagesmalb from '../../view/images/ip14b.webp';
import imagesmalc from '../../view/images/ip14c.webp';
import imagesmald from '../../view/images/ip14d.webp';
import imagesmalx from '../../view/images/ip14x.webp';
import { Image } from 'antd';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {
    Container,
    QuantityInput,
    WrapperQualityProduct,
    WrapperStyleColImage,
    WrapperStyleImageSmall,
    WrapperStyleNameProduct,
    WrapperStylePrice,
    WrapperStyleText
} from './style';
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons';

const ProductDetailComponent = () => {
    const onChange = (value) => {
        console.log('changed', value);
    };

    return (
        <Row style={{ padding: '16px', backgroundColor: 'white' }}>
            <Col span={10} style={{ backgroundColor: 'white' }}>
                <Image src={imageroduct} alt="image product" preview={false} />
                <Row style={{ paddingTop: '10px' }} justify="space-between">
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmala} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmalb} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmalc} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmald} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmalx} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ backgroundColor: 'white' }}>
                <WrapperStyleNameProduct>
                    Apple iPhone 15 Pro
                </WrapperStyleNameProduct>
                <div style={{ margin: '10px 0 20px ' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                        <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                        <WrapperStyleText style={{ marginLeft: '8px', unicodeBidi: 'isolate' }}>
                            Đã bán 1000+
                        </WrapperStyleText>
                    </div>
                    <WrapperStylePrice style={{marginTop:'10px'}}>24.290.000</WrapperStylePrice>
                    <div style={{ margin: '10px 0 13px',marginTop:'20px' }}>Số Lượng</div>
                    <Container>
                        <WrapperQualityProduct>
                            <MinusOutlined />
                        </WrapperQualityProduct>
                        <QuantityInput defaultValue={1} min={1} max={999} />
                        <WrapperQualityProduct>
                            <PlusOutlined />
                        </WrapperQualityProduct>
                    </Container>
                </div>
                <div style={{marginTop:'60px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '48px',
                            width: '200px',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    >
                    </ButtonComponent>

                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '200px',
                            border: '1px solid',
                            borderRadius: '4px',
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13,92,182)', fontSize: '15px' }}
                    >
                    </ButtonComponent>
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetailComponent;
