import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AbcIcon from "@mui/icons-material/Abc";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function InputForm() {
  // Did a mistake with the state, it is not updated if form is empty or null
  // and since the component does not re-render, the form is not cleared
  // and hence a null loop can't be cleared

  const [projects, setProjects] = useState([
    { title: "A new Big Title", people: "Myself", description: "A great new description is on it's way" },
  ]);

  const setNewProject = (newProject: { title: string; people: string; description: string }) => {
    setProjects([...projects, newProject]);
  };

  const clearFormDetails = newProkect => {
    titleEl.value = "";
    peopleEl.value = "";
    descriptionEl.value = "";
  };

  const getFormDetails = () => {
    const titleEl = document.getElementById("title") as HTMLTextAreaElement;
    const peopleEl = document.getElementById("people") as HTMLTextAreaElement;
    const descriptionEl = document.getElementById("description") as HTMLTextAreaElement;
    // Check if the form is empty
    if (titleEl.value !== "" || peopleEl.value !== "" || descriptionEl.value !== "") {
      const newDetails = {
        title: titleEl.value,
        people: peopleEl.value,
        description: descriptionEl.value,
      };
      setNewProject(newDetails);
      clearFormDetails(newProkect);
    }
    // If the form is empty, alert the user
    else {
      alert("All fields should be filled to create the project");
    }
  };

  return (
    <>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          border: "1px solid",
          borderColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "9px",
          p: 5,
        }}
        noValidate
        autoComplete='off'>
        <div>
          <AbcIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField id='title' label='Title' multiline maxRows={4} variant='standard' />
          <AccountCircle
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField id='people' label='People' placeholder='People' multiline variant='standard' />
          <DescriptionIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField
            fullWidth
            id='description'
            label='Description'
            multiline
            rows={3}
            defaultValue='Description'
            variant='standard'
          />
          <Button onClick={getFormDetails} variant='outlined'>
            Add Project
          </Button>
        </div>
      </Box>
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
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <div>{`Title: ${project.title} People: ${project.people} Description: ${project.description}`}</div>
              </div>
            );
          })}
        </div>
      </Box>
    </>
  );
}
