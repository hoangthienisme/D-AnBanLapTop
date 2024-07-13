import React from 'react'
import TypeProduct from '../../components/TypeProducts/TypeProduct'
import { WrapperButtonMore, WrapperStyleProducts } from './style'
import slider1 from '../../view/images/silder1.webp'
import slider2 from '../../view/images/slider2.webp'
import slider3 from '../../view/images/slider3.webp'
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const homepage = () => {
  const arr = ['Cam kết ', '100% hàng thật', 'Hoàn 200% nếu hàng giả', '30 ngày đổi trả', 'Giao nhanh 2h', 'Giá siêu rẻ']
  return (

    <div style={{ padding: '0 120px' }}>
      
      <WrapperStyleProducts>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperStyleProducts>
      
      <SliderComponent arrImages={[slider1,slider2,slider3]}/>
     <div style={{marginTop:'20px',display:'flex',alignItems:'center',gap:'74px',flexWrap:'wrap'} }>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      

     
     </div>
     <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'10px'}}>
     { <WrapperButtonMore
     textButton="Xem Thêm" type="outline"/> }
      </div>
    
    </div>
  )
}

export default homepage
