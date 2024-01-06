import styled from "styled-components";

export const FormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f9faff;
`;

export const FormTitle = styled.div`
  font-family: "Playfair Display";
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  color: #25282b;
  margin-top: 12vh;
  margin-bottom: 30px;
  overflow-y: auto;
`;

export const HLine = styled.hr`
  border: none;
  border-bottom: 2px solid #fdc435;
  width: 100px;
`;

export const FormContainer = styled.form`
  height: 60vh;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 85%;
`;

export const CustomLabel = styled.label`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`;

export const CustomInputField = styled.input`
height: 40px;
width: 100%;
padding: 6px 14px;
border-radius: 6px;
color: #9A9FA8;
background-color: #ffffff;
border 1px solid #E8ECF4;
font-family: "Roboto";
font-size: 16px;
font-weight: 400;
line-height: 24px;
margin-bottom: 15px;
outline:none;
`;

export const CustomTextArea = styled.textarea`
height: 160px;
width: 100%;
padding: 6px 14px;
border-radius: 6px;
border 1px solid #E8ECF4;
color: #9A9FA8;
background-color: #ffffff;
font-family: "Roboto";
font-size: 16px;
font-weight: 400;
line-height: 24px;
margin-bottom: 15px;
outline:none;
`;

export const AddButton = styled.button`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  padding: 8px 24px;
  border-radius: 4px;
  color: #25282b;
  background-color: #fdc435;
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
`;
