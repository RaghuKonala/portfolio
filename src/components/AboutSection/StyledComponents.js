import styled from "styled-components";

export const AboutPageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #f9faff;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50vw;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutContent = styled.div`
  width: 85%;
`;

export const JobRole = styled.p`
  font-family: "Nunito";
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: #fdc435;
`;

export const GreetText = styled.h1`
  font-family: "Playfair Display";
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
  text-align: left;
  color: #333333;
  margin: 0px;
  @media screen and (min-width: 992px) {
    font-size: 64px;
    line-height: 70px;
  }
`;

export const InfoText = styled.p`
  color: #828282;
  font-family: "Nunito";
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    line-height: 28px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomButton = styled.button`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  color: #25282b;
  background-color: ${(props) => (props.solid ? "#FDC435" : "transparent")};
  border: ${(props) => (props.solid ? "none" : "normal")};
  outline: none;
  cursor: pointer;
  padding: 8px 24px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const ImageSection = styled.div`
  height: 100%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
`;

export const ImageElement = styled.img`
  width: 75%;
  height: 60%;
  position: absolute;
  border-radius: 15px;
  margin-top: 12vh;
`;
