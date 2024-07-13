import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size, icon,textButton,styleTextButton, ...rests }) => {
  return (
    <Button 
      size={size}
      icon={icon}
      {...rests} 
    >
      {rests.children} 
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
}

export default ButtonComponent;
