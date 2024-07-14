import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperStyleProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: flex-start;
  font-size: 15px;
  line-height: 44px;
  & > div:not(:last-child)::after {
    content: ' |';
    margin-left: 4px; 
    
  };
`;
export const WrapperButtonMore=styled(ButtonComponent)
`  ursor: pointer;
    display: inline-block;
    width: 240px;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid rgb(10, 104, 255);
    color: rgb(10, 104, 255);
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    text-align: center;
    background-color:white;
    &:hover {
    background-color: rgba(0, 96, 255, 0.12) !important;
    opacity: 1 !important;};
    
`
export const WrapperProducts= styled.div`
display:flex;
justify-content:center;
gap: 74px;
margin-top:20px;
flex-wrap:wrap;
`