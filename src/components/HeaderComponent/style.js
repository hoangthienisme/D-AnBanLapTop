import styled from "styled-components";
import {Row} from 'antd'
import { Button,Input } from 'antd'
export const WrapperHeader= styled(Row)`
        padding:10px 120px;
        
`
export const WrapperTextHeader=styled.div`
        font-size: 15px;
        color: blue;
        line-height:1;
        font-weigh: bold;
        text-align: left;
        width: 150%;
`        
export const WrapperMainHeader=styled.span`
        font-size:55px;
        font-weigh:bold;
        display:block;
`
export const WrapperSubHeader=styled.span`
        font-size:13px;
        display:block;
        width: 300px;
        
`
export const WrapperHomeHeader=styled.span`
        text-align:right;
        font-size:16px;
        line-height: 2.5;
        color:blue;
`
 export const ButtonInputSearch = ({ size, textButton, placeholder, style }) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', ...style }}>
            <Input size={size} placeholder={placeholder} style={{ marginRight: '8px' }} />
            <Button type="primary" size={size}>{textButton}</Button>
          </div>
        );
      };
