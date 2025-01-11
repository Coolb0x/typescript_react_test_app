import { useDrop } from "react-dnd";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectItem from "../DisplayProj/ListOfNewProjects/ProjectItem/ProjectItem";

interface Project {
  title: string;
  people: string;
  description: string;
}

interface CompletedProjectsProps {
  completedProjects: Project[];
  addCompletedProject: (project: Project) => void;
}

export default function CompletedProjects({ completedProjects, addCompletedProject }: CompletedProjectsProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PROJECT",
    drop: (item: { project: Project }) => {
      addCompletedProject(item.project);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }));

  const backgroundColor = isOver ? "lightgreen" : "white";

  return (
    <>
      <Typography sx={{ mt: "31px", mb: "51px" }} variant='h5' gutterBottom>
        Completed Projects
      </Typography>
      <Box
        ref={drop}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          border: "1px solid",
          borderColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "9px",
          p: 5,
          mt: 5,
          backgroundColor,
          minHeight: "200px",
        }}>
        <div>
          {completedProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </Box>
    </>
  );
}
