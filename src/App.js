import { Component } from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import FormSection from "./components/FormSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

import "./App.css";

const initialProjects = [
  {
    id: "1",
    name: "Nxt Watch",
    link: "https://nxtwatchkrr.ccbp.tech",
    url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
    description:
      "Developed the Nxt Watch platform, a YouTube-inspired application where user can access various video categories, such as Trending, Gaming, and Saved videos, and search for specific content while customising the visual theme.",
  },
  {
    id: "2",
    name: "Nxt Trendz",
    link: "https://nxttrendz1krr.ccbp.tech",
    url: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",
    description:
      "Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.",
  },
  {
    id: 3,
    name: "Todos Application",
    link: "https://todosappkrr.ccbp.tech",
    description:
      "A comprehensive todo management tool designed to enhance productivity.",
  },
];

class App extends Component {
  state = { projectsList: [...initialProjects] };

  addNewProject = (obj) => {
    this.setState((prevState) => ({
      projectsList: [...prevState.projectsList, obj],
    }));
  };

  render() {
    const { projectsList } = this.state;
    return (
      <div className="app-container">
        <Header />
        <AboutSection />
        <FormSection addNewProject={this.addNewProject} />
        <ProjectsSection projectsList={projectsList} />
        <ContactSection />
      </div>
    );
  }
}

export default App;
