import "./DragDropProj.css";
import InputForm from "./InputForm/InputForm";
import Typography from "@mui/material/Typography";

//State for the project details should be here

export default function DragDropProj() {
  return (
    <>
      <Typography sx={{ mt: "31px", mb: "51px" }} variant='h4' gutterBottom>
        Drag & Drop Project with Typescript and MUI
      </Typography>
      <InputForm />
    </>
  );
}
