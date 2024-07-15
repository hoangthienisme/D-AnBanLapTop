import styled from "styled-components";
import { Row } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, SmileOutlined } from '@ant-design/icons';
export const WrapperHeader = styled(Row)`
  padding: 10px 0px;
  background-color: #1890ff;
  border-bottom: 1px solid #d9d9d9;
  
`;

export const WrapperTextHeader = styled.div`
  font-size: 16px;
  color: #ffffff;
  line-height: 1.5;
  font-weight: bold;
  text-align: left;
  width: 100%;
  
`;

export const WrapperMainHeader = styled.span`
  font-size: 36px;
  font-weight: bold;
  display: block;
  margin-bottom: 1px;
  color: #ffffff;
  
`;

export const WrapperSubHeader = styled.span`
  font-size: 14px;
  display: block;
  width: 300px;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const WrapperHomeHeader = styled.span`
  text-align: right;
  font-size: 16px;
  line-height: 2.5;
  color: #ffffff;
  width: 100%;
`;
export const StyledHomeOutlined = styled(HomeOutlined)`
  margin-right: 8px;
  font-size: 18px;
  color: #ffffff; 
`;
export const StyledSmileOutlined= styled(SmileOutlined)`
  margin-right: 8px;
  font-size: 18px; 
  color: #ffffff; 

`;
export const StyledShoppingCart= styled(ShoppingCartOutlined)
`
  font-size: 18px; 
  color: #ffffff; 
`;