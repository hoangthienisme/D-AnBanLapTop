import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input size={size} placeholder={placeholder} style={{ marginRight: '2px' }} />
      <Button  size={size} icon={<SearchOutlined />}>
        {textButton}
      </Button>
    </div>
  );
}

export default ButtonInputSearch;
