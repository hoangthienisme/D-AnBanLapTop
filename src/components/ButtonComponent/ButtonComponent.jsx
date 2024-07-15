import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size, icon, styleButton, textButton, styleTextButton, ...rests }) => {
  return (
    <Button size={size} icon={icon} style={styleButton} {...rests}>
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
}

export default ButtonComponent;
