import styled from "styled-components";

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
