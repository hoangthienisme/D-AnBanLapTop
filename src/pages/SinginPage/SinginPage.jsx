import React, { useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import imagedangnhap from '../../view/images/dangnhap.png';
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SinginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '800px', borderRadius: '6px', background: '#fff', display: 'flex', overflow: 'hidden' }}>
        <WrapperContainerLeft style={{ flex: 1, padding: '40px 45px 24px', background: 'rgb(255, 255, 255)', borderRadius: '6px 0 0 6px' }}>
          <h1>Xin chào</h1>
          <p style={{ fontSize: '15px' }}>Đăng nhập hoặc Tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
          <div style={{ position: 'relative' }}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px',
              cursor: 'pointer'
            }} onClick={togglePasswordVisibility}>
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} />
          </div>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: 'rgb(255,57,69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              marginTop: '20px'
            }}
            textButton={'Đăng Nhập'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          />
          <p style={{
            margin: '10px 0px 0px',
            textAlign: 'center',
            color: 'rgb(13, 92, 182)',
            cursor: 'pointer',
            lineHeight: '1.15',
            fontSize: '14px'
          }}>
            Đăng nhập bằng email
          </p>
          <WrapperTextLight>
            Quên mật khẩu
          </WrapperTextLight>
          <p>
            Chưa có tài khoản ? <WrapperTextLight> Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight style={{ flex: 1, background: 'linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', borderRadius: '0 6px 6px 0' }}>
          <Image src={imagedangnhap} preview={false} alt="image-logo" height="203" />
          <h3 style={{ display: 'block', fontSize: '17px', fontWeight: '500', color: 'rgb(11, 116, 229)' }}>Mua sắm tại TaKa</h3>
          <span style={{ color: 'rgb(11, 116, 229)', fontWeight: '500', fontSize: '13px' }}>Siêu ưu đãi mỗi ngày</span>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SinginPage;
