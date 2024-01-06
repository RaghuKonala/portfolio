import {
  ProjectsPageContainer,
  ProjectsTitle,
  HLine,
  ProjectsList,
  ProjectItem,
  ProjectInfo,
  ProjectHeading,
  ProjectDescription,
  ProjectLink,
  ProjectImageContainer,
  ProjectImage,
} from "./StyledComponents";

const ProjectsSection = (props) => {
  const { projectsList } = props;
  return (
    <ProjectsPageContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <HLine />
      <ProjectsList>
        {projectsList.map((eachProject, index) => {
          const { id, name, link, description, url } = eachProject;
          return (
            <ProjectItem key={id}>
              <ProjectInfo order={index % 2}>
                <ProjectHeading>{name}</ProjectHeading>
                <ProjectDescription>{description}</ProjectDescription>
                <ProjectLink href={link} target="_blank">
                  View Project
                </ProjectLink>
              </ProjectInfo>
              <ProjectImageContainer>
                <ProjectImage
                  order={index % 2 === 1 ? 0 : 1}
                  alt={name}
                  src={url}
                />
              </ProjectImageContainer>
            </ProjectItem>
          );
        })}
      </ProjectsList>
    </ProjectsPageContainer>
  );
};

export default ProjectsSection;
