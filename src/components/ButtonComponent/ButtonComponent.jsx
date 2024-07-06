import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size, icon, ...rests }) => {
  return (
    <Button 
      size={size}
      icon={icon}
      {...rests} 
    >
      {rests.children} 
    </Button>
  );
}

export default ButtonComponent;
