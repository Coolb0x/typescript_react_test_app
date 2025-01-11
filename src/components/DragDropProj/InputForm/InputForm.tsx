import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AbcIcon from "@mui/icons-material/Abc";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";

// How to get the drag-drop https://www.geeksforgeeks.org/implement-drag-and-drop-using-react-component/
interface Project {
  title: string;
  people: string;
  description: string;
}
interface InputFormProps {
  setNewProject: (newProject: Project) => void;
}

export default function InputForm({ setNewProject }: InputFormProps) {
  const getFormDetails = () => {
    const titleEl = document.getElementById("title") as HTMLTextAreaElement;
    const peopleEl = document.getElementById("people") as HTMLTextAreaElement;
    const descriptionEl = document.getElementById("description") as HTMLTextAreaElement;
    // Check if the form is empty
    if (titleEl.value !== "" || peopleEl.value !== "" || descriptionEl.value !== "") {
      const newDetails: Project = {
        title: titleEl.value,
        people: peopleEl.value,
        description: descriptionEl.value,
      };
      setNewProject(newDetails);
    }
    // If the form is empty, alert the user
    else {
      alert("All fields should be filled to create the project");
    }
    // Clear the form after submission BUT have to add it in state!!
    titleEl.value = "";
    peopleEl.value = "";
    descriptionEl.value = "";
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
    </>
  );
}
