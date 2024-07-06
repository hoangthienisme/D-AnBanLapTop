import { SearchOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import React from 'react';
import Inputcomponent from '../Inputcomponent/Inputcomponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Inputcomponent
      size={size} 
      placeholder={placeholder}
      
       style={{ marginRight: '2px' }} />

      <ButtonComponent 
       size={size}
       icon={<SearchOutlined />}>
        {textButton}
      </ButtonComponent>
    </div>
  );
}

export default ButtonInputSearch;
