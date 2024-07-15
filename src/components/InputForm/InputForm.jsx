
import React, { useState } from 'react';
import { WrapperInput } from './style';

const InputForm = ( props ) => {
  const [valueInput, setValueInput] = useState('');
  const {placeholder='Nhập tài khoản ',...rests}=props
  return (
    <WrapperInput
      placeholder={placeholder} 
      value={valueInput} 
     {...rests}
    />
  );
};

export default InputForm;
