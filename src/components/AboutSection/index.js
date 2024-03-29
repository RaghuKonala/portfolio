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
  ImageElement,
} from "./StyledComponents";
import { AnchorLink } from "../Header/StyledComponents";

const AboutSection = () => (
  <AboutPageContainer id="about">
    <AboutContainer>
      <AboutContent>
        <JobRole>UI/UX DESIGNER</JobRole>
        <GreetText>Hello, my name is Raghu Ram Konala</GreetText>
        <InfoText>
          I am a dedicated, and hard working person eager to build a strong
          career in the IT industry. I have hands-on experience with HTML, CSS,
          JavaScript and ReactJS and Python. I am keen and very willing to learn
          and develop new skills.
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
      <ImageContent>
        <ImageElement
          src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg"
          alt="portfolio"
        />
        <svg
          width="720"
          height="629"
          viewBox="0 0 720 629"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 
          202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 
          625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 
          208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
            fill="#FDC435"
          />
        </svg>
      </ImageContent>
    </ImageSection>
  </AboutPageContainer>
);

export default AboutSection;
