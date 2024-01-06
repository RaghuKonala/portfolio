import {
  AboutPageContainer,
  AboutContainer,
  AboutContent,
  JobRole,
  GreetText,
  InfoText,
  ButtonsContainer,
  CustomButton,
  ImageSection,
  ImageContent,
} from "./StyledComponents";
import { AnchorLink } from "../Header/StyledComponents";

const AboutSection = () => (
  <AboutPageContainer id="about">
    <AboutContainer>
      <AboutContent>
        <JobRole>UI/UX DESIGNER</JobRole>
        <GreetText>Hello, my name is Raghu Ram Konala</GreetText>
        <InfoText>
          I am a dedicated, and hard working person eager to build a strong career in the IT industry. I have hands-on experience
          with HTML, CSS, JavaScript and ReactJS and Python. I am keen and very willing to
          learn and develop new skills.
        </InfoText>
        <ButtonsContainer>
          <CustomButton solid>
            <AnchorLink href="#projects">Projects</AnchorLink>
          </CustomButton>
          <CustomButton>LinkedIn</CustomButton>
        </ButtonsContainer>
      </AboutContent>
    </AboutContainer>
    <ImageSection>
      <ImageContent
        src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg"
        alt="portfolio"
      />
    </ImageSection>
  </AboutPageContainer>
);

export default AboutSection;
