import { Component } from "react";
import { v4 as uuid } from "uuid";
import Footer from '../Footer'

import {
  FormPageContainer,
  FormTitle,
  FormContainer,
  CustomLabel,
  CustomInputField,
  CustomTextArea,
  AddButton,
  HLine,
} from "./StyledComponents";

const initialValues = {
  name: "",
  link: "",
  description: "",
  errorMessage: "",
};

class FormSection extends Component {
  state = { ...initialValues };

  onSubmitProject = (event) => {
    event.preventDefault();
    const { addNewProject } = this.props;
    const { name, description, link } = this.state;
    switch (true) {
      case name === "":
        this.setState({ errorMessage: "Please enter valid project name." });
        break;
      case link === "":
        this.setState({ errorMessage: "Please enter valid project link" });
        break;
      case description === "":
        this.setState({
          errorMessage: "Please enter valid project description",
        });
        break;

      default:
        const newProject = {
          id: uuid(),
          name,
          link,
          description,
        };
        addNewProject(newProject);
        this.setState({ ...initialValues });
        break;
    }
  };

  updateProjectDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  updateProjectLink = (event) => {
    this.setState({ link: event.target.value });
  };

  updateProjectName = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    const { name, description, link, errorMessage } = this.state;
    return (
      <FormPageContainer>
        <FormTitle>Add Project</FormTitle>
        <HLine />
        <FormContainer onSubmit={this.onSubmitProject}>
          <CustomLabel htmlFor="name">Project Name</CustomLabel>
          <CustomInputField
            id="name"
            type="text"
            value={name}
            onChange={this.updateProjectName}
            placeholder="Enter Project Name"
          />
          <CustomLabel htmlFor="link">Project link</CustomLabel>
          <CustomInputField
            id="link"
            type="text"
            value={link}
            onChange={this.updateProjectLink}
            placeholder="Enter Project Link"
          />
          <CustomLabel htmlFor="description">Description</CustomLabel>
          <CustomTextArea
            id="description"
            value={description}
            onChange={this.updateProjectDescription}
            placeholder="Enter Project Description"
          />
          <AddButton type="submit">Add</AddButton>
          {errorMessage !== "" && <p>*{errorMessage}</p>}
        </FormContainer>
        <Footer/>
      </FormPageContainer>
    );
  }
}

export default FormSection;
