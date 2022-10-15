import React from 'react';
import styled from 'styled-components';
import BackImg from '../images/bg-image.jpeg';
 
const Back = styled.section`
  backgroud-image: url(${BackImg});
  height: 500px
  background-size: contain;
  background-repeat: no-repeat;
`;
  

const Content = styled.div``;
const Left = styled.div``;
const Title = styled.p``;

export const aboutUS = () => {
  return (
    <Back>
      <Content>
        <Left>
          <Title>
           <p>Hola</p>
          </Title>
        </Left>
      </Content>
    </Back>
    
  );
}

export default aboutUS;