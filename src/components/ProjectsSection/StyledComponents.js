import styled from "styled-components";

export const ProjectsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f9faff;
`;

export const ProjectsTitle = styled.div`
  font-family: "Playfair Display";
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  color: #25282b;
  margin-top: 12vh;
  margin-bottom: 0px;
`;

export const HLine = styled.hr`
  border: none;
  border-bottom: 2px solid #fdc435;
  width: 100px;
`;

export const ProjectsList = styled.ul`
  width: 90%;
  max-width: 992px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectItem = styled.li`
  list-style-type: none;
  width: 100%;
  height: 400px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0px 6px 64px 0px #7090b01a;
  margin: 15px 0px;
  background-color: #ffffff;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  width: 50%;
  order: ${(props) => props.order};
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const ProjectHeading = styled.h1`
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  text-align: left;
  color: #25282b;
  margin: 0px;
`;

export const ProjectDescription = styled.p`
  font-family: "Nunito";
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: justify;
  color: #828282;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  padding: 8px 24px;
  border-radius: 23px;
  height: 43px;
  width: 160px;
  border: 1px solid #25282b;
  color: #25282b;
  margin-top: 5px;
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  width: 50%;
  order: ${(props) => props.order};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProjectImage = styled.img`
  width: 80%;
  height: 60%;
`;
