import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Footer from "../Footer";
import {
  ContactPageContainer,
  IconsContainer,
  ContactText,
} from "./StyledComponents";

const iconProps = {
  color: "#25282B",
  size: 48,
};

const ContactSection = () => (
  <ContactPageContainer id="contact">
    <IconsContainer>
      <AiFillInstagram {...iconProps} />
      <AiFillLinkedin {...iconProps} />
      <BsFillEnvelopeFill {...iconProps} />
    </IconsContainer>
    <ContactText>Copyright © 2024. All rights reserved</ContactText>
    <Footer/>
  </ContactPageContainer>
);

export default ContactSection;
