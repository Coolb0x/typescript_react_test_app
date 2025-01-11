import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectItem from "./ProjectItem/ProjectItem";

interface Project {
  title: string;
  people: string;
  description: string;
}

interface ListOfNewProjectsProps {
  projects: Project[];
}

export default function ListOfNewProjects({ projects }: ListOfNewProjectsProps) {
  return (
    <>
      <Typography sx={{ mt: "31px", mb: "51px" }} variant='h5' gutterBottom>
        List of new projects
      </Typography>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          border: "1px solid",
          borderColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "9px",
          p: 5,
          mt: 5,
        }}>
        <div>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </Box>
    </>
  );
}
