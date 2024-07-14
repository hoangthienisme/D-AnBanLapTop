import styled from 'styled-components';
import { InputNumber, Col, Image } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: white;
    border-radius: 4px;
`;

export const WrapperQualityProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    color: rgb(36, 36, 36);
    font-size: 14px;
    cursor: pointer;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 1px solid rgb(166, 166, 176); /* Viền xung quanh ô */
    border-radius: 4px; /* Góc bo tròn */

    &:hover {
        border-color: rgb(140, 140, 150);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    &:active {
        background: rgb(240, 240, 240);
        border-color: rgb(120, 120, 130);
    }
`;

export const QuantityInput = styled(InputNumber)`
    height: 32px;
    width: 50px;
    text-align: center;
    border: none;
    gap:20px;
    border-left: 1px solid rgb(166, 166, 176); /* Viền trái */
    border-right: 1px solid rgb(166, 166, 176); /* Viền phải */
    outline: none;
    font-size: 14px;
    color: rgb(36, 36, 36);
    border-radius: 4px; /* Góc bo tròn */
`;

export const WrapperStyleColImage = styled(Col)`
    display: flex;
    justify-content: center;
`;

export const WrapperStyleImageSmall = styled(Image)`
    width: 100%;
    height: auto;
`;

export const WrapperStyleNameProduct = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const WrapperStylePrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: red;
    margin-top: 8px;
`;

export const WrapperStyleText = styled.div`
    font-size: 14px;
    color: grey;
    margin-left: 8px;
`;
