import "./DragDropProj.css";
import InputForm from "./InputForm/InputForm";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ListOfNewProjects from "./DisplayProj/ListOfNewProjects/ListOfNewProjects";
import ComletedProjects from "./CompletedProjects/CompletedProjects";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DragDropProj() {
  interface Project {
    title: string;
    people: string;
    description: string;
  }

  const [newProjects, setNewProjects] = useState<Project[]>([]);
  const [completedProjects, setCompletedProjects] = useState<Project[]>([]);

  const addNewProject = (project: Project) => {
    setNewProjects(prev => [...prev, project]);
  };

  const addCompletedProject = (project: Project) => {
    setCompletedProjects(prev => [...prev, project]);
    setNewProjects(prev => prev.filter(p => p !== project));
  };

  return (
    <>
      <Typography sx={{ mt: "31px", mb: "51px" }} variant='h4' gutterBottom>
        Drag & Drop Project with Typescript and MUI
      </Typography>
      <InputForm setNewProject={addNewProject} />
      <DndProvider backend={HTML5Backend}>
        <ListOfNewProjects projects={newProjects} />
        <ComletedProjects completedProjects={completedProjects} addCompletedProject={addCompletedProject} />
      </DndProvider>
    </>
  );
}
