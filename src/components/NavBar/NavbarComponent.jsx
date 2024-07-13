import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'


const NavbarComponent = () => {
  const onChange = () => { }
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>
        })
      case 'checkbox':
        return (<Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: '12px' }} onChange={onChange}>
          {options.map((option) => {
            return (
              <Checkbox value={option.value}>{option.label}</Checkbox>
            )
          })}
             </Checkbox.Group>)
      case 'star':
          return options.map((option) => {
              return (
                <div style={{display:'flex',gap:'5px'}}>
                <Rate style={{fontSize:'12px'}} disabled defaultValue={option}/>
                <span style={{fontSize:'15px'}}>{`Từ ${option} sao`}</span>
                </div>
              )
            })
      case 'price':
          return options.map((option) => {
              return (
                <WrapperTextPrice>{option}</WrapperTextPrice>
              )
            })
          default:
          return { }
    }
  }
          return (
          <div>
            <WrapperLabelText>Danh Muc San Pham</WrapperLabelText>
            <WrapperContent>
              {renderContent('text', ['Phone', 'LapTop', 'TabLet'])}
            </WrapperContent>
           
          </div>
          )
}

          export default NavbarComponent
