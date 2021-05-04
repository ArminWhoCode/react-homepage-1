import React from "react";
import styled from "styled-components";

//import image
import BgImage from "../Assets/Images/1.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: calc(100vh - 4.5rem);
  padding: 0 8rem;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 90%;
`;
const Tag = styled.span`
  padding: 0.5rem 2rem;
  font-size: 0.5rem;
  text-transform: uppercase;
  border-radius: 12px;
  background-color: #FFDCFF;
  letter-spacing: 0.15rem;
  margin-bottom: 2rem;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 2rem;
`;
const Desc = styled.p`
  font-size: 0.85rem;
  color: #bbbbbb;
  margin-bottom: 2rem;
`;
const Cta = styled.button`
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 0.75rem 2rem;
  background-color: #687CFF;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
`;
const Right = styled.div`
  height: 90%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    height: 100%;
    filter: drop-shadow(-48px 12px 20px rgba(0, 0, 0, 0.1));
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Left>
        <Tag>new feature</Tag>
        <Title>
          Create Your <br /> Custom <br /> Workspace.
        </Title>
        <Desc>For each execution of a job.</Desc>
        <Cta>Get Started</Cta>
      </Left>
      <Right>
        <img alt="workspace" src={BgImage} />
      </Right>
    </Wrapper>
  );
};

export default Hero;
